import React from 'react';
import { Target, Eye, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import { planningData } from '../data/microsoftData';

const badgeMap = {
  achieved: { cls: 'bdg-g', label: 'Logrado' },
  'on-track': { cls: 'bdg-b', label: 'En camino' },
  'in-progress': { cls: 'bdg-y', label: 'En progreso' },
};

const fillStyle = {
  achieved: { width: '100%', bg: 'linear-gradient(90deg, #00BC70, #50E6FF)' },
  'on-track': { width: '70%', bg: 'linear-gradient(90deg, #0078D4, #50E6FF)' },
  'in-progress': { width: '45%', bg: 'linear-gradient(90deg, #FFB900, #FF8C00)' },
};

export default function Planning() {
  return (
    <div className="view">
      <div className="view-header">
        <span className="view-tag"><Target size={14} /> Planeación</span>
        <h2 className="view-title">Metas y Roadmap 2030</h2>
        <p className="view-desc">
          En 2020 Microsoft estableció compromisos ambientales ambiciosos. A mitad de camino,
          estos son los resultados y el plan hacia adelante.
        </p>
      </div>

      {/* Vision */}
      <div className="card" style={{
        textAlign: 'center', marginBottom: 26, padding: 28,
        background: 'linear-gradient(135deg, rgba(0,120,212,0.06), rgba(0,188,112,0.06))',
        border: '1px solid rgba(0,120,212,0.12)',
      }}>
        <Eye size={16} style={{ color: '#0078D4', marginBottom: 8 }} />
        <div style={{ fontSize: 10, color: '#0078D4', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 }}>
          Visión 2030
        </div>
        <div style={{
          fontSize: 'clamp(16px, 2.2vw, 24px)', fontWeight: 800, lineHeight: 1.3,
          background: 'linear-gradient(135deg, #FFFFFF, #90D4FF)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          {planningData.vision}
        </div>
      </div>

      {/* Triple impact */}
      <div className="g3" style={{ marginBottom: 26 }}>
        {planningData.tripleImpact.map((imp, i) => (
          <div className="card" key={i}>
            <div style={{ color: i === 0 ? '#0078D4' : i === 1 ? '#00BC70' : '#50E6FF', marginBottom: 8 }}>
              {i === 0 ? <CheckCircle size={20} /> : i === 1 ? <ArrowRight size={20} /> : <Clock size={20} />}
            </div>
            <div className="card-title">{imp}</div>
          </div>
        ))}
      </div>

      {/* Goals progress */}
      <div className="sh"><Target size={16} /> Metas y progreso</div>
      {planningData.goals.map((g) => {
        const badge = badgeMap[g.status];
        const fill = fillStyle[g.status];
        return (
          <div className="pg" key={g.area}>
            <div className="pg-head">
              <span className="pg-lbl">{g.area}</span>
              <span className={`bdg ${badge.cls}`}>{badge.label}</span>
            </div>
            <div style={{ fontSize: 11, color: '#4A4A58', marginBottom: 5 }}>{g.target}</div>
            <div className="pg-track">
              <div className="pg-fill" style={{ width: fill.width, background: fill.bg }} />
            </div>
            <div style={{ fontSize: 11, color: '#7A7A8A', marginTop: 4 }}>{g.progress}</div>
          </div>
        );
      })}

      <div className="hr" />

      {/* Timeline */}
      <div className="cbox">
        <div className="cbox-title"><Clock size={16} /> Línea de tiempo — Hitos clave</div>
        <div className="tl">
          {planningData.milestones.map((m, i) => (
            <div className="tl-item" key={i}>
              <div className={`tl-dot ${m.year <= 2025 ? 'done' : ''}`} />
              <div className="tl-body">
                <div className="tl-year">{m.year}</div>
                <div className="tl-text">{m.event}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
