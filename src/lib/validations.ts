import { z } from "zod";

export const zipCodeSchema = z.object({
  zip: z.string().regex(/^[0-9]{5}$/, "Please enter a valid 5-digit ZIP code")
});

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^[+]?[0-9]{10,15}$/, "Phone number must be 10 to 15 digits, optional + prefix"),
  zip: z.string().regex(/^[0-9]{5}$/, "ZIP code must be 5 digits"),
  serviceType: z.enum(["home", "business", "bundle"]),
  message: z
    .string()
    .max(300, "Message must be less than 300 characters")
    .optional()
    .or(z.literal(""))
});

export type ZipCodeFormValues = z.infer<typeof zipCodeSchema>;
export type LeadFormValues = z.infer<typeof leadFormSchema>;
