import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontendSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Bootstrap",
    "daisyUI",
  ];
  const backendSkills = [
    "Node.js",
    "Springboot",
    "Java",
    "MongoDB",
    "RestAPI",
    "SQL",
    "noSQL",
  ];
  const cybersecuritySkills = [
    "Network fundamentals",
    "Linux fundamentals",
    "Windows fundamentals",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              With a strong background in the food industry, I spent many years
              running a family business gaining extensive experience in
              operations, quality management, sales, and marketing. My passion
              for technology led me to become a certified fullstack developer,
              where I worked with modern web technologies, API integrations, and
              application development. Currently I am furthering my expertise in
              cybersecurity an area I find both fascinating and crucial in
              today’s digital landscape. I thrive in dynamic environments where
              I can combine my technical skills with my business acumen to
              create innovative solutions. Open to new challenges and
              opportunities, I am always looking to grow and contribute to
              forward-thinking projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Cybersecurity</h3>
                <div className="flex flex-wrap gap-2">
                  {cybersecuritySkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">
                    Cybersecurity - Stockholms tekniska institut (2025 -
                    Present)
                  </h4>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Fullstackutvecklare JavaScript - Teknikhögskolan Lund (2022
                    - 2024)
                  </h4>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    IHM Business Management - Malmö (2019 - 2020)
                  </h4>
                </div>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-lg">
                    Columbus Commerce, Malmö / Helsingborg (Internship 2024)
                  </h4>
                  <p>
                    I developed an application to update user roles through
                    Excel imports and API/database integration. I also created
                    templates for generating product specifications as PDFs from
                    API data and developed a console application for managing
                    user roles
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Svensk Cater, Löddeköpinge (Internship 2023)
                  </h4>
                  <p>
                    I developed a recipe section to allow customers to create
                    new recipes and gain inspiration. I also started building a
                    light version of their webshop, enabling users to log in and
                    select a delivery date for their orders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
