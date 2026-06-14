import { ShapFeature as ShapFeatureType } from '../types';

interface Props {
  feature: ShapFeatureType;
  maxVal: number;
}

export function ShapFeatureRow({ feature, maxVal }: Props) {
  const isPositive = feature.value >= 0;
  const pct = Math.min((Math.abs(feature.value) / maxVal) * 100, 100);
  const isNeutral = Math.abs(feature.value) < 1.2;

  const barColor = isNeutral
    ? 'bg-orange-400'
    : isPositive
    ? 'bg-green-500'
    : 'bg-red-500';

  const textColor = isNeutral
    ? 'text-orange-400'
    : isPositive
    ? 'text-green-400'
    : 'text-red-400';

  return (
    <div className="flex items-center gap-2 py-[5px]">
      {/* Feature name */}
      <span className="text-gray-500 text-[10px] leading-tight w-36 shrink-0 text-right">
        {feature.name}
      </span>

      {/* Bar chart (centered zero-line) */}
      <div className="flex flex-1 items-center h-4">
        {/* Negative (left) side */}
        <div className="flex-1 flex justify-end items-center h-full pr-[1px]">
          {!isPositive && (
            <div
              className={`h-[7px] rounded-sm ${barColor}`}
              style={{ width: `${pct}%` }}
            />
          )}
        </div>

        {/* Center divider */}
        <div className="w-px h-3.5 bg-gray-700 shrink-0" />

        {/* Positive (right) side */}
        <div className="flex-1 flex items-center h-full pl-[1px]">
          {isPositive && (
            <div
              className={`h-[7px] rounded-sm ${barColor}`}
              style={{ width: `${pct}%` }}
            />
          )}
        </div>
      </div>

      {/* Value label */}
      <span className={`text-[10px] font-mono w-14 text-right shrink-0 ${textColor}`}>
        {feature.label}
      </span>
    </div>
  );
}
