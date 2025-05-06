import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react'; // Consider a more professional icon if desired

export function Header() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      {/* Increased max-width for larger screens, adjusted padding */}
      <div className="container flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-4 flex items-center space-x-2 group shrink-0 md:mr-6">
          {/* Simple Initials or Logo */}
           <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
            <span className="text-sm font-bold">SP</span>
           </div>
          {/* <Code className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" /> */}
          <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300 hidden sm:inline-block">
            TwineCode
          </span>
        </Link>
        {/* Adjusted spacing and alignment for nav */}
        <nav className="flex flex-1 items-center space-x-1 sm:space-x-2 justify-end overflow-x-auto whitespace-nowrap">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              asChild
              // Enhanced hover effect and padding for smaller screens
              className="relative group px-2 py-1.5 sm:px-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/10 transition-all duration-300 ease-in-out"
            >
              <Link href={item.href}>
                {item.name}
                 {/* Underline hover effect */}
                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300 ease-in-out"></span>
                 <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:right-1/4 transition-all duration-300 ease-in-out"></span>
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
