import React from 'react';

export default function Footer() {
  return (
    <footer className="ft">
      <p>
        Dashboard de Responsabilidad Social Corporativa — Microsoft Corporation
      </p>
      <p style={{ marginTop: 4 }}>
        Datos extraídos del{' '}
        <a
          href="https://www.microsoft.com/en-us/corporate-responsibility/sustainability/report"
          target="_blank"
          rel="noopener noreferrer"
        >
          Microsoft 2025 Environmental Sustainability Report
        </a>{' '}
        y fuentes oficiales.
      </p>
      <p style={{ marginTop: 8, fontSize: 12 }}>
        Proyecto académico — Materia: Ética y Responsabilidad Social
      </p>
    </footer>
  );
}
