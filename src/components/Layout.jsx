import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ views }) {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <main style={{
        flex: 1,
        height: '100vh',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          overflowY: 'auto',
        }}>
          <Outlet />
          <Footer />
        </div>
      </main>
      <Navbar views={views} />
    </div>
  );
}
