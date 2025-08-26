import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen">
      {/* Research Hero */}
      <section className="research-hero py-20 bg-gradient-subtle">
        <div className="container text-center">
          <motion.h1 
            className="text-h1 text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Research Portfolio
          </motion.h1>
          <motion.p 
            className="text-body-lg text-text-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building AI systems that understand human emotion and enhance human capabilities
          </motion.p>
        </div>
      </section>

      {/* Research Overview */}
      <section className="research-overview py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <motion.div 
            className="overview-card bg-background rounded-2xl shadow-card p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-h2 text-foreground text-center mb-8">Research Focus Summary</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="focus-card p-6 bg-muted/50 rounded-xl">
                <h3 className="text-h4 text-foreground mb-3">Primary Focus</h3>
                <p className="text-body text-text-light">Emotion AI for assistive communication using physiological signals</p>
              </div>
              <div className="focus-card p-6 bg-muted/50 rounded-xl">
                <h3 className="text-h4 text-foreground mb-3">Key Contributions</h3>
                <p className="text-body text-text-light">Multi-modal sensor fusion, cross-subject generalization framework, ~94% preliminary accuracy</p>
              </div>
              <div className="focus-card p-6 bg-muted/50 rounded-xl">
                <h3 className="text-h4 text-foreground mb-3">Research Vision</h3>
                <p className="text-body text-text-light">Emotion as communication medium, not just classification target</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REACTU - Primary Research Focus */}
      <section className="hero-project py-24">
        <div className="container">
          <div className="project-intro mb-16">
            <motion.h2 
              className="font-heading text-4xl text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              REACTU: AI for Emotional Communication
            </motion.h2>
            <motion.p 
              className="text-xl text-secondary mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Developing novel approaches to translate physiological signals into emotional expression for people with communication barriers
            </motion.p>
            
            <motion.div 
              className="research-question bg-accent/10 p-8 rounded-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-heading text-2xl text-accent mb-4">Research Focus</h3>
              <p className="text-lg">Can AI reliably infer human emotions directly from physiological signals? I'm exploring multi-modal biosensor approaches for people with preserved cognition but communication barriers—starting with ALS patients, locked-in syndrome, and severe stroke survivors.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              className="research-approach"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-heading text-3xl text-secondary mb-8">Technical Approach</h3>
              
              <div className="approach-details space-y-8">
                <div className="detail-block">
                  <h4 className="font-heading text-xl text-primary mb-4">Multi-Modal Sensor Integration</h4>
                  <p className="text-base mb-4">Developed novel sensor fusion methodology (currently under IP consideration) that processes synchronized biosignals from multiple channels: skin conductance (GSR), muscle activity (EMG), heart signals (ECG), and motion patterns (IMU). The approach captures subtle physiological changes correlated with emotional states.</p>
                </div>
                
                <div className="detail-block">
                  <h4 className="font-heading text-xl text-primary mb-4">Machine Learning Architecture Comparison</h4>
                  <p className="text-base mb-4">Conducted systematic comparative analysis of neural network architectures using validated emotion recognition datasets. Implemented rigorous methodology with Leave-One-Subject-Out cross-validation to address the critical challenge of user generalizability.</p>
                  
                  <details className="technical-implementation">
                    <summary className="cursor-pointer text-primary font-heading flex items-center mb-2">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Research Question: Can Cross-Subject Emotion Prediction Work?
                    </summary>
                    <div className="p-4 bg-primary/5 rounded text-sm space-y-4">
                      <div className="research-approach">
                        <p className="mb-3">Individual physiological responses vary dramatically. I systematically compared six architectures to find approaches that capture shared patterns while handling individual differences.</p>
                      </div>
                      
                      <div className="key-finding p-3 bg-accent/10 rounded">
                        <strong>Research Insights:</strong> Transformers generalized best across subjects but required more training data. CNN-LSTM balanced temporal dynamics well but struggled with physiological noise. These findings suggest attention mechanisms may be key for cross-subject emotion recognition.
                      </div>
                      
                      <div className="methodology-brief">
                        <strong>Approach:</strong> Two-stage validation using DREAMER dataset with Leave-One-Subject-Out cross-validation to simulate real-world new-user scenarios.
                      </div>
                    </div>
                  </details>
                </div>
                
                <div className="detail-block">
                  <h4 className="font-heading text-xl text-primary mb-4">Privacy-First Architecture</h4>
                  <p className="text-base">All processing occurs on edge devices with healthcare-compliant data architecture. No physiological data transmission required, ensuring complete privacy while maintaining real-time performance capabilities.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="research-results"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="font-heading text-3xl text-secondary mb-8">Current Research Status</h3>
              
              <div className="metrics-grid grid grid-cols-2 gap-6 mb-10">
                <div className="metric text-center p-6 bg-background rounded-lg shadow-sm hover-scale">
                  <span className="text-4xl font-heading text-primary">~94%</span>
                  <p className="text-sm font-medium">Preliminary 6-class accuracy (LOSO validation)</p>
                  <p className="text-xs text-text-light mt-1">On DREAMER dataset</p>
                </div>
                <div className="metric text-center p-6 bg-background rounded-lg shadow-sm hover-scale">
                  <span className="text-4xl font-heading text-primary">6</span>
                  <p className="text-sm font-medium">Neural architectures systematically compared</p>
                  <p className="text-xs text-text-light mt-1">Validated against DREAMER dataset</p>
                </div>
                <div className="metric text-center p-6 bg-background rounded-lg shadow-sm hover-scale">
                  <span className="text-4xl font-heading text-primary">500ms</span>
                  <p className="text-sm font-medium">Current prototype latency</p>
                </div>
                <div className="metric text-center p-6 bg-background rounded-lg shadow-sm hover-scale">
                  <span className="text-4xl font-heading text-primary">Multi-modal</span>
                  <p className="text-sm font-medium">Sensor fusion approach</p>
                </div>
              </div>
              
              <div className="current-status p-6 bg-background rounded-xl mb-8">
                <h4 className="font-heading text-lg text-secondary mb-3">Development Progress</h4>
                <p className="text-base mb-4">Multi-modal biosensor system in active development, with comprehensive neural architecture evaluation completed. Validation demonstrates emerging generalizability across diverse users.</p>
                
                <div className="next-phase-highlight p-4 bg-accent/10 rounded mb-4">
                  <strong>Planned Next Phase:</strong> Validation studies with 20+ participants across neurological rehabilitation centers.
                </div>
                
                <div className="roadmap-highlights text-sm">
                  <strong>Next Research Steps:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Complete emotion-labeled dataset across 500+ sessions</li>
                    <li>Deploy real-time processing on Shimmer biosensor hardware</li>
                    <li>Validate cross-cultural emotion recognition approaches</li>
                    <li>Establish collaborative protocols with rehabilitation centers</li>
                  </ul>
                </div>
              </div>

              <div className="research-gap p-6 bg-accent/5 rounded-xl">
                <h4 className="font-heading text-lg text-accent mb-3">Research Gap We're Addressing</h4>
                <p className="text-base">Most assistive communication systems reduce human expression to binary outputs. Cross-dataset performance remains the fundamental challenge. My research explores whether nuanced emotional signals can become genuinely communicative—an open question at the intersection of affective computing and human-computer interaction.</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="research-depth mt-16 p-10 bg-background rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h3 className="font-heading text-3xl text-primary mb-6">Research Depth: Generalization Challenge</h3>
            <p className="text-lg text-center mb-8">This fundamental question drives my work on generalizable emotion AI across diverse human populations.</p>
            
            <div className="core-question mb-8">
              <h4 className="font-heading text-2xl text-primary mb-4">Can AI Generalize Emotion Recognition Across Different People?</h4>
              <p className="text-lg mb-6">Individual physiological responses vary dramatically—what appears as excitement in one person might register as anxiety in another. I developed systematic methodology to test whether neural networks can identify universal patterns despite this variability.</p>
              
              <details className="methodology-details">
                <summary className="cursor-pointer text-primary font-heading flex items-center mb-2">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Research Methodology & Findings
                </summary>
                <div className="mt-4 p-4 bg-primary/5 rounded space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="methodology">
                      <h5 className="font-heading text-base text-primary mb-2">Validation Framework</h5>
                      <p className="text-sm mb-3">Built two-stage evaluation: rapid architecture comparison followed by Leave-One-Subject-Out cross-validation. This simulates the real challenge—can the system work for someone it has never encountered?</p>
                      <div className="insight-highlight p-2 bg-accent/10 rounded text-xs">
                        <strong>Key Insight:</strong> Standard train/test splits mask generalization problems. Only LOSO reveals which approaches work for new users.
                      </div>
                    </div>
                    
                    <div className="findings">
                      <h5 className="font-heading text-base text-primary mb-2">What I Discovered</h5>
                      <p className="text-sm">Some architectures excel at memorizing individual patterns but fail on new people. Others find genuine cross-subject patterns but lose individual nuance. The research challenge is finding approaches that balance both needs.</p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            
            <div className="future-questions">
              <h4 className="font-heading text-xl text-primary mb-4">Questions This Opens</h4>
              <div className="questions-grid grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-base">How much individual calibration can we eliminate while preserving emotional authenticity?</p>
                </div>
                <div>
                  <p className="text-base">Can cultural differences in emotional expression be captured through physiological signal analysis?</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supporting Research Experience */}
      <section className="research-foundations py-16 bg-background">
        <div className="container">
          <h2 className="font-heading text-2xl text-primary text-center mb-8">Supporting Research Experience</h2>
          
          <div className="foundations-grid grid md:grid-cols-2 gap-8">
            <details className="foundation-project p-6 bg-primary/5 rounded-xl">
              <summary className="cursor-pointer font-heading text-lg text-primary flex items-center">
                <ChevronRight className="w-4 h-4 mr-2" />
                Enhanced Vision Systems Research
              </summary>
              <div className="mt-4 space-y-3">
                <p className="text-base">Developed AI vision systems that enhance perception in challenging environments, adapting output to human cognitive load and attention patterns.</p>
                <div className="research-insights text-sm">
                  <strong>Key Insights:</strong> Systems that simplify visual information during user stress, 3D AR interfaces without cognitive overload, multi-spectral integration for enhanced perception.
                </div>
                <div className="connection-note mt-3 p-3 bg-accent/10 rounded text-sm">
                  <strong>Connection to Current Work:</strong> Informed multi-spectral integration techniques and adaptive processing methods for emotion sensing systems.
                </div>
              </div>
            </details>

            <details className="foundation-project p-6 bg-secondary/5 rounded-xl">
              <summary className="cursor-pointer font-heading text-lg text-primary flex items-center">
                <ChevronRight className="w-4 h-4 mr-2" />
                Physiological State Monitoring Research
              </summary>
              <div className="mt-4 space-y-3">
                <p className="text-base">Developed systems that monitor human stress and attention without behavioral interference, exploring how technology understands physical state to provide better support.</p>
                <div className="research-insights text-sm">
                  <strong>Key Insights:</strong> Multimodal sensing for comprehensive state detection, edge processing for immediate adaptation, unobtrusive sensor integration.
                </div>
                <div className="connection-note mt-3 p-3 bg-accent/10 rounded text-sm">
                  <strong>Connection to Current Work:</strong> Established foundation for unobtrusive biosensor integration and real-time physiological signal processing.
                </div>
              </div>
            </details>
          </div>

          <div className="reliability-note mt-8 text-center p-4 bg-accent/5 rounded">
            <p className="text-sm"><strong>Additional Experience:</strong> AI reliability research in precision manufacturing environments, informing quality assurance methods for clinical emotion AI deployment.</p>
          </div>
        </div>
      </section>

      {/* Research Vision */}
      <section className="research-vision py-20">
        <div className="container max-w-5xl">
          <motion.h2 
            className="font-heading text-3xl text-primary text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Research Vision
          </motion.h2>
          
          <motion.div 
            className="vision-statement text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <blockquote className="text-2xl font-heading text-secondary italic mb-6">
              "I'm exploring how technology can become emotionally literate. Systems that don't just calculate, but connect—not just respond, but relate."
            </blockquote>
            
            <p className="text-lg max-w-3xl mx-auto">My work bridges rigorous engineering with deep human understanding. Every algorithm is tested not just for accuracy, but for reliability, cultural sensitivity, and genuine benefit to people who need technology most.</p>
          </motion.div>
          
          <motion.div 
            className="future-questions mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-heading text-2xl text-primary text-center mb-8">Questions That Drive My Research</h3>
            
            <div className="questions-grid grid md:grid-cols-4 gap-6">
              <div className="question-card p-6 bg-background rounded-xl hover-scale">
                <h4 className="font-heading text-lg text-primary mb-3">Cross-Cultural Emotion AI</h4>
                <p className="text-base">How do we build emotion recognition that works universally while respecting cultural differences in emotional expression?</p>
              </div>
              
              <div className="question-card p-6 bg-background rounded-xl hover-scale">
                <h4 className="font-heading text-lg text-primary mb-3">Privacy-Preserving AI</h4>
                <p className="text-base">Can we enable collaborative AI research while maintaining patient privacy through federated learning approaches?</p>
              </div>
              
              <div className="question-card p-6 bg-background rounded-xl hover-scale">
                <h4 className="font-heading text-lg text-primary mb-3">Creative Applications</h4>
                <p className="text-base">How might emotion-aware AI enable new art forms or modes of shared experience?</p>
              </div>
              
              {/* Final emphasized question card */}
              <div className="question-card p-8 bg-accent/10 rounded-xl border-2 border-accent/20 hover-scale">
                <h4 className="font-heading text-xl text-accent mb-3">Future of Human Communication</h4>
                <p className="text-lg">What new forms of communication might emerge if technology could truly feel us back? How might this reshape human expression and connection?</p>
              </div>
            </div>
          </motion.div>
          
          {/* Research Philosophy */}
          <motion.div 
            className="research-philosophy p-8 bg-primary/10 rounded-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-heading text-2xl text-primary mb-6">Research Philosophy</h3>
            <p className="text-lg mb-4">I don't want to just publish papers. I want to build systems that actually reach the families who need them most.</p>
            <p className="text-base mb-8">This means designing for reliability, accessibility, and human dignity from the ground up. My engineering background ensures research can transition from lab prototypes to real-world clinical systems.</p>
          </motion.div>
          
          {/* Final Impact Statement */}
          <motion.div 
            className="impact-statement py-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <blockquote className="text-2xl font-heading text-secondary italic max-w-3xl mx-auto">
              "This is not just research—it's the foundation for technologies that can restore voices and reshape how humans connect."
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Research;