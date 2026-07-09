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

Duración estimada: **12–15 min**. Cada uno habla ~6–7 min.

### 📌 Cómo funciona

- **Speaker 1** habla en Inicio, Aseguramiento, Calidad, Planeación
- **Speaker 2** habla en Gestión y Conclusiones
- El que NO habla, maneja el sidebar para pasar las vistas
- No leer textual — tener los puntos clave en la cabeza y hablar natural

---

### Speaker 1 — Vos empezás (vistas: Inicio → Aseguramiento → Calidad → Planeación)

**▶️ Vista INICIO** (está abierta)

Decí algo así:

> *"Hola. Hoy vamos a ver cómo Microsoft asegura que sus compromisos de responsabilidad social sean reales. Microsoft tiene 245 mil millones de dólares de ingresos y 228 mil empleados. Cuando una empresa así dice que va a ser 'carbon negative', tenemos que ver si es cierto o es solo marketing."*

Señalá los cuadritos de números en la pantalla:

> *"Acá vemos números: 34 gigawatts de energía renovable, 50 millones de metros cúbicos de agua repuesta, 15.849 acres protegidos. Hoy vamos a explicar cada uno."*

**▶️ Ahora hacé clic en "Aseguramiento"** (sidebar derecho)

Decí:

> *"Pero primero: ¿quién controla que estos números no sean inventados? Microsoft tiene una estructura clara. Satya Nadella es el CEO. Brad Smith es el presidente y supervisa todo. Melanie Nakagawa es la Chief Sustainability Officer. Y hay un comité del Board que solo ve temas ambientales y sociales."*

Señalá el cuadro de "Aseguramiento Externo":

> *"Lo más importante para la credibilidad: Deloitte audita las emisiones. No es una auditoría contable, pero un tercero independiente revisa los números."*

> *"Microsoft además reporta bajo GRI, SASB, TCFD, CDP —los estándares internacionales más exigentes."*

**▶️ Ahora hacé clic en "Calidad"**

Decí:

> *"Microsoft tiene certificación ISO 50001 para gestión de energía en sus datacenters. Reporta con GRI y SASB. Participa en CDP. Y si cambia la forma de medir, recalculan todo para atrás para que los números sean comparables."*

**▶️ Ahora hacé clic en "Planeación"**

Decí:

> *"Ahora, ¿hacia dónde va Microsoft? En 2020 prometieron: para 2030 ser carbon negative, water positive, zero waste, y proteger más tierra de la que usan. Estamos a mitad de camino."*

Señalá las barras de progreso de cada meta:

> *"En carbono: 34 GW de renovables. En agua: 50 millones de m³ repuestos. En residuos: 88% de desvío. En ecosistemas: ya cumplieron."*

> *"El progreso es real, pero hay desafíos. Ahora mi compañero va a mostrar los números duros."*

**✅ Hasta acá llegás vos. Pasá la palabra al Speaker 2.**

---

### Speaker 2 — Ahora vos (vistas: Gestión → Conclusiones)

**▶️ Hacé clic en "Gestión"**

Decí:

> *"Gracias. Ahora los números duros, todos contra el reporte oficial de Microsoft."*

Señalá las **3 cajitas azules** que explican los Scopes:

> *"Primero: las emisiones se dividen en tres tipos. Scope 1 es lo que Microsoft emite directamente. Scope 2 es la electricidad que compran. Scope 3 es la cadena de valor —proveedores, clientes usando la nube, viajes. Scope 3 es más del 97% del total."*

Señalá el **gráfico de barras**:

> *"Dato clave: Scope 1 y 2 se redujeron 29.9% desde 2020. PERO las emisiones totales subieron 23.4%. ¿Por qué? Porque Scope 3 subió 26%. El negocio de IA y cloud crece tan rápido que las reducciones no alcanzan."*

Señalá el **gráfico de torta** (remociones):

> *"Acá las remociones de carbono contratadas: 21.9 millones de toneladas. La crítica es que depender de offsets puede ser una forma de no reducir realmente."*

Ahora **bajá un poco** a la sección de agua:

> *"En agua: pasaron de reponer 2.8 millones de metros cúbicos a 50 millones. Crecieron 17 veces."*

**Residuos:**

> *"88% de desvío de residuos. 94.8% de empaques reciclables. 90.9% de servidores reciclados."*

**Ecosistemas:**

> *"15.849 acres protegidos, excedieron la meta."*

**Impacto social:**

> *"Demanda de talento verde crece al 11.6% pero oferta solo al 5.6%. Hay un gap. Llevan $793 millones del Climate Innovation Fund."*

**▶️ Hacé clic en "Conclusiones"**

Decí:

> *"Ahora: ¿Microsoft lo está haciendo bien? Sí, pero con problemas."*

> *"Fortalezas: metas con ciencia, auditoría externa, resultados medibles."*

> *"Problemas: Scope 3 no para de subir. Dependencia de offsets. Agua en zonas con estrés hídrico. Controversias como contratos militares."*

> *"Resumen: las emisiones totales SUBIERON 23.4% desde 2020."*

> *"Recomendaciones: que pongan metas para proveedores, que innoven en refrigeración con menos agua, y que alineen el crecimiento con la reducción real de emisiones."*

> *"Para cerrar: Microsoft tiene un compromiso real, con buenas estructuras. Pero el desafío es que el negocio de IA y cloud no siga aumentando las emisiones. La RSC no es un destino, es un proceso."*

> *"Gracias. ¿Preguntas?"*

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
