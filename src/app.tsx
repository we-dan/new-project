import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { ThemeProvider } from '@/components/providers/theme';
import Portfolio from './pages/portfolio';
import ProjectDetail from './pages/project-detail';
import About from './pages/about';
import Contact from './pages/contact';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="app-theme">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}