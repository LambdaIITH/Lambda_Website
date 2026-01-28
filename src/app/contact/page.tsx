import { Mail, Phone, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="py-[10vh] md:py-[7vw] min-h-screen bg-linear-to-br from-[#16001F] to-[#010101] text-white flex items-center justify-center">
      <div className="container mx-auto px-[4vw] py-[8vh]">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3.5vw] font-bold mb-[6vh]">
            Contact Us
          </h1>

          {/* Get in Touch Section */}
          <div className="mb-[6vh]">
            <h2 className="text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] font-semibold text-[#D2A8FF] mb-[3vh]">
              Get in Touch
            </h2>
            <p className="text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.2vw] text-gray-300 leading-relaxed">
              We're here to help! Whether you have a question, feedback, or need
              support, don't hesitate to reach out to us.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-[4vh]">
            {/* Email */}
            <div>
              <h3 className="text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.5vw] font-semibold text-[#D2A8FF] mb-[2vh]">
                Email
              </h3>
              <a
                href="mailto:lambda@iith.ac.in"
                className="flex items-center justify-center gap-[2vw] text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.2vw] text-white hover:text-[#BB7CFF] transition-colors"
              >
                <Mail className="w-[5vw] h-[5vw] sm:w-[4vw] sm:h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw]" />
                lambda@iith.ac.in
              </a>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.5vw] font-semibold text-[#D2A8FF] mb-[2vh]">
                Phone
              </h3>
              <a
                href="tel:+918714081616"
                className="flex items-center justify-center gap-[2vw] text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.2vw] text-white hover:text-[#BB7CFF] transition-colors"
              >
                <Phone className="w-[5vw] h-[5vw] sm:w-[4vw] sm:h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw]" />
                +91 8714081616
              </a>
            </div>

            {/* Website */}
            <div>
              <h3 className="text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.5vw] font-semibold text-[#D2A8FF] mb-[2vh]">
                Website
              </h3>
              <a
                href="https://iith.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-[2vw] text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.2vw] text-white hover:text-[#BB7CFF] transition-colors"
              >
                <Globe className="w-[5vw] h-[5vw] sm:w-[4vw] sm:h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw]" />
                https://iith.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
