"use client";

import { deleteTodo } from '@/app/actions/deleteTodo';
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

    return (
        <div className='min-w-[250px] flex justify-between m-2 p-2 border-2'>
            {todo?.text}

            <div className="flex gap-4">
                <CheckIcon
                    className="cursor-pointer size-6 text-green-700"
                    onClick={() => handleDelete(todo.id)}
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