import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Import Inter from Google Fonts
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import { cn } from '@/lib/utils';

// Instantiate Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Define CSS variable name for Inter
});

export const metadata: Metadata = {
  title: 'Satishgouda Patil - Portfolio Pilot', // Updated title
  description: 'Portfolio website for Satishgouda Patil, Full Stack Developer.', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"> {/* Add scroll-smooth */}
      <body className={cn(
        inter.variable, // Apply Inter font variable
        // geistMono.variable, // Removed Geist Mono for simplicity, can add another mono font if needed
        "font-sans antialiased" // Use font-sans which will now map to --font-inter
      )}>
        <div className="flex min-h-screen flex-col">
          {children}
          <Toaster /> {/* Add Toaster */}
        </div>
      </body>
    </html>
  );
}
