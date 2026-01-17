import { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="w-[40vw] md:w-[17vw] md:h-auto bg-[#28013C] text-white rounded-[3vw] md:rounded-[1vw] p-[2vw] flex flex-col items-center text-center border-[#6226A2] hover:bg-[#24003A] border">
      <div className="flex flex-col justify-center items-center mb-[0.8vw]">
        <Icon className="w-[10vw] h-[10vh] mb-4" />
        <div className="text-[5vw] md:text-[1.7vw] font-semibold mb-[1vw] tracking-wider">
          {title}
        </div>
      </div>
      <div className="w-full border border-white mb-[1.4vw]"></div>
      <div className="text-[3vw] md:text-[0.9vw]">{description}</div>
    </div>
  );
}
