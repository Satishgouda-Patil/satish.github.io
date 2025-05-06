import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="container py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center fade-in">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-sm mb-4">
               Education
            </div>
            {/* Responsive heading */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Our Academic Background
            </h2>
            {/* Responsive paragraph */}
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                Building a strong foundation in Information Science and Engineering.
            </p>
        </div>
        <div className="flex justify-center fade-in fade-in-delay-100">
            {/* Adjusted max-width and padding */}
            <Card className="w-full max-w-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border border-transparent hover:border-primary/30 overflow-hidden bg-card">
                {/* Responsive header layout */}
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6 bg-secondary/50">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                        <span>Satishgouda Patil</span>
                         <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                        {/* Responsive title */}
                        <CardTitle className="text-lg sm:text-xl font-semibold">Bachelor of Engineering – Information Science and Engineering</CardTitle>
                        {/* Responsive description */}
                        <CardDescription className="text-sm sm:text-md text-muted-foreground mt-1">
                            SDM Institute of Technology (SDMIT), Ujire
                        </CardDescription>
                    </div>
                </CardHeader>
                {/* Adjusted padding */}
                <CardContent className="p-4 sm:p-6 space-y-2">
                   <p className="text-sm text-foreground font-medium">
                       <span className="text-muted-foreground mr-2">Duration:</span> December 2021 – May 2025
                   </p>
                   <p className="text-sm">
                       <span className="font-medium text-muted-foreground mr-1">CGPA:</span> <span className="font-semibold text-primary">8.4</span> / 10.0
                   </p>
                   {/* Optional: Add relevant coursework or honors */}
                   {/* <p className="text-sm text-muted-foreground pt-2">
                       Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Web Technologies
                   </p> */}
                </CardContent>
            </Card>
                    <br />
            <Card className="w-full max-w-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border border-transparent hover:border-primary/30 overflow-hidden bg-card">
                {/* Responsive header layout */}
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6 bg-secondary/50">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                         <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                        {/* Responsive title */}
                        <span>Amogh Bhatt</span>
                        <CardTitle className="text-lg sm:text-xl font-semibold">Bachelor of Engineering – Information Science and Engineering</CardTitle>
                        {/* Responsive description */}
                        <CardDescription className="text-sm sm:text-md text-muted-foreground mt-1">
                            SDM Institute of Technology (SDMIT), Ujire
                        </CardDescription>
                    </div>
                </CardHeader>
                {/* Adjusted padding */}
                <CardContent className="p-4 sm:p-6 space-y-2">
                   <p className="text-sm text-foreground font-medium">
                       <span className="text-muted-foreground mr-2">Duration:</span> December 2021 – May 2025
                   </p>
                   <p className="text-sm">
                       <span className="font-medium text-muted-foreground mr-1">CGPA:</span> <span className="font-semibold text-primary">8.2</span> / 10.0
                   </p>
                   {/* Optional: Add relevant coursework or honors */}
                   {/* <p className="text-sm text-muted-foreground pt-2">
                       Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Web Technologies
                   </p> */}
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
