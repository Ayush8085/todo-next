"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteTodo = async (id: string) => {
    const user = await auth();
    if(!user) {
        return { error: "Unauthorized" };
    }

    try {
        const todo = await prisma.todo.delete({
            where: {
                id: id,
                userId: user?.id,
            }
        });

        revalidatePath("/");

        return { data: todo };
    } catch (error) {
        return { error: "Failed to delete todo" };
    }
}