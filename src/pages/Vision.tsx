import { useState } from 'react';

const Vision = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const researchQuestions = [
    {
      question: 'Can AI recognize sadness in Hebrew the same way it does in English?',
      challenge: 'Most emotion AI is trained on English speakers, creating cultural bias that excludes billions of people.',
      vision: 'I want to build cross-cultural emotion recognition that works for my grandmother in Tel Aviv and my colleagues in Boston.'
    },
    {
      question: 'What if your heartbeat could be a language?',
      challenge: 'We focus on facial expressions and voice, but miss the rich emotional data in physiological signals.',
      vision: 'Imagine emotion AI that reads your body\'s authentic responses, not just your performed expressions.'
    },
    {
      question: 'How do we build emotion AI that enhances privacy instead of threatening it?',
      challenge: 'Current emotion AI requires sending intimate data to the cloud, making it too risky for vulnerable populations.',
      vision: 'Privacy-first emotion AI that processes everything locally while maintaining clinical-grade accuracy.'
    }
  ];

  const timelineItems = [
    {
      year: 'Year 1-2',
      goal: 'Build cross-cultural emotion AI that works universally—from Tel Aviv to Boston to Beijing',
      color: 'bg-primary'
    },
    {
      year: 'Year 2-3', 
      goal: 'Prove that privacy and emotion recognition can coexist in clinical settings',
      color: 'bg-secondary'
    },
    {
      year: 'Long-term',
      goal: 'Deploy systems that genuinely help ALS families and neurological patients stay connected',
      color: 'bg-accent'
    }
  ];

  return (
    <div className="min-h-screen section-spacing">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-foreground mb-6">
            Research Vision & Future Directions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            How 15+ years of systems engineering can advance emotion AI research and clinical deployment
          </p>
        </div>

        {/* Research Questions */}
        <div className="space-y-8 mb-20">
          {researchQuestions.map((item, index) => (
            <div key={index} className="research-card">
              <h3 className="text-2xl text-foreground mb-6">
                {item.question}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-secondary mb-2">The Challenge:</h4>
                  <p className="text-muted-foreground text-lg">{item.challenge}</p>
                </div>
                <div>
                  <h4 className="font-medium text-secondary mb-2">My Vision:</h4>
                  <p className="text-muted-foreground text-lg">{item.vision}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Trajectory */}
        <section className="section-spacing bg-muted/30 rounded-lg px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-foreground mb-12">
              My Research Trajectory  
            </h3>
            
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className={`${item.color} text-primary-foreground font-semibold text-lg px-4 py-2 rounded-md min-w-fit`}>
                    {item.year}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-lg text-muted-foreground">{item.goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Philosophy */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-foreground mb-8">
              My Research Philosophy
            </h3>
            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground">
                I believe the most meaningful research happens at the intersection of technical rigor 
                and human need. My 15+ years building mission-critical systems taught me that 
                breakthrough technology means nothing if it fails when people need it most.
              </p>
              <p className="text-muted-foreground">
                This drives my commitment to emotion AI research that doesn't just advance the field 
                theoretically, but actually reaches the families who need it. I want to help a child 
                with autism communicate their feelings, enable someone with ALS to maintain their 
                emotional voice, and build AI that respects both accuracy and privacy.
              </p>
              <p className="text-muted-foreground">
                My background gives me a unique perspective: I know how to build technology that works 
                reliably in the real world, and I understand the human cost when systems fail. This is 
                the reliability standard I want to bring to academic research.
              </p>
            </div>
            
            <div className="research-card mt-8">
              <blockquote className="text-xl text-foreground text-center">
                "I don't want to just publish papers. I want to build systems that actually reach 
                the families who need them most."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Post-Graduation Impact Vision */}
        <section className="text-center">
          <h3 className="text-foreground mb-8">
            Beyond Research
          </h3>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              {[
                'Research',
                'Clinical Trials', 
                'Real Deployment',
                'Global Impact'
              ].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="research-card w-full text-center">
                    <div className="font-semibold text-lg text-foreground">{step}</div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block text-primary text-2xl mx-4">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <blockquote className="text-xl text-secondary max-w-3xl mx-auto">
            "I don't want to just publish papers. I want to build systems that actually reach 
            the families who need them."
          </blockquote>
        </section>

      </div>
    </div>
  );
};

export default Vision;