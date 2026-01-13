import { Users, Rocket, Trophy, Settings } from "lucide-react";
import EventCard from "@/components/about-components/EventCard";
import TestimonialCard from "@/components/about-components/TestimonialCard";

export default function AboutPage() {

  const events = [
    {
      date: "9/15/25",
      title: "Annual Hackathon",
      description:
        "48 hour coding marathon with exciting prizes and etc etc etc however long whatever needs to be added da da da da.",
    },
    {
      date: "9/15/25",
      title: "Tech Talk Series",
      description:
        "Industry experts share insights on emerging technologies.",
    },
    {
      date: "9/15/25",
      title: "Code for a Cause",
      description:
        "Developing solutions for local non-profit organizations.",
    },
    {
      date: "9/15/25",
      title: "Winter of Code",
      description:
        "Month-long program to contribute to open source projects.",
    },
  ];

  return (
    <>
      <main className="pt-30 pb-32 px-6 grid-background min-h-screen w-full">
        <div className="flex flex-col items-center justify-center">
          <p className="text-5xl text-[#D2A8FF] font-bold">Who are we?</p>
        </div>
        <div className="flex justify-center mt-14 px-6">
          <p className="max-w-[900px] text-center text-[#D2A8FF] text-xl leading-relaxed font-semibold">
            Lambda is the premier developer club at IIT Hyderabad, fostering innovation and technical excellence.
            Our community of passionate coders, designers, and tech enthusiasts work together to push the boundaries
            of what's possible in software development.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-40">
          <p className="text-5xl text-[#D2A8FF] font-bold">Our Achievements</p>
        </div>
        <div className="mt-24 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-x-24 text-[#D2A8FF]">

            {/* Active Members */}
            <div className="flex flex-col items-center lg:border-r lg:border-white lg:pr-18">
              <Users size={36} strokeWidth={1.5} color="white" />
              <p className="mt-4 text-2xl font-bold text-white">40</p>
              <p className="mt-2 text-sm tracking-wide text-white">Active Members</p>
            </div>

            {/* Projects */}
            <div className="flex flex-col items-center lg:border-r lg:border-white lg:pr-18">
              <Rocket size={36} strokeWidth={1.5} color="white" />
              <p className="mt-4 text-2xl font-bold text-white">25</p>
              <p className="mt-2 text-sm tracking-wide text-white">Projects Completed</p>
            </div>

            {/* Hackathons */}
            <div className="flex flex-col items-center lg:border-r lg:border-white lg:pr-18">
              <Trophy size={36} strokeWidth={1.5} color="white" />
              <p className="mt-4 text-2xl font-bold text-white">15</p>
              <p className="mt-2 text-sm tracking-wide text-white">Hackathons Won</p>
            </div>

            {/* Technologies */}
            <div className="flex flex-col items-center lg:pr-8">
              <Settings size={36} strokeWidth={1.5} color="white" />
              <p className="mt-4 text-2xl font-bold text-white">100</p>
              <p className="mt-2 text-sm tracking-wide text-white">Technologies</p>
            </div>

          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-40">
          <p className="text-5xl text-[#D2A8FF] font-bold">Upcoming Events</p>
        </div>
        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-[900px] flex flex-col">

            {events.map((event, i) => (
              <div key={i} className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">

                {/* Date */}
                <p className="hidden md:block w-[90px] text-right pr-4 text-white/70 text-sm mt-6">
                  {event.date}
                </p>

                {/* Card wrapper (this owns the timeline) */}
                <div className="relative flex w-3/4 flex-wrap md:w-full md:pl-12 md:border-l pb-10 border-purple-500/60">

                  {/* Dot */}
                  <div className="hidden md:flex absolute -left-[9px] top-6 items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-fuchsia-500 shadow-[0_0_12px_#d946ef]" />
                    <div className="absolute w-9 h-9 rounded-full border border-fuchsia-500/40" />
                  </div>

                  <EventCard {...event} />

                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-40">
          <p className="text-5xl text-[#D2A8FF] font-bold">
            What Our Members Say
          </p>
        </div>
        <div className="mt-16 flex justify-center gap-12 flex-wrap">
          <TestimonialCard
            name="Adhith T"
            role="Club Head"
            quote="Lambda has been an incredible platform for growth and innovation. It's amazing to see how our members collaborate and create cutting-edge projects."
          />

          <TestimonialCard
            name="Zara Khan"
            role="Web Development"
            quote="Lambda has been an incredible platform for growth and innovation. It's amazing to see how our members collaborate and create cutting-edge projects."
          />
        </div>
      </main>
    </>
  );
}
