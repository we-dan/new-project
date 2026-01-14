import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import Header from '@/components/header';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      {/* About Header */}
      <section className="border-b border-border/50 px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-2xl">
          <button
            onClick={() => window.history.back()}
            className="mb-8 flex items-center text-sm font-light text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1"
          >
            <Icons.chevronRight className="mr-2 h-4 w-4 rotate-180" />
            Back
          </button>

          <h1 className="text-5xl sm:text-7xl font-light tracking-tight leading-tight animate-fade-in">
            About
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-2xl space-y-12 animate-fade-in">
          <div className="space-y-6">
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              I'm a UX designer exploring the intersection of visual storytelling and interaction design. Through photography, I study how light, composition, and negative space communicate intent—principles that directly inform my design work.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              Every project begins with understanding. Whether photographing architecture or designing interfaces, I approach each challenge by asking: What is the essential story? How can simplicity enhance clarity?
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              My work is guided by three principles:
            </p>

            <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
              <li className="flex gap-4">
                <span className="font-light text-primary">•</span>
                <span>
                  <strong className="font-medium text-foreground">Intention:</strong> Every element serves a purpose. Remove anything that doesn't earn its place.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-light text-primary">•</span>
                <span>
                  <strong className="font-medium text-foreground">Clarity:</strong> Use whitespace, hierarchy, and restraint to guide attention and reduce friction.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-light text-primary">•</span>
                <span>
                  <strong className="font-medium text-foreground">Connection:</strong> Design for humans. Accessibility and inclusivity aren't afterthoughts—they're fundamental.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-border bg-muted/30 p-6">
            <p className="text-sm font-light text-muted-foreground">
              Currently exploring design systems, accessible interfaces, and the craft of interaction design.
            </p>
            <p className="text-sm font-light text-muted-foreground">
              Available for freelance and collaborative projects.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-2xl text-center space-y-8">
          <p className="text-lg font-light text-muted-foreground">
            Let's work on something meaningful together.
          </p>
          <Link to="/contact">
            <Button size="lg" className="group">
              Get in touch
              <Icons.chevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-4 py-8 text-center">
        <div className="container mx-auto max-w-6xl text-sm text-muted-foreground font-light">
          <p>© 2024 Photography Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
