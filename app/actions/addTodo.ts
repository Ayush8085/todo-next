"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const addTodo = async (formData: FormData) => {
    const textValue = formData.get("text") as string;

    if (!textValue || textValue === "") {
        return { error: "Please enter a todo" };
    }

    try {
        const todo = await prisma.todo.create({
            data: {
                text: textValue,
            }
        });

        revalidatePath("/");

        return { data: todo };
    } catch (error) {
        return { error: "Failed to add todo" };
    }
}