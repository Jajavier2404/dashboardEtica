import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AssuranceSystem from './components/AssuranceSystem';
import QualityStandards from './components/QualityStandards';
import Planning from './components/Planning';
import Management from './components/Management';
import Conclusions from './components/Conclusions';

const views = [
  { path: '/', label: 'Inicio', Component: Hero },
  { path: '/assurance', label: 'Aseguramiento', Component: AssuranceSystem },
  { path: '/quality', label: 'Calidad', Component: QualityStandards },
  { path: '/planning', label: 'Planeación', Component: Planning },
  { path: '/management', label: 'Gestión', Component: Management },
  { path: '/conclusions', label: 'Conclusiones', Component: Conclusions },
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout views={views} />}>
          {views.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
