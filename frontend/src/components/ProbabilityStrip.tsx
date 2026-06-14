interface Props {
  probHome: number;
  probDraw: number;
  probAway: number;
}

export function ProbabilityStrip({ probHome, probDraw, probAway }: Props) {
  const h = Math.round(probHome * 100);
  const d = Math.round(probDraw * 100);
  const a = 100 - h - d;

  return (
    <div className="space-y-1.5">
      {/* Segmented bar */}
      <div className="flex h-1.5 w-full rounded-full overflow-hidden gap-[2px]">
        <div className="bg-green-500 rounded-l-full transition-all" style={{ width: `${h}%` }} />
        <div className="bg-yellow-400 transition-all" style={{ width: `${d}%` }} />
        <div className="bg-red-500 rounded-r-full transition-all" style={{ width: `${a}%` }} />
      </div>

      {/* Percentage labels */}
      <div className="flex text-[11px] font-semibold">
        <div className="flex-1 text-center text-green-400">{h}%</div>
        <div className="flex-1 text-center text-yellow-400">{d}%</div>
        <div className="flex-1 text-center text-red-400">{a}%</div>
      </div>

      {/* 1 / X / 2 labels */}
      <div className="flex text-[10px] text-gray-600">
        <div className="flex-1 text-center">1</div>
        <div className="flex-1 text-center">X</div>
        <div className="flex-1 text-center">2</div>
      </div>
    </div>
  );
}
