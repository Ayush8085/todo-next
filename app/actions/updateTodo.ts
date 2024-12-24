"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateTodo = async (id: string, completed: boolean) => {
    const user = await auth();
    if (!user) {
        return { error: "Unauthorized" };
    }

    try {
        const todo = await prisma.todo.update({
            where: {
                id,
                userId: user?.id,

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