import { FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";
import vibing from "../assets/942_1x_shots_so.png";
import aimaire from "../assets/613_1x_shots_so.png";
import crud from "../assets/265_1x_shots_so.png";
import img from "../assets/885_1x_shots_so.png";

const projects = [
  {
    name: "Aimaire Inc",
    description:
      "Equipment manufacturing company website built with React. Full commercial solution for franchise setup.",
    image: aimaire,
    link: "https://www.aimaireinc.com/",
    type: "Live Demo",
  },
  {
    name: "Vibing Tech",
    description:
      "Client IT business website using HTML, CSS, and JavaScript. Built from scratch for a freelancing client.",
    image: vibing,
    link: "https://vibingtech.com/",
    type: "Live Demo",
  },
  {
    name: "React CRUD App",
    description:
      "CRUD operations in React with Firebase. Posted on LinkedIn with demo screenshots.",
    image: crud,
    link: "https://www.linkedin.com/posts/mohamed-ibrahim-t-834845325_reactjs-crudoperations-webdevelopment-activity-7295819170397466626-QylK",
    type: "LinkedIn",
  },
  {
    name: "GOFS Ecommerce",
    description:
      "Frontend ecommerce project demo built with HTML, CSS, JS for a conceptual brand.",
    image: img,
    link: "https://mohamedcoderx.github.io/Ecommerce-GOFS/index.html",
    type: "Live Demo",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <h3 className="text-sm text-gray-500 uppercase font-semibold tracking-widest">
            Completed Projects
          </h3>
          <h2 className="text-5xl font-bold text-gray-900 mt-2 leading-tight">
            Best Quality Works That I Did <span className="text-red-500">❤️</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-[280px] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>
                <p className="text-gray-600 mt-3 text-[15px] leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {project.type === "LinkedIn" ? <FaLinkedin /> : <FaExternalLinkAlt />}
                  {project.type}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20">
          <a
            href="https://www.linkedin.com/in/mohamed-ibrahim-t-834845325/"
            target="_blank"
            className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 transition"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
