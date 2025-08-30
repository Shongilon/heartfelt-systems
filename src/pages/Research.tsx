import { ChevronRight } from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen">
      {/* Research Hero */}
      <section className="section-spacing">
        <div className="container text-center">
          <h1 className="text-foreground mb-6">
            Research Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building AI systems that understand human emotion and enhance human capabilities
          </p>
        </div>
      </section>

      {/* Research Overview */}
      <section className="section-spacing bg-muted/30">
        <div className="container max-w-4xl">
          <div className="research-card">
            <h2 className="text-foreground mb-4">Research Focus Summary</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="text-base text-secondary mb-2">Primary Focus</h3>
                <p className="text-muted-foreground">Emotion AI for assistive communication using physiological signals</p>
              </div>
              <div>
                <h3 className="text-base text-secondary mb-2">Key Contributions</h3>
                <p className="text-muted-foreground">Multi-modal sensor fusion, cross-subject generalization framework, ~94% preliminary accuracy</p>
              </div>
              <div>
                <h3 className="text-base text-secondary mb-2">Research Vision</h3>
                <p className="text-muted-foreground">Emotion as communication medium, not just classification target</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REACTU Research */}
      <section className="section-spacing">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">
              REACTU: AI for Emotional Communication
            </h1>
            <p className="text-xl text-secondary leading-relaxed max-w-4xl mx-auto font-medium">
              Developing novel approaches to translate physiological signals into emotional expression for people with communication barriers
            </p>
          </div>
          
          <div className="research-card bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 mb-16 p-8">
            <h2 className="text-3xl font-semibold text-secondary mb-6">Research Focus</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Can AI reliably infer human emotions directly from physiological signals? I'm exploring 
              multi-modal biosensor approaches for people with preserved cognition but communication 
              barriers—starting with ALS patients, locked-in syndrome, and severe stroke survivors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl text-secondary mb-8">Technical Approach</h3>
              
              <div className="space-y-8">
                <div className="research-card">
                  <h4 className="text-xl text-foreground mb-4">Multi-Modal Sensor Integration</h4>
                  <p className="text-muted-foreground mb-4">Developed novel sensor fusion methodology (currently under IP consideration) that processes synchronized biosignals from multiple channels: skin conductance (GSR), muscle activity (EMG), heart signals (ECG), and motion patterns (IMU). The approach captures subtle physiological changes correlated with emotional states.</p>
                </div>
                
                <div className="research-card">
                  <h4 className="text-xl text-foreground mb-4">Machine Learning Architecture Comparison</h4>
                  <p className="text-muted-foreground mb-4">Conducted systematic comparative analysis of neural network architectures using validated emotion recognition datasets. Implemented rigorous methodology with Leave-One-Subject-Out cross-validation to address the critical challenge of user generalizability.</p>
                  
                  <details className="mt-4">
                    <summary className="cursor-pointer text-primary font-medium flex items-center mb-2">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Research Question: Can Cross-Subject Emotion Prediction Work?
                    </summary>
                    <div className="p-4 bg-muted/30 rounded text-sm space-y-4">
                      <p className="mb-3 text-muted-foreground">Individual physiological responses vary dramatically. I systematically compared six architectures to find approaches that capture shared patterns while handling individual differences.</p>
                      
                      <div className="p-3 bg-secondary/10 rounded text-xs">
                        <strong>Research Insights:</strong> Transformers generalized best across subjects but required more training data. CNN-LSTM balanced temporal dynamics well but struggled with physiological noise. These findings suggest attention mechanisms may be key for cross-subject emotion recognition.
                      </div>
                      
                      <div>
                        <strong>Approach:</strong> Two-stage validation using DREAMER dataset with Leave-One-Subject-Out cross-validation to simulate real-world new-user scenarios.
                      </div>
                    </div>
                  </details>
                </div>
                
                <div className="research-card">
                  <h4 className="text-xl text-foreground mb-4">Privacy-First Architecture</h4>
                  <p className="text-muted-foreground">All processing occurs on edge devices with healthcare-compliant data architecture. No physiological data transmission required, ensuring complete privacy while maintaining real-time performance capabilities.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl text-secondary mb-8">Current Research Status</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="research-card text-center">
                  <span className="text-4xl font-semibold text-primary">~94%</span>
                  <p className="text-sm font-medium text-muted-foreground">Preliminary 6-class accuracy (LOSO validation)</p>
                  <p className="text-xs text-muted-foreground mt-1">On DREAMER dataset</p>
                </div>
                <div className="research-card text-center">
                  <span className="text-4xl font-semibold text-primary">6</span>
                  <p className="text-sm font-medium text-muted-foreground">Neural architectures systematically compared</p>
                  <p className="text-xs text-muted-foreground mt-1">Validated against DREAMER dataset</p>
                </div>
                <div className="research-card text-center">
                  <span className="text-4xl font-semibold text-primary">500ms</span>
                  <p className="text-sm font-medium text-muted-foreground">Current prototype latency</p>
                </div>
                <div className="research-card text-center">
                  <span className="text-4xl font-semibold text-primary">Multi-modal</span>
                  <p className="text-sm font-medium text-muted-foreground">Sensor fusion approach</p>
                </div>
              </div>
              
              <div className="research-card mb-8">
                <h4 className="text-lg text-secondary mb-3">Development Progress</h4>
                <p className="text-muted-foreground mb-4">Multi-modal biosensor system in active development, with comprehensive neural architecture evaluation completed. Validation demonstrates emerging generalizability across diverse users.</p>
                
                <div className="p-4 bg-secondary/10 rounded mb-4">
                  <strong>Planned Next Phase:</strong> Validation studies with 20+ participants across neurological rehabilitation centers.
                </div>
                
                <div className="text-sm">
                  <strong>Next Research Steps:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                    <li>Complete emotion-labeled dataset across 500+ sessions</li>
                    <li>Deploy real-time processing on Shimmer biosensor hardware</li>
                    <li>Validate cross-cultural emotion recognition approaches</li>
                    <li>Establish collaborative protocols with rehabilitation centers</li>
                  </ul>
                </div>
              </div>

              <div className="research-card bg-secondary/5">
                <h4 className="text-lg text-secondary mb-3">Research Gap We're Addressing</h4>
                <p className="text-muted-foreground">Most assistive communication systems reduce human expression to binary outputs. Cross-dataset performance remains the fundamental challenge. My research explores whether nuanced emotional signals can become genuinely communicative—an open question at the intersection of affective computing and human-computer interaction.</p>
              </div>
            </div>
          </div>

          <div className="research-card mt-16">
            <h3 className="text-3xl text-foreground mb-6">Research Depth: Generalization Challenge</h3>
            <p className="text-lg text-center mb-8 text-muted-foreground">This fundamental question drives my work on generalizable emotion AI across diverse human populations.</p>
            
            <div className="mb-8">
              <h4 className="text-2xl text-foreground mb-4">Can AI Generalize Emotion Recognition Across Different People?</h4>
              <p className="text-lg mb-6 text-muted-foreground">Individual physiological responses vary dramatically—what appears as excitement in one person might register as anxiety in another. I developed systematic methodology to test whether neural networks can identify universal patterns despite this variability.</p>
              
              <details>
                <summary className="cursor-pointer text-primary font-medium flex items-center mb-2">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Research Methodology & Findings
                </summary>
                <div className="mt-4 p-4 bg-muted/30 rounded space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-base text-foreground mb-2">Validation Framework</h5>
                      <p className="text-sm mb-3 text-muted-foreground">Built two-stage evaluation: rapid architecture comparison followed by Leave-One-Subject-Out cross-validation. This simulates the real challenge—can the system work for someone it has never encountered?</p>
                      <div className="p-2 bg-secondary/10 rounded text-xs">
                        <strong>Key Insight:</strong> Standard train/test splits mask generalization problems. Only LOSO reveals which approaches work for new users.
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-base text-foreground mb-2">What I Discovered</h5>
                      <p className="text-sm text-muted-foreground">Some architectures excel at memorizing individual patterns but fail on new people. Others find genuine cross-subject patterns but lose individual nuance. The research challenge is finding approaches that balance both needs.</p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            
            <div>
              <h4 className="text-xl text-foreground mb-4">Questions This Opens</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground">How much individual calibration can we eliminate while preserving emotional authenticity?</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Can cultural differences in emotional expression be captured through physiological signal analysis?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Research */}
      <section className="section-spacing bg-muted/30">
        <div className="container">
          <h2 className="text-2xl text-foreground text-center mb-8">Supporting Research Experience</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <details className="research-card">
              <summary className="cursor-pointer font-medium text-lg text-foreground flex items-center">
                <ChevronRight className="w-4 h-4 mr-2" />
                Enhanced Vision Systems Research
              </summary>
              <div className="mt-4 space-y-3">
                <p className="text-muted-foreground">Developed AI vision systems that enhance perception in challenging environments, adapting output to human cognitive load and attention patterns.</p>
                <div className="text-sm">
                  <strong>Key Insights:</strong> Systems that simplify visual information during user stress, 3D AR interfaces without cognitive overload, multi-spectral integration for enhanced perception.
                </div>
                <div className="mt-3 p-3 bg-secondary/10 rounded text-sm">
                  <strong>Connection to Current Work:</strong> Informed multi-spectral integration techniques and adaptive processing methods for emotion sensing systems.
                </div>
              </div>
            </details>

            <details className="research-card">
              <summary className="cursor-pointer font-medium text-lg text-foreground flex items-center">
                <ChevronRight className="w-4 h-4 mr-2" />
                Physiological State Monitoring Research
              </summary>
              <div className="mt-4 space-y-3">
                <p className="text-muted-foreground">Developed systems that monitor human stress and attention without behavioral interference, exploring how technology understands physical state to provide better support.</p>
                <div className="text-sm">
                  <strong>Key Insights:</strong> Multimodal sensing for comprehensive state detection, edge processing for immediate adaptation, unobtrusive sensor integration.
                </div>
                <div className="mt-3 p-3 bg-secondary/10 rounded text-sm">
                  <strong>Connection to Current Work:</strong> Established foundation for unobtrusive biosensor integration and real-time physiological signal processing.
                </div>
              </div>
            </details>
          </div>

          <div className="mt-8 text-center p-6 bg-secondary/5 rounded">
            <p className="text-base text-muted-foreground text-center"><strong>Additional Experience:</strong> AI reliability research in precision manufacturing environments, informing quality assurance methods for clinical emotion AI deployment.</p>
          </div>
        </div>
      </section>

      {/* Research Vision */}
      <section className="section-spacing">
        <div className="container max-w-5xl text-center">
          <h2 className="text-3xl text-foreground mb-8">
            Research Vision
          </h2>
          
          <blockquote className="text-2xl text-secondary mb-6">
            "I'm exploring how technology can become emotionally literate. Systems that don't just calculate, but connect—not just respond, but relate."
          </blockquote>
          
          <p className="text-lg max-w-3xl mx-auto mb-12 text-muted-foreground">My work bridges rigorous engineering with deep human understanding. Every algorithm is tested not just for accuracy, but for reliability, cultural sensitivity, and genuine benefit to people who need technology most.</p>
          
          <div className="mb-12">
            <h3 className="text-2xl text-foreground mb-8">Questions That Drive My Research</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="research-card">
                <h4 className="text-lg text-foreground mb-3">Cross-Cultural Emotion AI</h4>
                <p className="text-sm text-muted-foreground">How do we build emotion recognition that works universally while respecting cultural differences in emotional expression?</p>
              </div>
              
              <div className="research-card">
                <h4 className="text-lg text-foreground mb-3">Privacy-Preserving AI</h4>
                <p className="text-sm text-muted-foreground">Can we enable collaborative AI research while maintaining patient privacy through federated learning approaches?</p>
              </div>
              
              <div className="research-card">
                <h4 className="text-lg text-foreground mb-3">Creative Applications</h4>
                <p className="text-sm text-muted-foreground">How might emotion-aware AI enable new art forms or modes of shared experience?</p>
              </div>
              
              <div className="research-card bg-secondary/10 border-2 border-secondary/20">
                <h4 className="text-xl text-secondary mb-3">Future of Human Communication</h4>
                <p className="text-lg text-muted-foreground">What new forms of communication might emerge if technology could truly feel us back? How might this reshape human expression and connection?</p>
              </div>
            </div>
          </div>
          
          <div className="research-card bg-primary/10 text-center">
            <h3 className="text-2xl text-primary mb-6">Research Philosophy</h3>
            <p className="text-lg mb-4 text-muted-foreground">I don't want to just publish papers. I want to build systems that actually reach the families who need them most.</p>
            <p className="text-muted-foreground mb-8">This means designing for reliability, accessibility, and human dignity from the ground up. My engineering background ensures research can transition from lab prototypes to real-world clinical systems.</p>
          </div>
          
          <div className="py-12">
            <blockquote className="text-2xl text-secondary max-w-3xl mx-auto">
              "This is not just research—it's the foundation for technologies that can restore voices and reshape how humans connect."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;