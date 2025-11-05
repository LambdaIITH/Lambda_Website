"use client";

import Image from "next/image";
import {
  Laptop,
  PenTool,
  Users,
  Lightbulb,
  Rocket,
  ArrowRight,
  ChevronUp,
} from "lucide-react";
import Card from "@/components/home/Card";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"projects" | "blogs">("projects");
  const [activeFilter, setActiveFilter] = useState<"ongoing" | "complete">(
    "ongoing"
  );
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      number: "20+",
      title: "Active Projects",
      description: "Innovative Solutions in Development",
    },
    {
      number: "20+",
      title: "Active Projects",
      description: "Innovative Solutions in Development",
    },
    {
      number: "20+",
      title: "Active Projects",
      description: "Innovative Solutions in Development",
    },
    {
      number: "20+",
      title: "Active Projects",
      description: "Innovative Solutions in Development",
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
              className="mb-[3vh] mt-[15vh]"
            />
            <div className="text-center text-[4.5vw] font-bold mb-[1vh] tracking-wider">
              Lambda
            </div>
            <div className="text-[1.2vw] text-center text-[#D2A8FF]">
              Building the future of technology at IIT Hyderabad. <br />
              Join us in creating innovative solutions and <br />
              shaping tomorrow's digital landscape.
            </div>
          </div>

          {/* cards */}
          <div className="flex gap-[1.5vw] mb-[6vh]">
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
          <h2 className="text-[3.5vw] font-bold text-white text-center mb-[6vh]">
            Our Work
          </h2>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-[8vh]">
            <div className="flex bg-[#4A1968] rounded-full p-[0.3vh]">
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-[2.5vw] py-[1.5vh] rounded-full font-semibold transition-all cursor-pointer ${
                  activeTab === "projects"
                    ? "bg-[#C49EE8] text-[#16001F]"
                    : "text-white hover:bg-[#5A2278]"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab("blogs")}
                className={`px-[2.5vw] py-[1.5vh] rounded-full font-semibold transition-all cursor-pointer ${
                  activeTab === "blogs"
                    ? "bg-[#C49EE8] text-[#16001F]"
                    : "text-white hover:bg-[#5A2278]"
                }`}
              >
                Blogs
              </button>
            </div>
          </div>

          {/* Filter Tabs and Project Cards - Side by Side */}
          <div className="flex gap-[4vw]">
            {/* Filter Tabs - Left Side */}
            <div className="flex flex-col gap-[3vh] min-w-[12vw]">
              <button
                onClick={() => setActiveFilter("ongoing")}
                className={`text-left text-[1.2vw] font-medium transition-colors cursor-pointer ${
                  activeFilter === "ongoing"
                    ? "text-[#D05CFF]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Ongoing
              </button>
              <button
                onClick={() => setActiveFilter("complete")}
                className={`text-left text-[1.2vw] font-medium transition-colors cursor-pointer ${
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5vw] mb-[6vh]">
                {activeTab === "projects"
                  ? projects.map((project, index) => (
                      <div
                        key={index}
                        className="bg-[#2D0F47] border-2 border-[#7B3FAD] rounded-[1.5vw] p-[2vw] hover:border-[#9B5FCD] transition-all h-[25vh] flex flex-col justify-between cursor-pointer"
                      >
                        <div>
                          <p className="text-[#C49EE8] text-[0.9vw] mb-[1vh]">
                            {project.subtitle}
                          </p>
                          <h3 className="text-white text-[2.5vw] font-bold mb-[3vh]">
                            {project.title}
                          </h3>
                        </div>
                        <div className="flex gap-[0.5vw]">
                          {project.technologies.map((tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="w-[2vw] h-[2vw] bg-white rounded flex items-center justify-center p-[0.2vw]"
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
                    ))
                  : blogs.map((blog, index) => (
                      <div
                        key={index}
                        className="bg-[#2D0F47] border-2 border-[#7B3FAD] rounded-[1.5vw] p-[2vw] hover:border-[#9B5FCD] transition-all h-[25vh] flex flex-col justify-between cursor-pointer"
                      >
                        <div>
                          <div className="flex items-center gap-[1vw] mb-[1vh]">
                            <span className="text-[#C49EE8] text-[0.8vw] bg-[#C49EE8]/20 px-[1vw] py-[0.5vh] rounded-full">
                              {blog.category}
                            </span>
                            <span className="text-white/60 text-[0.8vw]">
                              {blog.readTime}
                            </span>
                          </div>
                          <h3 className="text-white text-[1.5vw] font-bold mb-[2vh]">
                            {blog.title}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between text-[0.8vw]">
                          <span className="text-white/60">{blog.author}</span>
                          <span className="text-[#C49EE8]">{blog.date}</span>
                        </div>
                      </div>
                    ))}
              </div>

              {/* View All Link */}
              <div className="flex justify-center">
                <Link
                  href={activeTab === "projects" ? "/projects" : "/blog"}
                  className="text-white text-[1.1vw] font-medium flex items-center gap-[0.5vw] hover:text-[#C49EE8] transition-colors cursor-pointer"
                >
                  {activeTab === "projects"
                    ? "View All Projects"
                    : "View All Blogs"}{" "}
                  <ArrowRight className="w-[1.2vw] h-[1.2vw]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Contributions Section */}
      <div className="w-full bg-[#0E0018] py-[10vh] px-[4vw]">
        <div className="max-w-[85vw] mx-auto">
          <h2 className="text-[3.5vw] font-bold text-white text-center mb-[8vh]">
            Our Contributions
          </h2>

          {/* Activity Heatmap */}
          <div className="bg-linear-to-br from-[#1E0A2E]/50 to-transparent border border-[#7B3FAD]/30 rounded-[2vw] p-[3vw]">
            <div className="flex justify-end items-center mb-[4vh]">
              <div className="flex items-center gap-[1vw]">
                <span className="text-white/60 text-[0.85vw]">Less</span>
                <div className="flex gap-[0.3vw]">
                  <div className="w-[1.2vw] h-[1.2vw] bg-[#1E0A2E] rounded border border-[#3A1A5A]"></div>
                  <div className="w-[1.2vw] h-[1.2vw] bg-[#5A2D7A] rounded"></div>
                  <div className="w-[1.2vw] h-[1.2vw] bg-[#8B4FC3] rounded"></div>
                  <div className="w-[1.2vw] h-[1.2vw] bg-[#C49EE8] rounded"></div>
                </div>
                <span className="text-white/60 text-[0.85vw]">More</span>
              </div>
            </div>

            {/* Months Row */}
            <div className="flex gap-[0.3vw] mb-[1vh]">
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
                  className="flex-1 text-center text-white/50 text-[0.7vw] font-medium"
                >
                  {month}
                </div>
              ))}
            </div>

            {/* Grid with Week Labels */}
            <div className="flex gap-[1vw] overflow-hidden">
              {/* Week Labels */}
              <div className="flex flex-col justify-around text-white/50 text-[0.7vw] pr-[0.5vw] shrink-0">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* Contribution Grid */}
              <div className="flex-1 grid grid-rows-7 grid-flow-col gap-[0.3vw] max-w-full">
                {Array.from({ length: 364 }).map((_, i) => {
                  const random = Math.random();
                  let colorClass = "bg-[#1E0A2E] border border-[#3A1A5A]";
                  if (random > 0.7) colorClass = "bg-[#C49EE8]";
                  else if (random > 0.5) colorClass = "bg-[#8B4FC3]";
                  else if (random > 0.3) colorClass = "bg-[#5A2D7A]";

                  return (
                    <div
                      key={i}
                      className={`aspect-square rounded-sm ${colorClass} hover:scale-110 transition-transform cursor-pointer min-w-0`}
                      title={`${Math.floor(random * 20)} contributions`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="w-full bg-[#0E0018] py-[8vh] px-[4vw]">
        <div className="max-w-[90vw] mx-auto">
          <h2 className="text-[3.5vw] font-bold text-white text-center mb-[8vh]">
            Our Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2vw]">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-[3vh]">
                  <Rocket
                    className="w-[4vw] h-[4vw] text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-[3.5vw] font-bold text-white mb-[2vh]">
                  {stat.number}
                </h3>
                <p className="text-[1.3vw] font-semibold text-white mb-[1vh]">
                  {stat.title}
                </p>
                <p className="text-[0.9vw] text-white/70">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-[13vh] right-[3vw] bg-[#1E0A2E] border-2 border-white/20 text-white px-[1.5vw] py-[1.2vh] rounded-lg hover:bg-[#2D0F47] hover:border-white/40 transition-all flex items-center gap-[0.5vw] text-[0.9vw] font-medium cursor-pointer z-50 shadow-lg ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[2vh] pointer-events-none"
        }`}
        aria-label="Back to Top"
      >
        Back to Top
        <ChevronUp className="w-[1.2vw] h-[1.2vw]" />
      </button>
    </main>
  );
}
