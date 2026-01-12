import MemberCard from "./MemberCard"

export default function TeamSection({
  title,
  members,
}: {
  title: string
  members: any[]
}) {
  return (
    <section className="max-w-7xl mx-auto mb-20">
      <div className="flex items-center gap-6 mb-10">
        <h2 className="text-4xl font-bold text-[#D2A8FF]">{title}</h2>
        <div className="grow h-px bg-linear-to-r from-primary/30 to-transparent" />
      </div>

      <div
        className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        }
      >
        {members.map((m) => (
          <MemberCard key={m.name} {...m} />
        ))}
      </div>
    </section>
  )
}
