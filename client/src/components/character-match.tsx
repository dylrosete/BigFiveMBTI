import { mbtiData } from "@/data/personality-data";

interface CharacterMatchProps {
  mbtiType: string;
}

export default function CharacterMatch({ mbtiType }: CharacterMatchProps) {
  const data = mbtiData[mbtiType as keyof typeof mbtiData];
  const character = data.character;

  return (
    <div className="bg-card rounded-lg shadow-lg p-8 border border-border fade-in">
      <h3 className="text-xl font-semibold mb-4">Your Character Match</h3>
      <div className="text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-4xl font-bold pulse-subtle" data-testid="img-character">
          {character.initials}
        </div>
        <div className="text-xl font-semibold mb-2" data-testid="text-character-name">
          {character.name}
        </div>
        <div className="text-sm text-muted-foreground mb-2" data-testid="text-character-source">
          {character.source}
        </div>
        <div className="text-sm text-muted-foreground" data-testid="text-character-description">
          {character.description}
        </div>
      </div>
    </div>
  );
}
