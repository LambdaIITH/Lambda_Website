import { Mail, Instagram, LinkedinIcon, Github } from "lucide-react"
import { StaticImageData } from "next/image"
import Image from "next/image"
type Member = {
    name: string
    role: string
    image: StaticImageData
    socialLinks: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        instagram?: string;
        email?: string;
    };
}

export default function MemberCard({ name, role, image, socialLinks }: Member) {
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
                    <Image
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
                {socialLinks.email && (
                    <a href={`mailto:${socialLinks.email}`}>
                        <Mail className="w-5 h-5 text-[#16001F] bg-white cursor-pointer hover:scale-[1.1] transition-transform" />
                    </a>
                )}

                {socialLinks.github && (
                    <a href={socialLinks.github} target="_blank">
                        <Github className="w-5 h-5 text-[#16001F] fill-[#16001F] bg-white cursor-pointer hover:scale-[1.1] transition-transform" />
                    </a>
                )}

                {socialLinks.instagram && (
                    <a href={socialLinks.instagram} target="_blank">
                        <Instagram className="w-5 h-5 rounded-sm text-[#16001F] bg-white cursor-pointer hover:scale-[1.1] transition-transform" />
                    </a>
                )}

                {socialLinks.linkedin && (
                    <a href={socialLinks.linkedin} target="_blank">
                        <LinkedinIcon
                            strokeWidth={1}
                            className="w-5 h-5 text-[#16001F] fill-[#16001F] bg-white cursor-pointer hover:scale-[1.1] transition-transform"
                        />
                    </a>
                )}
            </div>

        </div>
    )
}
