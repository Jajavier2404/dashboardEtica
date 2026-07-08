import React from 'react';
import { Award, Search, Target } from 'lucide-react';
import { qualityData } from '../data/microsoftData';

export default function QualityStandards() {
  return (
    <div className="view">
      <div className="view-header">
        <span className="view-tag"><Award size={14} /> Calidad</span>
        <h2 className="view-title">Estándares y Certificaciones</h2>
        <p className="view-desc">
          Microsoft alinea sus reportes de RSC con los estándares de calidad más rigurosos,
          con verificación externa independiente y procesos de mejora continua.
        </p>
      </div>

      <div className="g3" style={{ marginBottom: 26 }}>
        {qualityData.certifications.map((cert) => (
          <div className="card" key={cert.name}>
            <Award size={22} style={{ color: '#00BC70', marginBottom: 10 }} />
            <div className="card-title">{cert.name}</div>
            <div style={{ fontSize: 10, color: '#00BC70', fontWeight: 600, marginBottom: 5 }}>
              {cert.scope}
            </div>
            <div className="card-text">{cert.description}</div>
          </div>
        ))}
      </div>

      <div className="cbox">
        <div className="cbox-title"><Search size={16} /> Proceso de Verificación de Datos</div>
        <div className="g2">
          {qualityData.dataVerificationProcess.map((step, i) => (
            <div className="step" key={i}>
              <div className="step-n">{i + 1}</div>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>{step}</span>
            </div>
          ))}
        </div>
        <div className="cbox-note">
          Estos procesos garantizan que los datos publicados sean precisos, comparables
          y estén sujetos a revisión independiente por Deloitte.
        </div>
      </div>

      <div className="hr" />

      <div className="ibox">
        <span className="ibox-icon"><Target size={18} /></span>
        <div className="ibox-text">
          <strong>Evaluación de Materialidad:</strong> Microsoft evalúa los temas ESG más relevantes
          para su negocio y stakeholders: emisiones de carbono, consumo de agua, residuos,
          derechos humanos, privacidad, IA responsable, ciberseguridad y cadena de suministro,
          siguiendo los estándares GRI y SASB.
        </div>
      </div>
    </div>
  );
}
