
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "HTML/CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "React.js", percentage: 85 },
  { name: "Node.js", percentage: 80 },
  { name: "TypeScript", percentage: 75 },
];

const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-portfolio-accent uppercase tracking-wider mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue-dark">My Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-portfolio-blue-dark">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-portfolio-accent">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2 bg-gray-200" indicatorClassName="bg-portfolio-accent" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-portfolio-blue-dark">Technologies I Work With</h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md p-3 mb-3">
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                  </div>
                  <span className="text-sm text-gray-600">{tech.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
              <h4 className="text-lg font-semibold mb-3 text-portfolio-blue-dark">Additional Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "GraphQL", "REST API", "Redux", "Next.js", "Tailwind CSS", "Figma", "AWS", "Firebase"].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-portfolio-blue-dark/10 text-portfolio-blue-dark text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
