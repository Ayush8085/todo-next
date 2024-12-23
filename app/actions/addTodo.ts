"use server";

import { prisma } from "@/lib/prisma";

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

        return { data: todo };
    } catch (error) {
        return { error: "Failed to add todo" };
    }
}