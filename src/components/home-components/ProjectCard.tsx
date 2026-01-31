export default function ProjectCard({category,title,desc,tags,link}:{category?: String,title: String,desc: String,tags?: String[],link?: string}) {
    const CardContent = (
        <div className="project-card group p-1 bg-linear-to-br from-white/10 to-transparent rounded-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-[0_8px_30px_rgba(148,51,236,0.3)]">
            <div className="bg-[#111] p-8 rounded-2xl h-full border border-white/5 flex flex-col items-start text-left group-hover:border-primary/30 transition-all">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                    <span className="material-symbols-outlined">{category ?? "storage"}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-slate-500 text-sm mb-6 grow">{desc}</p>
                <div className="flex flex-wrap gap-3">
                    {tags?.map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold px-2 py-1 rounded bg-white/5 text-slate-400">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                {CardContent}
            </a>
        );
    }

    return CardContent;
}