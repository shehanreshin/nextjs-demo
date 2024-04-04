import Link from "next/link";
import {prisma} from "@/db";
import {redirect} from "next/navigation";

async function addTodo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid title");
    }

    await prisma.todo.create({data: {title: title, complete: false}});
    redirect("/");
}

export default function Page() {
    return (
        <>
            <header className={`flex justify-between items-center mb-4`}>
                <h1 className={`text-2xl`}>Add Todo</h1>
            </header>
            <form action={addTodo} className={`flex flex-col gap-2`}>
                <input type="text" name="title" className={`border border-emerald-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-emerald-100`} />
                <div className={`flex gap-1 justify-end`}>
                    <Link href={`..`} className={`border border-emerald-300 rounded px-2 py-1 hover:bg-emerald-700 focus-within:bg-emerald-700 outline-none`}>Cancel</Link>
                    <button type="submit" className={`border border-emerald-300 rounded px-2 py-1 hover:bg-emerald-700 focus-within:bg-emerald-700 outline-none`}>Add</button>
                </div>
            </form>
        </>
    );
}