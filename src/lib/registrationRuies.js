import { z } from "zod";

export const registrationFormAction = z.object({
    name: z
        .string()
        .min(3, { message: "Name is required and must be at least 3 characters" })
        .trim(),
    email: z
        .string()
        .email({ message: "Please enter a valid email address" }) // Basic email format validation
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Email must be a valid format" }) // Extra format check
        .trim(),
    phoneNumber: z
        .string()
        // .regex(/^\+?(\d{1,3})?[-.\s]?(\d{10})$/, { message: "Phone number must be valid with an optional country code" })
        .min(11, { message: "message must be at most 11 characters" })
        .max(11, { message: "message must be at most 11 characters" })
        .trim(),  // Added missing comma here
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(12, { message: "Password must be at most 12 characters" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/\d/, { message: "Password must contain at least one number" })
        .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character" })
        .trim()
});
