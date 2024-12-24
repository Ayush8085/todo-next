"use server";

import { prisma } from "@/lib/prisma";
import { TodoType } from "@/lib/types";

export const getTodos = async () => {
    const todos: TodoType[] = await prisma.todo.findMany();
    if (!todos) {
        return [];
    }
    return todos;
}