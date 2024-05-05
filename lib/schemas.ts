import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string({
    required_error: "Your name is required"
  }).min(2, {
    message: "Name must be atleast 2 characters"
  }).max(50, {
    message: "Please keep your name within 50 characters"
  }),
  eventDate: z.date({
    required_error: "Event date is required"
  }),
  email: z.string().email().optional(),
  eventType: z.enum(["Wedding", "Portraits"], {
    required_error: "Event type is required"
  }),
  location: z.string({
    required_error: "Location is required"
  }),
  phoneNumber: z.string({
    required_error: "Phone number is required"
  }),
  note: z.string().optional(),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
