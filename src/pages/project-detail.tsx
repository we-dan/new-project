import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import Header from '@/components/header';

const PROJECTS = [
  {
    id: 'minimalist-space',
    title: 'Minimalist Space',
    category: 'Architecture & Light',
    image: 'https://images.unsplash.com/photo-1495632066915-ee338ffc8734?w=500&h=600&fit=crop',
    description: 'Exploring the power of negative space and architectural geometry.',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&q=85',
    ],
  },
  {
    id: 'urban-geometry',
    title: 'Urban Geometry',
    category: 'City & Pattern',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=600&fit=crop',
    description: 'Lines, angles, and patterns found in everyday urban environments.',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518162165786-38b37a51f3dd?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 'light-studies',
    title: 'Light Studies',
    category: 'Natural Light',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop',
    description: 'Capturing the subtle nuances of natural light and shadow.',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1433571470151-c1f4644e3b22?w=800&h=600&fit=crop',
    ],
  },
];

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-24">
          <div className="text-center">
            <h1 className="text-2xl font-light">Project not found</h1>
            <Button onClick={() => navigate('/')} className="mt-6">
              Back to portfolio
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      {/* Project Header */}
      <section className="border-b border-border/50 px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-4xl">
          <button
            onClick={() => navigate('/')}
            className="mb-8 flex items-center text-sm font-light text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1"
          >
            <Icons.chevronRight className="mr-2 h-4 w-4 rotate-180" />
            Back
          </button>

          <div className="space-y-8 animate-fade-in">
            <div className="space-y-3">
              <p className="text-sm font-light text-muted-foreground uppercase tracking-widest">
                {project.category}
              </p>
              <h1 className="text-5xl sm:text-7xl font-light tracking-tight leading-tight">
                {project.title}
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground font-light">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-4xl space-y-12 sm:space-y-16">
          {project.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-muted animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <img
                src={image}
                alt={`${project.title} - image ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border/50 px-4 py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between gap-4">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="group"
            >
              <Icons.chevronRight className="mr-2 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
              All projects
            </Button>
            <Button asChild className="group">
              <a href="/contact">
                Get in touch
                <Icons.chevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
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

