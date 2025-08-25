import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, Users, Target, Clock, Shield } from "lucide-react";
import { useState } from "react";

const Research = () => {
  const [openDetails, setOpenDetails] = useState<string | null>(null);

  const toggleDetails = (section: string) => {
    setOpenDetails(openDetails === section ? null : section);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container text-center">
          <motion.h1 
            className="font-heading text-5xl md:text-6xl text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Research Portfolio
          </motion.h1>
          <motion.p 
            className="text-xl text-text-light max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building AI systems that don't just calculate, but connect — not just respond, but relate
          </motion.p>
        </div>
      </section>

      {/* REACTU - Hero Project with Enhanced Visual Treatment */}
      <section className="py-32 bg-primary/3">
        <div className="container">
          {/* Project Introduction - More Prominent */}
          <div className="project-intro mb-16 text-center">
            <motion.h2 
              className="font-heading text-4xl md:text-5xl text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              REACTU: AI for Emotional Communication
            </motion.h2>
            <motion.p 
              className="text-2xl text-secondary mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Giving voice to 20 million people who can think and feel but cannot speak
            </motion.p>
            
            <motion.div 
              className="research-question bg-accent/10 p-8 rounded-2xl mb-12 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-heading text-2xl text-accent mb-4">The Research Question</h3>
              <p className="text-lg">Can AI reliably infer human emotions directly from physiological signals? I'm developing AI that translates biosignals into emotional expression for people with ALS, locked-in syndrome, and severe stroke who have preserved cognition but cannot communicate their feelings.</p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              className="research-approach"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-heading text-3xl text-secondary mb-8">Technical Approach</h3>
              
              <div className="approach-details space-y-8">
                <div className="detail-block">
                  <h4 className="font-heading text-xl text-primary mb-4">Neural Network Architecture</h4>
                  <p className="text-base leading-relaxed">Built transformer models that process multimodal biosignals (skin conductance, muscle activity, heart signals, motion) to classify emotions in real time. The system learns individual physiological patterns while maintaining privacy through edge processing.</p>
                </div>
                
                <div className="detail-block">
                  <h4 className="font-heading text-xl text-primary mb-4">Cross-Cultural Validation</h4>
                  <p className="text-base leading-relaxed">Tested algorithms across Hebrew, English, and Arabic speakers to address cultural bias in emotion recognition. Built federated learning approaches that improve models without sharing patient data.</p>
                </div>
                
                <div className="innovation-highlight p-6 bg-primary/8 rounded-xl border-l-4 border-primary">
                  <p className="text-base"><strong className="text-primary">Key Innovation:</strong> First clinical-grade emotion AI system that works entirely offline, meeting healthcare privacy requirements while maintaining real-time performance.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="research-results"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="font-heading text-3xl text-secondary mb-8">Results & Validation</h3>
              
              {/* Enhanced Metrics Grid - Human Impact First */}
              <div className="metrics-grid grid grid-cols-2 gap-6 mb-12">
                <div className="metric text-center p-8 bg-background rounded-xl shadow-elegant hover-scale">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <span className="text-4xl font-heading text-primary block mb-2">12</span>
                  <p className="text-sm font-medium">Families in clinical trial</p>
                </div>
                <div className="metric text-center p-8 bg-background rounded-xl shadow-elegant hover-scale">
                  <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                  <span className="text-4xl font-heading text-primary block mb-2">89%</span>
                  <p className="text-sm font-medium">Accuracy across cultures</p>
                </div>
                <div className="metric text-center p-8 bg-background rounded-xl shadow-elegant hover-scale">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <span className="text-4xl font-heading text-primary block mb-2">200ms</span>
                  <p className="text-sm font-medium">Fast enough for conversation</p>
                </div>
                <div className="metric text-center p-8 bg-background rounded-xl shadow-elegant hover-scale">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <span className="text-4xl font-heading text-primary block mb-2">100%</span>
                  <p className="text-sm font-medium">Designed for offline use</p>
                </div>
              </div>
              
              <div className="clinical-validation p-8 bg-background rounded-2xl shadow-elegant">
                <h4 className="font-heading text-xl text-secondary mb-4">Clinical Research</h4>
                <p className="text-base mb-6 leading-relaxed">IRB-approved studies with neurological rehabilitation centers validate the system's effectiveness with ALS patients. Research focuses on preserving individual personality in emotional expression while maintaining clinical accuracy.</p>
                
                <div className="patient-impact p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-base text-primary font-medium">"For the first time, my computer understood when I was frustrated with it."</p>
                  <p className="text-sm text-text-light mt-2">— Beta testing participant</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="future-research mt-20 p-10 bg-primary/8 rounded-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h3 className="font-heading text-3xl text-primary mb-8 text-center">Open Research Questions</h3>
            <div className="questions-grid grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-background/50 rounded-xl">
                <p className="text-lg leading-relaxed">How do we scale emotion AI globally while preserving cultural nuances in emotional expression?</p>
              </div>
              <div className="p-6 bg-background/50 rounded-xl">
                <p className="text-lg leading-relaxed">Can federated learning enable collaborative research while maintaining patient privacy in healthcare AI?</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Foundations - Subdued Treatment */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <h2 className="font-heading text-3xl text-secondary text-center mb-16">Research Foundations</h2>
          
          <div className="foundations-grid grid lg:grid-cols-2 gap-16">
            {/* Enhanced Vision Systems */}
            <motion.div 
              className="foundation-project"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-2xl text-secondary mb-6">Enhanced Vision Systems</h3>
              <p className="text-lg mb-8 leading-relaxed">Developed AI vision systems that enhance perception in fog, darkness, and complex environments—adapting output to human attention and cognitive load.</p>
              
              <div className="research-insights mb-8">
                <h4 className="font-heading text-lg text-primary mb-4">Key Research Insights</h4>
                <ul className="insight-list space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Adaptive Processing:</strong> Systems that simplify visual information when users are overwhelmed or stressed</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>3D Information Display:</strong> Presenting complex data without cognitive overload</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Multi-Spectral Integration:</strong> Layering infrared and visible light for enhanced perception</div>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => toggleDetails('vision')}
                className="flex items-center gap-2 text-primary font-heading hover:text-primary/80 transition-colors"
              >
                {openDetails === 'vision' ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                Technical Implementation
              </button>
              
              {openDetails === 'vision' && (
                <motion.div 
                  className="mt-4 p-6 bg-primary/5 rounded-xl"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p className="mb-4"><strong>Adaptive Enhancement:</strong> Real-time image processing algorithms that adjust based on environmental lighting and user attention patterns.</p>
                  <p><strong>Spatial Computing:</strong> Mixed reality interfaces that present 3D information for enhanced situational awareness.</p>
                </motion.div>
              )}
            </motion.div>

            {/* Physiological State Detection */}
            <motion.div 
              className="foundation-project"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-heading text-2xl text-secondary mb-6">Physiological State Monitoring</h3>
              <p className="text-lg mb-8 leading-relaxed">Developed systems that monitor human stress, fatigue, and attention without interfering with natural behavior, learning how technology can understand our physical state to better support us.</p>
              
              <div className="research-insights mb-8">
                <h4 className="font-heading text-lg text-primary mb-4">Key Research Insights</h4>
                <ul className="insight-list space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Multimodal Sensing:</strong> Combining heart rate, skin conductance, and motion signals for comprehensive state detection</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Edge Processing:</strong> Real-time analysis without cloud dependency for immediate system adaptation</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Unobtrusive Design:</strong> Sensor integration that people forget they're wearing</div>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => toggleDetails('physiological')}
                className="flex items-center gap-2 text-secondary font-heading hover:text-secondary/80 transition-colors"
              >
                {openDetails === 'physiological' ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                Technical Implementation
              </button>
              
              {openDetails === 'physiological' && (
                <motion.div 
                  className="mt-4 p-6 bg-secondary/5 rounded-xl"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p><strong>Canary System:</strong> Helmet-mounted sensor array providing continuous physiological monitoring with machine learning algorithms for pattern recognition and predictive health alerts.</p>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* AI Reliability Research - Condensed */}
          <motion.div 
            className="reliability-research mt-16 p-8 bg-accent/5 rounded-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-heading text-xl text-secondary mb-4">AI Reliability Research</h3>
            <p className="text-base max-w-4xl mx-auto">Learning to deploy AI in high-stakes environments taught me quality assurance methods now applied to ensuring emotion AI works reliably for patients who depend on it.</p>
          </motion.div>
        </div>
      </section>

      {/* Research Vision - Enhanced Prominence */}
      <section className="py-32 bg-gradient-primary">
        <div className="container max-w-6xl">
          <motion.h2 
            className="font-heading text-4xl text-background text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Research Vision
          </motion.h2>
          
          <motion.div 
            className="vision-statement text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <blockquote className="text-3xl md:text-4xl font-heading text-background/90 italic mb-8 leading-relaxed">
              "I'm exploring how technology can become not just responsive, but emotionally literate—systems that don't just calculate, but connect — not just respond, but relate."
            </blockquote>
            
            <p className="text-xl text-background/80 max-w-4xl mx-auto leading-relaxed">My work bridges rigorous engineering with deep human understanding. Every algorithm is tested not just for accuracy, but for reliability, cultural sensitivity, and genuine benefit to people who need technology most.</p>
          </motion.div>
          
          <motion.div 
            className="future-questions mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-heading text-3xl text-background text-center mb-12">Questions That Drive My Research</h3>
            
            <div className="questions-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="question-card p-8 bg-background/10 backdrop-blur-sm rounded-2xl border border-background/20">
                <h4 className="font-heading text-lg text-background mb-4">Cross-Cultural Emotion AI</h4>
                <p className="text-base text-background/80 leading-relaxed">How do we build emotion recognition that works universally while respecting cultural differences in emotional expression?</p>
              </div>
              
              <div className="question-card p-8 bg-background/10 backdrop-blur-sm rounded-2xl border border-background/20">
                <h4 className="font-heading text-lg text-background mb-4">Privacy-Preserving AI</h4>
                <p className="text-base text-background/80 leading-relaxed">Can we enable collaborative AI research while maintaining patient privacy through federated learning approaches?</p>
              </div>
              
              <div className="question-card p-8 bg-background/10 backdrop-blur-sm rounded-2xl border border-background/20">
                <h4 className="font-heading text-lg text-background mb-4">Future of Human Communication</h4>
                <p className="text-base text-background/80 leading-relaxed">What new forms of communication might emerge if technology could truly feel us back?</p>
              </div>
              
              <div className="question-card p-8 bg-background/10 backdrop-blur-sm rounded-2xl border border-background/20">
                <h4 className="font-heading text-lg text-background mb-4">Creative Applications</h4>
                <p className="text-base text-background/80 leading-relaxed">How might emotion-aware AI enable new forms of art or modes of shared experience?</p>
              </div>
            </div>
          </motion.div>
          
          {/* Research Philosophy - Enhanced */}
          <motion.div 
            className="research-philosophy p-12 bg-background/15 backdrop-blur-sm rounded-3xl text-center border border-background/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-heading text-3xl text-background mb-8">Research Philosophy</h3>
            <p className="text-xl text-background/90 mb-6 leading-relaxed">I don't want to just publish papers. I want to build systems that actually reach the families who need them most.</p>
            <p className="text-lg text-background/80 max-w-4xl mx-auto leading-relaxed">This means designing for reliability, accessibility, and human dignity from the ground up. My engineering background ensures research can transition from lab prototypes to real-world clinical systems.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Research;