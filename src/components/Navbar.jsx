import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Shield, Award, Target, BarChart3, FileText,
} from 'lucide-react';

const icons = {
  '/': LayoutDashboard,
  '/assurance': Shield,
  '/quality': Award,
  '/planning': Target,
  '/management': BarChart3,
  '/conclusions': FileText,
};

export default function Navbar({ views }) {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="sidebar-brand" style={{ textDecoration: 'none' }}>
        <div className="sidebar-brand-icon">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="1" width="6" height="6" rx="1" fill="white" />
            <rect x="9" y="1" width="6" height="6" rx="1" fill="white" />
            <rect x="1" y="9" width="6" height="6" rx="1" fill="white" />
            <rect x="9" y="9" width="6" height="6" rx="1" fill="white" />
          </svg>
        </div>
        <div>
          <div className="sidebar-brand-name">Microsoft</div>
          <div className="sidebar-brand-sub">RSC Dashboard</div>
        </div>
      </NavLink>

      <nav className="sidebar-nav">
        {views.map(({ path, label }) => {
          const Icon = icons[path];
          return (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `sidebar-btn${isActive ? ' active' : ''}`
              }
              style={{ textDecoration: 'none' }}
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-footer-text">
          Datos del Microsoft 2025 Environmental Sustainability Report
        </div>
      </div>
    </aside>
  );
}
