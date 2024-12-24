import AddTodo from "@/components/AddTodo";
import Todo from "@/components/Todo";
import { getTodos } from "./actions/getTodos";
import { TodoType } from "@/lib/types";
import { auth } from "@/auth";

export default async function Home() {
  // CHECK IF USER IS LOGGED IN
  const session = await auth();
  if (!session) {
    return <p className="text-gray-500 flex flex-col items-center mt-11 text-3xl uppercase">Please sign in</p>
  }

  const todos: TodoType[] = await getTodos();

  return (
    <div className="flex min-h-screen flex-col items-center mt-11">
      <AddTodo />

      {/* TODO: LIST TODOS */}
      <div className="">
        {todos.length > 0 ? (
          <>
            {todos.map((todo: TodoType) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </>
        ) : (
          <p className="text-gray-500 uppercase mt-2 font-semibold">No todos yet</p>
        )}

      </div>
    </div>
  );
}
