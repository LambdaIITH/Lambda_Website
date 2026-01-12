"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "mentors", label: "Mentors" },
  { id: "heads", label: "Club Heads" },
  { id: "core", label: "Core Members" },
  { id: "uiux", label: "UI/UX Team" },
]

export default function TeamSidebar() {
  const [active, setActive] = useState("mentors")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <aside className="sticky top-32 h-fit">
      <ul className="space-y-6 text-lg">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`transition-colors ${
                active === s.id
                  ? "text-[#D12CFF] font-semibold"
                  : "text-white/60 hover:text-[#D2A8FF]"
              }`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
