import { mbtiData, neuroticismSupport } from "@/data/personality-data";

interface RecommendationsProps {
  mbtiType: string;
  neuroticismLevel: number;
}

export default function Recommendations({ mbtiType, neuroticismLevel }: RecommendationsProps) {
  const data = mbtiData[mbtiType as keyof typeof mbtiData];
  const showNeuroticismSupport = neuroticismLevel >= 70;
  const supportData = showNeuroticismSupport ? neuroticismSupport[mbtiType as keyof typeof neuroticismSupport] : null;

  return (
    <section id="recommendations-section">
      <div className="space-y-8">
        {/* Books Section */}
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border fade-in">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            📚 Recommended Books
          </h3>
          <div className="grid md:grid-cols-3 gap-4" data-testid="section-book-recommendations">
            {data.books.map((book, index) => (
              <div key={index} className="bg-secondary p-4 rounded-lg">
                <div className="text-sm font-medium">{book}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Anime Section */}
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border fade-in">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            🎌 Recommended Anime
          </h3>
          <div className="grid md:grid-cols-3 gap-4" data-testid="section-anime-recommendations">
            {data.anime.map((anime, index) => (
              <div key={index} className="bg-secondary p-4 rounded-lg">
                <div className="text-sm font-medium">{anime}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border fade-in">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            🎯 Recommended Activities
          </h3>
          <div className="space-y-4" data-testid="section-activity-recommendations">
            {data.activities.map((activity, index) => (
              <div key={index} className="bg-secondary p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="text-lg">✓</div>
                  <div className="text-sm">{activity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High Neuroticism Support */}
        {showNeuroticismSupport && supportData && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg shadow-lg p-8 fade-in">
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-destructive">
              🧘 Additional Support for Emotional Sensitivity
            </h3>
            <div className="space-y-4" data-testid="section-neuroticism-support">
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📖 Additional Reading:</h4>
                <ul className="text-sm space-y-1">
                  {supportData.books.map((book, index) => (
                    <li key={index}>• {book}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🏃 Recommended Activities:</h4>
                <ul className="text-sm space-y-1">
                  {supportData.activities.map((activity, index) => (
                    <li key={index}>• {activity}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚫 Things to Avoid:</h4>
                <ul className="text-sm space-y-1">
                  {supportData.avoid.map((avoid, index) => (
                    <li key={index}>• {avoid}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
