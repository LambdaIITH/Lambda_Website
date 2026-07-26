import Image from "next/image";
import { StatusComponent, BackToTopButton } from "./FooterComponents";
import Container from "./Container";

type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
  COLOR_CSS: string
}[]



export default function Footer() {
  const SOCIALS: Socials = [
    {
      NAME: "Email",
      ICON: "email",
      TEXT: "web@iith.dev",
      HREF: "mailto:web@iith.dev",
      COLOR_CSS: "group-hover:fill-white"
    },
    {
      NAME: "Github",
      ICON: "github",
      TEXT: "LambdaIITH",
      HREF: "https://github.com/LambdaIITH",
      COLOR_CSS: "group-hover:fill-black"
    },
    {
      NAME: "Instagram",
      ICON: "instagram",
      TEXT: "lambdaiith",
      HREF: "https://instagram.com/lambdaiith",
      COLOR_CSS: "group-hover:fill-pink-700"
    },
    {
      NAME: "LinkedIn",
      ICON: "linkedin",
      TEXT: "lambda-iith-hyderabad",
      HREF: "https://www.linkedin.com/company/lambda-iit-hyderabad",
      COLOR_CSS: "group-hover:fill-blue-700"
    },
  ];
  return (
    <>
      {/* Back to top */}
      <section className="py-5 bg-[#080808]">
        <Container size="lg">
          <div className="flex items-center justify-center sm:justify-end">
            <BackToTopButton />
          </div>
        </Container>
      </section>
      <footer className="relative overflow-hidden bg-[#090909] rounded-t-3xl border-t border-purple-500/20 transition-all duration-500">
        {/* Purple ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
        {/* Purple top line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"/>
        <div className="relative animate z-10">
          {/* Status */}
          <section className="pb-5 pt-7 overflow-hidden whitespace-nowrap">
            <Container size="lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col items-center sm:items-start">
                  <a
                    href="/"
                    className="flex gap-1 items-center w-fit font-semibold text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
                  >
                    <Image
                      src="/footer_assets/lambda_footer_logo.png"
                      className="transition-all hover:scale-120"
                      alt="Lambda IITH Logo"
                      width={32}
                      height={32}
                    />
                    <span className="hover:text-primary transition-colors">Lambda IITH</span>
                  </a>
                </div>
                <StatusComponent />
              </div>
            </Container>
          </section>

          {/* Legal + Social */}
          <section className="py-5 overflow-hidden whitespace-nowrap">
            <Container size="lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="order-2 sm:order-1 flex flex-col items-center justify-center sm:items-start">
                  <div className="text-white/80">
                    <a
                      href="/legal/terms"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Terms
                    </a>{" "}
                    |{" "}
                    <a
                      href="/legal/privacy"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Privacy
                    </a>{" "}
                    |{" "}
                    <a
                      href="/contact-us"
                      className="hover:text-purple-400 transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                  <div className="text-sm mt-2 text-white/50">
                    &copy; {new Date().getFullYear()} | All rights reserved
                  </div>
                </div>
                <div className="order-1 sm:order-2 flex justify-center sm:justify-end">
                  <div className="flex gap-2 items-center">
                    {SOCIALS.map((SOCIAL: any) => (
                      <a
                        key={SOCIAL.NAME}
                        href={SOCIAL.HREF}
                        target="_blank"
                        aria-label={`Lambda IITH on ${SOCIAL.NAME}`}
                        className="group size-10 rounded-full p-2 items-center justify-center transition-all duration-300 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:scale-110"
                      >
                        <svg icon-color={SOCIAL.COLOR} className={`size-full fill-current ${SOCIAL.COLOR_CSS} blend`}>
                          <use href={`/footer_assets/social.svg#${SOCIAL.ICON}`} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </footer>
    </>
  );
}

