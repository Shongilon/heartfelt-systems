const Vision = () => {
  // Academic research areas for vision page
  const researchAreas = [
    {
      title: 'Cross-Cultural Emotion Recognition Systems',
      gap: 'Current emotion AI systems exhibit significant cultural and linguistic bias, with most training data derived from English-speaking populations, creating barriers for global clinical deployment.',
      solution: 'Develop culturally-adaptive emotion recognition algorithms that maintain accuracy across diverse linguistic and cultural contexts—enabling deployment from Tel Aviv to Boston to Beijing with equivalent performance.'
    },
    {
      title: 'Multimodal Physiological Emotion Detection',
      gap: 'Existing approaches focus primarily on facial expressions and vocal patterns, overlooking the rich emotional information available in physiological signals such as heart rate variability and galvanic skin response.',
      solution: 'Integrate physiological signal processing with traditional modalities to capture authentic emotional states rather than performed expressions, particularly valuable for individuals with limited facial or vocal expression.'
    },
    {
      title: 'Privacy-Preserving Healthcare Emotion AI',
      gap: 'Current emotion AI architectures require cloud-based processing of highly sensitive emotional and physiological data, creating unacceptable privacy risks for vulnerable patient populations.',
      solution: 'Develop federated learning and edge computing approaches that enable clinical-grade emotion recognition while maintaining complete data locality and patient privacy.'
    }
  ];

  const timelineItems = [
    {
      year: 'Year 1-2: Foundation',
      goal: 'Establish cross-cultural emotion AI framework and validate performance across Hebrew, English, and Mandarin-speaking populations',
      color: 'bg-primary'
    },
    {
      year: 'Year 2-3: Integration', 
      goal: 'Demonstrate clinical viability of privacy-preserving emotion AI in controlled healthcare environments',
      color: 'bg-secondary'
    },
    {
      year: 'Long-term Impact',
      goal: 'Deploy systems that enable ALS families and neurological patients to maintain emotional communication and connection',
      color: 'bg-accent'
    }
  ];

  const expectedContributions = [
    { number: '3-5', label: 'Publications in Top-Tier Venues' },
    { number: '2-3', label: 'Patent Applications' },
    { number: '1+', label: 'Clinical Validation Studies' },
    { number: 'Open', label: 'Source Framework' }
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
            Advancing Cross-Cultural, Privacy-Preserving Emotion AI for Clinical Applications
          </p>
        </div>

        {/* Primary Research Directions */}
        <div className="space-y-8 mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 relative pl-6">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
            Primary Research Directions
          </h2>
          {researchAreas.map((area, index) => (
            <div key={index} className="research-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {area.title}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-destructive text-sm uppercase tracking-wide mb-2">Research Gap:</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">{area.gap}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 text-sm uppercase tracking-wide mb-2">Proposed Solution:</h4>
                  <p className="text-foreground text-lg leading-relaxed font-medium">{area.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Trajectory */}
        <section className="section-spacing bg-muted/30 rounded-lg px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center relative pl-6">
              <span className="absolute left-1/2 -translate-x-1/2 -ml-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
              Research Trajectory
            </h2>
            
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <div key={index} className="bg-background rounded-lg p-6 border-l-4 border-primary hover:shadow-lg transition-all duration-300 hover:translate-x-2">
                  <div className="font-bold text-lg text-primary mb-3">
                    {item.year}
                  </div>
                  <div className="text-foreground font-medium text-lg">
                    {item.goal}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Philosophy */}
        <section className="mb-20 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-foreground mb-8 relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
              Research Philosophy
            </h2>
            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground leading-relaxed">
                I believe the most meaningful research occurs at the intersection of technical rigor 
                and human need. My 15+ years building mission-critical systems has taught me that 
                breakthrough technology means nothing if it fails when people need it most.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This experience drives my commitment to emotion AI research that advances both theoretical 
                understanding and practical clinical applications. I want to help a child with autism 
                communicate their feelings, enable someone with ALS to maintain their emotional voice, 
                and build AI that respects both accuracy and privacy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My defense systems background provides a unique perspective: I understand how to build 
                technology that works reliably in real-world conditions, and I recognize the human cost 
                when systems fail. This is the reliability standard I bring to academic research.
              </p>
            </div>
            
            <div className="research-card mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary">
              <blockquote className="text-2xl text-foreground text-center font-semibold italic relative">
                <span className="absolute -top-4 -left-2 text-6xl text-primary/20">"</span>
                I don't want to just publish papers. I want to build systems that actually reach 
                the families who need them most.
                <span className="absolute -bottom-8 -right-2 text-6xl text-primary/20">"</span>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Research-to-Impact Pathway */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12 relative pl-6">
            <span className="absolute left-1/2 -translate-x-1/2 -ml-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
            Research-to-Impact Pathway
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              {[
                'Research',
                'Clinical Trials', 
                'Real Deployment',
                'Global Impact'
              ].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="research-card w-full text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1">
                    <div className="font-bold text-lg">{step}</div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block text-primary text-2xl font-bold mx-4">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expected Contributions */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12 relative pl-6">
            <span className="absolute left-1/2 -translate-x-1/2 -ml-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
            Expected Contributions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {expectedContributions.map((contribution, index) => (
              <div key={index} className="research-card text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-4xl font-bold text-primary mb-3">
                  {contribution.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {contribution.label}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Vision;