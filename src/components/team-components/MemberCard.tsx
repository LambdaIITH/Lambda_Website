import { Mail, Instagram,LinkedinIcon,Github} from "lucide-react"

type Member = {
    name: string
    role: string
    image: string
}

export default function MemberCard({ name, role, image }: Member) {
    return (
        <div
            className="
        group
        relative
        rounded-3xl
        border border-[#9b4dff]
        bg-[#2a003a]/80
        p-6
        text-center
        transition-all
        hover:shadow-[0_0_40px_#9b4dff66]
      "
        >
            {/* Avatar */}
            <div className="w-full flex justify-center mb-6">
                <div className="w-36 h-36 rounded-full bg-[#e5e5e5] overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Name */}
            <h3 className="text-white font-semibold text-lg leading-tight mb-1">
                {name}
            </h3>

            {/* Role */}
            <p className="text-[#d26bff] text-sm mb-6">{role}</p>

            {/* Icons */}
            <div className="flex justify-center gap-4 text-white">
                <Mail className="w-5 h-5 text-[#16001F]  bg-white cursor-pointer hover:scale-[1.1] transition-transform" />
                <Github className="w-5 h-5 text-[#16001F] fill-[#16001F] bg-white cursor-pointer hover:scale-[1.1] transition-transform" />
                <Instagram className="w-5 h-5 rounded-sm text-[#16001F] bg-white cursor-pointer hover:scale-[1.1] transition-transform" />
                <LinkedinIcon strokeWidth={1} className="w-5 h-5 text-[#16001F] fill-[#16001F] bg-white cursor-pointer hover:scale-[1.1] transition-transform" />
            </div>

        </div>
    )
}
