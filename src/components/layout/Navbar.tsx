import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { navigation } from '@/data/home';
import { cn } from '@/lib/utils';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-serif text-xl font-semibold tracking-tight">
          Ravi Tilekar
        </Link>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden sm:flex">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <SheetHeader className="text-left mb-6">
                <SheetTitle className="font-serif text-2xl">Menu</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.id}>
                    {item.children ? (
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={item.id} className="border-none">
                          <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline hover:text-primary transition-colors">
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-2 pl-4 py-2 border-l-2 border-muted ml-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.id}
                                  to={child.path}
                                  onClick={() => setOpen(false)}
                                  className={cn(
                                    "text-base py-1 transition-colors hover:text-primary",
                                    location.pathname === child.path
                                      ? "text-primary font-medium"
                                      : "text-muted-foreground"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <div className="py-2">
                        {item.external ? (
                          <a
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium hover:text-primary transition-colors block"
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            to={item.path!}
                            className={cn(
                              "text-lg font-medium transition-colors block",
                              location.pathname === item.path
                                ? "text-primary"
                                : "hover:text-primary"
                            )}
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Theme Toggle (visible only in sidebar if hidden on navbar, or just valid as extra option) */}
              <div className="mt-8 pt-8 border-t flex items-center justify-between sm:hidden">
                <span className="text-sm font-medium">Switch Theme</span>
                <Button variant="outline" size="icon" onClick={toggleTheme}>
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
