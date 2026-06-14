import { useState } from 'react';
import { MatchPrediction } from '../types';
import { ProbabilityStrip } from './ProbabilityStrip';
import { ShapFeatureRow } from './ShapFeature';

interface Props {
  match: MatchPrediction;
}

export function MatchCard({ match }: Props) {
  const [open, setOpen] = useState(false);
  const maxShap = Math.max(...match.shapFeatures.map((f) => Math.abs(f.value)));

  return (
    <div className="bg-[#111111] rounded-2xl mb-3 overflow-hidden">
      {/* Group / venue header */}
      <div className="px-4 pt-3 pb-1">
        <p className="text-[10px] text-gray-600 leading-snug">
          FG: {match.group} · {match.time}h · {match.venue}
        </p>
      </div>

      {/* Teams + score */}
      <div className="flex items-center justify-between px-4 pb-3 gap-3">
        {/* Home */}
        <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
          <span className="text-3xl leading-none">{match.homeFlag}</span>
          <span className="text-[11px] text-gray-200 font-medium text-center leading-tight line-clamp-2">
            {match.homeTeam}
          </span>
        </div>

        {/* Score box */}
        <div className="flex items-center gap-1.5 bg-[#1c1c1c] rounded-xl px-5 py-2.5 shrink-0">
          <span className="text-white text-xl font-bold tabular-nums">{match.predictedHome}</span>
          <span className="text-gray-600 text-sm font-light">-</span>
          <span className="text-white text-xl font-bold tabular-nums">{match.predictedAway}</span>
        </div>

        {/* Away */}
        <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
          <span className="text-3xl leading-none">{match.awayFlag}</span>
          <span className="text-[11px] text-gray-200 font-medium text-center leading-tight line-clamp-2">
            {match.awayTeam}
          </span>
        </div>
      </div>

      {/* Probability strip */}
      <div className="px-4 pb-3">
        <ProbabilityStrip
          probHome={match.probHome}
          probDraw={match.probDraw}
          probAway={match.probAway}
        />
      </div>

      {/* Odds row */}
      <div className="flex border-t border-b border-[#1e1e1e] divide-x divide-[#1e1e1e]">
        {[
          { label: 'Local', val: match.oddsHome, color: 'text-green-400' },
          { label: 'Empate', val: match.oddsDraw, color: 'text-yellow-400' },
          { label: 'Visitante', val: match.oddsAway, color: 'text-red-400' },
        ].map(({ label, val, color }) => (
          <div key={label} className="flex-1 py-2 text-center">
            <p className="text-[9px] text-gray-600 uppercase tracking-wide mb-0.5">{label}</p>
            <p className={`text-sm font-bold ${color}`}>{val.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Why button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left active:bg-[#1a1a1a] transition-colors"
      >
        <span className="text-[11px] text-gray-400 font-semibold">¿Por qué?</span>
        <svg
          className={`w-3.5 h-3.5 text-gray-600 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* SHAP explanation */}
      {open && (
        <div className="px-4 pb-5">
          <div className="border-t border-[#1e1e1e] pt-3 space-y-0">
            {match.shapFeatures.map((f) => (
              <ShapFeatureRow key={f.name} feature={f} maxVal={maxShap} />
            ))}
          </div>
          <p className="text-[10px] text-gray-600 mt-3 leading-relaxed">
            {match.consensusText}
          </p>
        </div>
      )}
    </div>
  );
}
