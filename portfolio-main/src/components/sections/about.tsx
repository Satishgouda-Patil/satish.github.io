import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="container py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Adjusted grid gap and alignment for responsiveness */}
      <div className="grid gap-10 md:gap-16 lg:grid-cols-2 items-center">
        <div className="space-y-6 fade-in">
           <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
            About Me
          </div>
          {/* Responsive heading sizes */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            TwineCode
          </h1>
          {/* Responsive paragraph sizes */}
           <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Results-driven Full Stack Developers skilled in the <span className="font-semibold text-primary">MERN stack</span> (MongoDB, Express.js, React, Node.js). We specialize in building scalable, user-centric web applications and have a strong foundation in both frontend and backend technologies. Passionate about learning and staying updated with the latest industry trends, We bring innovative solutions to life through code.
          </p>
        </div>
        {/* Adjusted image container and styling */}
        <div className="flex justify-center lg:justify-end fade-in fade-in-delay-100">
            <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-none">
               <Image
                  data-ai-hint="professional developer portrait minimalist modern"
                  // Use a specific seed for consistency if needed, otherwise random is fine
                  src="/logo.jpg"
                  alt="Satishgouda Patil"
                  width={500} // Adjusted size
                  height={500} // Adjusted size
                  className="rounded-full object-cover aspect-square shadow-xl border-4 border-background transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-2xl w-full h-auto" // Made image responsive
                  priority // Prioritize loading the hero image
                />
                {/* Optional: Subtle accent border with better positioning */}
                 <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-1 pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
}
