import Link from "next/link"
export default function BlogCard({category, readDuration,title,desc,redirect}: {category?: String, readDuration?: String, title: String, desc: String, redirect: String}) {
    return (
        <Link href={`/blog/${redirect}`} className="group block cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="aspect-video rounded-xl bg-gradient-to-tr from-purple-900/40 to-primary/20 mb-6 border border-white/10 overflow-hidden group-hover:border-primary/30 transition-all group-hover:shadow-[0_8px_20px_rgba(148,51,236,0.2)]">
                <div className="w-full h-full flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-6xl">{category??"engineering"}</span>
                </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-primary font-bold uppercase tracking-wider mb-3">
                <span>{category}</span>
                <span className="size-1 bg-white/20 rounded-full"></span>
                <span className="text-slate-500">{readDuration ?? "10"} min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </Link>
    )
}