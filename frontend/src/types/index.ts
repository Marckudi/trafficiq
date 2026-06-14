export interface ShapFeature {
  name: string;
  value: number;
  label: string;
}

export interface MatchPrediction {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
  predictedHome: number;
  predictedAway: number;
  probHome: number;
  probDraw: number;
  probAway: number;
  oddsHome: number;
  oddsDraw: number;
  oddsAway: number;
  shapFeatures: ShapFeature[];
  consensusText: string;
  group: string;
  venue: string;
  time: string;
}

export interface DayPredictions {
  date: string;
  dateLabel: string;
  matches: MatchPrediction[];
}
