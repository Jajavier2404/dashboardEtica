import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Legend, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
} from 'recharts';
import {
  Globe, Droplets, Recycle, TreePine, Users, Info, TrendingDown, Leaf, Wind,
} from 'lucide-react';
import {
  carbonData, waterReplenishment, wasteDiversion, packagingRecyclability,
  carbonRemovals, landProtection, renewableEnergy, socialImpact,
} from '../data/microsoftData';

// ---------- Custom tooltip ----------
const CTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: '#18181E', border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 8, padding: '8px 12px', fontSize: 11, color: '#fff',
    }}>
      <div style={{ fontWeight: 600, marginBottom: 3 }}>{label}</div>
      {payload.map((p) => (
        <div key={p.name} style={{ color: p.color, marginTop: 1 }}>
          {p.name}: {typeof p.value === 'number' ? p.value.toLocaleString('es-ES') : p.value}
        </div>
      ))}
    </div>
  );
};

// ---------- Section heading ----------
const SectionH = ({ icon: Icon, label, color }) => (
  <div className="sh" style={{ color, marginTop: 0 }}>
    <Icon size={18} /> {label}
  </div>
);

// ============================================================
export default function Management() {
  return (
    <div className="view">
      <div className="view-header">
        <span className="view-tag"><Globe size={14} /> Gestión</span>
        <h2 className="view-title">Indicadores de Desempeño</h2>
        <p className="view-desc">
          Datos reales del Microsoft 2025 Environmental Sustainability Report con
          verificación independiente de Deloitte & Touche LLP.
        </p>
      </div>

      {/* ============================================================ */}
      {/* 1. CARBON — EMISIONES */}
      {/* ============================================================ */}
      <SectionH icon={TrendingDown} label="1. Carbono — Huella de Emisiones" color="#0078D4" />
      <p style={{ fontSize: 12, color: '#4A4A58', marginBottom: 14, lineHeight: 1.6 }}>
        Este gráfico muestra las EMISIONES de Microsoft (lo que emite a la atmósfera),
        divididas por alcance según el GHG Protocol. Scope 3 (cadena de valor) representa
        más del 97% del total.
      </p>

      <div className="g2" style={{ marginBottom: 24 }}>
        <div className="cbox">
          <div className="cbox-title">
            <BarChart size={14} /> Emisiones GHG por alcance (mtCO₂e)
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={carbonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
              <XAxis dataKey="year" stroke="#4A4A58" fontSize={11} />
              <YAxis stroke="#4A4A58" fontSize={11} tickFormatter={(v) => `${(v / 1e6).toFixed(1)}M`} />
              <Tooltip content={<CTip />} />
              <Legend
                wrapperStyle={{ fontSize: 10 }}
                formatter={(val) => {
                  const map = { 'scope1': 'Scope 1 (directas)', 'scope2': 'Scope 2 (electricidad)', 'scope3': 'Scope 3 (cadena valor)' };
                  return <span style={{ color: '#fff' }}>{map[val] || val}</span>;
                }}
              />
              <Bar dataKey="scope1" stackId="a" fill="#0078D4" />
              <Bar dataKey="scope2" stackId="a" fill="#50E6FF" />
              <Bar dataKey="scope3" stackId="a" fill="#FFB900" />
            </BarChart>
          </ResponsiveContainer>
          <div className="cbox-note">
            Las emisiones totales FY24 fueron ~15.5M mtCO₂e. Scope 1 y 2 cayeron 29.9% desde baseline 2020.
            Scope 3 subió 26% desde baseline 2020 impulsado por crecimiento de datacenters IA/cloud.
          </div>
          <div className="cbox-source">Microsoft 2025 Environmental Sustainability Report</div>
        </div>

        <div className="cbox">
          <div className="cbox-title">
            <Wind size={14} /> Remociones de carbono CONTRATADAS (FY24)
          </div>
          <p style={{ fontSize: 11, color: '#4A4A58', marginBottom: 8 }}>
            Distinto al gráfico anterior. Esto es lo que Microsoft ha CONTRATADO para
            remover carbono de la atmósfera, no lo que emite.
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={carbonRemovals}
                cx="50%" cy="50%"
                innerRadius={50} outerRadius={80}
                paddingAngle={3}
                dataKey="value"
                label={({ category, value }) => `${category}: ${(value / 1e6).toFixed(1)}M`}
                labelLine={{ stroke: '#4A4A58', strokeWidth: 1 }}
              >
                {carbonRemovals.map((_, i) => (
                  <Cell key={i} fill={['#0078D4', '#00BC70', '#50E6FF'][i]} />
                ))}
              </Pie>
              <Tooltip content={<CTip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="cbox-note">
            Total contratado: 21.9M toneladas métricas. Esto incluye créditos para
            neutralidad del año, meta 2030 y remociones post-2030.
          </div>
          <div className="cbox-source">Microsoft 2025 Environmental Sustainability Report</div>
        </div>
      </div>

      <div className="g4" style={{ marginBottom: 32 }}>
        <div className="kpi">
          <div className="kpi-lbl">Energía renovable contratada</div>
          <div className="kpi-val" style={{ color: '#0078D4' }}>{renewableEnergy.gwContracted} GW</div>
          <div className="kpi-desc">En {renewableEnergy.countriesPresent} países</div>
        </div>
        <div className="kpi">
          <div className="kpi-lbl">Inv. en renovables (Mayo 2024)</div>
          <div className="kpi-val" style={{ color: '#0078D4' }}>$10B</div>
          <div className="kpi-desc">Para 10.5 GW adicionales</div>
        </div>
        <div className="kpi">
          <div className="kpi-lbl">Reducción emisiones directas</div>
          <div className="kpi-val" style={{ color: '#00BC70' }}>-29.9%</div>
          <div className="kpi-desc">Scope 1 y 2 desde baseline 2020</div>
        </div>
        <div className="kpi">
          <div className="kpi-lbl">Aumento emisiones totales</div>
          <div className="kpi-val" style={{ color: '#FFB900' }}>+23.4%</div>
          <div className="kpi-desc">Vs baseline 2020 (crecimiento)</div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. AGUA */}
      {/* ============================================================ */}
      <div className="hr" />
      <SectionH icon={Droplets} label="2. Agua — Reposición Hídrica" color="#00BC70" />
      <p style={{ fontSize: 12, color: '#4A4A58', marginBottom: 14, lineHeight: 1.6 }}>
        Microsoft se comprometió a reponer más agua de la que consume para 2030.
        La reposición creció de forma exponencial: de 2.84M m³ en FY20 a 50.03M m³ en FY24.
      </p>

      <div className="g2" style={{ marginBottom: 24 }}>
        <div className="cbox">
          <div className="cbox-title">
            <AreaChart size={14} /> Volumen de agua repuesta contratado (m³)
          </div>
          <ResponsiveContainer width="100%" height={270}>
            <AreaChart data={waterReplenishment}>
              <defs>
                <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00BC70" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#00BC70" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
              <XAxis dataKey="year" stroke="#4A4A58" fontSize={11} />
              <YAxis stroke="#4A4A58" fontSize={11} tickFormatter={(v) => `${v}M`} />
              <Tooltip content={<CTip />} />
              <Area type="monotone" dataKey="volume" stroke="#00BC70" fill="url(#wg)" strokeWidth={2.5} dot={{ r: 4 }} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="cbox-note">
            Crecimiento 17x en 4 años: de 2.84M (FY20) a 50.03M m³ (FY24).
          </div>
          <div className="cbox-source">Microsoft 2025 Environmental Sustainability Report</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div className="kpi">
            <div className="kpi-lbl">Personas con acceso a agua limpia</div>
            <div className="kpi-val" style={{ color: '#00BC70' }}>1.5M</div>
            <div className="kpi-desc">Meta de provisión y saneamiento cumplida</div>
          </div>
          <div className="kpi">
            <div className="kpi-lbl">Reducción agua potable (Quincy, WA)</div>
            <div className="kpi-val" style={{ color: '#00BC70' }}>97%</div>
            <div className="kpi-desc">Planta de reúso de agua de refrigeración</div>
          </div>
          <div className="kpi">
            <div className="kpi-lbl">Inversión en resiliencia hídrica</div>
            <div className="kpi-val" style={{ color: '#00BC70' }}>$25M</div>
            <div className="kpi-desc">Water Equity & Climate Resilience Fund</div>
          </div>
          <div className="kpi">
            <div className="kpi-lbl">Agua para comunidad (Quincy/año)</div>
            <div className="kpi-val" style={{ color: '#00BC70' }}>1.5M m³</div>
            <div className="kpi-desc">Agua potable para consumo comunitario</div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. RESIDUOS */}
      {/* ============================================================ */}
      <div className="hr" />
      <SectionH icon={Recycle} label="3. Residuos — Economía Circular" color="#FFB900" />
      <p style={{ fontSize: 12, color: '#4A4A58', marginBottom: 14, lineHeight: 1.6 }}>
        Microsoft avanza hacia zero waste para 2030 con un enfoque de economía circular:
        reducir, reusar y recuperar materiales en toda la cadena de valor.
      </p>

      <div className="g2" style={{ marginBottom: 24 }}>
        <div className="cbox">
          <div className="cbox-title">
            <BarChart size={14} /> Desvío de residuos operacionales (%)
          </div>
          <ResponsiveContainer width="100%" height={270}>
            <BarChart data={wasteDiversion} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
              <XAxis type="number" domain={[0, 100]} stroke="#4A4A58" fontSize={11} tickFormatter={(v) => `${v}%`} />
              <YAxis dataKey="year" type="category" stroke="#4A4A58" fontSize={11} width={80} />
              <Tooltip content={<CTip />} />
              <Legend wrapperStyle={{ fontSize: 10 }} />
              <Bar dataKey="diverted" name="Desviado" stackId="a" fill="#FFB900" />
              <Bar dataKey="nonDiverted" name="No desviado" stackId="a" fill="rgba(255,255,255,0.05)" />
            </BarChart>
          </ResponsiveContainer>
          <div className="cbox-note">
            Meta 90% — alcanzaron 88.1% en FY24. 26,000 toneladas desviadas de vertederos.
          </div>
          <div className="cbox-source">Microsoft 2025 Environmental Sustainability Report</div>
        </div>

        <div className="cbox">
          <div className="cbox-title">
            <LineChart size={14} /> Reciclabilidad de empaques de producto (%)
          </div>
          <ResponsiveContainer width="100%" height={270}>
            <LineChart data={packagingRecyclability}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
              <XAxis dataKey="year" stroke="#4A4A58" fontSize={11} />
              <YAxis domain={[85, 100]} stroke="#4A4A58" fontSize={11} tickFormatter={(v) => `${v}%`} />
              <Tooltip content={<CTip />} />
              <Line type="monotone" dataKey="rate" stroke="#00BC70" strokeWidth={2.5} dot={{ fill: '#00BC70', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="cbox-note">
            Meta 2030: 80%. Actual FY24: 94.8%. Meta excedida por amplio margen.
          </div>
          <div className="cbox-source">Microsoft 2025 Environmental Sustainability Report</div>
        </div>
      </div>

      <div className="g3" style={{ marginBottom: 32 }}>
        <div className="kpi">
          <div className="kpi-lbl">Servidores reutilizados/reciclados</div>
          <div className="kpi-val" style={{ color: '#00BC70' }}>90.9%</div>
          <div className="kpi-desc">Meta alcanzada un año antes de lo previsto</div>
        </div>
        <div className="kpi">
          <div className="kpi-lbl">Plásticos de un solo uso en empaques</div>
          <div className="kpi-val" style={{ color: '#00BC70' }}>2.7%</div>
          <div className="kpi-desc">Reducción progresiva desde 2020</div>
        </div>
        <div className="kpi">
          <div className="kpi-lbl">Residuos desviados de vertederos</div>
          <div className="kpi-val" style={{ color: '#FFB900' }}>26,000 tn</div>
          <div className="kpi-desc">Centros de datos propios y campus corporativos</div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. ECOSISTEMAS */}
      {/* ============================================================ */}
      <div className="hr" />
      <SectionH icon={TreePine} label="4. Ecosistemas — Protección de Tierras" color="#50E6FF" />
      <p style={{ fontSize: 12, color: '#4A4A58', marginBottom: 14, lineHeight: 1.6 }}>
        Microsoft se comprometió a proteger más tierra de la que usa para 2025.
        La meta fue superada en más del 30%, con 15,849 acres permanentemente protegidos.
      </p>

      <div className="g2" style={{ marginBottom: 24 }}>
        <div className="cbox">
          <div className="cbox-title">
            <BarChart size={14} /> Protección de tierras (acres)
          </div>
          <ResponsiveContainer width="100%" height={270}>
            <BarChart
              data={[
                { name: 'Contratadas para protección', value: landProtection.totalContracted },
                { name: 'Permanentemente protegidas', value: landProtection.permanentlyProtected },
                { name: 'Huella operacional Microsoft', value: landProtection.microsoftFootprint },
              ]}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
              <XAxis type="number" stroke="#4A4A58" fontSize={11} />
              <YAxis dataKey="name" type="category" stroke="#4A4A58" fontSize={11} width={150} />
              <Tooltip content={<CTip />} />
              <Bar dataKey="value" fill="#50E6FF" radius={[0, 3, 3, 0]} label={{
                position: 'right', fontSize: 11, fill: '#7A7A8A',
                formatter: (v) => `${v.toLocaleString('es-ES')} acres`
              }} />
            </BarChart>
          </ResponsiveContainer>
          <div className="cbox-note">
            Meta 2025: 11,000 acres. Lograron 15,849 (excedida en 30%+).
          </div>
          <div className="cbox-source">Microsoft 2025 Environmental Sustainability Report</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div className="kpi">
            <div className="kpi-lbl">Árboles plantados</div>
            <div className="kpi-val" style={{ color: '#50E6FF' }}>87,000</div>
            <div className="kpi-desc">9 proyectos en 8 países</div>
          </div>
          <div className="kpi">
            <div className="kpi-lbl">Tierra protegida vs usada</div>
            <div className="kpi-val" style={{ color: '#00BC70' }}>+30%</div>
            <div className="kpi-desc">Excede la huella operacional</div>
          </div>
          <div className="kpi">
            <div className="kpi-lbl">Proyecto Guacamaya</div>
            <div className="kpi-val" style={{ color: '#50E6FF' }}>80%+</div>
            <div className="kpi-desc">Precisión monitoreo Amazonía con IA</div>
          </div>
          <div className="kpi">
            <div className="kpi-lbl">Planetary Computer</div>
            <div className="kpi-val" style={{ color: '#50E6FF' }}>50+ PB</div>
            <div className="kpi-desc">Datos geoespaciales abiertos</div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 5. IMPACTO SOCIAL */}
      {/* ============================================================ */}
      <div className="hr" />
      <SectionH icon={Users} label="5. Impacto Social y Talento Verde" color="#E74856" />
      <p style={{ fontSize: 12, color: '#4A4A58', marginBottom: 14, lineHeight: 1.6 }}>
        Más allá del ambiente, Microsoft impulsa la transición hacia una economía verde
        inclusiva a través de inversión, talento y tecnología.
      </p>

      <div className="g4" style={{ marginBottom: 24 }}>
        <div className="kpi">
          <div className="kpi-lbl">Crecimiento demanda talento verde</div>
          <div className="kpi-val" style={{ color: '#E74856' }}>11.6%</div>
          <div className="kpi-desc">Vs 5.6% oferta (LinkedIn 2023-24)</div>
        </div>
        <div className="kpi">
          <div className="kpi-lbl">Tasa contratación talento verde</div>
          <div className="kpi-val" style={{ color: '#E74856' }}>54.6%</div>
          <div className="kpi-desc">Mayor que la fuerza laboral general</div>
        </div>
        <div className="kpi">
          <div className="kpi-lbl">LinkedIn Ad Grant</div>
          <div className="kpi-val" style={{ color: '#E74856' }}>$6M</div>
          <div className="kpi-desc">Publicidad gratuita para sostenibilidad</div>
        </div>
        <div className="kpi">
          <div className="kpi-lbl">Climate Innovation Fund asignado</div>
          <div className="kpi-val" style={{ color: '#E74856' }}>$793M</div>
          <div className="kpi-desc">De $1B comprometido originalmente</div>
        </div>
      </div>

      {/* Key insight */}
      <div className="hr" />
      <div className="ibox">
        <span className="ibox-icon"><Info size={18} /></span>
        <div className="ibox-text">
          <strong>Dato clave para exponer:</strong> Las emisiones Scope 3 (cadena de valor)
          representan más del 97% de la huella total de carbono. Aunque Scope 1 y 2 se redujeron
          29.9% desde baseline 2020, las emisiones indirectas siguen aumentando por la construcción de
          datacenters para IA y cloud. El mayor desafío de Microsoft es reducir emisiones
          mientras su negocio crece.
        </div>
      </div>
    </div>
  );
}
