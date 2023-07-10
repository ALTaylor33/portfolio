import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AboutMe from './AboutMe';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import NotFound from './NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;