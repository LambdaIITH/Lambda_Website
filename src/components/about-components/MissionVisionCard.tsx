export default function MissionVisionCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: string; 
  title: string; 
  description: string;
}) {
  return (
    <div className="p-10 rounded-4xl border border-white/5 bg-linear-to-br from-surface-dark to-transparent hover:border-primary/20 transition-all duration-500 cursor-pointer transform hover:scale-105">
      <span className="material-symbols-outlined text-primary text-4xl mb-6 block">
        {icon}
      </span>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-white/60 leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
}
