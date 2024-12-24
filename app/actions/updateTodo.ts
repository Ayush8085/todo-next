"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateTodo = async (id: string, completed: boolean) => {
    try {
        const todo = await prisma.todo.update({
            where: {
                id,
            },
            data: {
                completed,
            }
        });

        revalidatePath("/");

        return { data: todo };
    } catch (error) {
        return { error: "Failed to update todo" };
    }
}