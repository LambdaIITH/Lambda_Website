"use client";

import { Users, Rocket, Trophy, Settings } from "lucide-react";

export default function AboutPage() {
  const achievements = [
    {
      icon: Users,
      number: "40",
      label: "Active Members",
    },
    {
      icon: Rocket,
      number: "25",
      label: "Projects Completed",
    },
    {
      icon: Trophy,
      number: "15",
      label: "Hackathons Won",
    },
    {
      icon: Settings,
      number: "100",
      label: "Technologies",
    },
  ];

  const events = [
    {
      date: "September 11th, 2025",
      title: "Annual Hackathon",
      description:
        "48 hour coding marathon with exciting prizes and etc etc etc however long whatever needs to be added its still eh uh",
    },
    {
      date: "September 11th, 2025",
      title: "Tech Talk Series",
      description: "Industry experts share insights on emerging technologies",
    },
    {
      date: "September 11th, 2025",
      title: "Code for a Cause",
      description: "Developing solutions for local non-profit organizations",
    },
    {
      date: "September 11th, 2025",
      title: "Winter of Code",
      description: "Month-long program to contribute to open source projects",
    },
  ];

  const testimonials = [
    {
      quote:
        "Lambda has been an incredible platform for growth and innovation. It's amazing to see how our members collaborate and create cutting-edge projects.",
      author: "Adhith T",
      role: "Club Head",
    },
    {
      quote:
        "Lambda has been an incredible platform for growth and innovation. It's amazing to see how our members collaborate and create cutting-edge projects.",
      author: "Zara Khan",
      role: "Web Development",
    },
  ];

  return (
    <main className="bg-[#0E0018] w-full min-h-screen text-white">
      {/* Who are we Section */}
      <div className="w-full pt-[30vw] sm:pt-[20vw] md:pt-[20vw] lg:pt-[15vw] px-[6vw] sm:px-[5vw] md:px-[4vw]">
        <div className="max-w-[90vw] mx-auto text-center">
          <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[3.5vw] font-bold mb-[6vw] sm:mb-[5vw] md:mb-[4vw] lg:mb-[2.5vw] text-[#D2A8FF]">
            Who are we?
          </h1>
          <p className="text-[4vw] sm:text-[3.2vw] md:text-[2.2vw] lg:text-[1.1vw] text-[#D2A8FF] leading-relaxed max-w-[85vw] sm:max-w-[75vw] md:max-w-[70vw] lg:max-w-[50vw] mx-auto">
            Lambda is the premier developer club at IIT Hyderabad, fostering
            innovation and technical excellence. We bring together a passionate
            community of developers and designers who learn, build, and grow
            together to push the boundaries of what's possible in software
            development.
          </p>
        </div>
      </div>

      {/* Our Achievements Section */}
      <div className="w-full py-[10vw] sm:py-[8vw] md:py-[6vw] px-[6vw] sm:px-[5vw] md:px-[4vw]">
        <div className="max-w-[90vw] mx-auto">
          <h2 className="text-[9vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[3vw] font-bold text-center mb-[8vw] sm:mb-[6vw] md:mb-[5vw] lg:mb-[3vw] text-[#D2A8FF]">
            Our Achievements
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[6vw] sm:gap-[5vw] md:gap-[4vw] lg:gap-[3vw]">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-[3vw] sm:mb-[2.5vw] md:mb-[2vw] lg:mb-[1.5vw]">
                    <IconComponent className="w-[12vw] h-[12vw] sm:w-[10vw] sm:h-[10vw] md:w-[7vw] md:h-[7vw] lg:w-[4vw] lg:h-[4vw] text-white" />
                  </div>
                  <div className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[3.5vw] font-bold mb-[2vw] sm:mb-[1.5vw] md:mb-[1vw] lg:mb-[0.5vw]">
                    {achievement.number}
                  </div>
                  <div className="text-[4vw] sm:text-[3.2vw] md:text-[2.2vw] lg:text-[1.1vw] text-white">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="w-full py-[10vw] sm:py-[8vw] md:py-[6vw] lg:py-[4vw] px-[6vw] sm:px-[5vw] md:px-[4vw]">
        <div className="max-w-[90vw] mx-auto">
          <h2 className="text-[9vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[3vw] font-bold text-center mb-[8vw] sm:mb-[6vw] md:mb-[5vw] lg:mb-[3vw] text-[#D2A8FF]">
            Upcoming Events
          </h2>

          <div className="relative max-w-[90vw] lg:max-w-[70vw] mx-auto pl-[15vw] sm:pl-[12vw] lg:pl-[8vw]">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[7vw] sm:left-[6vw] lg:left-[4.1vw] top-[5vw] bottom-[6vw] w-[0.1vw] sm:w-[0.1vw] lg:w-[0.1vh] bg-white"></div>

            <div className="space-y-[10vw] sm:space-y-[8vw] lg:space-y-[5vw]">
              {events.map((event, index) => (
                <div key={index} className="relative">
                  {/* Date positioned absolutely to the left on desktop, above card on mobile */}
                  <div className="lg:absolute lg:left-[-12vw] lg:top-[4vw] lg:w-[6vw] mb-[3vw] lg:mb-0">
                    <span className="text-[3.5vw] sm:text-[3vw] lg:text-[1vw] font-medium text-white">
                      {event.date}
                    </span>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-[-9.5vw] sm:left-[-6.7vw] lg:left-[-4.7vw] top-[1vw] sm:top-[0.8vw] lg:top-[4vw] z-10">
                    <div className="w-[3.5vw] h-[3.5vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1.6vw] lg:h-[1.6vw] rounded-full border-[0.3vw] sm:border-[0.25vw] lg:border-[0.1vw] border-[#CF5CFF]/40 flex items-center justify-center">
                      <div className="w-[2.5vw] h-[2.5vw] sm:w-[2vw] sm:h-[2vw] lg:w-[1vw] lg:h-[1vw] bg-[#CF5CFF] rounded-full border-[0.5vw] sm:border-[0.4vw] lg:border-[0.2vw] border-[#0E0018]"></div>
                    </div>
                  </div>

                  {/* Event Card */}
                  <div className="bg-[#28013C] border border-[#8B4FC3]/50 rounded-[4vw] sm:rounded-[3vw] lg:rounded-[1.5vw] p-[6vw] sm:p-[5vw] lg:p-[2.5vw] transition-all duration-300">
                    <h3 className="text-[5.5vw] sm:text-[4.5vw] lg:text-[2vw] font-bold mb-[3vw] sm:mb-[2.5vw] lg:mb-[1vw] text-[#CF5CFF]">
                      {event.title}
                    </h3>
                    <p className="text-[4vw] sm:text-[3.2vw] lg:text-[1.1vw] text-white/80 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What Our Members Say Section */}
      <div className="w-full py-[10vw] sm:py-[8vw] md:py-[6vw] lg:py-[4vw] px-[6vw] sm:px-[5vw] md:px-[4vw] pb-[15vw] sm:pb-[12vw] md:pb-[10vw] lg:pb-[6vw]">
        <div className="max-w-[90vw] mx-auto">
          <h2 className="text-[9vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[3vw] font-bold text-center mb-[8vw] sm:mb-[6vw] md:mb-[5vw] lg:mb-[3vw] text-[#D2A8FF]">
            What Our Members Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[6vw] sm:gap-[5vw] md:gap-[4vw] lg:gap-[2vw]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#28013C] border border-[#6226A2] rounded-[4vw] sm:rounded-[3vw] md:rounded-[2.5vw] lg:rounded-[2vw] p-[6vw] sm:p-[5vw] md:p-[4vw] lg:p-[2.5vw]"
              >
                <div className="flex items-start gap-[4vw] sm:gap-[3vw] md:gap-[2.5vw] lg:gap-[1.5vw] mb-[4vw] sm:mb-[3vw] md:mb-[2.5vw] lg:mb-[1.5vw]">
                  {/* Avatar */}
                  <div className="w-[15vw] h-[15vw] sm:w-[12vw] sm:h-[12vw] md:w-[10vw] md:h-[10vw] lg:w-[5vw] lg:h-[5vw] bg-[#D6AFFF] rounded-full flex items-center justify-center shrink-0">
                    <Users className="w-[9vw] h-[9vw] sm:w-[7vw] sm:h-[7vw] md:w-[6vw] md:h-[6vw] lg:w-[3vw] lg:h-[3vw] text-[#3D1054]" />
                  </div>

                  {/* Quote */}
                  <p className="text-[4vw] sm:text-[3.2vw] md:text-[2.2vw] lg:text-[1vw] text-white/80 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="pl-[19vw] sm:pl-[15vw] md:pl-[12.5vw] lg:pl-[6.5vw]">
                  <div className="text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-[3.8vw] sm:text-[3vw] md:text-[2vw] lg:text-[0.9vw] text-[#D39FE9]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
