import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, ArrowRight, ArrowUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ravi-tilekar-53830a99', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/ravitilekar05?igsh=MXg3dWdlZWxsbGducQ==', label: 'Instagram' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-20 pb-10 overflow-hidden border-t border-white/10">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="inline-block font-serif text-3xl font-bold tracking-tight">
              Ravi Tilekar<span className="text-primary">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building the future, writing the present. Mentoring dreamers to become doers through entrepreneurship and storytelling.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-primary hover:text-white p-2.5 rounded-full text-gray-400 transition-all duration-300 transform hover:scale-110 border border-white/5 hover:border-primary"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white flex items-center gap-2">
              <span className="h-1 w-6 bg-primary rounded-full"></span> Explore
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/" className="text-gray-400 hover:text-primary transition-colors w-fit hover:translate-x-1 duration-200">Home</Link>
              <Link to="/journey" className="text-gray-400 hover:text-primary transition-colors w-fit hover:translate-x-1 duration-200">My Journey</Link>
              <Link to="/speaker" className="text-gray-400 hover:text-primary transition-colors w-fit hover:translate-x-1 duration-200">Speaking</Link>
              <Link to="/books" className="text-gray-400 hover:text-primary transition-colors w-fit hover:translate-x-1 duration-200">Books</Link>
              <Link to="/impact" className="text-gray-400 hover:text-primary transition-colors w-fit hover:translate-x-1 duration-200">Impact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white flex items-center gap-2">
              <span className="h-1 w-6 bg-primary rounded-full"></span> Writings
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/writings/poems" className="text-gray-400 hover:text-primary transition-colors w-fit hover:translate-x-1 duration-200">Poems</Link>
              <Link to="/writings/shayari" className="text-gray-400 hover:text-primary transition-colors w-fit hover:translate-x-1 duration-200">Shayari</Link>
              <Link to="/writings/stories" className="text-gray-400 hover:text-primary transition-colors w-fit hover:translate-x-1 duration-200">Stories</Link>
              <Link to="/writings/songs" className="text-gray-400 hover:text-primary transition-colors w-fit hover:translate-x-1 duration-200">Songs</Link>
              <Link to="/writing" className="text-gray-400 hover:text-primary transition-colors w-fit hover:translate-x-1 duration-200">All Writings</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-lg mb-2 text-white">Join the Community</h4>
            <p className="text-sm text-gray-400">
              Get weekly insights on entrepreneurship, creativity, and life delivered to your inbox.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/5 border-white/10 pr-12 h-11 focus:border-primary/50 transition-all text-white placeholder:text-gray-500 rounded-lg"
                />
                <Button
                  size="sm"
                  type="submit"
                  className="absolute right-1 top-1 h-9 w-9 p-0 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-all shadow-lg shadow-primary/20 group-hover:scale-105"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
            <span>© {new Date().getFullYear()} Ravi Tilekar. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">Made with <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" /> in India</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 bg-white/5 hover:bg-primary text-white px-3 py-1.5 rounded-full transition-all duration-300 ml-4 border border-white/10 hover:border-primary"
            >
              <span className="font-medium">Top</span>
              <ArrowUp className="h-3 w-3 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
