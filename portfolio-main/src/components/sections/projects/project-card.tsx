'use client';

import type { GitHubRepository } from '@/services/github';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, Github, Image as ImageIcon, Loader2 } from "lucide-react"; // Added Loader2
import Link from "next/link";
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image'; // Import next/image

interface ProjectCardProps {
  project: GitHubRepository & { liveUrl?: string };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false); // State to track image loading errors

  // Generate a consistent placeholder image URL based on project name
  const placeholderImageUrl = `https://picsum.photos/seed/${encodeURIComponent(project.name)}/400/200`;
  const aiHint = `${project.language || 'web'} ${project.name.split('-').join(' ')} app`; // Generate AI hint keywords

  useEffect(() => {
    // Ensure this only runs client-side
    if (typeof window !== 'undefined') {
      const fetchSummary = async () => {
        try {
          setIsLoading(true);
          // Use fallback description if needed, ensure it's never undefined
          const descriptionInput = project.description || `${project.name} project repository.`;
          const result = "A fullstack project";
          setSummary(result);
        } catch (error) {
          console.error("Error generating project summary for", project.name, ":", error);
          // Fallback to original description or a placeholder if description is missing
          setSummary('A fullstack project.');
        } finally {
          setIsLoading(false);
        }
      };
      fetchSummary();
    } else {
      // Set initial state for server render / hydration
       setSummary(project.description || 'Loading summary...');
       setIsLoading(false); // Keep false to avoid hydration mismatch, skeleton handled below
    }

  }, [project.name, project.description]); // Add project.name to dependencies

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/30 transform hover:-translate-y-1 bg-card overflow-hidden group">
      {/* Image Placeholder/Actual Image */}
      <div className="relative h-40 sm:h-48 bg-secondary flex items-center justify-center group-hover:opacity-90 transition-opacity duration-300 overflow-hidden">
         {imageError ? (
            // Fallback icon if image fails
            <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
          ) : (
            <Image
              src={placeholderImageUrl}
              alt={`Placeholder for ${project.name}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-out group-hover:scale-105"
              onError={handleImageError}
              data-ai-hint={aiHint} // Add AI hint for image search
            />
          )}
          {/* Optional: Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
      <CardHeader className="pt-4 pb-2 px-4 sm:px-6 flex-shrink-0">
        <div className="flex justify-between items-start gap-2 mb-2">
            {/* Increased title size */}
            <CardTitle className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors line-clamp-1">{project.name}</CardTitle>
             {project.language && (
                <Badge variant="outline" className="text-xs whitespace-nowrap shrink-0">{project.language}</Badge>
              )}
        </div>
         {/* Adjusted min-height and loading state */}
         <CardDescription className="text-sm text-muted-foreground min-h-[60px] sm:min-h-[60px] flex items-start">
          {isLoading && typeof window !== 'undefined' ? ( // Only show skeleton on client during loading
            <div className="space-y-2 pt-1 w-full">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
               <Skeleton className="h-4 w-3/5" />
            </div>
          ) : (
             // Display generated summary or fallback
            <span className="line-clamp-3">{summary || 'No description available.'}</span>
          )}
        </CardDescription>
      </CardHeader>

      {/* Ensure Footer is always at the bottom */}
       <CardFooter className="mt-auto pt-4 pb-4 px-4 sm:px-6 flex justify-end gap-2 border-t border-border/50 bg-secondary/30">
        {project.liveUrl && (
          <Button variant="outline" size="sm" asChild className="transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:text-primary">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <LinkIcon className="mr-1.5 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
        <Button variant="secondary" size="sm" asChild className="transition-all duration-300 hover:bg-foreground/10 hover:text-foreground">
          <Link href={project.url} target="_blank" rel="noopener noreferrer">
            <Github className="mr-1.5 h-4 w-4" /> GitHub
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
