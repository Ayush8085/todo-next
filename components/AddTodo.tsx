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
            <form action={clientAction} className="flex gap-1 min-w-[250px] ">
                <Input
                    type="text"
                    name="text"
                    placeholder="Add Todo"
                />

                <Button variant={"default"}>Add</Button>
            </form>
        </div>
    )
}

export default AddTodo;