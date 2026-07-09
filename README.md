# Microsoft RSC — Dashboard de Responsabilidad Social Corporativa

Dashboard interactivo desarrollado con **React 19 + Vite 8** que analiza el sistema de aseguramiento de RSC de **Microsoft Corporation**, basado en datos verificados del **Microsoft 2025 Environmental Sustainability Report** y fuentes oficiales.

---

## 📋 Estructura del Dashboard

| Vista | Ruta | Contenido |
|-------|------|-----------|
| **Inicio** | `/` | Hero con stats clave y presentación |
| **Aseguramiento** | `/assurance` | Gobernanza, liderazgo, auditoría externa, frameworks |
| **Calidad** | `/quality` | Certificaciones (ISO, GRI, SASB, TCFD, CDP) y verificación |
| **Planeación** | `/planning` | Metas 2030, roadmap, línea de tiempo de hitos |
| **Gestión** | `/management` | KPIs con gráficos: carbono, agua, residuos, ecosistemas, impacto social |
| **Conclusiones** | `/conclusions` | Análisis crítico, fortalezas, desafíos, recomendaciones |

### Tecnologías

- **React 19** con React Router DOM para navegación SPA
- **Vite 8** como bundler (build ~21s, 695KB JS + 8.7KB CSS gzipped)
- **Recharts** para visualizaciones (barras, áreas, líneas, pie)
- **Lucide React** para iconografía
- **CSS puro** con variables y tema oscuro

---

## 🗂️ Fuentes de Datos

Todas las fuentes están documentadas en `src/data/microsoftData.js` con anotaciones por sección:

| Fuente | Enlace |
|--------|--------|
| Microsoft 2025 Environmental Sustainability Report | [aka.ms/SustainabilityReport2025](https://aka.ms/SustainabilityReport2025) |
| Data Fact Sheet | [aka.ms/SustainabilityFactsheet2025](https://aka.ms/SustainabilityFactsheet2025) |
| Blog de Brad Smith (Presidente de Microsoft) | [blogs.microsoft.com](https://blogs.microsoft.com/on-the-issues/2025/05/29/environmental-sustainability-report/) |
| Microsoft Reports Hub | [reports-hub](https://www.microsoft.com/en-us/corporate-responsibility/reports-hub) |
| Microsoft Reporting & Governance | [reporting-governance](https://www.microsoft.com/en-us/corporate-responsibility/reporting-governance) |
| Microsoft Corporate Governance | [investor/corporate-governance](https://www.microsoft.com/en-us/investor/corporate-governance/overview) |
| Sustainability Magazine — Microsoft CSR Blueprint | [sustainabilitymag.com](https://sustainabilitymag.com/articles/microsofts-csr-blueprint-technology-with-a-purpose) |

Los datos de carbono fueron **corregidos** usando las proporciones oficiales del reporte 2025 (ver sección de corrección en `microsoftData.js`). Verificación independiente por **Deloitte & Touche LLP** (Limited Assurance sobre Scope 1 y 2).

---

## 🚀 Cómo ejecutar el proyecto

```bash
# Instalar dependencias
npm install

# Desarrollo — servidor local con hot reload
npm run dev

# Build de producción
npm run build

# Previsualizar build
npm run preview
```

---

## 🎤 Guión de Exposición — 2 Personas

Duración estimada: **12–15 minutos**. Cada uno habla ~6–7 minutos.

### 📌 Antes de empezar

- Abrir el dashboard en un navegador a pantalla completa
- Tener las fuentes oficiales a mano por si preguntan
- **Speaker 1** maneja el sidebar las primeras 4 vistas
- **Speaker 2** toma el control desde Gestión hasta el final

---

### Speaker 1 — Contexto, Gobernanza y Metas
**Vistas: Inicio → Aseguramiento → Calidad → Planeación**

**"Hola a todos. Hoy vamos a analizar cómo Microsoft asegura que sus compromisos de responsabilidad social sean reales, y no solo marketing. Microsoft tiene ingresos por 245 mil millones de dólares y 228 mil empleados. Cuando una empresa así promete ser 'carbon negative', vale la pena entender si realmente lo está logrando."**

**"Acá vemos algunos anticipos: 34 GW de energía renovable contratada, 50 millones de metros cúbicos de agua repuesta, 15.849 acres protegidos. Hoy vamos a explicar cada uno de estos números. Pero primero: ¿quién asegura que no sean inventados?"**

> *(Avanza a Aseguramiento)*

**"Microsoft tiene una estructura de gobernanza clara. Satya Nadella es el CEO, pero quien supervisa todos los compromisos de RSC es Brad Smith, el presidente. Debajo de él está Melanie Nakagawa, la Chief Sustainability Officer. Y existe un comité independiente del Board dedicado exclusivamente a temas ambientales, sociales y de políticas públicas."**

**"El punto clave para la credibilidad es la auditoría externa. Deloitte & Touche revisa las emisiones de Scope 1 y 2. No es una auditoría financiera completa, pero es 'limited assurance' —un tercero independiente confirma que los números son razonables. Microsoft además reporta bajo GRI, SASB, TCFD y CDP, que son los estándares internacionales más exigentes."**

> *(Avanza a Calidad)*

**"En certificaciones, Microsoft tiene ISO 50001 para gestión de energía en sus datacenters, reporta bajo GRI y SASB, participa en el Carbon Disclosure Project, y cumple con la ley California AB 1305. Algo importante: si cambia la forma de medir, recalculan todos los datos históricos para que las series sean comparables. Eso es buena práctica."**

> *(Avanza a Planeación)*

**"Ahora, ¿hacia dónde va Microsoft? En 2020 hicieron una promesa enorme: para 2030, ser carbon negative, water positive, zero waste, y proteger más tierra de la que usan. La estrategia tiene tres pilares: reducir su propia huella, ayudar a clientes a ser sostenibles, e impactar el sistema global."**

**"Los resultados parciales son concretos: en carbono, 34 GW de renovables contratados. En agua, 50 millones de m³ repuestos y 1.5 millones de personas con acceso a agua limpia. En residuos, 88.1% de desvío y 90.9% de servidores reciclados. En ecosistemas, ya excedieron la meta de 2025 con 15.849 acres protegidos. Estamos a mitad de camino y el progreso es real, aunque como verán a continuación, hay desafíos importantes."**

---

### Speaker 2 — Resultados Concretos y Análisis Crítico
**Vistas: Gestión → Conclusiones**

> *(Avanza a Gestión)*

**"Gracias. Ahora entramos en los números duros, todos verificados contra el reporte oficial de Microsoft 2025."**

**"Empecemos por carbono. Este gráfico de barras muestra las emisiones divididas en tres alcances. Scope 1 son emisiones directas, Scope 2 las de electricidad comprada, y Scope 3 las de la cadena de valor —proveedores, clientes usando los productos, viajes, etc. Scope 3 representa más del 97% del total."**

**"Dato clave: las emisiones directas —Scope 1 y 2— se redujeron 29.9% desde 2020. Eso es un logro real. PERO las emisiones totales aumentaron 23.4%. ¿Por qué? Porque Scope 3 subió 26%. La razón: el crecimiento masivo de datacenters para IA y cloud. Azure es el negocio que más crece y también el que más emisiones genera. Es la paradoja de Microsoft."**

**"Acá vemos las remociones de carbono contratadas: 21.9 millones de toneladas métricas. Incluyen créditos para neutralidad del año, para la meta 2030 y para después del 2030. La crítica es que depender de offsets puede ser una forma de no reducir realmente."**

**"En agua, el crecimiento es enorme: pasaron de reponer 2.84 millones de metros cúbicos en 2020 a 50 millones en 2024. 17 veces más. Destaca la planta de Quincy, Washington, que redujo el consumo de agua potable en 97% usando agua reciclada."**

**"En residuos, 88.1% de desvío —muy cerca del 90% meta. Reciclabilidad de empaques al 94.8%, superando la meta del 80%. Y 90.9% de servidores reciclados, un año antes de lo previsto."**

**"En ecosistemas, excedieron la meta por 30%: 15.849 acres protegidos contra una huella de 11.900. Y usan IA para monitorear la Amazonía con más de 80% de precisión a través del proyecto Guacamaya."**

**"Finalmente, en impacto social: la demanda de talento verde crece al 11.6% pero la oferta solo al 5.6%. Hay un gap importante. Microsoft lleva $793 millones asignados de su Climate Innovation Fund de $1,000 millones."**

> *(Avanza a Conclusiones)*

**"Y ahora, la pregunta que importa: ¿Microsoft realmente lo está haciendo bien? La respuesta es: sí, pero con matices."**

**"Fortalezas: metas basadas en ciencia, verificación externa, un comité de Board dedicado a ESG, resultados medibles en todas las áreas, y transparencia total bajo estándares internacionales."**

**"Desafíos: el más grave es que las emisiones Scope 3 no dejan de subir. Dependencia de offsets. Consumo de agua en regiones con estrés hídrico. Controversias éticas como contratos militares. La brecha entre ambición y realidad se resume en un número: las emisiones totales subieron 23.4% desde el baseline."**

**"Nuestras recomendaciones: Microsoft necesita metas vinculantes para proveedores en Scope 3, innovar en refrigeración con cero agua, y alinear el crecimiento del negocio con la reducción absoluta de emisiones."**

**"Para cerrar: Microsoft tiene un compromiso genuino con la RSC, con estructuras sólidas y métricas transparentes. Pero el verdadero desafío es alinear el crecimiento —especialmente IA y cloud— con la reducción absoluta de emisiones. Como aprendimos en esta materia, la RSC no es un destino, es un proceso continuo. Y las empresas más grandes tienen la responsabilidad de liderar, aunque eso signifique tomar decisiones difíciles que van contra el beneficio inmediato."**

**"Gracias. ¿Preguntas?"**

---

## 🎯 Tips para la Exposición

| Consejo | Detalle |
|---------|---------|
| **Navegación** | El que no habla maneja el sidebar para pasar las vistas |
| **Gráficos** | Pasar el mouse sobre los charts para mostrar tooltips con valores exactos |
| **Fuentes** | Cada sección de gestión tiene la fuente abajo —señalarlo da credibilidad |
| **Pregunta frecuente** | "Si invierten tanto, ¿por qué aumentan las emisiones?" → porque cloud/IA crece más rápido que las reducciones |
| **Cierre** | La reflexión final sobre "RSC como proceso, no destino" deja buena impresión |
| **Fluidez** | No leer textual — cada speaker conoce los puntos clave y habla natural |

---

## 📐 Arquitectura del Proyecto

```
dashboardEtica/
├── index.html              # Entry point HTML
├── package.json            # Dependencias
├── vite.config.js          # Config Vite
├── .gitignore
└── src/
    ├── main.jsx            # Entry React
    ├── App.jsx             # Router + rutas
    ├── index.css           # Estilos globales con tema oscuro
    ├── data/
    │   └── microsoftData.js    # TODOS los datos con fuentes
    └── components/
        ├── Layout.jsx          # Shell con sidebar + footer
        ├── Navbar.jsx          # Navegación lateral
        ├── Footer.jsx          # Pie de página con fuentes
        ├── Hero.jsx            # Vista de inicio
        ├── AssuranceSystem.jsx # Gobernanza y auditoría
        ├── QualityStandards.jsx# Certificaciones
        ├── Planning.jsx        # Metas 2030
        ├── Management.jsx      # KPIs y gráficos
        └── Conclusions.jsx     # Análisis final
```

---

## 📝 Notas Técnicas

- Los datos de carbono fueron corregidos para reflejar las proporciones reales del reporte 2025: Scope 1 = 0.97%, Scope 2 = 1.74%, Scope 3 = 97.29% del total FY24.
- Verificación independiente: Deloitte & Touche LLP (Limited Assurance).
- Los valores FY20 son el baseline oficial contra el cual Microsoft mide su progreso.
- Tema oscuro para mejor visualización de gráficos en proyección/pantalla.
- Build de producción optimizado: ~695KB JS + 8.7KB CSS.
