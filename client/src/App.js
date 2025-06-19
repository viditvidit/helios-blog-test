import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;