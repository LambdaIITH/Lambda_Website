import { TeamMember } from "../../../public/team_data/data"
import MemberCard from "./MemberCard"

export default function TeamSection({
  title,
  members,
}: {
  title: string
  members: TeamMember[]//class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-4xl transition-all duration-500 ease-out shadow-lg shadow-black/20"
}) {
  return (
    <section className=" max-w-7xl mx-auto mb-20">
      <div className="p-3 sticky top-20 flex items-center mb-10 z-10 backdrop-blur-2xl border border-white/10 rounded-4xl">
        <div className="grow h-px bg-linear-to-r from-transparent to-primary/30" />
        <h2 className="p-2 text-2xl font-bold text-white tracking-tight bg-black rounded-2xl">{title}</h2>
        <div className="grow h-px bg-linear-to-r from-primary/30 to-transparent" />
      </div>

      <div
        className={
          (title.toLowerCase().includes("core") || title.toLowerCase().includes("ui/ux"))
            ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        }
      >
        {members.map((m) => (
          <MemberCard key={m.name} {...m} />
        ))}
      </div>
    </section>
  )
}
