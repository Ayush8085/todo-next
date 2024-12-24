"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { TodoType } from "@/lib/types";

export const getTodos = async () => {
    const user = await auth();
    if (!user) {
        return [];
    }
    const todos: TodoType[] = await prisma.todo.findMany({
        where: {
            userId: user?.id,
        }
    });

    if (!todos) {
        return [];
    }
    return todos;
}