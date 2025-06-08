import { 
  users, 
  contacts, 
  leadMagnets, 
  documentUploads,
  type User, 
  type InsertUser, 
  type Contact, 
  type InsertContact,
  type LeadMagnet,
  type InsertLeadMagnet,
  type DocumentUpload,
  type InsertDocumentUpload
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createLeadMagnet(leadMagnet: InsertLeadMagnet): Promise<LeadMagnet>;
  createDocumentUpload(upload: InsertDocumentUpload): Promise<DocumentUpload>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private leadMagnets: Map<number, LeadMagnet>;
  private documentUploads: Map<number, DocumentUpload>;
  private currentUserId: number;
  private currentContactId: number;
  private currentLeadMagnetId: number;
  private currentDocumentUploadId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.leadMagnets = new Map();
    this.documentUploads = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentLeadMagnetId = 1;
    this.currentDocumentUploadId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createLeadMagnet(insertLeadMagnet: InsertLeadMagnet): Promise<LeadMagnet> {
    const id = this.currentLeadMagnetId++;
    const leadMagnet: LeadMagnet = { 
      ...insertLeadMagnet, 
      id, 
      createdAt: new Date() 
    };
    this.leadMagnets.set(id, leadMagnet);
    return leadMagnet;
  }

  async createDocumentUpload(insertDocumentUpload: InsertDocumentUpload): Promise<DocumentUpload> {
    const id = this.currentDocumentUploadId++;
    const documentUpload: DocumentUpload = { 
      id, 
      email: insertDocumentUpload.email,
      notes: insertDocumentUpload.notes ?? null,
      filenames: insertDocumentUpload.filenames ?? null,
      createdAt: new Date()
    };
    this.documentUploads.set(id, documentUpload);
    return documentUpload;
  }
}

export const storage = new MemStorage();
