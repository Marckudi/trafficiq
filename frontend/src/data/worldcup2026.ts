import { DayPredictions } from '../types';

export const predictions: DayPredictions[] = [
  {
    date: '2026-06-11',
    dateLabel: 'Jueves, 11 De Junio',
    matches: [
      {
        id: 'mex-rsa',
        homeTeam: 'México',
        awayTeam: 'South Africa',
        homeFlag: '🇲🇽',
        awayFlag: '🇿🇦',
        predictedHome: 1,
        predictedAway: 0,
        probHome: 0.44,
        probDraw: 0.29,
        probAway: 0.27,
        oddsHome: 2.27,
        oddsDraw: 3.45,
        oddsAway: 3.70,
        group: 'Grupo B',
        venue: 'SoFi Stadium, Los Ángeles',
        time: '01:00',
        shapFeatures: [
          { name: 'Diferencia de Elo',              value:  8.368, label: '+8.368' },
          { name: 'Racha del local',                value: -5.131, label: '-5.131' },
          { name: 'Cancha neutral',                 value:  1.204, label: '+1.204' },
          { name: 'En del local (Ult. 3)',          value:  8.900, label: '+8.900' },
          { name: 'Goles en contra local (Ult. 3)', value: -0.900, label: '-0.900' },
        ],
        consensusText:
          'Las 10.000 simulaciones de Montecarlo proyectan a México como favorito con el marcador 1-0 como el más probable. El marcador sale del consenso de esas simulaciones por equipo; aunque el modelo me indica margen estrecho (salió el 1-0 de México vs. Sudáfrica). Con SHAP me dice que el marcador proyectado sale del consenso de esas 10.000 simulaciones por equipo y lo proyecta el más probable.'
      }
    ]
  },
  {
    date: '2026-06-12',
    dateLabel: 'Viernes, 12 De Junio',
    matches: [
      {
        id: 'kor-cze',
        homeTeam: 'South Korea',
        awayTeam: 'Czech Republic',
        homeFlag: '🇰🇷',
        awayFlag: '🇨🇿',
        predictedHome: 1,
        predictedAway: 3,
        probHome: 0.27,
        probDraw: 0.25,
        probAway: 0.48,
        oddsHome: 3.70,
        oddsDraw: 4.00,
        oddsAway: 2.08,
        group: 'Grupo E',
        venue: 'MetLife Stadium, Nueva York',
        time: '18:00',
        shapFeatures: [
          { name: 'Diferencia de Elo',              value: -4.120, label: '-4.120' },
          { name: 'Racha del local',                value:  2.438, label: '+2.438' },
          { name: 'Cancha neutral',                 value:  3.201, label: '+3.201' },
          { name: 'En del local (Ult. 3)',          value:  3.560, label: '+3.560' },
          { name: 'Goles en contra local (Ult. 3)', value: -6.340, label: '-6.340' },
        ],
        consensusText:
          'Las 10.000 simulaciones proyectan a República Checa como favorita con un marcador 3-1. La diferencia de Elo negativa y la capacidad defensiva checa son los factores determinantes según el análisis SHAP.'
      },
      {
        id: 'can-bih',
        homeTeam: 'Canada',
        awayTeam: 'Bosnia & Herz.',
        homeFlag: '🇨🇦',
        awayFlag: '🇧🇦',
        predictedHome: 1,
        predictedAway: 0,
        probHome: 0.48,
        probDraw: 0.28,
        probAway: 0.24,
        oddsHome: 2.08,
        oddsDraw: 3.57,
        oddsAway: 4.17,
        group: 'Grupo F',
        venue: 'BMO Field, Toronto',
        time: '21:00',
        shapFeatures: [
          { name: 'Diferencia de Elo',              value:  5.672, label: '+5.672' },
          { name: 'Racha del local',                value:  3.820, label: '+3.820' },
          { name: 'Cancha neutral',                 value: -2.104, label: '-2.104' },
          { name: 'En del local (Ult. 3)',          value:  4.310, label: '+4.310' },
          { name: 'Goles en contra local (Ult. 3)', value: -1.230, label: '-1.230' },
        ],
        consensusText:
          'Las 10.000 simulaciones favorecen a Canadá jugando en casa con un marcador ajustado 1-0. La ventaja local y la diferencia de Elo son los factores clave según el análisis SHAP.'
      }
    ]
  }
];
