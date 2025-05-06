import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Phone, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Satishgouda-patil', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/satish-patil-46b295258', icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/satishgouda_18/', icon: Instagram },
  ];

  return (
    <footer className="bg-secondary/50 border-t mt-16 md:mt-24 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">About Me</h3>
          <p className="text-muted-foreground text-sm">
            I'm Satishgouda Patil, a Full Stack Developer passionate about building scalable MERN-stack applications and crafting clean user experiences.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:satishgoudapatil85@gmail.com" className="hover:text-primary transition">
                satishgoudapatil85@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+918073299785" className="hover:text-primary transition">
                +91 80732 99785
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Connect</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={`Visit Satishgouda Patil's ${link.name}`}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {currentYear} TwineCode. All rights reserved.
      </div>
    </footer>
  );
}
