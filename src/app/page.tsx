import Link from "next/link";
import {prisma} from "@/db";
import TodoItem from "@/components/TodoItem";

function getTodos() {
    return prisma.todo.findMany();
}

export default async function Home() {
    // await prisma.todo.create({data: {title: "Create a todo app", complete: false}});
    const todos = await getTodos();

    return (
        <>
            <header className={`flex justify-between items-center mb-4`}>
                <h1 className={`text-2xl`}>Todos</h1>
                <Link href={`/add`}
                      className={`border border-emerald-300 rounded px-2 py-1 hover:bg-emerald-700 focus-within:bg-emerald-700 outline-none`}>Add</Link>
            </header>
            <ul className={`pl-4`}>
                {todos.map(todo => <TodoItem key={todo.id} {...todo}></TodoItem>)}
            </ul>
        </>
    );
}