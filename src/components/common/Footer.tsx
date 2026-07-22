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
      <section className="py-5 bg-[#050505]">
        <Container size="lg">
          <div className="flex items-center justify-center sm:justify-end">
            <BackToTopButton />
          </div>
        </Container>
      </section>
      <footer className="relative bg-linear-to-br from-black to-primary rounded-t-4xl border-t border-primary transition-all duration-500">
        {/*<div className="absolute top-20 left-0 w-0.5 h-0.5 bg-primary opacity-10 rounded-2xl  z-0 animate-meteor shadow-primary shadow-[0_0_3px_3px]" ></div>*/}
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
                    <span className="hover:text-primary">Lambda IITH</span>
                  </a>
                </div>
                <StatusComponent />
              </div>
            </Container>
          </section>

          {/* Legal + Social */}
          <section className="py-5 overflow-hidden whitespace-nowrap">
            <Container size="lg">
              <div className="h-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="order-2 sm:order-1 flex flex-col items-center justify-center sm:items-start">
                  <div className="legal">
                    <a
                      href="/legal/terms"
                      className="text-current hover:text-black dark:hover:text-white duration-300 ease-in-out transition-all hover:text-[1.1rem]"
                    >
                      Terms
                    </a>{" "}
                    |{" "}
                    <a
                      href="/legal/privacy"
                      className="text-current hover:text-black dark:hover:text-white duration-300 ease-in-out transition-all hover:text-[1.1rem]"
                    >
                      Privacy
                    </a>{" "}
                    |{" "}
                    <a
                      href="/contact-us"
                      className="text-current hover:text-black dark:hover:text-white duration-300 ease-in-out transition-all hover:text-[1.1rem]"
                    >
                      Contact Us
                    </a>
                  </div>
                  <div className="text-sm mt-2">
                    &copy; {new Date().getFullYear()} | All rights reserved
                  </div>
                </div>
                <div className="order-1 sm:order-2 flex justify-center sm:justify-end">
                  <div className="flex flex-wrap gap-1 items-center justify-center">
                    {SOCIALS.map((SOCIAL: any) => (
                      <a
                        key={SOCIAL.NAME}
                        href={SOCIAL.HREF}
                        target="_blank"
                        aria-label={`Lambda IITH on ${SOCIAL.NAME}`}
                        className="group size-10 rounded-full p-2 items-center justify-center transition-all hover:bg-black/5 dark:hover:bg-white/20 blend hover:scale-125"
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

