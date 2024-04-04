import Link from "next/link";

export default function Page() {
    return (
        <>
            <header className={`flex justify-between items-center mb-4`}>
                <h1 className={`text-2xl`}>Add Todo</h1>
            </header>
            <form className={`flex flex-col gap-2`}>
                <input type="text" className={`border border-emerald-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-emerald-100`} />
                <div className={`flex gap-1 justify-end`}>
                    <Link href={`..`} className={`border border-emerald-300 rounded px-2 py-1 hover:bg-emerald-700 focus-within:bg-emerald-700 outline-none`}>Cancel</Link>
                    <button type="submit" className={`border border-emerald-300 rounded px-2 py-1 hover:bg-emerald-700 focus-within:bg-emerald-700 outline-none`}>Add</button>
                </div>
            </form>
        </>
    );
}