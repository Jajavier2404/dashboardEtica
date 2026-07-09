import React from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, AreaChart, Area, BarChart,
  RadialBarChart, RadialBar,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ReferenceLine, LabelList,
} from 'recharts';
import {
  Globe, Droplets, Recycle, TreePine, Users, Info, TrendingDown, Wind, BarChart3,
} from 'lucide-react';
import {
  carbonData, waterReplenishment, wasteDiversion, packagingRecyclability,
  carbonRemovals, landProtection, renewableEnergy, socialImpact,
} from '../data/microsoftData';

const CTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: 'rgba(24, 24, 30, 0.92)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 10,
      padding: '10px 14px',
      fontSize: 11,
      color: '#fff',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      minWidth: 140,
    }}>
      <div style={{ fontWeight: 700, marginBottom: 6, fontSize: 12, color: '#E8E8EA' }}>
        {label}
      </div>
      {payload.map((p) => (
        <div key={p.name} style={{
          display: 'flex', alignItems: 'center', gap: 8, marginTop: 3,
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: p.color, flexShrink: 0,
          }} />
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>{p.name}:</span>
          <span style={{ color: '#fff', fontWeight: 600, marginLeft: 'auto' }}>
            {typeof p.value === 'number'
              ? (p.value > 10000
                ? `${(p.value / 1e6).toFixed(1)}M`
                : p.value.toLocaleString('es-ES'))
              : p.value}
          </span>
        </div>
      ))}
    </div>
  );
};

const SectionH = ({ icon: Icon, label, color }) => (
  <div className="sh anim-fade" style={{ color, marginTop: 0 }}>
    <Icon size={18} /> {label}
  </div>
);

const Gauge = ({ value, max = 100, color, label, subtitle, size = 160 }) => {
  const radius = 62;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(value / max, 1);
  const offset = circumference * (1 - progress);

  return (
    <div className="gauge-wrap anim-fade" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 16 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <filter id={`glow-${color.replace('#', '')}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx={size/2} cy={size/2} r={radius}
          fill="none" stroke="rgba(255,255,255,0.04)"
          strokeWidth={strokeWidth} />
        <circle cx={size/2} cy={size/2} r={radius}
          fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size/2} ${size/2})`}
          filter={`url(#glow-${color.replace('#', '')})`}
          className="gauge-arc" />
        <text x={size/2} y={size/2 - 8} textAnchor="middle" fill="#E8E8EA"
          fontSize={30} fontWeight={800} fontFamily="Inter, sans-serif">
          {value}%
        </text>
        <text x={size/2} y={size/2 + 14} textAnchor="middle" fill="#4A4A58"
          fontSize={10} fontFamily="Inter, sans-serif">
          Meta {max}%
        </text>
      </svg>
      <div style={{ fontSize: 12, color: '#7A7A8A', marginTop: 6, textAlign: 'center', fontWeight: 500, lineHeight: 1.3 }}>
        {label}
      </div>
      {subtitle && (
        <div style={{ fontSize: 10, color: '#4A4A58', marginTop: 2, textAlign: 'center' }}>
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default function Management() {
  const wastePct = wasteDiversion[wasteDiversion.length - 1].diverted;
  const recyclingPct = packagingRecyclability[packagingRecyclability.length - 1].rate;

  const removalsWithColors = carbonRemovals.map((d, i) => ({
    ...d, fill: ['#0078D4', '#00BC70', '#50E6FF'][i],
  }));

  const radarData = [
    { dimension: 'Carbono', actual: 60, target: 100, fullMark: 100 },
    { dimension: 'Agua', actual: 78, target: 100, fullMark: 100 },
    { dimension: 'Residuos', actual: 92, target: 100, fullMark: 100 },
    { dimension: 'Ecosistemas', actual: 100, target: 100, fullMark: 100 },
    { dimension: 'Energía', actual: 72, target: 100, fullMark: 100 },
    { dimension: 'Social', actual: 79, target: 100, fullMark: 100 },
  ];

  return (
    <div className="view">
      <div className="view-header anim-fade">
        <span className="view-tag"><Globe size={14} /> Gestión</span>
        <h2 className="view-title">Indicadores de Desempeño</h2>
        <p className="view-desc">
          Datos reales del Microsoft 2025 Environmental Sustainability Report con
          verificación independiente de Deloitte & Touche LLP.
        </p>
      </div>

      {/* ============================================================ */}
      {/* RADAR — VISTA GENERAL */}
      {/* ============================================================ */}
      <div className="cbox anim-fade anim-fade-d1" style={{ marginBottom: 32 }}>
        <div className="cbox-title">Vista general — Progreso hacia metas 2030</div>
        <p style={{ fontSize: 11, color: '#4A4A58', marginBottom: 12 }}>
          Comparación del desempeño actual versus las metas 2030 en cada dimensión de sostenibilidad.
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
            <defs>
              <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0078D4" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#50E6FF" stopOpacity={0.15} />
              </linearGradient>
            </defs>
            <PolarGrid stroke="rgba(255,255,255,0.06)" />
            <PolarAngleAxis dataKey="dimension"
              tick={{ fill: '#7A7A8A', fontSize: 11, fontFamily: 'Inter, sans-serif' }} />
            <PolarRadiusAxis angle={90} domain={[0, 100]}
              tick={{ fill: '#4A4A58', fontSize: 9 }}
              tickCount={6} />
            <Radar name="Actual" dataKey="actual"
              stroke="#0078D4" strokeWidth={2.5}
              fill="url(#radarFill)"
              dot={{ r: 4, fill: '#0078D4', stroke: '#08080C', strokeWidth: 2 }}
              animationDuration={1500} animationEasing="ease-out" />
            <Radar name="Meta 2030" dataKey="target"
              stroke="rgba(255,255,255,0.12)" strokeWidth={1.5}
              strokeDasharray="4 4"
              fill="none"
              animationDuration={1500} animationEasing="ease-out" />
            <Legend
              wrapperStyle={{ fontSize: 10, paddingTop: 8 }}
              iconType="circle"
            />
            <Tooltip content={<CTip />} />
          </RadarChart>
        </ResponsiveContainer>
        <div className="cbox-note">
          El área azul muestra el progreso estimado actual. El perímetro punteado representa la meta 2030 (100%).
        </div>
      </div>

      {/* ============================================================ */}
      {/* 1. CARBON — COMPOSEDCHART + TREEMAP */}
      {/* ============================================================ */}
      <SectionH icon={TrendingDown} label="1. Carbono — Huella de Emisiones" color="#0078D4" />
      <p style={{ fontSize: 12, color: '#4A4A58', marginBottom: 14, lineHeight: 1.6 }}>
        Las emisiones se clasifican en tres alcances (Scopes) según el GHG Protocol:
      </p>
      <div className="g3" style={{ marginBottom: 16, gap: 8 }}>
        <div className="cbox" style={{ padding: '10px 14px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#0078D4' }}>Scope 1 — Directas</div>
          <div style={{ fontSize: 10, color: '#7A7A8A', lineHeight: 1.4 }}>Emisiones que salen de fuentes que Microsoft posee o controla: gas en datacenters, combustible de vehículos, fugas de refrigerantes.</div>
        </div>
        <div className="cbox" style={{ padding: '10px 14px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#50E6FF' }}>Scope 2 — Electricidad</div>
          <div style={{ fontSize: 10, color: '#7A7A8A', lineHeight: 1.4 }}>Emisiones generadas por la electricidad que Microsoft compra. No las quema Microsoft, pero las consume.</div>
        </div>
        <div className="cbox" style={{ padding: '10px 14px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#FFB900' }}>Scope 3 — Cadena de valor</div>
          <div style={{ fontSize: 10, color: '#7A7A8A', lineHeight: 1.4 }}>Todo lo demás: proveedores, viajes de empleados, y el uso que los clientes hacen de Azure/Teams/Xbox. Representa &gt;97% del total.</div>
        </div>
      </div>

      <div className="g2" style={{ marginBottom: 24 }}>
        <div className="cbox anim-fade anim-fade-d1">
          <div className="cbox-title"><BarChart3 size={14} /> Emisiones GHG por alcance (mtCO₂e)</div>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={carbonData} animationBegin={0} animationDuration={1400} animationEasing="ease-out">
              <defs>
                <linearGradient id="cs1g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0078D4" stopOpacity={1}/><stop offset="100%" stopColor="#0078D4" stopOpacity={0.5}/></linearGradient>
                <linearGradient id="cs2g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#50E6FF" stopOpacity={1}/><stop offset="100%" stopColor="#50E6FF" stopOpacity={0.5}/></linearGradient>
                <linearGradient id="cs3g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFB900" stopOpacity={0.9}/><stop offset="100%" stopColor="#FFB900" stopOpacity={0.5}/></linearGradient>
                <linearGradient id="totalLine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E74856" stopOpacity={0.6}/>
                  <stop offset="100%" stopColor="#E74856" stopOpacity={1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
              <XAxis dataKey="year" stroke="#4A4A58" fontSize={11} />
              <YAxis stroke="#4A4A58" fontSize={11} tickFormatter={(v) => `${(v / 1e6).toFixed(1)}M`} />
              <Tooltip content={<CTip />} />
              <Legend
                wrapperStyle={{ fontSize: 10, paddingTop: 8 }}
                iconType="circle"
                formatter={(val) => {
                  const map = { 'scope1': 'Scope 1', 'scope2': 'Scope 2', 'scope3': 'Scope 3', 'total': 'Total' };
                  return <span style={{ color: '#fff' }}>{map[val] || val}</span>;
                }}
              />
              <Bar dataKey="scope1" stackId="a" fill="url(#cs1g)" radius={[2, 2, 0, 0]} />
              <Bar dataKey="scope2" stackId="a" fill="url(#cs2g)" radius={[2, 2, 0, 0]} />
              <Bar dataKey="scope3" stackId="a" fill="url(#cs3g)" radius={[2, 2, 0, 0]} />
              <Line type="monotone" dataKey="total" stroke="url(#totalLine)" strokeWidth={2.5}
                dot={{ r: 4, fill: '#E74856', stroke: '#08080C', strokeWidth: 2 }}
                activeDot={{ r: 6, fill: '#E74856', stroke: '#08080C', strokeWidth: 2 }} />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="cbox-note">
            Línea roja = emisiones totales. Scope 1 y 2 cayeron 29.9% desde FY20. Scope 3 sigue en aumento por IA/cloud.
          </div>
          <div className="cbox-source">Microsoft 2025 Environmental Sustainability Report</div>
        </div>

        <div className="cbox anim-fade anim-fade-d2">
          <div className="cbox-title"><Wind size={14} /> Remociones contratadas por tipo</div>
          <p style={{ fontSize: 11, color: '#4A4A58', marginBottom: 8 }}>
            Anillos concéntricos proporcionales al volumen contratado.
          </p>
          <ResponsiveContainer width="100%" height={270}>
            <RadialBarChart
              data={removalsWithColors}
              startAngle={90}
              endAngle={-270}
              innerRadius="15%"
              outerRadius="90%"
              barSize={45}
              animationBegin={300}
              animationDuration={1400}
              animationEasing="ease-out"
            >
              <RadialBar
                dataKey="value"
                nameKey="category"
                background={{ fill: 'rgba(255,255,255,0.03)' }}
                label={{
                  position: 'insideStart',
                  fill: '#fff',
                  fontSize: 11,
                  fontWeight: 600,
                  formatter: (val) => `${(val / 1e6).toFixed(1)}M t`,
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: 10, paddingTop: 8 }}
                iconType="circle"
              />
              <Tooltip content={<CTip />} />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="cbox-note">
            Total: 21.9M toneladas métricas. Anillo más grande = Post-2030 + Históricas (79.5% del total).
          </div>
          <div className="cbox-source">Microsoft 2025 Environmental Sustainability Report</div>
        </div>
      </div>

      <div className="g4" style={{ marginBottom: 32 }}>
        <div className="kpi anim-fade anim-fade-d1"><div className="kpi-lbl">Energía renovable contratada</div><div className="kpi-val" style={{ color: '#0078D4' }}>{renewableEnergy.gwContracted} GW</div><div className="kpi-desc">En {renewableEnergy.countriesPresent} países</div></div>
        <div className="kpi anim-fade anim-fade-d2"><div className="kpi-lbl">Inv. en renovables (Mayo 2024)</div><div className="kpi-val" style={{ color: '#0078D4' }}>$10B</div><div className="kpi-desc">Para 10.5 GW adicionales</div></div>
        <div className="kpi anim-fade anim-fade-d3"><div className="kpi-lbl">Reducción emisiones directas</div><div className="kpi-val" style={{ color: '#00BC70' }}>-29.9%</div><div className="kpi-desc">Scope 1 y 2 desde baseline 2020</div></div>
        <div className="kpi anim-fade anim-fade-d4"><div className="kpi-lbl">Aumento emisiones totales</div><div className="kpi-val" style={{ color: '#FFB900' }}>+23.4%</div><div className="kpi-desc">Vs baseline 2020 (crecimiento)</div></div>
      </div>

      {/* ============================================================ */}
      {/* 2. WATER */}
      {/* ============================================================ */}
      <div className="hr" />
      <SectionH icon={Droplets} label="2. Agua — Reposición Hídrica" color="#00BC70" />
      <p style={{ fontSize: 12, color: '#4A4A58', marginBottom: 14, lineHeight: 1.6 }}>
        Microsoft se comprometió a reponer más agua de la que consume para 2030. Crecimiento 17x en 4 años.
      </p>

      <div className="g2" style={{ marginBottom: 24 }}>
        <div className="cbox anim-fade anim-fade-d1">
          <div className="cbox-title"><AreaChart size={14} /> Volumen de agua repuesta contratado (m³)</div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={waterReplenishment} animationBegin={0} animationDuration={1400} animationEasing="ease-out">
              <defs>
                <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00BC70" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#00BC70" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
              <XAxis dataKey="year" stroke="#4A4A58" fontSize={11} />
              <YAxis stroke="#4A4A58" fontSize={11} tickFormatter={(v) => `${v}M`} />
              <Tooltip content={<CTip />} />
              <Area
                type="monotone" dataKey="volume" stroke="#00BC70"
                strokeWidth={3} fill="url(#wg)"
                dot={{ r: 5, fill: '#00BC70', stroke: '#08080C', strokeWidth: 2 }}
                activeDot={{ r: 8, fill: '#00BC70', stroke: '#08080C', strokeWidth: 2 }}
              />
              <ReferenceLine
                y={waterReplenishment[0].volume}
                stroke="rgba(255,255,255,0.08)"
                strokeDasharray="4 4"
                label={{ value: 'Baseline FY20', position: 'insideTopLeft', fontSize: 9, fill: '#4A4A58' }}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="cbox-note">
            Crecimiento 17x: de 2.84M (FY20) a 50.03M m³ (FY24). Meta: Water Positive 2030.
          </div>
          <div className="cbox-source">Microsoft 2025 Environmental Sustainability Report</div>
        </div>

        <div className="g2" style={{ gap: 10 }}>
          <div className="kpi anim-fade anim-fade-d1"><div className="kpi-lbl">Personas con acceso a agua limpia</div><div className="kpi-val" style={{ color: '#00BC70' }}>1.5M</div><div className="kpi-desc">Meta provisión y saneamiento cumplida</div></div>
          <div className="kpi anim-fade anim-fade-d2"><div className="kpi-lbl">Reducción agua potable (Quincy, WA)</div><div className="kpi-val" style={{ color: '#00BC70' }}>97%</div><div className="kpi-desc">Planta reúso agua refrigeración</div></div>
          <div className="kpi anim-fade anim-fade-d3"><div className="kpi-lbl">Inversión resiliencia hídrica</div><div className="kpi-val" style={{ color: '#00BC70' }}>$25M</div><div className="kpi-desc">Water Equity & Climate Resilience Fund</div></div>
          <div className="kpi anim-fade anim-fade-d4"><div className="kpi-lbl">Agua para comunidad (Quincy/año)</div><div className="kpi-val" style={{ color: '#00BC70' }}>1.5M m³</div><div className="kpi-desc">Agua potable para consumo comunitario</div></div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. WASTE — GAUGES */}
      {/* ============================================================ */}
      <div className="hr" />
      <SectionH icon={Recycle} label="3. Residuos — Economía Circular" color="#FFB900" />
      <p style={{ fontSize: 12, color: '#4A4A58', marginBottom: 14, lineHeight: 1.6 }}>
        Microsoft avanza hacia zero waste para 2030. Tres indicadores clave con progreso circular.
      </p>

      <div className="g3" style={{ marginBottom: 24 }}>
        <div className="cbox anim-fade anim-fade-d1" style={{ textAlign: 'center' }}>
          <Gauge value={wastePct} max={90} color="#FFB900"
            label="Desvío de residuos operacionales"
            subtitle={`${wasteDiversion[wasteDiversion.length-1].nonDiverted}% no desviado`} />
        </div>
        <div className="cbox anim-fade anim-fade-d2" style={{ textAlign: 'center' }}>
          <Gauge value={recyclingPct} max={100} color="#00BC70"
            label="Reciclabilidad de empaques"
            subtitle="Meta 2030: 80% — excedida en 14.8%" />
        </div>
        <div className="cbox anim-fade anim-fade-d3" style={{ textAlign: 'center' }}>
          <Gauge value={90.9} max={100} color="#0078D4"
            label="Servidores reutilizados/reciclados"
            subtitle="Meta alcanzada un año antes" />
        </div>
      </div>

      <div className="g3" style={{ marginBottom: 32 }}>
        <div className="kpi anim-fade anim-fade-d1"><div className="kpi-lbl">Residuos desviados de vertederos</div><div className="kpi-val" style={{ color: '#FFB900' }}>26,000 tn</div><div className="kpi-desc">Centros de datos y campus</div></div>
        <div className="kpi anim-fade anim-fade-d2"><div className="kpi-lbl">Plásticos un solo uso en empaques</div><div className="kpi-val" style={{ color: '#00BC70' }}>2.7%</div><div className="kpi-desc">Reducción progresiva desde 2020</div></div>
        <div className="kpi anim-fade anim-fade-d3"><div className="kpi-lbl">Meta 2030 Zero Waste</div><div className="kpi-val" style={{ color: '#00BC70' }}>88.1%</div><div className="kpi-desc">En camino hacia 90%</div></div>
      </div>

      {/* ============================================================ */}
      {/* 4. ECOSYSTEMS */}
      {/* ============================================================ */}
      <div className="hr" />
      <SectionH icon={TreePine} label="4. Ecosistemas — Protección de Tierras" color="#50E6FF" />
      <p style={{ fontSize: 12, color: '#4A4A58', marginBottom: 14, lineHeight: 1.6 }}>
        Microsoft se comprometió a proteger más tierra de la que usa para 2025. Meta superada en +30%.
      </p>

      <div className="g2" style={{ marginBottom: 24 }}>
        <div className="cbox anim-fade anim-fade-d1">
          <div className="cbox-title"><BarChart3 size={14} /> Protección de tierras (acres)</div>
          <ResponsiveContainer width="100%" height={270}>
            <BarChart
              data={[
                { name: 'Contratadas\npara protección', value: landProtection.totalContracted },
                { name: 'Permanentemente\nprotegidas', value: landProtection.permanentlyProtected },
                { name: 'Huella operacional\nMicrosoft', value: landProtection.microsoftFootprint },
              ]}
              layout="vertical"
              animationBegin={0}
              animationDuration={1200}
              animationEasing="ease-out"
            >
              <defs>
                <linearGradient id="eco" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#50E6FF" stopOpacity={1}/><stop offset="100%" stopColor="#50E6FF" stopOpacity={0.6}/></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" horizontal={false} />
              <XAxis type="number" stroke="#4A4A58" fontSize={11} />
              <YAxis dataKey="name" type="category" stroke="#4A4A58" fontSize={10} width={140} />
              <Tooltip content={<CTip />} />
              <ReferenceLine x={landProtection.microsoftFootprint} stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" label={{ value: 'Huella MS', position: 'top', fontSize: 9, fill: '#4A4A58' }} />
              <Bar dataKey="value" fill="url(#eco)" radius={[0, 4, 4, 0]}>
                <LabelList position="right" style={{ fill: '#7A7A8A', fontSize: 10 }}
                  formatter={(v) => `${v.toLocaleString('es-ES')} acres`} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="cbox-note">Meta 2025: 11,000 acres. Lograron 15,849 (excedida en 30%+).</div>
          <div className="cbox-source">Microsoft 2025 Environmental Sustainability Report</div>
        </div>

        <div className="g2" style={{ gap: 10 }}>
          <div className="kpi anim-fade anim-fade-d1"><div className="kpi-lbl">Árboles plantados</div><div className="kpi-val" style={{ color: '#50E6FF' }}>87,000</div><div className="kpi-desc">9 proyectos en 8 países</div></div>
          <div className="kpi anim-fade anim-fade-d2"><div className="kpi-lbl">Tierra protegida vs usada</div><div className="kpi-val" style={{ color: '#00BC70' }}>+30%</div><div className="kpi-desc">Excede la huella operacional</div></div>
          <div className="kpi anim-fade anim-fade-d3"><div className="kpi-lbl">Proyecto Guacamaya</div><div className="kpi-val" style={{ color: '#50E6FF' }}>80%+</div><div className="kpi-desc">Precisión monitoreo Amazonía con IA</div></div>
          <div className="kpi anim-fade anim-fade-d4"><div className="kpi-lbl">Planetary Computer</div><div className="kpi-val" style={{ color: '#50E6FF' }}>50+ PB</div><div className="kpi-desc">Datos geoespaciales abiertos</div></div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 5. SOCIAL IMPACT */}
      {/* ============================================================ */}
      <div className="hr" />
      <SectionH icon={Users} label="5. Impacto Social y Talento Verde" color="#E74856" />
      <p style={{ fontSize: 12, color: '#4A4A58', marginBottom: 14, lineHeight: 1.6 }}>
        Microsoft impulsa la transición hacia una economía verde inclusiva.
      </p>

      <div className="g4" style={{ marginBottom: 24 }}>
        <div className="kpi anim-fade anim-fade-d1"><div className="kpi-lbl">Crecimiento demanda talento verde</div><div className="kpi-val" style={{ color: '#E74856' }}>11.6%</div><div className="kpi-desc">Vs 5.6% oferta (LinkedIn 2023-24)</div></div>
        <div className="kpi anim-fade anim-fade-d2"><div className="kpi-lbl">Tasa contratación talento verde</div><div className="kpi-val" style={{ color: '#E74856' }}>54.6%</div><div className="kpi-desc">Mayor que fuerza laboral general</div></div>
        <div className="kpi anim-fade anim-fade-d3"><div className="kpi-lbl">LinkedIn Ad Grant</div><div className="kpi-val" style={{ color: '#E74856' }}>$6M</div><div className="kpi-desc">Publicidad gratuita para sostenibilidad</div></div>
        <div className="kpi anim-fade anim-fade-d4"><div className="kpi-lbl">Climate Innovation Fund asignado</div><div className="kpi-val" style={{ color: '#E74856' }}>$793M</div><div className="kpi-desc">De $1B comprometido originalmente</div></div>
      </div>

      <div className="hr" />
      <div className="ibox anim-fade">
        <span className="ibox-icon"><Info size={18} /></span>
        <div className="ibox-text">
          <strong>Dato clave:</strong> Las emisiones Scope 3 (cadena de valor)
          representan más del 97% de la huella total de carbono. Aunque Scope 1 y 2 se redujeron
          29.9% desde baseline 2020, las emisiones indirectas siguen aumentando por la construcción de
          datacenters para IA y cloud. El mayor desafío de Microsoft es reducir emisiones
          mientras su negocio crece.
        </div>
      </div>
    </div>
  );
}
