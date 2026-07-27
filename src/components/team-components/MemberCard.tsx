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
type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  COLOR_CSS: string
}[]

export default function MemberCard({ name, role, image, socialLinks }: Member) {
    const SOCIALS: Socials = [
    {
      NAME: "Email",
      ICON: "email",
      TEXT: "web@iith.dev",
      COLOR_CSS: "group-hover:fill-white"
    },
    {
      NAME: "Github",
      ICON: "github",
      TEXT: "LambdaIITH",
      COLOR_CSS: "group-hover:fill-black"
    },
    {
      NAME: "Instagram",
      ICON: "instagram",
      TEXT: "lambdaiith",
      COLOR_CSS: "group-hover:fill-pink-700"
    },
    {
      NAME: "LinkedIn",
      ICON: "linkedin",
      TEXT: "lambda-iith-hyderabad",
      COLOR_CSS: "group-hover:fill-blue-700"
    },
  ];
    return (
        <div className="member-card rounded-2xl p-2 flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden glow-avatar border border-primary/10 mb-2">
                <Image
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="pb-3 px-1 w-full">
                {/* Name */}
                <h3 className="text-lg font-bold text-white mb-0.5">
                    {name}
                </h3>

                {/* Role */}
                <p className="text-primary font-mono text-[10px] uppercase tracking-wider mb-3">
                    {role}
                </p>

                {/* Icons */}
                <div className="flex justify-center gap-2">
                    {socialLinks.github && (
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                            <svg className={`size-full fill-current ${SOCIALS[1].COLOR_CSS} blend`}>
                                <use href={`/footer_assets/social.svg#${SOCIALS[1].ICON}`} />
                              </svg>
                        </a>
                    )}

                    {socialLinks.email && (
                        <a href={socialLinks.email} target="_blank" rel="noopener noreferrer" className="social-icon">
                            <svg className={`size-full fill-current ${SOCIALS[0].COLOR_CSS} blend`}>
                                <use href={`/footer_assets/social.svg#${SOCIALS[0].ICON}`} />
                              </svg>
                        </a>
                    )}

                    {socialLinks.instagram && (
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                            <svg className={`size-full fill-current ${SOCIALS[2].COLOR_CSS} blend`}>
                                <use href={`/footer_assets/social.svg#${SOCIALS[2].ICON}`} />
                              </svg>
                        </a>
                    )}

                    {socialLinks.linkedin && (
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                            <svg className={`size-full fill-current ${SOCIALS[3].COLOR_CSS} blend`}>
                                <use href={`/footer_assets/social.svg#${SOCIALS[3].ICON}`} />
                              </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
