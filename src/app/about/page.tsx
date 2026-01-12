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
      date: "9/16/25",
      title: "Annual Hackathon",
      description:
        "48 hour coding marathon with exciting prizes and etc etc etc however long whatever needs to be added its still eh uh",
    },
    {
      date: "9/16/25",
      title: "Tech Talk Series",
      description: "Industry experts share insights on emerging technologies",
    },
    {
      date: "9/16/25",
      title: "Code for a Cause",
      description: "Developing solutions for local non-profit organizations",
    },
    {
      date: "9/16/25",
      title: "Winter of Code",
      description: "Month-long program to contribute to open source projects",
    },
  ];

  const testimonials = [
    {
      quote:
        "Lambda has been an incredible platform for me to grow and enhance my skills. The supportive community has helped me become more confident in problem-solving and collaboration.",
      author: "Adhith T",
      role: "Club Member",
    },
    {
      quote:
        "Joining Lambda was the best decision. It's amazing to see how our community collaborates towards a common goal. I've learned so much from my peers!",
      author: "Zara Khan",
      role: "Club Member",
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
          <p className="text-[4vw] sm:text-[3.2vw] md:text-[2.2vw] lg:text-[1.1vw] text-white/80 leading-relaxed max-w-[85vw] sm:max-w-[75vw] md:max-w-[70vw] lg:max-w-[50vw] mx-auto">
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
                  <div className="text-[4vw] sm:text-[3.2vw] md:text-[2.2vw] lg:text-[1.1vw] text-white/80">
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

          <div className="relative max-w-[85vw] lg:max-w-[70vw] mx-auto">
            {/* Central Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[0.3vw] bg-linear-to-b from-[#D2A8FF] via-[#9B5FCD] to-[#7B3FAD]"></div>

            <div className="space-y-[8vw] sm:space-y-[6vw] md:space-y-[5vw] lg:space-y-[4vw]">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row gap-[4vw] lg:gap-[3vw] items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Event Card - Left or Right */}
                  <div className="w-full lg:w-[45%]">
                    <div className="bg-linear-to-br from-[#3D1054] to-[#2D0F47] border-2 border-[#7B3FAD] rounded-[4vw] sm:rounded-[3vw] md:rounded-[2.5vw] lg:rounded-[1.5vw] p-[6vw] sm:p-[5vw] md:p-[4vw] lg:p-[2vw] hover:border-[#D2A8FF] hover:shadow-[0_0_2vw_0.5vw_rgba(210,168,255,0.2)] transition-all duration-300 group">
                      <div className="flex items-start gap-[3vw] lg:gap-[1vw] mb-[3vw] lg:mb-[1vw]">
                        <div className="bg-[#D2A8FF]/20 rounded-[2vw] lg:rounded-[0.8vw] p-[2vw] lg:p-[0.8vw] group-hover:bg-[#D2A8FF]/30 transition-all">
                          <div className="text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-bold text-[#D2A8FF]">
                            {event.date}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-[6vw] sm:text-[5vw] md:text-[3.5vw] lg:text-[1.8vw] font-bold mb-[3vw] sm:mb-[2.5vw] md:mb-[2vw] lg:mb-[1vw] text-white group-hover:text-[#D2A8FF] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-[4vw] sm:text-[3.2vw] md:text-[2.5vw] lg:text-[1vw] text-white/70 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex items-center justify-center shrink-0 relative z-10">
                    <div className="w-[2vw] h-[2vw] lg:w-[1.2vw] lg:h-[1.2vw] bg-linear-to-br from-[#D2A8FF] to-[#9B5FCD] rounded-full border-[0.3vw] lg:border-[0.2vw] border-[#0E0018] shadow-[0_0_1.5vw_0.5vw_rgba(210,168,255,0.4)]"></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-[45%]"></div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[6vw] sm:gap-[5vw] md:gap-[4vw] lg:gap-[2.5vw]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-[#3D1054] to-[#2D0F47] border border-[#7B3FAD] rounded-[4vw] sm:rounded-[3vw] md:rounded-[2.5vw] lg:rounded-[2vw] p-[6vw] sm:p-[5vw] md:p-[4vw] lg:p-[2.5vw]"
              >
                <div className="flex items-start gap-[4vw] sm:gap-[3vw] md:gap-[2.5vw] lg:gap-[1.5vw] mb-[4vw] sm:mb-[3vw] md:mb-[2.5vw] lg:mb-[1.5vw]">
                  {/* Avatar */}
                  <div className="w-[15vw] h-[15vw] sm:w-[12vw] sm:h-[12vw] md:w-[10vw] md:h-[10vw] lg:w-[5vw] lg:h-[5vw] bg-[#D6AFFF] rounded-full flex items-center justify-center shrink-0">
                    <Users className="w-[9vw] h-[9vw] sm:w-[7vw] sm:h-[7vw] md:w-[6vw] md:h-[6vw] lg:w-[3vw] lg:h-[3vw] text-[#3D1054]" />
                  </div>

                  {/* Quote */}
                  <p className="text-[4vw] sm:text-[3.2vw] md:text-[2.2vw] lg:text-[1vw] text-white/80 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="pl-[19vw] sm:pl-[15vw] md:pl-[12.5vw] lg:pl-[6.5vw]">
                  <div className="text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-[3.8vw] sm:text-[3vw] md:text-[2vw] lg:text-[0.9vw] text-white/60">
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
