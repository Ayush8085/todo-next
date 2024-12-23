"use server";

import { prisma } from "@/lib/prisma";

export const getTodos = async () => {
    const todos = await prisma.todo.findMany();
    if (!todos) {
        return [];
    }
    return todos;
}