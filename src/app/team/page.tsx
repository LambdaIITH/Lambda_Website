"use client";

import { useState } from "react";
import { Mail, Github, Instagram, Linkedin, ChevronDown } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  email?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
}

export default function TeamPage() {
  const [selectedYear, setSelectedYear] = useState("2025-26");
  const [activeSection, setActiveSection] = useState("Mentors");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const years = ["2025-26"];

  const mentors: TeamMember[] = [
    {
      name: "Adhith T",
      role: "Mentor",
      image: "/team_assets/Mentors/Adhith T.png",
    },
    {
      name: "Bhaskar",
      role: "Mentor",
      image: "/team_assets/Mentors/Bhaskar.png",
    },
    {
      name: "Dikshant",
      role: "Mentor",
      image: "/team_assets/Mentors/Dikshant.png",
    },
    {
      name: "Jash",
      role: "Mentor",
      image: "/team_assets/Mentors/Jash.png",
    },
  ];

  const clubHeads: TeamMember[] = [
    {
      name: "Abdul Muqeeth",
      role: "Club Head",
      image: "/team_assets/Heads/Abdul Muqeeth.png",
    },
    {
      name: "Ankush Singh",
      role: "Club Head",
      image: "/team_assets/Heads/Ankush Singh.png",
    },
    {
      name: "Ganeswar Velvadapu",
      role: "Club Head",
      image: "/team_assets/Heads/Ganeswar Velvadapu.png",
    },
    {
      name: "Pranjal Prajapati",
      role: "Club Head",
      image: "/team_assets/Heads/Pranjal Prajapati.png",
    },
  ];

  const coreMembers: TeamMember[] = [
    {
      name: "Adishesh Balaji",
      role: "Core Member",
      image: "/team_assets/Cores/Adishesh Balaji.png",
    },
    {
      name: "Akshat Banzal",
      role: "Core Member",
      image: "/team_assets/Cores/Akshat Banzal.png",
    },
    {
      name: "Anushree",
      role: "Core Member",
      image: "/team_assets/Cores/Anushree.png",
    },
    {
      name: "Aric Maji",
      role: "Core Member",
      image: "/team_assets/Cores/Aric Maji.png",
    },
    {
      name: "Aryan Bhojwani",
      role: "Core Member",
      image: "/team_assets/Cores/Aryan Bhojwani.png",
    },
    {
      name: "Dhiraj Baid",
      role: "Core Member",
      image: "/team_assets/Cores/Dhiraj Baid.png",
    },
    {
      name: "Guddeti Sreeteja",
      role: "Core Member",
      image: "/team_assets/Cores/Guddeti Sreeteja.png",
    },
    {
      name: "Harshvardhan Patidar",
      role: "Core Member",
      image: "/team_assets/Cores/Harshvardhan Patidar.png",
    },
    {
      name: "J D Chandana",
      role: "Core Member",
      image: "/team_assets/Cores/J D Chandana.png",
    },
    {
      name: "Jagadeesh Merugumala",
      role: "Core Member",
      image: "/team_assets/Cores/Jagadeesh Merugumala.png",
    },
    {
      name: "Kamal Koushik Duppalapudi",
      role: "Core Member",
      image: "/team_assets/Cores/Kamal Koushik Duppalapudi.png",
    },
    {
      name: "Kashyap Nukala",
      role: "Core Member",
      image: "/team_assets/Cores/Kashyap Nukala.png",
    },
    {
      name: "Mothukuri Greeshmika",
      role: "Core Member",
      image: "/team_assets/Cores/Mothukuri Greeshmika.png",
    },
    {
      name: "Nathan Alvares",
      role: "Core Member",
      image: "/team_assets/Cores/Nathan Alvares.png",
    },
    {
      name: "P S Harish",
      role: "Core Member",
      image: "/team_assets/Cores/P S Harish.png",
    },
    {
      name: "Panshul Jindal",
      role: "Core Member",
      image: "/team_assets/Cores/Panshul Jindal.png",
    },
    {
      name: "Pathri Vidya Praveen",
      role: "Core Member",
      image: "/team_assets/Cores/Pathri Vidya Praveen.png",
    },
    {
      name: "Rajat Hegde",
      role: "Core Member",
      image: "/team_assets/Cores/Rajat Hegde.png",
    },
    {
      name: "Rayan Halder",
      role: "Core Member",
      image: "/team_assets/Cores/Rayan Halder.png",
    },
    {
      name: "Ronit Ranjan",
      role: "Core Member",
      image: "/team_assets/Cores/Ronit Ranjan.png",
    },
    {
      name: "Rudranil Basak",
      role: "Core Member",
      image: "/team_assets/Cores/Rudranil Basak.png",
    },
    {
      name: "Sheik Muhammad Saadiq",
      role: "Core Member",
      image: "/team_assets/Cores/Sheik Muhammad Saadiq.png",
    },
    {
      name: "Sohan Das",
      role: "Core Member",
      image: "/team_assets/Cores/Sohan Das.png",
    },
    {
      name: "Sri Sai Abhinav Reddy",
      role: "Core Member",
      image: "/team_assets/Cores/Sri Sai Abhinav Reddy.png",
    },
    {
      name: "Tavva Dinesh Reddy",
      role: "Core Member",
      image: "/team_assets/Cores/Tavva Dinesh Reddy.png",
    },
  ];

  const uiuxTeam: TeamMember[] = [
    {
      name: "Anwesha Datta",
      role: "UI/UX Designer",
      image: "/team_assets/UIUX/Anwesha Datta.png",
    },
    {
      name: "Smaron Boruah",
      role: "UI/UX Designer",
      image: "/team_assets/UIUX/Smaron Boruah.png",
    },
    {
      name: "Vijay Badde",
      role: "UI/UX Designer",
      image: "/team_assets/UIUX/Vijay Badde.png",
    },
  ];

  const sections = [
    { name: "Mentors", data: mentors },
    { name: "Club Heads", data: clubHeads },
    { name: "Core Members", data: coreMembers },
    { name: "UI/UX Team", data: uiuxTeam },
  ];

  const getCurrentSectionData = () => {
    const section = sections.find((s) => s.name === activeSection);
    return section?.data || [];
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-[#16001F] to-[#010101] text-white pt-[10vw]">
      <div className="container mx-auto px-[4vw] py-[8vh]">
        {/* Header */}
        <div className="text-center mb-[8vh]">
          <h1 className="text-[6vw] sm:text-[4.5vw] md:text-[3.5vw] lg:text-[2.8vw] font-bold text-[#D2A8FF] mb-[4vh]">
            Our Team
          </h1>
          <div className="relative inline-block">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-[1vw] bg-[#5C2DA0] text-white px-[3vw] py-[1.5vh] rounded-full text-[3vw] sm:text-[2.2vw] md:text-[1.5vw] lg:text-[0.9vw] font-medium hover:bg-[#BB7CFF]/90 transition-colors border border-[#5C2DA0] cursor-pointer"
            >
              Team {selectedYear}
              <ChevronDown
                className={`w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] md:w-[2vw] md:h-[2vw] lg:w-[1.2vw] lg:h-[1.2vw] transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full mt-[1vh] left-0 right-0 bg-[#6226A2] rounded-[2vw] md:rounded-[1.5vw] lg:rounded-[1vw] overflow-hidden shadow-lg z-10">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-[3vw] py-[1.5vh] text-[3vw] sm:text-[2.2vw] md:text-[1.5vw] lg:text-[0.9vw] hover:bg-[#BB7CFF] hover:text-[#28013C] transition-colors"
                  >
                    Team {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-[4vw] md:gap-[3vw] lg:gap-[2vw]">
          {/* Sidebar */}
          <aside className="w-[25vw] md:w-[20vw] lg:w-[15vw] shrink-0">
            <nav className="space-y-[2vh] sticky top-[12vh]">
              {sections.map((section) => (
                <button
                  key={section.name}
                  onClick={() => setActiveSection(section.name)}
                  className={`block w-full text-left px-[2vw] py-[1.5vh] rounded-[2vw] md:rounded-[1.5vw] lg:rounded-[1vw] text-[3vw] sm:text-[2.2vw] md:text-[1.5vw] lg:text-[0.95vw] transition-colors cursor-pointer ${
                    activeSection === section.name
                      ? "text-[#D05CFF] font-semibold"
                      : "text-white hover:text-white"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-[5vw] sm:text-[3.8vw] md:text-[3vw] lg:text-[2.2vw] font-bold text-[#D2A8FF] mb-[6vh]">
              {activeSection}
            </h2>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4vw] md:gap-[3vw] lg:gap-[2vw]">
              {getCurrentSectionData().map((member, index) => (
                <div
                  key={index}
                  className="bg-[#28013C] border-[0.1vw] border-[#6226A2] rounded-[4vw] md:rounded-[3vw] lg:rounded-[2vw] p-[5vw] md:p-[4vw] lg:p-[2.5vw] flex flex-col items-center text-center hover:border-[#BB7CFF] transition-colors"
                >
                  {/* Profile Image */}
                  <div className="w-[25vw] h-[25vw] sm:w-[20vw] sm:h-[20vw] md:w-[12vw] md:h-[12vw] lg:w-[8vw] lg:h-[8vw] rounded-full bg-gray-300 mb-[3vh] overflow-hidden">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300" />
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-[3.5vw] sm:text-[2.8vw] md:text-[1.5vw] lg:text-[1vw] font-semibold text-white mb-[1vh]">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-[#BB7CFF] text-[3vw] sm:text-[2.3vw] md:text-[1.3vw] lg:text-[0.8vw] mb-[3vh]">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-[3vw] md:gap-[2vw] lg:gap-[1vw]">
                    {member.email && (
                      <a
                        href={member.email}
                        className="text-white hover:text-[#BB7CFF] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Mail className="w-[5vw] h-[5vw] sm:w-[4vw] sm:h-[4vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[1.2vw] lg:h-[1.2vw]" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        className="text-white hover:text-[#BB7CFF] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-[5vw] h-[5vw] sm:w-[4vw] sm:h-[4vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[1.2vw] lg:h-[1.2vw]" />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        className="text-white hover:text-[#BB7CFF] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-[5vw] h-[5vw] sm:w-[4vw] sm:h-[4vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[1.2vw] lg:h-[1.2vw]" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="text-white hover:text-[#BB7CFF] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-[5vw] h-[5vw] sm:w-[4vw] sm:h-[4vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[1.2vw] lg:h-[1.2vw]" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
