"use client";

import { deleteTodo } from '@/app/actions/deleteTodo';
import { updateTodo } from '@/app/actions/updateTodo';
import { TodoType } from '@/lib/types'
import { CheckIcon, DeleteIcon } from 'lucide-react';
import { toast } from 'react-toastify';

const Todo = ({ todo }: { todo: TodoType }) => {
    const handleDelete = async (id: string) => {
        const { data, error } = await deleteTodo(id);

        if (error) {
            toast.error(error);
        } else {
            toast.success("Todo deleted");
        }
    }

    const handleComplete = async (id: string, completed: boolean) => {
        const { data, error } = await updateTodo(id, completed);

        if (error) {
            toast.error(error);
        }
    }

    return (
        <div className='min-w-[250px] flex justify-between m-2 p-2 border-2'>

            {todo?.completed ? <s>{todo?.text}</s> : todo?.text}

            <div className="flex gap-4">
                <CheckIcon
                    className="cursor-pointer size-6 text-green-700"
                    onClick={() => handleComplete(todo.id, !todo.completed)}
                />
                <DeleteIcon
                    className="cursor-pointer size-6 text-red-700"
                    onClick={() => handleDelete(todo.id)}
                />
            </div>
        </div>
    )
}

export default Todo;