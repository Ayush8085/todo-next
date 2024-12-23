"use client";

import { addTodo } from "@/app/actions/addTodo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "react-toastify";

const AddTodo = () => {
    const clientAction = async (formData: FormData) => {
        const { data, error } = await addTodo(formData);

        if (error) {
            toast.error(error);
        } else {
            toast.success("Todo added");
        }
    }


    return (
        <div>
            <form action={clientAction} className="flex gap-1">
                <Input
                    type="text"
                    name="text"
                    placeholder="Add Todo"
                    className="w-full max-w-3xl"
                />

                <Button variant={"default"}>Add</Button>
            </form>
        </div>
    )
}

export default AddTodo;