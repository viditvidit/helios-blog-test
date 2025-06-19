import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Breadcrumbs from '../components/Breadcrumbs';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Breadcrumbs />
      <main>
        <h1>Welcome to the Blog</h1>
        <p>Here you will find our latest blog posts.</p>
        {/* Placeholder for test blogs */}
      </main>
    </div>
  );
};

export default HomePage;