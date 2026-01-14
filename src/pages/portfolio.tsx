import { Link } from 'react-router-dom';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import ProjectGrid from '@/components/project-grid';
import Header from '@/components/header';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24 sm:py-40">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl font-light tracking-tight sm:text-7xl lg:text-8xl leading-tight">
              Photography
            </h1>
            <p className="max-w-2xl text-xl font-light text-muted-foreground leading-relaxed">
              Visual narratives exploring design, light, and human experience.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-6xl">
          <ProjectGrid />
        </div>
      </section>

      {/* About Preview */}
      <section className="border-t border-border/50 px-4 py-24 sm:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <div>
                <h2 className="text-4xl font-light tracking-tight sm:text-5xl mb-4">About</h2>
                <div className="h-1 w-12 bg-primary/30" />
              </div>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                I'm a UX designer exploring the intersection of visual storytelling and interaction design.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Through photography, I study how light, composition, and negative space communicate intent—principles that directly inform my design work.
              </p>
              <Link to="/about">
                <Button variant="outline" className="group">
                  Read more
                  <Icons.chevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/50 px-4 py-24 sm:py-32">
        <div className="container mx-auto max-w-2xl text-center space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">Let's collaborate</h2>
            <p className="text-lg text-muted-foreground font-light">
              Have a project in mind? I'd love to hear about it.
            </p>
          </div>
          <Link to="/contact" className="inline-block">
            <Button size="lg" className="group">
              Get in touch
              <Icons.chevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-4 py-12 text-center">
        <div className="container mx-auto max-w-6xl text-sm text-muted-foreground font-light">
          <p>© 2024 Photography Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
