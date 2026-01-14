import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/hooks/use-theme';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          to="/"
          className="text-lg font-light tracking-tight transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1"
        >
          Studio
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className={cn(
              "text-sm font-light transition-colors hidden sm:inline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1",
              isActive('/') ? 'text-primary' : 'hover:text-primary'
            )}
          >
            Work
          </Link>
          <Link
            to="/about"
            className={cn(
              "text-sm font-light transition-colors hidden sm:inline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1",
              isActive('/about') ? 'text-primary' : 'hover:text-primary'
            )}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={cn(
              "text-sm font-light transition-colors hidden sm:inline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1",
              isActive('/contact') ? 'text-primary' : 'hover:text-primary'
            )}
          >
            Contact
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="h-9 w-9"
          >
            {theme === 'dark' ? (
              <Icons.sun className="h-4 w-4" />
            ) : (
              <Icons.moon className="h-4 w-4" />
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
}
