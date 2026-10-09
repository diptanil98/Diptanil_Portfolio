import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ required_error: "Please enter your name." })
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name is too long."),
  email: z
    .string({ required_error: "Please enter your email." })
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address.")
    .max(160, "Email is too long."),
  subject: z
    .string({ required_error: "Please add a subject." })
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(150, "Subject is too long."),
  message: z
    .string({ required_error: "Please write a message." })
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(3000, "Message must be under 3000 characters.")
    .refine((v) => (v.match(/https?:\/\//gi) ?? []).length <= 3, "Too many links in the message."),
  /** Honeypot: real users never fill this. */
  website: z.string().max(0).optional().or(z.literal("")),
  /** Epoch ms when the form was rendered; used to reject instant bot posts. */
  startedAt: z.number().int().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
