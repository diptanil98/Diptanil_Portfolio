import { Schema, model, models, type Model } from "mongoose";
import type { ContactStatus } from "@/types";

export interface IContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: ContactStatus;
  ip?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactMessageSchema = new Schema<IContactMessage>(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    subject: { type: String, required: true, trim: true, maxlength: 150 },
    message: { type: String, required: true, trim: true, maxlength: 3000 },
    status: { type: String, enum: ["new", "read", "replied"], default: "new", index: true },
    ip: { type: String, select: false },
  },
  { timestamps: true },
);

ContactMessageSchema.index({ createdAt: -1 });

export const ContactMessage: Model<IContactMessage> =
  (models.ContactMessage as Model<IContactMessage>) ||
  model<IContactMessage>("ContactMessage", ContactMessageSchema);
