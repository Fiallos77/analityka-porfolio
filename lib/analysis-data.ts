import type { Lang } from "./language-context"

export type AnalysisCategory = "Players" | "Teams" | "Matches" | "Data"

export interface BilingualText {
  en: string
  es: string
}

export interface AnalysisPost {
  id: string
  slug: string
  title: BilingualText
  excerpt: BilingualText
  category: AnalysisCategory
  competition: string
  date: string
  coverImage: string
  executiveSummary: BilingualText
  content: BilingualText
}

/** Helper to resolve bilingual text */
export function resolve(field: BilingualText, lang: Lang): string {
  return field[lang]
}

/** Bilingual labels for category filter tabs */
export const categoryLabels: Record<"All" | AnalysisCategory, BilingualText> = {
  All: { en: "All", es: "Todos" },
  Players: { en: "Players", es: "Jugadores" },
  Teams: { en: "Teams", es: "Equipos" },
  Matches: { en: "Matches", es: "Partidos" },
  Data: { en: "Data", es: "Datos" },
}

export const analysisData: AnalysisPost[] = [
  {
    id: "1",
    slug: "spatial-dominance-pressing-patterns",
    title: {
      en: "Spatial Dominance & Pressing Patterns in High-Block Systems",
      es: "Dominio Espacial y Patrones de Presion en Sistemas de Bloque Alto",
    },
    excerpt: {
      en: "A deep dive into how elite teams structure their pressing triggers and spatial control in the final third, using advanced positional data and xG chain metrics.",
      es: "Un analisis profundo de como los equipos de elite estructuran sus detonantes de presion y control espacial en el ultimo tercio, utilizando datos posicionales avanzados y metricas de cadenas xG.",
    },
    category: "Teams",
    competition: "UEFA Champions League",
    date: "2026-02-15",
    coverImage: "/images/analysis-1.jpg",
    executiveSummary: {
      en: "High-block pressing systems produce 34% more final-third recoveries than mid-block approaches. Backward passes are the primary pressing trigger (67%), and possessions from high recoveries generate nearly double the xG (0.15 vs 0.08) compared to build-up sequences. However, sustaining this intensity demands elite physical conditioning and squad depth across a full campaign.",
      es: "Los sistemas de presion con bloque alto producen un 34% mas de recuperaciones en el ultimo tercio que los enfoques de bloque medio. Los pases hacia atras son el principal detonante de presion (67%), y las posesiones por recuperaciones altas generan casi el doble de xG (0.15 vs 0.08) comparado con secuencias de juego posicional. Sin embargo, mantener esta intensidad exige un acondicionamiento fisico de elite y profundidad de plantilla.",
    },
    content: {
      en: `## Overview

This analysis examines the spatial dominance and pressing patterns employed by elite teams in high-block systems during the 2025/26 UEFA Champions League group stage.

## Key Findings

### Pressing Triggers
Teams utilizing high-block systems showed a 34% increase in ball recoveries in the final third compared to mid-block approaches. The key pressing triggers identified were:
- **Backward passes**: 67% of pressing sequences initiated after a backward pass
- **Wide isolation**: 23% triggered when the ball was moved to an isolated wide player
- **Goalkeeper distribution**: 10% initiated from goal kicks and short distributions

### Spatial Control Metrics
Using PPDA (Passes Per Defensive Action) and field tilt measurements, we identified three distinct spatial control profiles:
1. **Aggressive compress** - PPDA < 8, field tilt > 65%
2. **Selective press** - PPDA 8-12, field tilt 50-65%
3. **Mid-block transition** - PPDA > 12, field tilt < 50%

### xG Chain Analysis
The xG chain data reveals that possessions originating from high recoveries produced an average xG of 0.15 per sequence, compared to 0.08 for build-up play sequences.

## Methodology
Data sourced from positional tracking systems and event data across 48 group stage matches. All metrics normalized per 90 minutes.

## Conclusions
High-block pressing systems demonstrate clear tactical advantages in creating high-value scoring opportunities, but require exceptional physical conditioning and squad depth to maintain across a full campaign.`,
      es: `## Resumen

Este analisis examina el dominio espacial y los patrones de presion empleados por equipos de elite en sistemas de bloque alto durante la fase de grupos de la UEFA Champions League 2025/26.

## Hallazgos Clave

### Detonantes de Presion
Los equipos que utilizan sistemas de bloque alto mostraron un aumento del 34% en recuperaciones de balon en el ultimo tercio en comparacion con los enfoques de bloque medio. Los principales detonantes de presion identificados fueron:
- **Pases hacia atras**: 67% de las secuencias de presion iniciadas despues de un pase hacia atras
- **Aislamiento lateral**: 23% activados cuando el balon fue movido a un jugador aislado en la banda
- **Distribucion del portero**: 10% iniciados desde saques de meta y distribuciones cortas

### Metricas de Control Espacial
Utilizando PPDA (Pases Por Accion Defensiva) e inclinacion de campo, identificamos tres perfiles distintos de control espacial:
1. **Compresion agresiva** - PPDA < 8, inclinacion de campo > 65%
2. **Presion selectiva** - PPDA 8-12, inclinacion de campo 50-65%
3. **Transicion de bloque medio** - PPDA > 12, inclinacion de campo < 50%

### Analisis de Cadena xG
Los datos de cadena xG revelan que las posesiones originadas por recuperaciones altas produjeron un xG promedio de 0.15 por secuencia, comparado con 0.08 para secuencias de juego posicional.

## Metodologia
Datos obtenidos de sistemas de seguimiento posicional y datos de eventos a traves de 48 partidos de fase de grupos. Todas las metricas normalizadas por cada 90 minutos.

## Conclusiones
Los sistemas de presion con bloque alto demuestran claras ventajas tacticas en la creacion de oportunidades de gol de alto valor, pero requieren un acondicionamiento fisico excepcional y profundidad de plantilla para mantenerlo a lo largo de toda una campana.`,
    },
  },
  {
    id: "2",
    slug: "progressive-carrying-profile-analysis",
    title: {
      en: "Progressive Carrying Under Pressure: A Player Profile Analysis",
      es: "Conduccion Progresiva Bajo Presion: Analisis de Perfiles de Jugadores",
    },
    excerpt: {
      en: "Evaluating ball-carrying effectiveness in transition phases through pressure resistance metrics and progressive distance analysis across top European leagues.",
      es: "Evaluando la efectividad de conduccion de balon en fases de transicion a traves de metricas de resistencia a la presion y analisis de distancia progresiva en las principales ligas europeas.",
    },
    category: "Players",
    competition: "La Liga 2025/26",
    date: "2026-02-10",
    coverImage: "/images/analysis-2.jpg",
    executiveSummary: {
      en: "Elite progressive carriers average 142m of progressive distance per 90 with pressure resistance rates above 78%. The left half-space (zone 14) is the most productive carry initiation zone (43% of all progressive carries). Teams with elite carriers show 28% higher xT generation from open play, making this one of the most undervalued skills in modern recruitment.",
      es: "Los mejores conductores progresivos promedian 142m de distancia progresiva por cada 90 minutos con tasas de resistencia a la presion superiores al 78%. El medio-espacio izquierdo (zona 14) es la zona mas productiva de inicio de conduccion (43% de todas las conducciones progresivas). Los equipos con conductores de elite muestran un 28% mas de generacion de xT en juego abierto, convirtiendola en una de las habilidades mas infravaloradas en el reclutamiento moderno.",
    },
    content: {
      en: `## Overview

This report profiles elite ball carriers across Europe's top leagues, focusing on progressive carrying under defensive pressure during the 2025/26 season.

## Methodology

We tracked over 15,000 individual carrying sequences across La Liga, measuring:
- **Progressive distance** - Total distance carried toward the opponent's goal
- **Pressure events** - Number of defensive actions within 2m during the carry
- **Carry success rate** - Percentage of carries completed without losing possession

## Key Metrics

### Top Performers (Progressive Carries per 90)
Players were ranked by their ability to advance the ball under pressure while maintaining possession. The top performers showed:
- Average progressive distance of 142m per 90 minutes
- Pressure resistance rate above 78%
- Successful take-on rate during carries of 62%

### Carry Heat Maps
Analysis of carry initiation zones revealed that the most effective progressive carriers started their runs in the left half-space (zone 14 equivalent), with 43% of all progressive carries originating from this area.

### Impact on Team Attack
Teams with elite progressive carriers showed a 28% higher xT (expected threat) generation from open play, suggesting these players are crucial catalysts in transitional attacking phases.

## Conclusions
Progressive carrying under pressure is one of the most valuable yet underappreciated skills in modern football. The data suggests clubs should prioritize this metric in recruitment alongside traditional passing and dribbling statistics.`,
      es: `## Resumen

Este informe perfila a los mejores conductores de balon en las principales ligas de Europa, enfocandose en la conduccion progresiva bajo presion defensiva durante la temporada 2025/26.

## Metodologia

Rastreamos mas de 15,000 secuencias individuales de conduccion en La Liga, midiendo:
- **Distancia progresiva** - Distancia total conducida hacia la porteria rival
- **Eventos de presion** - Numero de acciones defensivas dentro de 2m durante la conduccion
- **Tasa de exito de conduccion** - Porcentaje de conducciones completadas sin perder la posesion

## Metricas Clave

### Mejores Rendimientos (Conducciones Progresivas por 90)
Los jugadores fueron clasificados por su capacidad de avanzar el balon bajo presion manteniendo la posesion. Los mejores rendimientos mostraron:
- Distancia progresiva promedio de 142m por cada 90 minutos
- Tasa de resistencia a la presion superior al 78%
- Tasa de exito en regates durante conducciones del 62%

### Mapas de Calor de Conduccion
El analisis de zonas de inicio de conduccion revelo que los conductores progresivos mas efectivos iniciaban sus carreras en el medio-espacio izquierdo (equivalente a zona 14), con el 43% de todas las conducciones progresivas originandose en esta area.

### Impacto en el Ataque del Equipo
Los equipos con conductores progresivos de elite mostraron un 28% mas de generacion de xT (amenaza esperada) en juego abierto, lo que sugiere que estos jugadores son catalizadores cruciales en las fases ofensivas de transicion.

## Conclusiones
La conduccion progresiva bajo presion es una de las habilidades mas valiosas y a la vez menos valoradas en el futbol moderno. Los datos sugieren que los clubes deben priorizar esta metrica en el reclutamiento junto con las estadisticas tradicionales de pase y regate.`,
    },
  },
  {
    id: "3",
    slug: "set-piece-efficiency-breakdown",
    title: {
      en: "Set-Piece Efficiency Breakdown: Corner Kick xG Models",
      es: "Desglose de Eficiencia en Jugadas a Balon Parado: Modelos xG de Corners",
    },
    excerpt: {
      en: "Statistical modeling of corner kick delivery patterns and their conversion probabilities using expected goals frameworks and spatial positioning data.",
      es: "Modelado estadistico de patrones de envio de corners y sus probabilidades de conversion utilizando marcos de goles esperados y datos de posicionamiento espacial.",
    },
    category: "Data",
    competition: "Premier League 2025/26",
    date: "2026-02-05",
    coverImage: "/images/analysis-3.jpg",
    executiveSummary: {
      en: "Driven corner deliveries yield the highest xG per attempt (0.041) and conversion rate (3.7%) despite representing only 12% of all corners. Screening runs increase xG by 15%. The predictive model achieves an R-squared of 0.72 against actual outcomes. Teams should prioritize delivery quality and organized blocking patterns over sheer corner volume.",
      es: "Los envios directos de corner producen el mayor xG por intento (0.041) y tasa de conversion (3.7%) a pesar de representar solo el 12% de todos los corners. Las cortinas aumentan el xG en un 15%. El modelo predictivo logra un R-cuadrado de 0.72 contra los resultados reales. Los equipos deben priorizar la calidad de envio y patrones de bloqueo organizados sobre el volumen de corners.",
    },
    content: {
      en: `## Overview

This analysis presents a comprehensive xG model for corner kick situations in the Premier League 2025/26 season, examining delivery patterns and their relationship to goal-scoring probability.

## Data Collection

We analyzed 2,847 corner kicks from the first 24 matchweeks, categorizing each by:
- **Delivery type** - Inswinger, outswinger, short, driven
- **Target zone** - Near post, far post, central, edge of box
- **First contact** - Header, volley, flick, controlled

## Model Results

### Delivery Type Effectiveness
| Type | Frequency | Avg xG | Conversion Rate |
|------|-----------|--------|-----------------|
| Inswinger | 42% | 0.038 | 3.2% |
| Outswinger | 31% | 0.029 | 2.4% |
| Short | 15% | 0.022 | 1.8% |
| Driven | 12% | 0.041 | 3.7% |

### Target Zone Analysis
Near post deliveries showed the highest xG per attempt (0.045) but were also the most frequently defended. Far post deliveries to the back post zone yielded the best risk-adjusted returns.

### Key Variables
The model identified three primary variables driving corner kick xG:
1. **Delivery speed** - Faster deliveries reduced defender reaction time
2. **Number of runners** - More attacking runners in the box correlated with higher xG
3. **Blocking patterns** - Teams using screening runs increased xG by 15%

## Predictive Model Performance
The corner kick xG model achieved an R-squared of 0.72 against actual outcomes, with a Brier score of 0.031, indicating strong predictive accuracy.

## Implications
Teams can significantly improve set-piece returns by focusing on driven deliveries with organized blocking patterns, rather than simply increasing corner kick volume.`,
      es: `## Resumen

Este analisis presenta un modelo xG integral para situaciones de corner en la temporada 2025/26 de la Premier League, examinando patrones de envio y su relacion con la probabilidad de gol.

## Recoleccion de Datos

Analizamos 2,847 corners de las primeras 24 jornadas, categorizando cada uno por:
- **Tipo de envio** - Interior, exterior, corto, directo
- **Zona objetivo** - Primer palo, segundo palo, central, borde del area
- **Primer contacto** - Cabezazo, volea, desvio, controlado

## Resultados del Modelo

### Efectividad por Tipo de Envio
| Tipo | Frecuencia | xG Promedio | Tasa de Conversion |
|------|-----------|--------|-----------------|
| Interior | 42% | 0.038 | 3.2% |
| Exterior | 31% | 0.029 | 2.4% |
| Corto | 15% | 0.022 | 1.8% |
| Directo | 12% | 0.041 | 3.7% |

### Analisis de Zona Objetivo
Los envios al primer palo mostraron el xG mas alto por intento (0.045) pero tambien fueron los mas frecuentemente defendidos. Los envios al segundo palo produjeron los mejores retornos ajustados por riesgo.

### Variables Clave
El modelo identifico tres variables principales que determinan el xG de corners:
1. **Velocidad de envio** - Envios mas rapidos reducen el tiempo de reaccion de los defensores
2. **Numero de rematadores** - Mas atacantes en el area correlacionaron con mayor xG
3. **Patrones de bloqueo** - Equipos usando cortinas aumentaron el xG en un 15%

## Rendimiento del Modelo Predictivo
El modelo xG para corners logro un R-cuadrado de 0.72 contra los resultados reales, con un puntaje Brier de 0.031, indicando una fuerte precision predictiva.

## Implicaciones
Los equipos pueden mejorar significativamente sus resultados en jugadas a balon parado enfocandose en envios directos con patrones de bloqueo organizados, en lugar de simplemente aumentar el volumen de corners.`,
    },
  },
]
