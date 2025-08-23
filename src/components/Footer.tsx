import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-primary/5 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left: Contact Info */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-text-light mb-2">Let's discuss emotion AI research</p>
            <p className="font-mono text-sm text-foreground">itai.katz@reactu.io</p>
          </div>
          
          {/* Right: Social Links */}
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/itai-katz-esa/" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
              <span className="ml-2 text-sm">Professional Background</span>
            </a>
            
            <a 
              href="https://github.com/Shongilon" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
              <span className="ml-2 text-sm">Technical Projects</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;