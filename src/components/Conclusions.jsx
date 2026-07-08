import React from 'react';
import {
  CheckCircle, AlertTriangle, Target, MessageSquare, GraduationCap, ExternalLink,
} from 'lucide-react';
import { conclusionsData } from '../data/microsoftData';

export default function Conclusions() {
  return (
    <div className="view">
      <div className="view-header">
        <span className="view-tag"><MessageSquare size={14} /> Conclusiones</span>
        <h2 className="view-title">Análisis y Aprendizajes</h2>
        <p className="view-desc">
          Síntesis del sistema de aseguramiento de RSC de Microsoft:
          fortalezas, desafíos y recomendaciones.
        </p>
      </div>

      <div className="g2" style={{ marginBottom: 22 }}>
        <div className="cc">
          <h3 style={{ color: '#00BC70' }}><CheckCircle size={18} /> Fortalezas</h3>
          {conclusionsData.strengths.map((s, i) => (
            <div className="ci ci-g" key={i}>{s}</div>
          ))}
        </div>
        <div className="cc">
          <h3 style={{ color: '#FFB900' }}><AlertTriangle size={18} /> Desafíos</h3>
          {conclusionsData.challenges.map((c, i) => (
            <div className="ci ci-y" key={i}>{c}</div>
          ))}
        </div>
      </div>

      <div className="cc" style={{ marginBottom: 22 }}>
        <h3 style={{ color: '#0078D4' }}><Target size={18} /> Recomendaciones</h3>
        <div className="g2">
          {conclusionsData.recommendations.map((r, i) => (
            <div className="ci ci-b" key={i}>{r}</div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 22 }}>
        <div className="sh"><MessageSquare size={16} /> Mensaje Final</div>
        <div className="final">{conclusionsData.finalMessage}</div>
      </div>

      <div className="ibox" style={{ borderColor: 'rgba(0,188,112,0.2)', background: 'rgba(0,188,112,0.03)' }}>
        <span className="ibox-icon"><GraduationCap size={18} style={{ color: '#00BC70' }} /></span>
        <div className="ibox-text">
          <strong>Reflexión como estudiante:</strong><br />
          {conclusionsData.studentConclusion}
        </div>
      </div>

      {/* Sources */}
      <div style={{ marginTop: 36 }}>
        <h3 style={{ fontSize: 12, fontWeight: 600, marginBottom: 10, color: '#4A4A58', textTransform: 'uppercase', letterSpacing: 1 }}>
          Fuentes consultadas
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 11, color: '#4A4A58' }}>
          <span>
            <ExternalLink size={10} style={{ marginRight: 4 }} />
            <a href="https://www.microsoft.com/en-us/corporate-responsibility/sustainability/report" target="_blank" rel="noopener noreferrer" style={{ color: '#0078D4' }}>Microsoft 2025 Environmental Sustainability Report</a>
          </span>
          <span>
            <ExternalLink size={10} style={{ marginRight: 4 }} />
            <a href="https://www.microsoft.com/en-us/corporate-responsibility/reports-hub" target="_blank" rel="noopener noreferrer" style={{ color: '#0078D4' }}>Microsoft Reports Hub</a>
          </span>
          <span>
            <ExternalLink size={10} style={{ marginRight: 4 }} />
            <a href="https://www.microsoft.com/en-us/corporate-responsibility/reporting-governance" target="_blank" rel="noopener noreferrer" style={{ color: '#0078D4' }}>Microsoft Reporting & Governance</a>
          </span>
          <span>
            <ExternalLink size={10} style={{ marginRight: 4 }} />
            <a href="https://www.microsoft.com/en-us/investor/corporate-governance/overview" target="_blank" rel="noopener noreferrer" style={{ color: '#0078D4' }}>Microsoft Corporate Governance</a>
          </span>
          <span>
            <ExternalLink size={10} style={{ marginRight: 4 }} />
            <a href="https://sustainabilitymag.com/articles/microsofts-csr-blueprint-technology-with-a-purpose" target="_blank" rel="noopener noreferrer" style={{ color: '#0078D4' }}>Sustainability Magazine</a>
          </span>
          <span style={{ marginTop: 4 }}>* Datos FY20-FY24 con verificación limitada de Deloitte & Touche LLP.</span>
        </div>
      </div>
    </div>
  );
}
