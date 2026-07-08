import React from 'react';
import { TrendingUp, Users, TreePine, Zap, Droplets, DollarSign } from 'lucide-react';

const stats = [
  { val: '$245.1B', label: 'Ingresos FY24', icon: DollarSign, color: '#0078D4' },
  { val: '228K+', label: 'Empleados', icon: Users, color: '#8378DE' },
  { val: '15,849', label: 'Acres protegidos', icon: TreePine, color: '#50E6FF' },
  { val: '34 GW', label: 'Energía renovable', icon: Zap, color: '#FFB900' },
  { val: '50M m³', label: 'Agua repuesta', icon: Droplets, color: '#00BC70' },
  { val: '$793M', label: 'Climate Fund', icon: TrendingUp, color: '#E74856' },
];

export default function Hero() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background effects */}
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 50%, rgba(0,120,212,0.06) 0%, transparent 60%)',
        top: '50%', left: '40%', transform: 'translate(-50%,-50%)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 450, height: 450, borderRadius: '50%',
        background: 'radial-gradient(circle at 70% 50%, rgba(0,188,112,0.04) 0%, transparent 60%)',
        bottom: '5%', right: '5%', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, textAlign: 'center' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '5px 14px', background: 'rgba(0,120,212,0.08)',
          border: '1px solid rgba(0,120,212,0.2)', borderRadius: 100,
          fontSize: 11, fontWeight: 500, color: '#0078D4', marginBottom: 22,
        }}>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="3" fill="#00BC70" opacity="0.8" />
            <circle cx="4" cy="4" r="1.5" fill="#00BC70" />
          </svg>
          Datos reales · Reporte 2025
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 800,
          lineHeight: 1.05, marginBottom: 14, letterSpacing: '-1px',
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #90D4FF 50%, #0078D4 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Sistema de Aseguramiento
          </span>
          <br />
          de{' '}
          <span style={{
            background: 'linear-gradient(135deg, #0078D4 0%, #00BC70 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Responsabilidad Social
          </span>
        </h1>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(13px, 1.3vw, 16px)', color: '#7A7A8A',
          marginBottom: 36, lineHeight: 1.7, maxWidth: 540,
          marginLeft: 'auto', marginRight: 'auto',
        }}>
          Análisis completo del marco de RSC de Microsoft basado en
          reportes oficiales auditados por Deloitte, estándares GRI/SASB/TCFD
          y datos verificados de sostenibilidad.
        </p>

        {/* Stats Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10,
          maxWidth: 600, margin: '0 auto',
        }}>
          {stats.map((s) => (
            <div key={s.label} style={{
              background: '#111115', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 10, padding: '14px 10px', textAlign: 'center',
              transition: 'all 0.3s ease',
            }}>
              <s.icon size={16} style={{ color: s.color, marginBottom: 6 }} />
              <div style={{ fontSize: 20, fontWeight: 700, color: '#E8E8EA', lineHeight: 1.2 }}>
                {s.val}
              </div>
              <div style={{ fontSize: 10, color: '#4A4A58', marginTop: 3, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
