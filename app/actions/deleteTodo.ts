"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteTodo = async (id: string) => {
    try {
        const todo = await prisma.todo.delete({
            where: {
                id: id
            }
        });

        revalidatePath("/");

        return { data: todo };
    } catch (error) {
        return { error: "Failed to delete todo" };
    }
}