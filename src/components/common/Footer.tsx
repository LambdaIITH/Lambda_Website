import Link from "next/link";
import Image from "next/image";
import { Mail, Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="text-[3vh] lg:text-[0.9vw] bg-[#28013C] w-full h-auto flex flex-col justify-around items-center gap-[4vh] z-70 p-[5vh]">
        <div className="flex w-[92vw]">
          <div className="mr-auto">
            <Image
              src="footer_assets/lambda_footer_logo.svg"
              alt="Lambda Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "12vw",
                height: "auto",
              }}
              priority
            />
          </div>
          <div className="ml-auto text-[1vw]">Placeholder</div>
        </div>

        <div className="border-b border-white/60 w-[92vw]"></div>

        <div className="w-[92vw] flex justify-between items-center">
          <div className="text-[0.8vw]">&copy; 2025 | All rights reserved</div>

          <div className="flex text-[0.9vw]">
            <div className="px-[1.5vw]">
              <Link href="#">Terms</Link>
            </div>
            |
            <div className="px-[1.5vw]">
              <Link href="#">Privacy</Link>
            </div>
            |
            <div className="px-[1.5vw]">
              <Link href="#">Contact Us</Link>
            </div>
          </div>

          <div className="flex justify-end items-center gap-[1vw]">
            <a
              href="mailto:yourname@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Mail className="w-[1.5vw] h-[1.5vw]" />
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Github className="w-[1.5vw] h-[1.5vw]" />
            </a>

            <a
              href="https://www.instagram.com/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Instagram className="w-[1.5vw] h-[1.5vw]" />
            </a>

            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              <Linkedin className="w-[1.5vw] h-[1.5vw]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
