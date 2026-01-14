# AI Coding Guide for New Project

## Quick Reference

**Stack**: React 19, Vite 7, TypeScript (strict), Tailwind CSS 4, shadcn/ui

**Commands**:
- `npm run dev` - Start dev server (port 5173)
- `npm run build` - Production build
- `npm run typecheck` - Type check without emit

## Project Structure

```
src/
├── app.tsx              # Main app + routing - START HERE
├── main.tsx             # React entry point (don't modify)
├── index.css            # Tailwind imports + CSS variables
├── components/
│   ├── ui/              # Primitives - import from here
│   │   ├── button.tsx   # <Button variant="" size="">
│   │   ├── card.tsx     # <Card><CardHeader><CardContent>
│   │   └── ...          # More Radix-based components
│   ├── icons.tsx        # Icon registry - add icons here
│   └── providers/
│       └── theme.tsx    # ThemeProvider (already in app.tsx)
└── lib/
    └── utils.ts         # cn() for class merging
```

## Component Patterns

### Creating UI Components
```tsx
// Use cva for variants
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const variants = cva('base-classes', {
  variants: {
    variant: { default: '', secondary: '' },
    size: { sm: '', md: '', lg: '' },
  },
  defaultVariants: { variant: 'default', size: 'md' },
});

interface Props extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof variants> {}

export function MyComponent({ className, variant, size, ...props }: Props) {
  return <div className={cn(variants({ variant, size }), className)} {...props} />;
}
```

### Adding Routes
```tsx
// In src/app.tsx, add to Routes:
import { Routes, Route } from 'react-router-dom';
import MyPage from './pages/my-page';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/my-page" element={<MyPage />} />
</Routes>
```

## Styling Patterns

### Theme-Aware Colors (use these, not raw colors)
```tsx
// Background & text
className="bg-background text-foreground"

// Semantic colors
className="bg-primary text-primary-foreground"
className="bg-secondary text-secondary-foreground"
className="bg-muted text-muted-foreground"
className="bg-destructive text-destructive-foreground"

// Borders & inputs
className="border-border"
className="border-input"
className="ring-ring"

// Cards & popovers
className="bg-card text-card-foreground"
className="bg-popover text-popover-foreground"
```

### Common Layout Patterns
```tsx
// Container
<div className="container mx-auto py-8 px-4">

// Flex layouts
<div className="flex items-center justify-between gap-4">
<div className="flex flex-col gap-2">

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Stack with spacing
<div className="space-y-4">
```

## Icons

Use lucide-react icons via the registry:

```tsx
import { Icons } from '@/components/icons';

// Available: home, user, settings, search, menu, x, plus, minus,
//           check, chevronDown, chevronRight, loader, moon, sun, spinner

<Icons.home className="h-5 w-5" />
<Icons.spinner className="h-4 w-4 animate-spin" />
```

Add new icons to `src/components/icons.tsx`:
```tsx
import { Bell } from 'lucide-react';
export const Icons = {
  // ... existing
  bell: Bell,
};
```

## Toast Notifications

```tsx
import { toast } from 'sonner';

toast.success('Saved!');
toast.error('Failed to save');
toast.info('Processing...');
```

## Do NOT

- **Duplicate providers** - ThemeProvider and Toaster are in app.tsx
- **Use raw hex/rgb colors** - Use theme CSS variables via Tailwind
- **Create duplicate cn()** - Import from `@/lib/utils`
- **Modify main.tsx** - Entry point is configured
- **Hardcode dark/light** - Use theme-aware classes

## Do

- **Start in src/app.tsx** - Main entry for your app logic
- **Use existing UI components** - Check src/components/ui/ first
- **Use cn() for conditional classes** - `cn('base', condition && 'extra')`
- **Keep components small** - Extract to separate files at ~100 lines
- **Use React Router** - Already configured, just add routes
