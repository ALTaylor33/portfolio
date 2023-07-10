import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRouter'; // Updated import statement
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<AppRoutes />} /> // Updated component name
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
