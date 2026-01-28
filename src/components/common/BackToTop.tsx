"use client"

export default function BackToTop() {

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all"
            >
                <span className="material-symbols-outlined">north</span>
            </button>
        </div>
    )
}
