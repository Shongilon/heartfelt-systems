import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams] = useSearchParams();
  const [expandedPeriod, setExpandedPeriod] = useState<string | null>(null);
  const safetyCriticalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = searchParams.get('section');
    if (section === 'safety-critical') {
      setExpandedPeriod('2008-2018');
      
      // Wait for DOM updates and expansion animation
      setTimeout(() => {
        if (safetyCriticalRef.current) {
          // Get the exact position of the title
          const rect = safetyCriticalRef.current.getBoundingClientRect();
          const currentScrollY = window.scrollY;
          const absoluteTop = rect.top + currentScrollY;
          
          // Navigation header is approximately 72px (py-6 = 48px + some buffer)
          const navigationHeight = 72;
          
          // Scroll so the title appears right below the navigation
          window.scrollTo({
            top: absoluteTop - navigationHeight,
            behavior: 'smooth'
          });
        }
      }, 500); // Longer delay to ensure expansion is complete
    }
  }, [searchParams]);

  const timelinePeriods = [
    {
      id: '2008-2018',
      title: 'Safety-Critical Systems',
      subtitle: '2008-2018',
      description: '"I thought perfect code made perfect systems—until users broke every assumption"',
      details: [
        "Led development of avionics systems under DO-178C certification, designing architectures with sub-millisecond timing guarantees and fault-tolerant redundancy",
        "Integrated RiskMinOFN algorithms and SLAD sensor fusion systems to ensure reliability in life-critical flight environments",
        "Established expertise in safety-critical software where interface failures directly impact pilot survival",
        "",
        "**Research Contributions**",
        "",
        "Technical innovations: Timing-constrained architectures, adaptive risk-minimization algorithms, real-time sensor fusion processing",
        "Human factors insights: Cognitive load reduction methodologies, multimodal cueing effectiveness in high-stress environments",
        "Research impact: Peer-reviewed publications, technology transition to operational aircraft programs",
        "",
        "**Degraded Visual Environment Research (2010-2018)**",
        "Directed technical development for multi-year research program on pilot cueing systems for low-visibility rotorcraft operations.",
        "",
        "Advanced human-computer interaction models for safety-critical conditions, focusing on display latency thresholds and multimodal cue integration",
        "Developed adaptive risk assessment algorithms that adjusted warnings based on flight context to prevent false alarms while maintaining safety margins",
        "Conducted validation experiments demonstrating improved pilot situational awareness in brownout, fog, and night flight conditions",
        "",
        "**Key Publication**",
        "",
        "[The Design of Pilot Cueing for the Degraded Visual Environment Mitigation (DVE-M) System for Rotorcraft](https://www.researchgate.net/publication/352108739_The_Design_of_Pilot_Cueing_for_the_Degraded_Visual_Environment_Mitigation_DVE-M_System_for_Rotorcraft)",
        "Vertical Flight Society Forum, 2021 - This peer-reviewed research established foundational principles for human-centered safety systems in extreme environments.",
        "",
        "This foundational work in human-centered safety systems—where understanding pilot cognitive load and stress response was critical to survival—established both the technical framework and philosophical approach that drives my current emotion AI research. The same principles that guided life-critical aviation interfaces now inform how we design technology to understand and respond to human emotional states."
      ]
    },
    {
      id: '2015-2023',
      title: 'Government Research Collaboration',
      subtitle: '2015-2023',
      description: '"Understanding human physiology and perception became more critical than perfecting the technology"',
      details: [
        "Canary physiological monitoring evaluation (U.S. Navy, 2015-2017)",
        "DVE-M pilot cueing systems research (U.S. Army, 2019-2021)",
        "Advanced AI infrastructure development (NVIDIA, 2022-2023)"
      ]
    },
    {
      id: '2023-present',
      title: 'Emotion AI Research',
      subtitle: '2023-Present',
      description: '"From monitoring pilot stress to recognizing human emotions—the same human-centered principles guide both"',
      details: [
        "Technical leadership of real-time physiological signal processing",
        "Neural network development for multimodal emotion recognition",
        "Privacy-preserving healthcare AI system architecture"
      ]
    }
  ];

  return (
    <div className="min-h-screen section-spacing">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-foreground mb-6">
            The Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From building systems that couldn't fail to building systems that can feel
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-16 mb-20">
          {timelinePeriods.map((period, index) => (
            <div 
              key={period.id} 
              className="research-card"
              ref={period.id === '2008-2018' ? safetyCriticalRef : null}
            >
              <div className="mb-6">
                <h3 className="text-foreground mb-3">
                  {period.title}
                </h3>
                <p className="text-muted-foreground font-mono text-sm">
                  {period.subtitle}
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 max-w-4xl">
                {period.description}
              </p>
              
              <button
                onClick={() => setExpandedPeriod(
                  expandedPeriod === period.id ? null : period.id
                )}
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                {expandedPeriod === period.id ? 'Show less' : 'Learn more'} →
              </button>
              
              {expandedPeriod === period.id && (
                <div className="mt-6 pt-6 border-t border-border">
                  <ul className="space-y-3">
                    {period.details.map((detail, i) => {
                      // Handle empty strings as spacing
                      if (detail === "") {
                        return <li key={i} className="h-2" />;
                      }
                      
                      // Handle bold markdown formatting
                      if (detail.startsWith("**") && detail.endsWith("**")) {
                        const boldText = detail.slice(2, -2);
                        return (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
                            <h5 className="text-foreground font-semibold">{boldText}</h5>
                          </li>
                        );
                      }
                      
                      // Handle markdown links
                      const linkMatch = detail.match(/\[([^\]]+)\]\(([^)]+)\)/);
                      if (linkMatch) {
                        const [fullMatch, linkText, url] = linkMatch;
                        const beforeLink = detail.substring(0, detail.indexOf(fullMatch));
                        const afterLink = detail.substring(detail.indexOf(fullMatch) + fullMatch.length);
                        
                        return (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
                            <p className="text-muted-foreground">
                              {beforeLink}
                              <a 
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 transition-colors underline"
                              >
                                {linkText}
                              </a>
                              {afterLink}
                            </p>
                          </li>
                        );
                      }
                      
                      // Regular text
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
                          <p className="text-muted-foreground">{detail}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <section className="section-spacing bg-muted/30 rounded-lg px-8">
          <div className="text-center max-w-5xl mx-auto">
            <blockquote className="text-2xl text-foreground mb-8 mx-auto max-w-none">
              "I believe the most sophisticated AI means nothing if it doesn't understand 
              a grandmother's frustration with her password, or a child's excitement about 
              a new discovery, or the subtle sadness in a voice when someone says they're 'fine.'"
            </blockquote>
          </div>
        </section>

        {/* Personal Story */}
        <section className="section-spacing">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-foreground mb-8">
              My Turning Point
            </h3>
            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground">
                When my cousin was diagnosed with autism at 8, I watched him struggle to express emotions 
                while being incredibly intelligent. This moment made me realize: we're building AI that talks, 
                but not AI that truly communicates.
              </p>
              <p className="text-muted-foreground max-w-3xl">
                Emotion-aware technology isn't just an academic curiosity—it's personally urgent. After 15 years 
                in systems engineering, I've learned that the real frontier isn't making machines faster or more reliable, 
                but making them truly understand us. My work now focuses on building technology that enhances human 
                connection rather than replacing it.
              </p>
              
              <div className="mt-6 text-sm text-muted-foreground">
                <a 
                  href="https://www.linkedin.com/in/itai-katz-esa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  See my professional journey
                </a> from aerospace systems to emotion AI research.
              </div>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="section-spacing bg-muted/30 rounded-lg px-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-foreground mb-8 text-center">From Systems Engineering to Emotion AI</h3>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <p className="text-lg mb-6 text-muted-foreground">I'm a systems engineer who spent 15+ years building technology for extreme reliability—from navigation systems to augmented reality platforms. Now I explore what happens when that same rigor meets human emotion.</p>
                
                <p className="text-lg mb-6 text-muted-foreground">As <strong className="text-foreground">CTO at REACTU.io</strong>, I'm exploring how physiological signals might become a new alphabet of human expression—helping people communicate emotions when words fail.</p>
                
                <p className="text-lg text-muted-foreground max-w-none">What if technology could let emotions travel without words? I believe the engineering discipline that creates unbreakable systems can also create <strong className="text-foreground">technology that truly understands us</strong>.</p>
              </div>
              
              <div>
                <h4 className="text-lg text-secondary mb-4">Core Research Interests</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-base text-foreground mb-2">Multisensory AI for Human Experience</h5>
                    <p className="text-sm text-muted-foreground">Multimodal signal fusion, human-AI symbiosis, real-time neural architectures</p>
                  </div>
                  
                  <div>
                    <h5 className="text-base text-foreground mb-2">Responsive Sensing Environments</h5>
                    <p className="text-sm text-muted-foreground">Wearable sensor networks, ambient intelligence, interactive healthcare interfaces</p>
                  </div>
                  
                  <div>
                    <h5 className="text-base text-foreground mb-2">Social AI & Assistive Technology</h5>
                    <p className="text-sm text-muted-foreground">Emotion-aware systems, communication barrier solutions, AI ethics in healthcare</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Human Challenge */}
            <div className="research-card">
              <h4 className="text-2xl text-foreground mb-6 text-center">The Human Challenge Driving My Research</h4>
              
              <blockquote className="text-xl text-center text-foreground mb-8 max-w-3xl mx-auto">
                "Imagine being fully aware, trapped in a body that cannot express even the simplest emotions. Millions of people live this reality daily."
              </blockquote>
              
              <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
                <div>
                  <span className="text-3xl font-semibold text-secondary">20M+</span>
                  <p className="text-sm text-muted-foreground">People with preserved cognition but cannot express emotions</p>
                </div>
                
                <div>
                  <span className="text-3xl font-semibold text-secondary">4 Conditions</span>
                  <p className="text-sm text-muted-foreground">ALS, locked-in syndrome, cerebral palsy, severe stroke</p>
                </div>
                
                <div>
                  <span className="text-3xl font-semibold text-secondary">Vast Need</span>
                  <p className="text-sm text-muted-foreground">Unmet need in human expression technology</p>
                </div>
              </div>
              
              <p className="text-center text-lg max-w-2xl mx-auto text-muted-foreground">
                REACTU.io creates <strong className="text-foreground">"AI that feels you"</strong> — technology designed to restore dignity and connection for those who need it most.
              </p>
            </div>
            
            {/* Technical Foundation */}
            <div className="mt-12 pt-8 border-t border-border">
              <h4 className="text-lg text-secondary mb-6 text-center">Technical Foundation</h4>
              
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h5 className="text-base text-foreground mb-2">Education & Leadership</h5>
                  <p className="text-muted-foreground">MBA Technology Management (Tel Aviv), B.Sc. Computer Science (Haifa)</p>
                  <p className="text-muted-foreground">Led international teams, managed complex research collaborations</p>
                </div>
                
                <div>
                  <h5 className="text-base text-foreground mb-2">Core Technologies</h5>
                  <p className="text-muted-foreground">PyTorch, multimodal signal processing, biosensor integration, real-time neural networks</p>
                </div>
                
                <div>
                  <h5 className="text-base text-foreground mb-2">Systems Expertise</h5>
                  <p className="text-muted-foreground">Exploring multimodal signals as a new alphabet of human expression, real-time emotion processing architectures</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="text-xs text-muted-foreground">
                  <strong>High-Reliability Systems</strong> → <strong>Spatial Computing</strong> → <strong>AI Manufacturing</strong> → <strong>Emotion AI Research</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;