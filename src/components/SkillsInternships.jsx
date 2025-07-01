import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiPostman } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Java", icon: <FaJava /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "React", icon: <FaReact /> },
];

const tools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Postman", icon: <SiPostman /> },
];

const internships = [
  {
    title: "Software Developer Intern",
    company: "Zeazh",
    year: "2025",
  },
  {
    title: "React Developer Intern",
    company: "Nexitence Technology",
    year: "2025",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-20 px-6 md:px-10 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">Skills & Internships</h2>
          <p className="text-gray-500 text-sm mt-2">Technologies I use and the journey I’m building</p>
        </div>

        {/* Skills + Tools Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-6">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Tools I Work With</h3>
            <div className="flex flex-wrap gap-6">
              {tools.map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition"
                >
                  <span className="text-xl">{tool.icon}</span>
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Internships */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Internship Experience</h3>
          <div className="space-y-3">
            {internships.map((intern, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">{intern.title}</p>
                  <p className="text-sm text-gray-500">{intern.company}</p>
                </div>
                <span className="text-sm text-gray-400">{intern.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
