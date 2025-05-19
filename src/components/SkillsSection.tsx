
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skills = [
    { name: "HTML/CSS", value: 95 },
    { name: "JavaScript", value: 90 },
    { name: "React.js", value: 85 },
    { name: "Node.js", value: 80 },
    { name: "TypeScript", value: 75 },
    { name: "Next.js", value: 70 },
  ];
  
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-portfolio-accent font-medium mb-2">My Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue-dark mb-4">Technical Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've developed a diverse set of skills over the years. Here's a snapshot of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-portfolio-blue-dark font-medium">{skill.name}</span>
                <span className="text-portfolio-accent font-medium">{skill.value}%</span>
              </div>
              <Progress
                value={skill.value}
                className="h-2 bg-gray-200"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-portfolio-accent/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-portfolio-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-portfolio-blue-dark mb-3">Frontend Development</h3>
            <p className="text-gray-600">
              Creating responsive, accessible, and performant user interfaces with modern frameworks and best practices.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-portfolio-accent-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-portfolio-accent-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-portfolio-blue-dark mb-3">Backend Development</h3>
            <p className="text-gray-600">
              Building robust, scalable APIs and server-side applications using modern technologies and architectures.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-portfolio-accent/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-portfolio-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-portfolio-blue-dark mb-3">Mobile Development</h3>
            <p className="text-gray-600">
              Developing cross-platform mobile applications with React Native and other modern frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
