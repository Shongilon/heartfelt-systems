import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen">
      {/* Research Hero */}
      <section className="research-hero py-16">
        <div className="container text-center">
          <motion.h1 
            className="font-heading text-4xl text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Research Portfolio
          </motion.h1>
          <motion.p 
            className="text-lg text-text-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building AI systems that understand human emotion and enhance human capabilities
          </motion.p>
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
              Pioneering breakthrough technology that translates physiological signals into real-time emotional expression
            </motion.p>
            
            <motion.div 
              className="research-question bg-accent/10 p-8 rounded-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-heading text-2xl text-accent mb-4">The Research Question</h3>
              <p className="text-lg">Can AI reliably infer human emotions directly from physiological signals? I'm developing multi-modal biosensor systems that decode emotional states for people with preserved cognition but communication barriers—starting with ALS patients, locked-in syndrome, and severe stroke survivors.</p>
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
                  <h4 className="font-heading text-xl text-primary mb-4">Multi-Modal Sensor Fusion</h4>
                  <p className="text-base mb-4">Developed proprietary algorithms that process synchronized biosignals from multiple sensors: skin conductance (GSR), muscle activity (EMG), heart signals (ECG), and motion patterns (IMU). The system captures subtle physiological changes that correlate with emotional states.</p>
                  <div className="technical-highlight p-4 bg-primary/5 rounded text-sm">
                    <strong>Key Innovation:</strong> Patent-pending sensor fusion methodology specifically designed for emotion classification in clinical settings.
                  </div>
                </div>
                
                <div className="detail-block">
                  <h4 className="font-heading text-xl text-primary mb-4">Machine Learning Architecture Comparison</h4>
                  <p className="text-base mb-4">Conducted systematic comparative analysis of five neural network architectures using multiple validated datasets. Implemented rigorous two-stage methodology with Leave-One-Subject-Out cross-validation to ensure generalizability to new users.</p>
                  
                  <div className="research-datasets mb-4 p-4 bg-secondary/5 rounded">
                    <h5 className="font-semibold text-primary mb-2">Validated Datasets</h5>
                    <ul className="text-sm space-y-1">
                      <li><strong>DEAP:</strong> Database for Emotion Analysis using Physiological Signals</li>
                      <li><strong>DREAMER:</strong> EEG and ECG recordings from 23 participants during emotion elicitation</li>
                      <li><strong>MAHNOB-HCI:</strong> Multimodal human-computer interaction dataset</li>
                      <li><strong>AMIGOS:</strong> Dataset for Affect, Personality, and Mood Research</li>
                      <li><strong>ASCERTAIN:</strong> Multimodal emotion recognition dataset</li>
                      <li><strong>SEMAINE:</strong> Sustained Emotionally colored Machine-human Interaction</li>
                    </ul>
                  </div>

                  <details className="model-architectures mt-4">
                    <summary className="cursor-pointer text-primary font-heading flex items-center mb-2">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Neural Network Architectures Evaluated
                    </summary>
                    <div className="p-4 bg-primary/5 rounded text-sm space-y-3">
                      <div><strong>Hybrid CNN-LSTM Model:</strong> Combines convolutional layers for feature extraction with LSTM layers for temporal sequence modeling</div>
                      <div><strong>CRBENN (Continuous Radial Basis Emotional Neural Network):</strong> Specialized architecture for continuous emotion recognition using radial basis functions</div>
                      <div><strong>WaveNet:</strong> Dilated convolutional network originally designed for audio, adapted for physiological signal processing</div>
                      <div><strong>Transformers:</strong> Attention-based architecture for sequence-to-sequence emotion classification</div>
                      <div><strong>GameEmo-CapsNet:</strong> Capsule network implementation for emotion recognition with dynamic routing</div>
                      <div><strong>Ensemble Methods:</strong> Multiple model combination approaches for improved robustness</div>
                    </div>
                  </details>

                  <div className="methodology-highlight mt-4 p-4 bg-accent/5 rounded text-sm">
                    <strong>Rigorous Validation Methodology:</strong> Two-stage evaluation with initial 80/20 train-test splits across multiple runs, followed by Leave-One-Subject-Out cross-validation on top performers. Performance assessed using Mean Absolute Error (MAE) and custom success rate metrics across valence, arousal, and dominance dimensions.
                  </div>
                </div>
                
                <div className="detail-block">
                  <h4 className="font-heading text-xl text-primary mb-4">Privacy-First Architecture</h4>
                  <p className="text-base">All processing occurs on edge devices with HIPAA-compliant data architecture. No physiological data leaves the patient's device, ensuring complete privacy while maintaining real-time performance.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="research-results"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="font-heading text-3xl text-secondary mb-8">Current Results</h3>
              
              <div className="metrics-grid grid grid-cols-2 gap-6 mb-10">
                <div className="metric text-center p-6 bg-background rounded-lg shadow-sm hover-scale">
                  <span className="text-4xl font-heading text-primary">94%</span>
                  <p className="text-sm font-medium">Preliminary accuracy across 6 primary emotions</p>
                </div>
                <div className="metric text-center p-6 bg-background rounded-lg shadow-sm hover-scale">
                  <span className="text-4xl font-heading text-primary">500ms</span>
                  <p className="text-sm font-medium">Target latency for real-time processing</p>
                </div>
                <div className="metric text-center p-6 bg-background rounded-lg shadow-sm hover-scale">
                  <span className="text-4xl font-heading text-primary">20+</span>
                  <p className="text-sm font-medium">Test subjects planned across 3 conditions</p>
                </div>
                <div className="metric text-center p-6 bg-background rounded-lg shadow-sm hover-scale">
                  <span className="text-4xl font-heading text-primary">92%+</span>
                  <p className="text-sm font-medium">Target accuracy for validation dataset</p>
                </div>
              </div>
              
              <div className="current-status p-6 bg-background rounded-xl mb-8">
                <h4 className="font-heading text-lg text-secondary mb-3">Development Status & Technical Implementation</h4>
                <p className="text-base mb-4">Currently in active development with biosensor integration targeting Q2 2025. Comprehensive neural architecture evaluation completed with rigorous cross-validation methodology demonstrating model generalizability.</p>
                
                <div className="code-availability mb-4 p-4 bg-primary/5 rounded">
                  <h5 className="font-semibold text-primary mb-2">Open Research Implementation</h5>
                  <p className="text-sm mb-2">Complete source code available for architecture comparison study, including:</p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>PyTorch implementations of all six neural architectures</li>
                    <li>Data preprocessing pipelines for physiological signals</li>
                    <li>Leave-One-Subject-Out cross-validation framework</li>
                    <li>Performance evaluation metrics and visualization tools</li>
                    <li>Ensemble method implementations and model fusion strategies</li>
                  </ul>
                </div>
                
                <div className="roadmap-highlights text-sm">
                  <strong>Next Technical Milestones:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Complete 500+ session labeled dataset across diverse populations</li>
                    <li>Achieve &lt;500ms latency on edge processing devices</li>
                    <li>Deploy top-performing architecture on Shimmer biosensor hardware</li>
                    <li>Begin pilot studies at major rehabilitation centers</li>
                  </ul>
                </div>
              </div>

              <div className="competitive-advantage p-6 bg-accent/5 rounded-xl">
                <h4 className="font-heading text-lg text-accent mb-3">Unique Market Position</h4>
                <p className="text-base">Only solution combining non-invasive biosensors with AI specifically designed for medical communication applications. Existing assistive devices provide basic yes/no responses, while emotion AI companies focus on consumer applications rather than clinical needs.</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="technical-depth mt-16 p-10 bg-background rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h3 className="font-heading text-3xl text-primary mb-8">Technical Research Contributions</h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="research-methodology">
                <h4 className="font-heading text-xl text-secondary mb-4">Novel Evaluation Framework</h4>
                <p className="text-base mb-4">Developed rigorous methodology for emotion recognition model comparison addressing critical challenge of user generalizability in real-world deployments.</p>
                
                <div className="methodology-details text-sm p-4 bg-primary/5 rounded">
                  <strong>Two-Stage Validation Approach:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Stage 1: Rapid architecture comparison using 80/20 splits with 5-fold iteration</li>
                    <li>Stage 2: Leave-One-Subject-Out cross-validation for top performers</li>
                    <li>Holdout test set (2-3 participants) for final new-user evaluation</li>
                    <li>Performance metrics: MAE and custom success rates across valence/arousal/dominance</li>
                  </ul>
                </div>
              </div>
              
              <div className="model-innovations">
                <h4 className="font-heading text-xl text-secondary mb-4">Architecture Innovations</h4>
                <p className="text-base mb-4">Systematic evaluation of state-of-the-art architectures adapted for physiological emotion recognition, with novel ensemble approaches for improved robustness.</p>
                
                <details className="implementation-details">
                  <summary className="cursor-pointer text-primary font-heading flex items-center mb-2">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Implementation Highlights
                  </summary>
                  <div className="p-4 bg-secondary/5 rounded text-sm space-y-2">
                    <div><strong>Data Pipeline:</strong> Custom preprocessing for Shimmer biosensor integration with real-time filtering</div>
                    <div><strong>Feature Engineering:</strong> Multi-scale temporal feature extraction optimized for physiological signals</div>
                    <div><strong>Model Fusion:</strong> Ensemble methods combining complementary architecture strengths</div>
                    <div><strong>Edge Deployment:</strong> Model optimization for real-time inference on resource-constrained devices</div>
                  </div>
                </details>
              </div>
            </div>
            
            <div className="code-repository mt-8 p-6 bg-accent/5 rounded-xl">
              <h4 className="font-heading text-lg text-accent mb-3">Research Reproducibility</h4>
              <p className="text-base mb-3">Complete implementation available for academic collaboration, including reproducible experiments across all six neural architectures with standardized evaluation protocols.</p>
              <div className="repo-features text-sm grid md:grid-cols-2 gap-4">
                <div>
                  <strong>Available Components:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>PyTorch model implementations</li>
                    <li>Cross-validation frameworks</li>
                    <li>Performance benchmarking tools</li>
                  </ul>
                </div>
                <div>
                  <strong>Research Applications:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Architecture comparison studies</li>
                    <li>User generalization analysis</li>
                    <li>Real-time deployment optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Foundations */}
      <section className="research-foundations py-20 bg-background">
        <div className="container">
          <h2 className="font-heading text-3xl text-primary text-center mb-12">Research Foundations</h2>
          
          <div className="foundations-grid grid md:grid-cols-2 gap-12">
            {/* Enhanced Vision Systems */}
            <motion.div 
              className="foundation-project"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-2xl text-secondary mb-4">Enhanced Vision Systems</h3>
              <p className="text-lg mb-6">Developed AI vision systems that enhance perception in fog, darkness, and complex environments—adapting output to human attention and cognitive load.</p>
              
              <div className="research-insights mb-6">
                <h4 className="font-heading text-lg text-primary mb-3">Key Research Insights</h4>
                <ul className="insight-list space-y-2">
                  <li><strong>Adaptive Processing:</strong> Systems that simplify visual information when users are overwhelmed or stressed</li>
                  <li><strong>3D Information Display:</strong> Presenting complex data without cognitive overload</li>
                  <li><strong>Multi-Spectral Integration:</strong> Layering infrared and visible light for enhanced perception</li>
                </ul>
              </div>

              <details className="technical-details">
                <summary className="cursor-pointer text-primary font-heading flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Technical Implementation
                </summary>
                <div className="mt-4 p-4 bg-primary/5 rounded text-sm">
                  <p className="mb-3"><strong>Adaptive Enhancement:</strong> Real-time image processing algorithms that adjust based on environmental lighting and user attention patterns.</p>
                  <p><strong>Spatial Computing:</strong> Mixed reality interfaces that present 3D information for enhanced situational awareness in challenging environments.</p>
                </div>
              </details>
            </motion.div>

            {/* Physiological State Detection */}
            <motion.div 
              className="foundation-project"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-heading text-2xl text-secondary mb-4">Physiological State Monitoring</h3>
              <p className="text-lg mb-6">Developed systems that monitor human stress, fatigue, and attention without interfering with natural behavior, learning how technology can understand our physical state to better support us.</p>
              
              <div className="research-insights mb-6">
                <h4 className="font-heading text-lg text-primary mb-3">Key Research Insights</h4>
                <ul className="insight-list space-y-2">
                  <li><strong>Multimodal Sensing:</strong> Combining heart rate, skin conductance, and motion signals for comprehensive state detection</li>
                  <li><strong>Edge Processing:</strong> Real-time analysis without cloud dependency for immediate system adaptation</li>
                  <li><strong>Unobtrusive Design:</strong> Sensor integration that users forget they're wearing</li>
                </ul>
              </div>

              <details className="technical-details">
                <summary className="cursor-pointer text-primary font-heading flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Technical Implementation
                </summary>
                <div className="mt-4 p-4 bg-secondary/5 rounded text-sm">
                  <p><strong>Head-Mounted Sensor Array:</strong> Continuous physiological monitoring system with machine learning algorithms for pattern recognition and predictive health alerts, designed for long-term wear without user distraction.</p>
                </div>
              </details>
            </motion.div>
          </div>

          {/* AI Reliability Research - Condensed */}
          <motion.div 
            className="reliability-research mt-12 p-6 bg-accent/5 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-heading text-xl text-secondary mb-3">AI Reliability Research</h3>
            <p className="text-base">Experience deploying AI in precision manufacturing environments taught me quality assurance methods now applied to ensuring emotion AI works reliably for patients who depend on it—critical lessons in system reliability for clinical deployment.</p>
          </motion.div>
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
              "I'm exploring how technology can become not just responsive, but emotionally literate—systems that don't just calculate, but connect — not just respond, but relate."
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
              <div className="question-card p-6 bg-background rounded-xl">
                <h4 className="font-heading text-lg text-primary mb-3">Cross-Cultural Emotion AI</h4>
                <p className="text-base">How do we build emotion recognition that works universally while respecting cultural differences in emotional expression?</p>
              </div>
              
              <div className="question-card p-6 bg-background rounded-xl">
                <h4 className="font-heading text-lg text-primary mb-3">Privacy-Preserving AI</h4>
                <p className="text-base">Can we enable collaborative AI research while maintaining patient privacy through federated learning approaches?</p>
              </div>
              
              <div className="question-card p-6 bg-background rounded-xl">
                <h4 className="font-heading text-lg text-primary mb-3">Future of Human Communication</h4>
                <p className="text-base">What new forms of communication might emerge if technology could truly feel us back?</p>
              </div>
              
              <div className="question-card p-6 bg-background rounded-xl">
                <h4 className="font-heading text-lg text-primary mb-3">Creative Applications</h4>
                <p className="text-base">How might emotion-aware AI enable new art forms or modes of shared experience?</p>
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
            <p className="text-base">This means designing for reliability, accessibility, and human dignity from the ground up. My engineering background ensures research can transition from lab prototypes to real-world clinical systems.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Research;