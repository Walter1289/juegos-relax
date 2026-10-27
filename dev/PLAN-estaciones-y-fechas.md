# Plan: eventos por estación y fechas importantes

Base ya existente: `season.js` (estación por fecha o manual), `rio/festival.js` (festival del castillo), ceremonias de linternas (`lightmsg.js`).
Regla: nada avanza sin el control del jugador; sin destellos (WCAG 2.3.1); todo opcional y sin castigo por no venir.

## Eventos por estación (se activan por la fecha real del jugador)
| Estación | Evento | Qué se ve / hace |
|---|---|---|
| Primavera (mar–may) | Hanami | Pétalos más densos, picnics en la orilla, un sello *goshuin* especial al pasar bajo el jardín de sakura |
| Verano (jun–ago) | Hotaru + Obon | Luciérnagas en los juncos (ya hay `fireflies.js`); en agosto, tōrō nagashi: las ceremonias dan un sello extra |
| Otoño (sep–nov) | Tsukimi + momiji | Luna llena grande, dango y susuki en la orilla; hojas rojas |
| Invierno (dic–feb) | Hatsumōde / nieve | Nieve suave, torii con campanas, el templo ofrece el primer deseo del año |

## Fechas (calendario del jugador)
- 3 feb Setsubun · 3 mar Hinamatsuri · 5 may Kodomo no Hi (koinobori, ya en el festival)
- 7 jul Tanabata (tiras de deseos *tanzaku* en bambú) · mediados de ago Obon · septiembre-octubre Tsukimi
- 7 nov Shichi-go-san · 31 dic Ōmisoka (Gran ceremonia especial: 108 campanadas) · 1–3 ene Hatsumōde
- Ventana de ±3 días alrededor de cada fecha; fuera de ella no ocurre nada (sin presión).

## Orden de trabajo sugerido
1. Módulo `calendario.js`: `eventoActivo()` devuelve {id, estación, fecha} y un modo de prueba `?fecha=2026-12-31`.
2. Goshuin-chō (libro de sellos): un sello por lugar de la vuelta + sellos estacionales; guarda en `rio3d-goshuin`.
3. Primer evento completo: Ōmisoka (reutiliza la Gran ceremonia) y Tanabata (tanzaku en bambú).
4. Resto de eventos, de menor a mayor coste.

## Cuidados
- Textos en japonés revisados por un hablante nativo antes de publicar.
- Respeto al contexto religioso: tono sobrio, sin humor ni monetización.
- Hemisferio: las estaciones japonesas usan la fecha del calendario aunque el jugador esté en el sur; ofrecer ajuste manual (ya existe en Ajustes).
