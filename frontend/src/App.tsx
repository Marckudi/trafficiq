import { predictions } from './data/worldcup2026';
import { MatchCard } from './components/MatchCard';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-md mx-auto px-3 pt-12 pb-10">
        {/* Header */}
        <div className="mb-6 px-1">
          <p className="text-[11px] text-gray-600 uppercase tracking-widest font-semibold mb-1">
            Copa del Mundo 2026
          </p>
          <h1 className="text-white text-2xl font-bold tracking-tight">
            ⚽ Predicciones
          </h1>
          <p className="text-[10px] text-gray-600 mt-1">
            XGBoost + Montecarlo (10k sims) + SHAP
          </p>
        </div>

        {/* Match days */}
        {predictions.map((day) => (
          <div key={day.date} className="mb-6">
            <h2 className="text-[11px] text-gray-500 font-semibold uppercase tracking-widest mb-2 px-1">
              {day.dateLabel}
            </h2>
            {day.matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        ))}

        {/* Footer */}
        <p className="text-center text-[10px] text-gray-700 mt-4">
          El modelo se reentrena automáticamente tras cada resultado real.
        </p>
      </div>
    </div>
  );
}
