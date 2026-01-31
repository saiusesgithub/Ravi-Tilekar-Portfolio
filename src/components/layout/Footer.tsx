import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/ravitilekar', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/ravitilekar', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/ravitilekar', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@ravitilekar', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="border-t bg-black/40 backdrop-blur-md pt-16 pb-8">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block font-serif text-2xl font-bold mb-6">
              Ravi Tilekar<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building the future, writing the present. Mentoring dreamers to become doers.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Explore</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors w-fit">Home</Link>
              <Link to="/journey" className="text-muted-foreground hover:text-primary transition-colors w-fit">My Journey</Link>
              <Link to="/speaker" className="text-muted-foreground hover:text-primary transition-colors w-fit">Speaking</Link>
              <Link to="/books" className="text-muted-foreground hover:text-primary transition-colors w-fit">Books</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Writings</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/writings/poems" className="text-muted-foreground hover:text-primary transition-colors w-fit">Poems</Link>
              <Link to="/writings/shayari" className="text-muted-foreground hover:text-primary transition-colors w-fit">Shayari</Link>
              <Link to="/writings/stories" className="text-muted-foreground hover:text-primary transition-colors w-fit">Stories</Link>
              <Link to="/writings/songs" className="text-muted-foreground hover:text-primary transition-colors w-fit">Songs</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Stay Updated</h4>
            <p className="text-xs text-muted-foreground mb-4">
              Join my newsletter for weekly insights on entrepreneurship and creativity.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/5 border-white/10 pr-10 focus:border-primary/50"
                />
                <Button size="sm" type="submit" className="absolute right-1 top-1 h-8 w-8 p-0 bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground text-xs rounded-md transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Ravi Tilekar. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
