"use client"

import {prisma} from "@/db";

type Props = {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void;
}

export default function TodoItem({id, title, complete, toggleTodo}: Readonly<Props>) {
    return (
        <li className={`flex items-center gap-1`}>
            <input id={id} type="checkbox" defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)} className={`peer cursor-pointer`}/>
            <label htmlFor={id} className={`peer-checked:line-through peer-checked:text-emerald-50`}>{title}</label>
        </li>
    );
}