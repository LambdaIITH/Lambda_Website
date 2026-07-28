"use client";

import { Mail, Phone, MapPin, User } from "lucide-react";

export default function ContactInfo() {
  return (
    <div
      className="
        glass-card
        rounded-3xl
        p-8
        relative
        overflow-hidden
        "
    >
      <div className="absolute -top-24 -right-24 size-60 bg-primary/20 rounded-full blur-[90px] animate-morph-blob pointer-events-none" />
      <h2 className="text-3xl font-bold mb-3 text-white">
        Contact Us
      </h2>

      <p className="text-slate-400 mb-8 leading-relaxed">
        Reach out to the Lambda heads directly for collaborations,
        workshops, sponsorships or general queries.
      </p>

      <div className="space-y-3">

        {/* Address */}
        <div className="flex items-start gap-4">
          <MapPin className="text-primary mt-1 shrink-0" size={20} />

          <div>
            <h3 className="font-semibold text-white mb-2">
              Address
            </h3>

            <p className="text-slate-400 leading-5.5">
              IIT Hyderabad
              <br />
              Kandi, Sangareddy
              <br />
              Telangana, India
            </p>
          </div>
        </div>

        {/* General Email */}
        <div className="flex items-start gap-4">
          <Mail className="text-primary mt-1 shrink-0" size={20} />

          <div>
            <h3 className="font-semibold text-white mb-2">
              General Email
            </h3>

            <a
              href="mailto:lambda@iith.ac.in"
              className="text-primary hover:underline"
            >
              lambda@iith.ac.in
            </a>
          </div>
        </div>

        <hr className="border-white/10" />

        <div>
          <h3 className="font-semibold text-white mb-5">
            Club Heads
          </h3>

          <div className="space-y-5">

            {/* Aric */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <User size={17} className="text-primary" />
                <span className="font-medium text-white">
                  Aric Maji
                </span>
              </div>

              <div className="flex items-center gap-2 ml-6">
                <Phone size={16} className="text-primary" />

                <a
                  href="tel:+917890175017"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  +91 78901 75017
                </a>
              </div>

              {/* Optional */}
              {
              <div className="flex items-center gap-2 ml-6 mt-2">
                <Mail size={16} className="text-primary" />

                <a
                  href="mailto:cs24btech11007@iith.ac.in"
                  className="text-slate-300 hover:text-primary"
                >
                  cs24btech11007@iith.ac.in
                </a>
              </div>
              }
            </div>

            {/* Sreeteja */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <User size={17} className="text-primary" />
                <span className="font-medium text-white">
                  Sreeteja Guddeti
                </span>
              </div>

              <div className="flex items-center gap-2 ml-6">
                <Phone size={16} className="text-primary" />

                <a
                  href="tel:+919000244522"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  +91 90002 44522
                </a>
              </div>

              {/* Optional */}
              {
              <div className="flex items-center gap-2 ml-6 mt-2">
                <Mail size={16} className="text-primary" />

                <a
                  href="mailto:co24btech11009@iith.ac.in"
                  className="text-slate-300 hover:text-primary"
                >
                  co24btech11009@iith.ac.in
                </a>
              </div>
              }
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}