import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/ravitilekar', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/ravitilekar', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/ravitilekar', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@ravitilekar', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Ravi Tilekar</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Builder, writer, and mentor. Empowering the next generation of entrepreneurs and dreamers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/writings/poems" className="text-muted-foreground hover:text-foreground transition-colors">Poems</Link>
              <Link to="/books" className="text-muted-foreground hover:text-foreground transition-colors">Books</Link>
              <Link to="/journey" className="text-muted-foreground hover:text-foreground transition-colors">Journey</Link>
              <Link to="/speaker" className="text-muted-foreground hover:text-foreground transition-colors">Speaker</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <a
              href="mailto:hello@ravitilekar.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              hello@ravitilekar.com
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ravi Tilekar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
