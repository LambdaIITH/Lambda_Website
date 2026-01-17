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

  const years = ["2025-26", "2024-25"];

  // 2025-26 Team Members
  const mentors2025: TeamMember[] = [
    {
      name: "Adhith T",
      role: "Mentor",
      image: "/team_assets/Mentors/Adhith T.png",
      email: "mailto:adhith@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Bhaskar",
      role: "Mentor",
      image: "/team_assets/Mentors/Bhaskar.png",
      email: "mailto:bhaskar@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Dikshant",
      role: "Mentor",
      image: "/team_assets/Mentors/Dikshant.png",
      email: "mailto:dikshant@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Jash",
      role: "Mentor",
      image: "/team_assets/Mentors/Jash.png",
      email: "mailto:jash@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  ];

  const clubHeads2025: TeamMember[] = [
    {
      name: "Abdul Muqeeth",
      role: "Club Head",
      image: "/team_assets/Heads/Abdul Muqeeth.png",
      email: "mailto:abdul.muqeeth@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Ankush Singh",
      role: "Club Head",
      image: "/team_assets/Heads/Ankush Singh.png",
      email: "mailto:ankush.singh@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Ganeswar Velvadapu",
      role: "Club Head",
      image: "/team_assets/Heads/Ganeswar Velvadapu.png",
      email: "mailto:ganeswar.velvadapu@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Pranjal Prajapati",
      role: "Club Head",
      image: "/team_assets/Heads/Pranjal Prajapati.png",
      email: "mailto:pranjal.prajapati@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  ];

  const coreMembers2025: TeamMember[] = [
    {
      name: "Adishesh Balaji",
      role: "Core Member",
      image: "/team_assets/Cores/Adishesh Balaji.png",
      email: "mailto:adishesh.balaji@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Akshat Banzal",
      role: "Core Member",
      image: "/team_assets/Cores/Akshat Banzal.png",
      email: "mailto:akshat.banzal@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Anushree",
      role: "Core Member",
      image: "/team_assets/Cores/Anushree.png",
      email: "mailto:anushree@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Aric Maji",
      role: "Core Member",
      image: "/team_assets/Cores/Aric Maji.png",
      email: "mailto:aric.maji@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Aryan Bhojwani",
      role: "Core Member",
      image: "/team_assets/Cores/Aryan Bhojwani.png",
      email: "mailto:aryan.bhojwani@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Dhiraj Baid",
      role: "Core Member",
      image: "/team_assets/Cores/Dhiraj Baid.png",
      email: "mailto:dhiraj.baid@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Guddeti Sreeteja",
      role: "Core Member",
      image: "/team_assets/Cores/Guddeti Sreeteja.png",
      email: "mailto:guddeti.sreeteja@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Harshvardhan Patidar",
      role: "Core Member",
      image: "/team_assets/Cores/Harshvardhan Patidar.png",
      email: "mailto:harshvardhan.patidar@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "J D Chandana",
      role: "Core Member",
      image: "/team_assets/Cores/J D Chandana.png",
      email: "mailto:jd.chandana@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Jagadeesh Merugumala",
      role: "Core Member",
      image: "/team_assets/Cores/Jagadeesh Merugumala.png",
      email: "mailto:jagadeesh.merugumala@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Kamal Koushik Duppalapudi",
      role: "Core Member",
      image: "/team_assets/Cores/Kamal Koushik Duppalapudi.png",
      email: "mailto:kamal.koushik@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Kashyap Nukala",
      role: "Core Member",
      image: "/team_assets/Cores/Kashyap Nukala.png",
      email: "mailto:kashyap.nukala@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Mothukuri Greeshmika",
      role: "Core Member",
      image: "/team_assets/Cores/Mothukuri Greeshmika.png",
      email: "mailto:mothukuri.greeshmika@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Nathan Alvares",
      role: "Core Member",
      image: "/team_assets/Cores/Nathan Alvares.png",
      email: "mailto:nathan.alvares@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "P S Harish",
      role: "Core Member",
      image: "/team_assets/Cores/P S Harish.png",
      email: "mailto:ps.harish@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Panshul Jindal",
      role: "Core Member",
      image: "/team_assets/Cores/Panshul Jindal.png",
      email: "mailto:panshul.jindal@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Pathri Vidya Praveen",
      role: "Core Member",
      image: "/team_assets/Cores/Pathri Vidya Praveen.png",
      email: "mailto:pathri.vidya@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Rajat Hegde",
      role: "Core Member",
      image: "/team_assets/Cores/Rajat Hegde.png",
      email: "mailto:rajat.hegde@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Rayan Halder",
      role: "Core Member",
      image: "/team_assets/Cores/Rayan Halder.png",
      email: "mailto:rayan.halder@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Ronit Ranjan",
      role: "Core Member",
      image: "/team_assets/Cores/Ronit Ranjan.png",
      email: "mailto:ronit.ranjan@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Rudranil Basak",
      role: "Core Member",
      image: "/team_assets/Cores/Rudranil Basak.png",
      email: "mailto:rudranil.basak@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Sheik Muhammad Saadiq",
      role: "Core Member",
      image: "/team_assets/Cores/Sheik Muhammad Saadiq.png",
      email: "mailto:sheik.muhammad@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Sohan Das",
      role: "Core Member",
      image: "/team_assets/Cores/Sohan Das.png",
      email: "mailto:sohan.das@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Sri Sai Abhinav Reddy",
      role: "Core Member",
      image: "/team_assets/Cores/Sri Sai Abhinav Reddy.png",
      email: "mailto:srisai.abhinav@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Tavva Dinesh Reddy",
      role: "Core Member",
      image: "/team_assets/Cores/Tavva Dinesh Reddy.png",
      email: "mailto:tavva.dinesh@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  ];

  const uiuxTeam2025: TeamMember[] = [
    {
      name: "Anwesha Datta",
      role: "UI/UX Designer",
      image: "/team_assets/UIUX/Anwesha Datta.png",
      email: "mailto:anwesha.datta@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Smaron Boruah",
      role: "UI/UX Designer",
      image: "/team_assets/UIUX/Smaron Boruah.png",
      email: "mailto:smaron.boruah@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Vijay Badde",
      role: "UI/UX Designer",
      image: "/team_assets/UIUX/Vijay Badde.png",
      email: "mailto:vijay.badde@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  ];

  const clubHeads2024: TeamMember[] = [
    {
      name: "Adhith T",
      role: "Club Head",
      image: "/team_assets/Heads_Last/Adhith T.png",
      email: "mailto:adhith@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Bhaskar",
      role: "Club Head",
      image: "/team_assets/Heads_Last/Bhaskar.png",
      email: "mailto:bhaskar@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Dikshant",
      role: "Club Head",
      image: "/team_assets/Heads_Last/Dikshant.png",
      email: "mailto:dikshant@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Jash",
      role: "Club Head",
      image: "/team_assets/Heads_Last/Jash.png",
      email: "mailto:jash@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  ];

  const coreMembers2024: TeamMember[] = [
    {
      name: "Abdul Muqeeth",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Abdul Muqeeth.jpg",
      email: "mailto:abdul.muqeeth@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Ankush Singh",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Ankush Singh.png",
      email: "mailto:ankush.singh@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Anusha Kumaresan",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Anusha Kumaresan.png",
      email: "mailto:anusha.kumaresan@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Aryan",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Aryan.png",
      email: "mailto:aryan@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Ashwin Agarwal",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Ashwin Agarwal.png",
      email: "mailto:ashwin.agarwal@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Avyaaz",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Avyaaz.png",
      email: "mailto:avyaaz@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Bhumin Hirpara",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Bhumin Hirpara.png",
      email: "mailto:bhumin.hirpara@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Chaitanya Nemmani",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Chaitanya Nemmani.png",
      email: "mailto:chaitanya.nemmani@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Deekshith Patel",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Deekshith Patel.png",
      email: "mailto:deekshith.patel@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Ganeswar",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Ganeswar.png",
      email: "mailto:ganeswar@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Gopi Charan Reddy",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Gopi Charan Reddy.png",
      email: "mailto:gopi.charan@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "K Sathwik",
      role: "Core Member",
      image: "/team_assets/Cores_Last/K Sathwik.png",
      email: "mailto:k.sathwik@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Kartik",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Kartik.png",
      email: "mailto:kartik@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Krishna Teja",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Krishna Teja.png",
      email: "mailto:krishna.teja@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Laksh",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Laksh.png",
      email: "mailto:laksh@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Meghana Sai",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Meghana Sai.png",
      email: "mailto:meghana.sai@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Nishi Baranwal",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Nishi Baranwal.png",
      email: "mailto:nishi.baranwal@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Omkar Khilari",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Omkar Khilari.png",
      email: "mailto:omkar.khilari@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Pranjal Prajapati",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Pranjal Prajapati.png",
      email: "mailto:pranjal.prajapati@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Rishi",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Rishi.png",
      email: "mailto:rishi@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Samhitha",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Samhitha.png",
      email: "mailto:samhitha@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Saran",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Saran.png",
      email: "mailto:saran@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Shravan Badgujar",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Shravan Badgujar.png",
      email: "mailto:shravan.badgujar@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "V S Susi Krishna",
      role: "Core Member",
      image: "/team_assets/Cores_Last/V S Susi Krishna.png",
      email: "mailto:vs.susi.krishna@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Vindhya Paidala",
      role: "Core Member",
      image: "/team_assets/Cores_Last/Vindhya Paidala.png",
      email: "mailto:vindhya.paidala@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  ];

  const uiuxTeam2024: TeamMember[] = [
    {
      name: "Pranav",
      role: "UI/UX Designer",
      image: "/team_assets/UIUX_Last/Pranav.png",
      email: "mailto:pranav@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Radhika Rathi",
      role: "UI/UX Designer",
      image: "/team_assets/UIUX_Last/Radhika Rathi.png",
      email: "mailto:radhika.rathi@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Smaron Boruah",
      role: "UI/UX Designer",
      image: "/team_assets/UIUX_Last/Smaron Boruah.png",
      email: "mailto:smaron.boruah@example.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  ];

  const mentors = selectedYear === "2025-26" ? mentors2025 : null;
  const clubHeads = selectedYear === "2025-26" ? clubHeads2025 : clubHeads2024;
  const coreMembers =
    selectedYear === "2025-26" ? coreMembers2025 : coreMembers2024;
  const uiuxTeam = selectedYear === "2025-26" ? uiuxTeam2025 : uiuxTeam2024;

  const sections = [
    { name: "Mentors", data: mentors },
    { name: "Club Heads", data: clubHeads },
    { name: "Core Members", data: coreMembers },
    { name: "UI/UX Team", data: uiuxTeam },
  ].filter((section) => section.data && section.data.length > 0);

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
                    className="block w-full text-left px-[3vw] py-[1.5vh] text-[3vw] sm:text-[2.2vw] md:text-[1.5vw] lg:text-[0.9vw] hover:bg-[#BB7CFF] hover:text-[#28013C] transition-colors cursor-pointer"
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
          <aside className="w-[20vw] md:w-[20vw] lg:w-[15vw] shrink-0">
            <nav className="relative top-[9vh] md:top-[12vh]">
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
            <h2 className="text-[5vw] sm:text-[3.8vw] md:text-[3vw] lg:text-[2.2vw] font-bold text-[#D2A8FF] mb-[6vh] text-center md:text-left">
              {activeSection}
            </h2>

            {/* Team Members Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[4vw] md:gap-[3vw] lg:gap-[2vw]">
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
