import { getGithubRepositories, GitHubRepository } from '@/services/github';
import { ProjectCard } from './project-card';
import { Code } from 'lucide-react';

interface ProjectWithLiveUrl extends GitHubRepository {
  liveUrl?: string;
}

export async function ProjectsSection() {
  const username = 'Satishgouda-patil'; // Hardcoded username
  let projects: ProjectWithLiveUrl[] = [];
  let error: string | null = null;

  const projectLiveUrls: { [key: string]: string } = {
      'AirBnb-clone': 'https://stayhub-hhqy.onrender.com/',
      // Add other live URLs here if needed
  };


  try {
    projects = await getGithubRepositories(username);
    // Add live URLs to the projects
    projects = projects.map(project => ({
        ...project,
        liveUrl: projectLiveUrls[project.name]
    }));
  } catch (e) {
    console.error("Failed to fetch GitHub repositories:", e);
    error = "Failed to load projects. Please try again later.";
  }

  return (
    <section id="projects" className="container py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center fade-in">
         <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-sm mb-4">
           Projects
        </div>
        {/* Responsive heading */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Showcasing Our Work
        </h2>
        {/* Responsive paragraph */}
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects We've built, demonstrating my skills and passion for development.
        </p>
      </div>
      {error ? (
        <p className="text-center text-destructive">{error}</p>
      ) : (
        // Responsive grid layout with adjusted gap
        <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
             <div
              key={project.name}
              // Apply staggered animation delay based on index
              className={`fade-in fade-in-delay-${(index + 1) * 100}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
