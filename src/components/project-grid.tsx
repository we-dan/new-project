import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

const PROJECTS = [
  {
    id: 'minimalist-space',
    title: 'Minimalist Space',
    category: 'Architecture & Light',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=85',
    description: 'Exploring the power of negative space and architectural geometry.',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&auto=format&fit=crop&q=85',
    ],
  },
  {
    id: 'urban-geometry',
    title: 'Urban Geometry',
    category: 'City & Pattern',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop&q=85',
    description: 'Lines, angles, and patterns found in everyday urban environments.',
    images: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&auto=format&fit=crop&q=85',
    ],
  },
  {
    id: 'light-studies',
    title: 'Light Studies',
    category: 'Natural Light',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=85',
    description: 'Capturing the subtle nuances of natural light and shadow.',
    images: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop&q=85',
    ],
  },
];

export { PROJECTS };

export default function ProjectGrid() {
  return (
    <div className="space-y-20 sm:space-y-24">
      {PROJECTS.map((project, index) => (
        <div key={project.id} className="group">
          <Link to={`/project/${project.id}`}>
            <div className={`grid gap-12 md:gap-16 items-center md:grid-cols-2`}>
              <div className={index % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-2'}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm font-light text-muted-foreground uppercase tracking-widest">
                      {project.category}
                    </p>
                    <h3 className="text-4xl sm:text-5xl font-light tracking-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground font-light max-w-lg">
                    {project.description}
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      className="group/btn"
                      asChild
                    >
                      <span>
                        View project
                        <Icons.chevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 0 ? 'order-1 md:order-2' : 'order-1 md:order-1'}>
                <div className="overflow-hidden rounded-lg bg-muted relative aspect-[3/4]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                    <Icons.image className="w-16 h-16" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {index < PROJECTS.length - 1 && (
            <div className="mt-20 sm:mt-24 h-px bg-gradient-to-r from-border via-border to-transparent" />
          )}
        </div>
      ))}
    </div>
  );
}
