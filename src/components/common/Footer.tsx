import Link from "next/link";
import Image from "next/image";
import { Mail, Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#28013C] w-full h-auto flex flex-col justify-around items-center gap-[6vw] sm:gap-[5vw] md:gap-[3vw] lg:gap-[2vw] z-70 p-[8vw] sm:p-[6vw] md:p-[4vw] lg:p-[3vw]">
        <div className="flex flex-col md:flex-row w-[92vw] gap-[4vw] md:gap-0 items-center md:items-start">
          <div className="md:mr-auto">
            <Image
              src="footer_assets/lambda_footer_logo.svg"
              alt="Lambda Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[40vw] sm:w-[30vw] md:w-[18vw] lg:w-[12vw] h-auto"
              priority
            />
          </div>
          <div className="md:ml-auto text-[5vw] sm:text-[4vw] md:text-[2vw] lg:text-[1vw]">
            Placeholder
          </div>
        </div>

        <div className="border-b border-white/60 w-[92vw]"></div>

        <div className="w-[92vw] flex flex-col md:flex-row justify-between items-center gap-[6vw] sm:gap-[5vw] md:gap-0">
          <div className="text-[4vw] sm:text-[3.5vw] md:text-[1.5vw] lg:text-[0.8vw]">
            &copy; 2025 | All rights reserved
          </div>

          <div className="flex text-[4.5vw] sm:text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw]">
            <div className="px-[5vw] sm:px-[4vw] md:px-[2vw] lg:px-[1.5vw]">
              <Link href="#">Terms</Link>
            </div>
            |
            <div className="px-[5vw] sm:px-[4vw] md:px-[2vw] lg:px-[1.5vw]">
              <Link href="#">Privacy</Link>
            </div>
            |
            <div className="px-[5vw] sm:px-[4vw] md:px-[2vw] lg:px-[1.5vw]">
              <Link href="#">Contact Us</Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end items-center gap-[6vw] sm:gap-[5vw] md:gap-[2.5vw] lg:gap-[1vw]">
            <a
              href="mailto:yourname@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Mail className="w-[7vw] h-[7vw] sm:w-[6vw] sm:h-[6vw] md:w-[3vw] md:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw]" />
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Github className="w-[7vw] h-[7vw] sm:w-[6vw] sm:h-[6vw] md:w-[3vw] md:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw]" />
            </a>

            <a
              href="https://www.instagram.com/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Instagram className="w-[7vw] h-[7vw] sm:w-[6vw] sm:h-[6vw] md:w-[3vw] md:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw]" />
            </a>

            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Linkedin className="w-[7vw] h-[7vw] sm:w-[6vw] sm:h-[6vw] md:w-[3vw] md:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
