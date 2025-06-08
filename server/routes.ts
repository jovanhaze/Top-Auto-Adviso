import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertLeadMagnetSchema, insertDocumentUploadSchema } from "@shared/schema";
import multer from "multer";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedTypes = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
});

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || process.env.EMAIL_USER || "noreply@topautoadvisors.com",
    pass: process.env.GMAIL_PASSWORD || process.env.EMAIL_PASSWORD || "defaultpass"
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      // Send email notification
      try {
        await transporter.sendMail({
          from: process.env.GMAIL_USER || "noreply@topautoadvisors.com",
          to: process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER || "info@topautoadvisors.com",
          subject: `New Contact Form Submission - ${contact.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${contact.name}</p>
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>Message:</strong></p>
            <p>${contact.message}</p>
            <p><strong>Submitted:</strong> ${contact.createdAt}</p>
          `,
        });
      } catch (emailError) {
        console.error('Failed to send notification email:', emailError);
      }
      
      res.json({ success: true, contact });
    } catch (error: any) {
      res.status(400).json({ message: "Invalid contact data: " + error.message });
    }
  });

  // Lead magnet download
  app.post("/api/download-guide", async (req, res) => {
    try {
      const leadData = insertLeadMagnetSchema.parse(req.body);
      const lead = await storage.createLeadMagnet(leadData);
      
      // In a real implementation, you would generate or serve the PDF
      // For now, we'll return a mock download URL
      const downloadUrl = "/downloads/5-shady-car-dealer-tricks.pdf";
      
      // Send welcome email with the guide
      try {
        await transporter.sendMail({
          from: process.env.GMAIL_USER || "noreply@topautoadvisors.com",
          to: lead.email,
          subject: "Your Free Guide: 5 Shady Car Dealer Tricks",
          html: `
            <h2>Thank you for downloading our free guide!</h2>
            <p>Hi there,</p>
            <p>Thank you for your interest in protecting yourself from shady car dealers. Your free guide "5 Shady Car Dealer Tricks" is attached to this email.</p>
            <p>If you have any questions or would like to schedule a consultation, feel free to reply to this email or visit our website.</p>
            <p>Best regards,<br>Top Auto Advisors Team</p>
          `,
        });
      } catch (emailError) {
        console.error('Failed to send guide email:', emailError);
      }
      
      res.json({ success: true, downloadUrl });
    } catch (error: any) {
      res.status(400).json({ message: "Invalid email: " + error.message });
    }
  });

  // Document upload
  app.post("/api/upload-documents", upload.array('documents', 10), async (req, res) => {
    try {
      const { email, notes } = req.body;
      const files = req.files as any[];
      
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      
      const filenames = files?.map(file => file.filename) || [];
      
      const uploadData = insertDocumentUploadSchema.parse({
        email,
        notes: notes || null,
        filenames
      });
      
      const upload = await storage.createDocumentUpload(uploadData);
      
      // Send notification email
      try {
        await transporter.sendMail({
          from: process.env.GMAIL_USER || "noreply@topautoadvisors.com",
          to: process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER || "info@topautoadvisors.com",
          subject: `New Document Upload - ${email}`,
          html: `
            <h2>New Document Upload</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Files:</strong> ${filenames.join(', ')}</p>
            <p><strong>Notes:</strong> ${notes || 'None'}</p>
            <p><strong>Uploaded:</strong> ${upload.createdAt}</p>
          `,
        });

        // Send confirmation email to user
        await transporter.sendMail({
          from: process.env.GMAIL_USER || "noreply@topautoadvisors.com",
          to: email,
          subject: "Documents Received - Top Auto Advisors",
          html: `
            <h2>Thank you for submitting your documents!</h2>
            <p>Hi there,</p>
            <p>We've received your documents and will review them within 24 hours. Our team will get back to you with any initial observations before your consultation.</p>
            <p>If you haven't already, don't forget to book your consultation session.</p>
            <p>Best regards,<br>Top Auto Advisors Team</p>
          `,
        });
      } catch (emailError) {
        console.error('Failed to send document notification email:', emailError);
      }
      
      res.json({ success: true, upload });
    } catch (error: any) {
      res.status(400).json({ message: "Upload failed: " + error.message });
    }
  });

  // Serve static download files
  app.get("/downloads/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(process.cwd(), 'static', 'downloads', filename);
    
    // In a real implementation, you would serve actual PDF files
    // For now, return a 404 or create a placeholder
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "File not found" });
    }
    
    res.download(filePath);
  });

  const httpServer = createServer(app);

  return httpServer;
}
