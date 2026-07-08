import React from 'react';
import { Shield, Users, FileText, CheckCircle, Lightbulb, Building2, ScrollText } from 'lucide-react';
import { governanceData } from '../data/microsoftData';

export default function AssuranceSystem() {
  return (
    <div className="view">
      <div className="view-header">
        <span className="view-tag"><Shield size={14} /> Sistema de Aseguramiento</span>
        <h2 className="view-title">Gobernanza y Auditoría</h2>
        <p className="view-desc">
          Mecanismos de control, supervisión del Board, verificación externa independiente
          y transparencia en reportes bajo estándares internacionales.
        </p>
      </div>

      {/* Governance chain */}
      <div className="card" style={{ marginBottom: 18, padding: 28 }}>
        <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 18, color: '#4A4A58', textTransform: 'uppercase', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Building2 size={16} /> Estructura de Liderazgo
        </div>
        <div className="gov-chain">
          {governanceData.leadershipStructure.map((node, i) => (
            <React.Fragment key={i}>
              <div className="gov-node">
                <div className="gov-lvl">{node.level}</div>
                <div className="gov-name">{node.person}</div>
                <div className="gov-desc">{node.role}</div>
              </div>
              {i < governanceData.leadershipStructure.length - 1 && <div className="gov-line" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="g2">
        <div className="card">
          <Building2 size={22} style={{ color: '#8378DE', marginBottom: 10 }} />
          <div className="card-title">Environmental, Social & Public Policy Committee</div>
          <div className="card-text">{governanceData.boardCommittee.responsibility}</div>
        </div>

        <div className="card">
          <CheckCircle size={22} style={{ color: '#0078D4', marginBottom: 10 }} />
          <div className="card-title">Aseguramiento Externo</div>
          <div className="card-text">
            <strong style={{ color: '#E8E8EA' }}>Proveedor:</strong> {governanceData.externalAssurance.provider}
          </div>
          <div className="card-text" style={{ marginTop: 5 }}>
            <strong style={{ color: '#E8E8EA' }}>Alcance:</strong> {governanceData.externalAssurance.scope}
          </div>
          <div className="card-text" style={{ marginTop: 6, fontSize: 11, fontStyle: 'italic', color: '#4A4A58' }}>
            {governanceData.externalAssurance.statement}
          </div>
        </div>

        <div className="card">
          <FileText size={22} style={{ color: '#00BC70', marginBottom: 10 }} />
          <div className="card-title">Frameworks de Reporte</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 8 }}>
            {governanceData.reportingFrameworks.map((fw) => (
              <span className="tag" key={fw}>{fw}</span>
            ))}
          </div>
        </div>

        <div className="card">
          <ScrollText size={22} style={{ color: '#FFB900', marginBottom: 10 }} />
          <div className="card-title">Políticas de Cumplimiento</div>
          <ul style={{ paddingLeft: 14, marginTop: 6 }}>
            {governanceData.policies.map((p) => (
              <li key={p} style={{ fontSize: 12, color: '#7A7A8A', marginBottom: 5, lineHeight: 1.5 }}>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hr" />

      <div className="ibox">
        <span className="ibox-icon"><Lightbulb size={18} /></span>
        <div className="ibox-text">
          <strong>¿Qué es un Sistema de Aseguramiento de RSC?</strong><br />
          Es el conjunto de mecanismos de gobierno, políticas, estándares de reporte y
          verificación externa que garantizan que una empresa cumple sus compromisos de
          responsabilidad social. En Microsoft: supervisión del Board, auditoría independiente
          (Deloitte), reportes GRI/SASB/TCFD y un CSO que reporta al Presidente.
        </div>
      </div>
    </div>
  );
}
