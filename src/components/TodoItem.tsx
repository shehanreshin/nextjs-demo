type Props = {
    id: string;
    title: string;
    complete: boolean;
}

export default function TodoItem({id, title, complete}: Readonly<Props>) {
    return (
        <li className={`flex items-center gap-1`}>
            <input id={id} type="checkbox" className={`peer cursor-pointer`}/>
            <label htmlFor={id} className={`peer-checked:line-through peer-checked:text-emerald-50`}>{title}</label>
        </li>
    );
}