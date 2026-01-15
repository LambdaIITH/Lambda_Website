export default function TestimonialCard({
  name,
  role,
  quote,
  avatar,
}: {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}) {
  return (
    <div className="glass-card p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 cursor-pointer">
      <p className="text-white/70 italic mb-8 leading-loose font-light">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <img
          alt={`${name} avatar`}
          className="size-10 rounded-full bg-primary/20 object-cover"
          src={avatar || "https://via.placeholder.com/40"}
        />
        <div>
          <p className="text-sm font-bold">{name}</p>
          <p className="text-[10px] text-primary uppercase tracking-wider">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
