import AddTodo from "@/components/AddTodo";
import Todo from "@/components/Todo";
import { getTodos } from "./actions/getTodos";

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="flex min-h-screen flex-col items-center mt-11">
      <AddTodo />

      {/* TODO: LIST TODOS */}
      <div className="">
        {todos.length > 0 ? (
          <>
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </>
        ) : (
          <p className="text-gray-500">No todos yet</p>
        )}

      </div>
    </div>
  );
}
