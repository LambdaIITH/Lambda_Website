"use client";

import Image from "next/image";
import {
  Laptop,
  PenTool,
  Users,
  Lightbulb,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Card from "@/components/home/Card";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"projects" | "blogs">("projects");
  const [activeFilter, setActiveFilter] = useState<"ongoing" | "complete">(
    "ongoing",
  );
  const [heatmapData, setHeatmapData] = useState<string[]>([]);

  useEffect(() => {
    // Generate heatmap data on client side only
    const data = Array.from({ length: 364 }).map(() => {
      const random = Math.random();
      if (random > 0.7) return "bg-[#C49EE8]";
      if (random > 0.5) return "bg-[#8B4FC3]";
      if (random > 0.3) return "bg-[#5A2D7A]";
      return "bg-[#1E0A2E] border border-[#3A1A5A]";
    });
    setHeatmapData(data);
  }, []);

  const features = [
    {
      icon: Laptop,
      title: "Development",
      description:
        "Building innovative web and mobile applications with cutting-edge technologies",
    },
    {
      icon: PenTool,
      title: "Design",
      description:
        "Creating beautiful user interfaces with modern design principles",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Growing together through collaboration and knowledge sharing",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing boundaries with creative solutions and new technologies",
    },
  ];

  const projects = [
    {
      title: "Dashboard",
      subtitle: "IIT Hyderabad",
      technologies: [
        {
          name: "Angular",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
    {
      title: "KRC",
      subtitle: "IIT Hyderabad",
      technologies: [
        {
          name: "Angular",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
    {
      title: "Main Gate",
      subtitle: "IIT Hyderabad",
      technologies: [
        {
          name: "Angular",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
  ];

  const blogs = [
    {
      title: "Getting Started with Next.js",
      date: "Nov 3, 2025",
      author: "Lambda Team",
      category: "Web Development",
      readTime: "5 min read",
    },
    {
      title: "Building Scalable Applications",
      date: "Oct 28, 2025",
      author: "Lambda Team",
      category: "Architecture",
      readTime: "8 min read",
    },
    {
      title: "UI/UX Design Principles",
      date: "Oct 15, 2025",
      author: "Lambda Team",
      category: "Design",
      readTime: "6 min read",
    },
  ];

  const impactStats = [
    {
      icon: Rocket,
      number: "20+",
      title: "Active Projects",
      description: "Innovative Solutions in Development",
    },
    {
      icon: Users,
      number: "50+",
      title: "Club Members",
      description: "Passionate developers and designers",
    },
    {
      icon: Laptop,
      number: "100+",
      title: "Workshops",
      description: "Technical sessions conducted",
    },
    {
      icon: Lightbulb,
      number: "10+",
      title: "Technologies",
      description: "Modern tech stack expertise",
    },
  ];

  return (
    <main className="bg-[#0E0018] w-full pb-[8vh]">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen">
        <Image
          src="/home_assets/bg_overlay.svg"
          alt="BG Overlay"
          fill
          priority
          className="object-cover z-0"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(22,0,31,0.9),rgba(1,1,1,0.9))] z-10" />

        {/* content */}
        <div className="pt-[20vh] relative z-20 flex flex-col items-center justify-start min-h-screen text-white pb-[10vh]">
          {/* hero */}
          <div className="flex flex-col items-center mb-[12vh]">
            <Image
              src="/home_assets/lambda_logo_home.svg"
              alt="Lambda Logo"
              width={90}
              height={90}
              className="mb-[3vh] mt-[1vh] md:mt-[10vh] w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[90px] h-auto"
            />
            <div className="text-center text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4.5vw] font-bold mb-[1vh] tracking-wider">
              Lambda
            </div>
            <div className="text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.2vw] text-center text-[#D2A8FF] px-[4vw]">
              Building the future of technology at IIT Hyderabad. <br />
              Join us in creating innovative solutions and <br />
              shaping tomorrow's digital landscape.
            </div>
          </div>

          {/* cards */}
          <div className="md:flex grid grid-cols-2 gap-[5vw] md:gap-[1.5vw] mb-[6vh] mt-[13vh]">
            {features.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Our Work Section */}
      <div className="w-full bg-[#0E0018] py-[8vh] px-[4vw]">
        <div className="max-w-[90vw] mx-auto">
          <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3.5vw] font-bold text-white text-center mb-[6vh]">
            Our Work
          </h2>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-[8vh]">
            <div className="flex bg-[#4A1968] rounded-full p-[0.3vw] gap-[1vw]">
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-[6vw] py-[2vh] sm:px-[4vw] md:px-[3vw] lg:px-[2.5vw] rounded-full text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-base font-semibold transition-all cursor-pointer ${
                  activeTab === "projects"
                    ? "bg-[#D589F5] text-[#16001F]"
                    : "text-white hover:bg-[#5A2278]"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab("blogs")}
                className={`px-[6vw] py-[2vh] sm:px-[4vw] md:px-[3vw] lg:px-[2.5vw] rounded-full text-[4vw] sm:text-[3vwheatmap] md:text-[2vw] lg:text-base font-semibold transition-all cursor-pointer ${
                  activeTab === "blogs"
                    ? "bg-[#D589F5] text-[#16001F]"
                    : "text-white hover:bg-[#5A2278]"
                }`}
              >
                Blogs
              </button>
            </div>
          </div>

          {/* Filter Tabs and Project Cards - Side by Side */}
          <div className="flex flex-col md:flex-row gap-[4vw]">
            {/* Filter Tabs - Left Side */}
            <div className="flex flex-row md:flex-col gap-[4vw] md:gap-[3vh] md:min-w-[12vw] mb-[4vh] md:mb-0">
              <button
                onClick={() => setActiveFilter("ongoing")}
                className={`text-left text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.2vw] font-medium transition-colors cursor-pointer ${
                  activeFilter === "ongoing"
                    ? "text-[#D05CFF]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Ongoing
              </button>
              <button
                onClick={() => setActiveFilter("complete")}
                className={`text-left text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.2vw] font-medium transition-colors cursor-pointer ${
                  activeFilter === "complete"
                    ? "text-[#D05CFF]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Complete
              </button>
            </div>

            {/* Project Cards - Right Side */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4vw] md:gap-[2.5vw] lg:gap-[1.5vw] mb-[6vh]">
                {activeTab === "projects"
                  ? projects.map((project, index) => (
                      <div
                        key={index}
                        className="group relative bg-[#2D0F47] border-2 border-[#7B3FAD] rounded-[4vw] md:rounded-[2.5vw] lg:rounded-[1.5vw] p-[5vw] md:p-[3vw] lg:p-[2vw] hover:bg-[#912FC2] transition-all duration-300 h-[25vh] flex flex-col justify-between cursor-pointer overflow-hidden"
                      >
                        {/* Default Content */}
                        <div className="group-hover:opacity-0 group-hover:invisible transition-all duration-300">
                          <div>
                            <p className="text-[#C49EE8] text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[0.9vw] mb-[1vh]">
                              {project.subtitle}
                            </p>
                            <h3 className="text-white text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[2.5vw] font-bold mb-[3vh]">
                              {project.title}
                            </h3>
                          </div>
                          <div className="flex gap-[2vw] md:gap-[1vw] lg:gap-[0.5vw]">
                            {project.technologies.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className="w-[8vw] h-[8vw] sm:w-[6vw] sm:h-[6vw] md:w-[4vw] md:h-[4vw] lg:w-[2vw] lg:h-[2vw] bg-white rounded flex items-center justify-center p-[0.2vw]"
                              >
                                <Image
                                  src={tech.logo}
                                  alt={tech.name}
                                  width={32}
                                  height={32}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Hover Content */}
                        <div className="absolute inset-0 p-[5vw] md:p-[3vw] lg:p-[2vw] flex flex-col justify-center gap-[3vh] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                          <p className="text-white text-[3.5vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1vw] leading-relaxed text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore.
                          </p>
                          <Link
                            href="#"
                            className="text-white text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.1vw] font-semibold flex items-center gap-[2vw] md:gap-[1vw] lg:gap-[0.5vw] hover:gap-[3vw] md:hover:gap-[1.5vw] lg:hover:gap-[0.7vw] transition-all"
                          >
                            View Project{" "}
                            <ArrowRight className="w-[5vw] h-[5vw] sm:w-[4vw] sm:h-[4vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[1.2vw] lg:h-[1.2vw]" />
                          </Link>
                        </div>
                      </div>
                    ))
                  : blogs.map((blog, index) => (
                      <div
                        key={index}
                        className="group relative bg-[#2D0F47] border-2 border-[#7B3FAD] rounded-[4vw] md:rounded-[2.5vw] lg:rounded-[1.5vw] p-[5vw] md:p-[3vw] lg:p-[2vw] hover:bg-[#912FC2] transition-all duration-300 h-[25vh] flex flex-col justify-between cursor-pointer overflow-hidden"
                      >
                        {/* Default Content */}
                        <div className="group-hover:opacity-0 group-hover:invisible transition-all duration-300">
                          <div>
                            <div className="flex items-center gap-[2vw] md:gap-[1vw] mb-[1vh]">
                              <span className="text-[#C49EE8] text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[0.8vw] bg-[#C49EE8]/20 px-[2.5vw] md:px-[1.5vw] lg:px-[1vw] py-[0.5vh] rounded-full">
                                {blog.category}
                              </span>
                              <span className="text-white/60 text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[0.8vw]">
                                {blog.readTime}
                              </span>
                            </div>
                            <h3 className="text-white text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[1.5vw] font-bold mb-[2vh]">
                              {blog.title}
                            </h3>
                          </div>
                          <div className="flex items-center justify-between text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[0.8vw]">
                            <span className="text-white/60">{blog.author}</span>
                            <span className="text-[#C49EE8]">{blog.date}</span>
                          </div>
                        </div>

                        {/* Hover Content */}
                        <div className="absolute inset-0 p-[5vw] md:p-[3vw] lg:p-[2vw] flex flex-col justify-center gap-[3vh] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                          <p className="text-white text-[3.5vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1vw] leading-relaxed text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore.
                          </p>
                          <Link
                            href="#"
                            className="text-white text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.1vw] font-semibold flex items-center gap-[2vw] md:gap-[1vw] lg:gap-[0.5vw] hover:gap-[3vw] md:hover:gap-[1.5vw] lg:hover:gap-[0.7vw] transition-all"
                          >
                            Read Article{" "}
                            <ArrowRight className="w-[5vw] h-[5vw] sm:w-[4vw] sm:h-[4vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[1.2vw] lg:h-[1.2vw]" />
                          </Link>
                        </div>
                      </div>
                    ))}
              </div>

              {/* View All Link */}
              <div className="flex justify-center">
                <Link
                  href={activeTab === "projects" ? "/projects" : "/blog"}
                  className="text-white text-[4.5vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.1vw] font-medium flex items-center gap-[2vw] md:gap-[1vw] lg:gap-[0.5vw] hover:text-[#C49EE8] transition-colors cursor-pointer"
                >
                  {activeTab === "projects"
                    ? "View All Projects"
                    : "View All Blogs"}{" "}
                  <ArrowRight className="w-[5vw] h-[5vw] sm:w-[4vw] sm:h-[4vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[1.2vw] lg:h-[1.2vw]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Contributions Section */}
      <div className="w-full bg-[#0E0018] py-[10vh] px-[4vw]">
        <div className="max-w-[85vw] mx-auto">
          <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3.5vw] font-bold text-white text-center mb-[8vh]">
            Our Contributions
          </h2>

          {/* Activity Heatmap */}
          <div className="bg-linear-to-br from-[#1E0A2E]/50 to-transparent border border-[#7B3FAD]/30 rounded-[4vw] md:rounded-[3vw] lg:rounded-[2vw] p-[6vw] sm:p-[5vw] md:p-[4vw] lg:p-[3vw]">
            <div className="flex justify-end items-center mb-[4vh]">
              <div className="flex items-center gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw] lg:gap-[1vw]">
                <span className="text-white/60 text-[4vw] sm:text-[3vw] md:text-[1.5vw] lg:text-[0.85vw]">
                  Less
                </span>
                <div className="flex gap-[2vw] sm:gap-[1vw] md:gap-[0.5vw] lg:gap-[0.3vw]">
                  <div className="w-[5vw] h-[5vw] sm:w-[3.5vw] sm:h-[3.5vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[1.2vw] lg:h-[1.2vw] bg-[#1E0A2E] rounded border border-[#3A1A5A]"></div>
                  <div className="w-[5vw] h-[5vw] sm:w-[3.5vw] sm:h-[3.5vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[1.2vw] lg:h-[1.2vw] bg-[#5A2D7A] rounded"></div>
                  <div className="w-[5vw] h-[5vw] sm:w-[3.5vw] sm:h-[3.5vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[1.2vw] lg:h-[1.2vw] bg-[#8B4FC3] rounded"></div>
                  <div className="w-[5vw] h-[5vw] sm:w-[3.5vw] sm:h-[3.5vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[1.2vw] lg:h-[1.2vw] bg-[#C49EE8] rounded"></div>
                </div>
                <span className="text-white/60 text-[4vw] sm:text-[3vw] md:text-[1.5vw] lg:text-[0.85vw]">
                  More
                </span>
              </div>
            </div>

            {/* Scrollable Container */}
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#7B3FAD] scrollbar-track-transparent pb-[2vh]">
              <div className="min-w-max">
                {/* Months Row */}
                <div className="flex gap-[1vw] md:gap-[0.5vw] lg:gap-[0.3vw] mb-[1vh] pl-[10vw] sm:pl-[8vw] md:pl-[6vw] lg:pl-[3vw]">
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((month, i) => (
                    <div
                      key={month}
                      className="flex-1 min-w-[7vw] text-center text-white/50 text-[3.5vw] sm:text-[2.5vw] md:text-[1.2vw] lg:text-[0.7vw] font-medium"
                    >
                      {month}
                    </div>
                  ))}
                </div>

                {/* Grid with Week Labels */}
                <div className="flex gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw] lg:gap-[1vw]">
                  {/* Week Labels */}
                  <div className="flex flex-col justify-around text-white/50 text-[3.5vw] sm:text-[2.5vw] md:text-[1.2vw] lg:text-[0.7vw] pr-[2vw] sm:pr-[1vw] md:pr-[0.5vw] shrink-0">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>

                  {/* Contribution Grid */}
                  <div className="flex-1 grid grid-rows-7 grid-flow-col gap-[1.5vw] sm:gap-[1vw] md:gap-[0.5vw] lg:gap-[0.3vw]">
                    {heatmapData.map((colorClass, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded-sm ${colorClass} hover:scale-110 transition-transform cursor-pointer w-[3.5vw] h-[3.5vw] sm:w-[2.5vw] sm:h-[2.5vw] md:w-auto md:h-auto`}
                        title="Contributions"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="w-full bg-[#0E0018] py-[8vh] px-[4vw]">
        <div className="max-w-[90vw] mx-auto">
          <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3.5vw] font-bold text-white text-center mb-[8vh]">
            Our Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[8vw] md:gap-[4vw] lg:gap-[2vw]">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center ${
                    index !== impactStats.length - 1
                      ? "md:border-r md:border-white/20"
                      : ""
                  }`}
                >
                  <div className="flex justify-center mb-[3vh]">
                    <IconComponent
                      className="w-[15vw] h-[15vw] sm:w-[12vw] sm:h-[12vw] md:w-[8vw] md:h-[8vw] lg:w-[4vw] lg:h-[4vw] text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[3.5vw] font-bold text-white mb-[2vh]">
                    {stat.number}
                  </h3>
                  <p className="text-[5vw] sm:text-[4vw] md:text-[2.5vw] lg:text-[1.3vw] font-semibold text-white mb-[1vh]">
                    {stat.title}
                  </p>
                  <p className="text-[3.5vw] sm:text-[2.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-white/70">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
