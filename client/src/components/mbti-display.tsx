import { mbtiData } from "@/data/personality-data";

interface MBTIDisplayProps {
  mbtiType: string;
}

export default function MBTIDisplay({ mbtiType }: MBTIDisplayProps) {
  const data = mbtiData[mbtiType as keyof typeof mbtiData];

  return (
    <div className="bg-card rounded-lg shadow-lg p-8 border border-border fade-in">
      <h3 className="text-xl font-semibold mb-4">Your MBTI Type</h3>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-2" data-testid="text-mbti-type">
          {mbtiType}
        </div>
        <div className="text-lg text-muted-foreground mb-4" data-testid="text-mbti-title">
          {data.title}
        </div>
        <div className="text-sm text-muted-foreground" data-testid="text-mbti-description">
          {data.description}
        </div>
      </div>
    </div>
  );
}
