import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { EducationSection } from '@/components/sections/education';
// Removed Separator import as it's no longer used directly here

export default function Home() {
  return (
    <>
      <Header />
      {/* Wrap main content in a container for consistent padding, though sections handle their own padding too */}
      <main className="flex-1 flex flex-col mx-0">
        <AboutSection />
        {/* No Separator */}
        <SkillsSection />
        {/* No Separator */}
        <ProjectsSection />
         {/* No Separator */}
        <EducationSection />
         {/* No Separator */}
      </main>
      <Footer />
    </>
  );
}
