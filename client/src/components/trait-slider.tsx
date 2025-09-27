interface TraitSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  lowLabel: string;
  highLabel: string;
  'data-testid'?: string;
}

export default function TraitSlider({ 
  label, 
  value, 
  onChange, 
  lowLabel, 
  highLabel,
  'data-testid': testId 
}: TraitSliderProps) {
  return (
    <div className="trait-container">
      <div className="flex justify-between items-center mb-3">
        <label className="text-lg font-medium">{label}</label>
        <span className="text-sm bg-secondary px-3 py-1 rounded-full" data-testid={`${testId}-value`}>
          {value}
        </span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="trait-slider w-full"
        data-testid={testId}
      />
      <div className="flex justify-between text-sm text-muted-foreground mt-2">
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </div>
    </div>
  );
}
