import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import BlogDetail from './pages/BlogDetail';
import { BlogProvider } from './utils/BlogContext';
import DashBoardAdmin from './pages/DashBoardAdmin';
// ... otros componentes

function App() {
  return (
    <BlogProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/dashboard-admin" element={<DashBoardAdmin />} />
        {/* ... otras rutas */}
      </Routes>
      <Footer />
    </Router>
    </BlogProvider>
  );
}

export default App;