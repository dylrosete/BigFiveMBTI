import { useState } from "react";
import TraitSlider from "./trait-slider";
import MBTIDisplay from "./mbti-display";
import CharacterMatch from "./character-match";
import Recommendations from "./recommendations";
import { calculateMBTI } from "@/data/personality-data";
import { Button } from "@/components/ui/button";

interface TraitValues {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

export default function PersonalityAnalyzer() {
  const [traits, setTraits] = useState<TraitValues>({
    openness: 50,
    conscientiousness: 50,
    extraversion: 50,
    agreeableness: 50,
    neuroticism: 50,
  });
  
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleTraitChange = (trait: keyof TraitValues, value: number) => {
    setTraits(prev => ({ ...prev, [trait]: value }));
  };

  const mbtiType = calculateMBTI(traits);

  const handleGetRecommendations = () => {
    setShowRecommendations(true);
    setTimeout(() => {
      document.getElementById('recommendations-section')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-2">Personality Trait Analyzer</h1>
            <p className="text-muted-foreground text-lg">Discover your MBTI type and get personalized recommendations</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Trait Sliders Section */}
        <section className="mb-12">
          <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-6 text-center">Adjust Your Personality Traits</h2>
            <div className="space-y-8">
              <TraitSlider
                label="Openness to Experience"
                value={traits.openness}
                onChange={(value) => handleTraitChange('openness', value)}
                lowLabel="Traditional, Practical"
                highLabel="Creative, Curious"
                data-testid="slider-openness"
              />
              <TraitSlider
                label="Conscientiousness"
                value={traits.conscientiousness}
                onChange={(value) => handleTraitChange('conscientiousness', value)}
                lowLabel="Spontaneous, Flexible"
                highLabel="Organized, Disciplined"
                data-testid="slider-conscientiousness"
              />
              <TraitSlider
                label="Extraversion"
                value={traits.extraversion}
                onChange={(value) => handleTraitChange('extraversion', value)}
                lowLabel="Reserved, Introspective"
                highLabel="Outgoing, Energetic"
                data-testid="slider-extraversion"
              />
              <TraitSlider
                label="Agreeableness"
                value={traits.agreeableness}
                onChange={(value) => handleTraitChange('agreeableness', value)}
                lowLabel="Competitive, Direct"
                highLabel="Cooperative, Trusting"
                data-testid="slider-agreeableness"
              />
              <TraitSlider
                label="Neuroticism"
                value={traits.neuroticism}
                onChange={(value) => handleTraitChange('neuroticism', value)}
                lowLabel="Calm, Resilient"
                highLabel="Sensitive, Reactive"
                data-testid="slider-neuroticism"
              />
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <MBTIDisplay mbtiType={mbtiType} />
            <CharacterMatch mbtiType={mbtiType} />
          </div>
        </section>

        {/* Get Recommendations Button */}
        <section className="text-center mb-12">
          <Button
            onClick={handleGetRecommendations}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            data-testid="button-get-recommendations"
          >
            Get Personalized Recommendations
          </Button>
        </section>

        {/* Recommendations Section */}
        {showRecommendations && (
          <Recommendations mbtiType={mbtiType} neuroticismLevel={traits.neuroticism} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">Created by <span className="font-semibold text-foreground">Dylan Rosete</span></p>
            <p className="text-xs mt-2">Personality analysis based on the Big Five model and MBTI theory</p>
          </div>
        </div>
      </footer>
    </>
  );
      }
