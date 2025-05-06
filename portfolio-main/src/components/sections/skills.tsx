import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, GitBranch, Code2, Users, BrainCircuit, Lightbulb } from 'lucide-react'; // Added Lightbulb for Concepts

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: ["JavaScript", "Java", "Python", "HTML/CSS", "SQL", "React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "GitHub", "Tailwind CSS", "Bootstrap", "VS Code", "Eclipse"] // Added Genkit
  },
   {
    title: "Concepts",
    icon: Lightbulb, // Changed to Lightbulb
    skills: ["REST API Design", "Full Stack Development"] // Added Agile
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Team Collaboration", "Leadership", "Problem Solving", "Communication"] // Added Problem Solving & Communication
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="container py-16 md:py-24 lg:py-32 bg-secondary/50 rounded-xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center fade-in">
        <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-sm mb-4">
           Skills
        </div>
        {/* Responsive heading */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Our Technical Expertise
        </h2>
         {/* Responsive paragraph */}
         <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          A blend of technical proficiency and collaborative abilities to build great products.
        </p>
      </div>
      {/* Responsive grid layout */}
      <div className="grid gap-6 md:gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Card
            key={category.title}
            // Apply staggered animation delay based on index
            className={`shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 fade-in fade-in-delay-${(index + 1) * 100} border border-transparent hover:border-primary/30 bg-card`} // Use card background
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-4 p-4 sm:p-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
              </div>
              {/* Responsive title */}
              <CardTitle className="text-lg sm:text-xl font-semibold">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 p-4 sm:p-6">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 shadow-sm hover:bg-primary/20 transition-colors cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
