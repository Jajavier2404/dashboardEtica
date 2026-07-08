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

## 🎤 Guión de Exposición — 4 Personas

Duración estimada: **15–20 minutos**. Cada expositor habla ~4 minutos.

### 📌 Antes de empezar

- Abrir el dashboard en un navegador (full screen)
- Tener a mano las fuentes oficiales por si surgen preguntas
- Cada expositor avanza a la siguiente vista con el sidebar

---

### **Expositor 1 — Inicio, Aseguramiento y Calidad** (vistas: `/` → `/assurance` → `/quality`)

> *(Parado frente al dashboard, mostrando la vista de Inicio)*

**"Buenos días a todos. Hoy vamos a analizar el sistema de aseguramiento de Responsabilidad Social Corporativa de Microsoft Corporation. ¿Por qué Microsoft? Porque con más de 245 mil millones de dólares en ingresos en FY24 y 228 mil empleados, es una de las empresas más influyentes del planeta. Y cuando una empresa de ese tamaño hace promesas sobre sostenibilidad, necesitamos entender si realmente las cumple."**

> *(Señala los indicadores del Hero: $245.1B, 34 GW renovables, 50M m³ agua repuesta)*

**"Estos son algunos números que hoy vamos a desglosar: 34 gigawatts de energía renovable contratada en 24 países, 15.849 acres de tierra protegidos permanentemente, 50 millones de metros cúbicos de agua repuesta. Pero antes de los resultados, hablemos de cómo Microsoft se organiza para asegurar que todo esto sea real."**

> *(Hace clic en "Aseguramiento" en el sidebar)*

**"Microsoft tiene una estructura de gobernanza muy clara. Al frente, Satya Nadella como CEO. Pero quien realmente supervisa todos estos compromisos es Brad Smith, el Presidente, a quien le reporta directamente Melanie Nakagawa, la Chief Sustainability Officer. Y ojo: existe un comité independiente del Board llamado 'Environmental, Social and Public Policy Committee' que supervisa políticas, riesgos y programas de sostenibilidad."**

> *(Señala el recuadro de Aseguramiento Externo)*

**"Pero la pieza clave de la credibilidad es la auditoría externa. Deloitte & Touche realiza una revisión limitada —limited assurance— sobre las emisiones de Scope 1 y 2. ¿Qué significa esto? Que un tercero independiente revisa los números y confirma que son razonables. No es una auditoría financiera completa, pero es un estándar aceptado internacionalmente."**

> *(Baja a los frameworks de reporte)*

**"Microsoft reporta bajo GRI, SASB, TCFD, GHG Protocol, CDP. Todos los principales estándares internacionales. No es solo que publiquen un reporte bonito, es que lo hacen bajo marcos que permiten comparar año a año y con otras empresas."**

> *(Avanza a la vista de "Calidad")*

**"Pasando a calidad y certificaciones: Microsoft tiene certificación ISO 50001 en gestión de energía para sus centros de datos. Reporta bajo los estándares GRI y SASB. Participa en el Carbon Disclosure Project. Cumple con la ley California AB 1305 sobre transparencia de créditos de carbono. Y el proceso de verificación incluye recálculo de datos históricos por cambios metodológicos. Es decir, si cambia la forma de medir, recalculan todo para atrás para que las series sean comparables."**

> *(Cierra con el insight box de materialidad)*

**"Todo esto demuestra que el sistema de aseguramiento de Microsoft tiene bases sólidas. Pero como veremos, tener buenos procesos no significa que los resultados sean perfectos."**

---

### **Expositor 2 — Planeación y Metas 2030** (vista: `/planning`)

> *(Avanza a la vista de "Planeación")*

**"Ahora veamos hacia dónde va Microsoft. En 2020, la empresa hizo una promesa muy ambiciosa: para 2030, Microsoft será carbon negative, water positive, zero waste, y protegerá más tierra de la que usa. Y créanme, cuando la empresa que hizo el PowerPoint que usamos todos dice 'vamos a ser carbon negative', el mundo pone atención."**

> *(Señala la visión 2030 destacada en la tarjeta central)*

**"La estrategia se divide en tres pilares: primero, reducir la huella operacional propia —lo que Microsoft emite directamente. Segundo, usar su tecnología para ayudar a clientes a ser más sostenibles. Y tercero, generar impacto sistémico global. No es solo 'nosotros somos verdes', es 'queremos que todo el ecosistema sea más verde'."**

> *(Recorre las metas con las barras de progreso)*

**"Veamos cada meta con sus resultados concretos: en carbono, avanzan con 34 GW de energía renovable contratados. En agua, ya repusieron 50 millones de metros cúbicos en FY24 y 1.5 millones de personas tienen acceso a agua limpia gracias a sus proyectos. En residuos, desvían el 88.1% de sus residuos operacionales y reciclan el 90.9% de los servidores. Y en ecosistemas, ya cumplieron y excedieron la meta de 2025: protegieron 15.849 acres contra una meta de 11.000."**

> *(Señala la línea de tiempo)*

**"La línea de tiempo muestra los hitos clave desde 2020 cuando se anunciaron los compromisos, pasando por la publicación del primer reporte en 2021, la expansión de los Circular Centers en 2022, la meta de ecosistemas excedida en 2023, y la inversión masiva de 10 mil millones en renovables en 2024. Estamos exactamente a mitad de camino hacia 2030, y los resultados hasta ahora muestran progreso real, aunque con desafíos importantes que veremos en las siguientes secciones."**

---

### **Expositor 3 — Gestión: Datos, Gráficos y KPIs** (vista: `/management`)

> *(Avanza a la vista de "Gestión")*

**"Esta es la sección más densa y la más importante porque aquí están los números duros, todos verificados contra el reporte oficial publicado por Microsoft en 2025."**

> *(Señala el gráfico de emisiones GHG)*

**"Empecemos por carbono. Este gráfico de barras apiladas muestra las emisiones de Microsoft divididas en tres alcances según el GHG Protocol. Scope 1 son emisiones directas de fuentes propias. Scope 2 son emisiones indirectas por electricidad comprada. Y Scope 3 son emisiones de la cadena de valor —proveedores, uso de productos, viajes de negocio, etc. La inmensa mayoría, más del 97%, está en Scope 3."**

**"Dato clave: las emisiones directas —Scope 1 y 2 combinadas— se redujeron 29.9% desde el baseline de 2020. Eso es un logro concreto. PERO las emisiones totales aumentaron 23.4% en el mismo período. ¿Por qué? Porque Scope 3 subió 26%, impulsado por la construcción masiva de datacenters para IA y cloud computing. Es la paradoja de Microsoft: su negocio más exitoso —Azure, la nube, la IA— es también el que más está haciendo crecer su huella de carbono."**

> *(Pasa al gráfico de remociones de carbono)*

**"Acá vemos otro aspecto importante: las remociones de carbono contratadas. Microsoft no solo busca reducir emisiones, también está comprando créditos de remoción: 21.9 millones de toneladas métricas contratadas en total. Esto incluye créditos para neutralidad del año en curso, para la meta 2030, y para remociones post-2030. Pero ojo, las críticas dicen que depender de offsets puede ser una forma de evitar reducciones reales."**

> *(Señala los indicadores de agua)*

**"En agua, el progreso es notable: pasaron de reponer 2.84 millones de metros cúbicos en FY20 a 50 millones en FY24. Eso es un crecimiento de 17 veces. Además, 1.5 millones de personas con acceso a agua limpia, y una planta en Quincy, Washington que redujo el uso de agua potable en un 97% usando agua reciclada para refrigeración. Eso es innovación aplicada."**

> *(Pasa a residuos)*

**"En residuos, el 88.1% de desvío operacional —muy cerca de la meta del 90%. Reciclabilidad de empaques al 94.8%, superando ampliamente la meta del 80%. Y el 90.9% de servidores reutilizados o reciclados, meta alcanzada un año antes de lo previsto. Resultados muy concretos."**

> *(Avanza a ecosistemas e impacto social)*

**"En ecosistemas, la meta de 2025 fue excedida por más del 30%: 15.849 acres permanentemente protegidos contra una huella operacional de 11.900 acres. Y usan IA para monitorear la Amazonía con más del 80% de precisión a través del proyecto Guacamaya."**

**"Finalmente, en impacto social: la demanda de talento verde crece al 11.6% anual mientras la oferta solo crece al 5.6%. Hay un gap enorme. Microsoft está invirtiendo 793 millones de dólares de los 1,000 millones comprometidos en su Climate Innovation Fund. Y a través de LinkedIn, dieron 6 millones de dólares en publicidad gratuita para organizaciones de sostenibilidad."**

---

### **Expositor 4 — Conclusiones, Análisis Crítico y Cierre** (vista: `/conclusions`)

> *(Avanza a la vista de "Conclusiones")*

**"Ya vimos los datos. Ahora la pregunta importante: ¿Microsoft realmente está haciendo las cosas bien? La respuesta, como casi siempre en RSC, es: sí, pero no es tan simple."**

> *(Señala las fortalezas)*

**"Fortalezas innegables: Microsoft tiene un liderazgo climático con metas basadas en ciencia y verificación externa independiente. Su gobierno corporativo es sólido con un comité ESG a nivel del Board of Directors. Invirtió 10 mil millones en energías renovables. Tiene resultados medibles en todas las áreas: 88.1% desvío de residuos, 50 millones de m³ de agua repuesta, 15.849 acres protegidos. Y reporta con total transparencia bajo GRI, SASB y TCFD con auditoría de Deloitte."**

> *(Señala los desafíos, con un tono más serio)*

**"Ahora, los desafíos son igual de reales. El más grave: las emisiones Scope 3 siguen aumentando. En FY23 subieron 30.9% y la tendencia continúa. El crecimiento de los datacenters para IA está disparando el consumo energético de la cadena de suministro. Microsoft depende de offsets de carbono, que tienen críticas sobre su efectividad real a largo plazo. El consumo de agua en datacenters ubicados en regiones con estrés hídrico es una contradicción difícil de explicar. Y hay controversias éticas que van más allá del ambiente: contratos militares, protestas de empleados. La brecha entre ambición y realidad se ve en un número: las emisiones TOTALES aumentaron 23.4% desde el baseline 2020."**

> *(Pasa a recomendaciones)*

**"Nuestras recomendaciones como equipo son: Microsoft necesita fortalecer la gestión de Scope 3 con metas vinculantes para sus proveedores. Acelerar la innovación en refrigeración de datacenters con consumo cero de agua. Aumentar inversión en captura directa de carbono. Y sobre todo, alinear el crecimiento del negocio con la reducción absoluta de emisiones —no solo relativa."**

> *(Lee o parafrasea el mensaje final)*

**"El mensaje final es que Microsoft demuestra un compromiso genuino con la RSC, respaldado por estructuras de gobernanza sólidas, verificación externa y métricas transparentes. El verdadero desafío está en alinear el crecimiento del negocio —especialmente IA y cloud— con la reducción absoluta de emisiones. El camino hacia 2030 es una maratón, no un sprint."**

> *(Tono reflexivo, para cerrar)*

**"Y como estudiantes de ética y responsabilidad social, el caso Microsoft nos enseña que la RSC no es un destino sino un proceso continuo de mejora. Las empresas más grandes del mundo tienen la responsabilidad —y los recursos— para liderar el cambio hacia un futuro sostenible. Pero la tecnología por sí sola no basta: se necesita gobernanza, transparencia y voluntad de tomar decisiones difíciles que a veces van en contra del beneficio económico inmediato."**

> *(Se abre a preguntas)*

**"Muchas gracias. Estamos abiertos a sus preguntas."**

---

## 🎯 Tips para la Exposición

| Consejo | Detalle |
|---------|---------|
| **Navegación** | Usar el sidebar derecho para cambiar de vista suavemente |
| **Gráficos interactivos** | Pasar el mouse sobre los charts para ver tooltips con valores exactos |
| **Fuentes visibles** | Cada sección de gestión muestra la fuente abajo en `cbox-source` |
| **Preparar respuesta** | Posible pregunta: "¿Por qué aumentaron las emisiones si invierten tanto?" — Respuesta: el negocio de cloud/IA crece más rápido que la reducción de emisiones |
| **Cierre fuerte** | La reflexión final sobre la maratón vs sprint conecta con cualquier audiencia |

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
