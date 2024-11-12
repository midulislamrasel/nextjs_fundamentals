'use server';


import { registrationFormAction } from "@/lib/registrationRuies";
import prisma from "@/prisma/client";

export async function formSubmit(prev, formData) {
    const validation = registrationFormAction.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phoneNumber: formData.get("phoneNumber"),
        password: formData.get("password")
    });

    if (!validation.success) {
        return {
            errors: validation.error.flatten().fieldErrors,
            success: false,
        };
    }

    const { name, email, phoneNumber, password } = validation.data;

    // :parseInt(phoneNumber),
    try {
    console.log(name, email, phoneNumber, password);
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                phoneNumber,
                password,
            },
        });
        return { User: newUser, success: true, errors: false };
    } catch (error) {
        // console.error("Error creating user:", error);
        return { errors: error.message, success: false };
    }
}
