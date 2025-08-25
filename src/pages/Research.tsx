import { motion } from "framer-motion";

const Research = () => {
  return (
    <div className="research-page">
      {/* Research Hero */}
      <section className="research-hero py-16">
        <div className="container text-center">
          <h1 className="font-heading text-4xl text-primary mb-4">Research Portfolio</h1>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Building AI systems that understand human emotion and enhance human capabilities
          </p>
        </div>
      </section>

      {/* REACTU - Primary Research Focus */}
      <section className="hero-project py-20">
        <div className="container">
          <div className="project-intro mb-12">
            <h2 className="font-heading text-3xl text-primary mb-3">REACTU: AI for Emotional Communication</h2>
            <p className="text-lg text-secondary mb-6">Giving voice to 20 million people who can think and feel but cannot speak</p>
            
            <div className="research-question bg-accent/10 p-6 rounded-xl mb-8">
              <h3 className="font-heading text-xl text-accent mb-3">The Research Question</h3>
              <p className="text-base">Can AI reliably infer human emotions directly from physiological signals? I'm developing AI that translates biosignals into emotional expression for people with ALS, locked-in syndrome, and severe stroke who have preserved cognition but cannot communicate their feelings.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="research-approach">
              <h3 className="font-heading text-2xl text-secondary mb-6">Technical Approach</h3>
              
              <div className="approach-details space-y-6">
                <div className="detail-block">
                  <h4 className="font-heading text-lg text-primary mb-3">Neural Network Architecture</h4>
                  <p className="text-base">Built transformer models that process multimodal biosignals (skin conductance, muscle activity, heart signals, motion) to classify emotions in real time. The system learns individual physiological patterns while maintaining privacy through edge processing.</p>
                </div>
                
                <div className="detail-block">
                  <h4 className="font-heading text-lg text-primary mb-3">Cross-Cultural Validation</h4>
                  <p className="text-base">Tested algorithms across Hebrew, English, and Arabic speakers to address cultural bias in emotion recognition. Built federated learning approaches that improve models without sharing patient data.</p>
                </div>
                
                <div className="innovation-highlight p-4 bg-primary/5 rounded">
                  <strong>Key Innovation:</strong> First clinical-grade emotion AI system that works entirely offline, meeting healthcare privacy requirements while maintaining real-time performance.
                </div>
              </div>
            </div>
            
            <div className="research-results">
              <h3 className="font-heading text-2xl text-secondary mb-6">Results & Validation</h3>
              
              <div className="metrics-grid grid grid-cols-2 gap-4 mb-8">
                <div className="metric text-center p-4 bg-background rounded">
                  <span className="text-3xl font-heading text-primary">12</span>
                  <p className="text-sm">Families in clinical trial</p>
                </div>
                <div className="metric text-center p-4 bg-background rounded">
                  <span className="text-3xl font-heading text-primary">89%</span>
                  <p className="text-sm">Accuracy across cultures</p>
                </div>
                <div className="metric text-center p-4 bg-background rounded">
                  <span className="text-3xl font-heading text-primary">200ms</span>
                  <p className="text-sm">Fast enough for conversation</p>
                </div>
                <div className="metric text-center p-4 bg-background rounded">
                  <span className="text-3xl font-heading text-primary">100%</span>
                  <p className="text-sm">Designed for offline use</p>
                </div>
              </div>
              
              <div className="clinical-validation p-6 bg-background rounded-xl">
                <h4 className="font-heading text-lg text-secondary mb-3">Clinical Research</h4>
                <p className="text-base mb-4">IRB-approved studies with neurological rehabilitation centers validate the system's effectiveness with ALS patients. Research focuses on preserving individual personality in emotional expression while maintaining clinical accuracy.</p>
                
                <div className="patient-impact text-sm text-text-light">
                  <strong>Patient Feedback:</strong> "For the first time, my computer understood when I was frustrated with it." - Beta testing participant
                </div>
              </div>
            </div>
          </div>

          <div className="future-research mt-12 p-8 bg-primary/5 rounded-2xl">
            <h3 className="font-heading text-2xl text-primary mb-4">Open Research Questions</h3>
            <div className="questions-grid grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-base">How do we scale emotion AI globally while preserving cultural nuances in emotional expression?</p>
              </div>
              <div>
                <p className="text-base">Can federated learning enable collaborative research while maintaining patient privacy in healthcare AI?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Foundations */}
      <section className="research-foundations py-20 bg-background">
        <div className="container">
          <h2 className="font-heading text-3xl text-primary text-center mb-12">Research Foundations</h2>
          
          <div className="foundations-grid grid md:grid-cols-2 gap-12">
            {/* Enhanced Vision Systems */}
            <div className="foundation-project">
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
                <summary className="cursor-pointer text-primary font-heading">Technical Implementation</summary>
                <div className="mt-4 p-4 bg-primary/5 rounded text-sm">
                  <p className="mb-3"><strong>Adaptive Enhancement:</strong> Real-time image processing algorithms that adjust based on environmental lighting and user attention patterns.</p>
                  <p><strong>Spatial Computing:</strong> Mixed reality interfaces that present 3D information for enhanced situational awareness.</p>
                </div>
              </details>
            </div>

            {/* Physiological State Detection */}
            <div className="foundation-project">
              <h3 className="font-heading text-2xl text-secondary mb-4">Physiological State Monitoring</h3>
              <p className="text-lg mb-6">Developed systems that monitor human stress, fatigue, and attention without interfering with natural behavior, learning how technology can understand our physical state to better support us.</p>
              
              <div className="research-insights mb-6">
                <h4 className="font-heading text-lg text-primary mb-3">Key Research Insights</h4>
                <ul className="insight-list space-y-2">
                  <li><strong>Multimodal Sensing:</strong> Combining heart rate, skin conductance, and motion signals for comprehensive state detection</li>
                  <li><strong>Edge Processing:</strong> Real-time analysis without cloud dependency for immediate system adaptation</li>
                  <li><strong>Unobtrusive Design:</strong> Sensor integration that people forget they're wearing</li>
                </ul>
              </div>

              <details className="technical-details">
                <summary className="cursor-pointer text-primary font-heading">Technical Implementation</summary>
                <div className="mt-4 p-4 bg-secondary/5 rounded text-sm">
                  <p><strong>Canary System:</strong> Helmet-mounted sensor array providing continuous physiological monitoring with machine learning algorithms for pattern recognition and predictive health alerts.</p>
                </div>
              </details>
            </div>
          </div>

          {/* AI Reliability Research - Condensed */}
          <div className="reliability-research mt-12 p-6 bg-accent/5 rounded-xl">
            <h3 className="font-heading text-xl text-secondary mb-3">AI Reliability Research</h3>
            <p className="text-base">Learning to deploy AI in high-stakes environments taught me quality assurance methods now applied to ensuring emotion AI works reliably for patients who depend on it.</p>
          </div>
        </div>
      </section>

      {/* Research Vision */}
      <section className="research-vision py-20">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl text-primary text-center mb-8">Research Vision</h2>
          
          <div className="vision-statement text-center mb-12">
            <blockquote className="text-2xl font-heading text-secondary italic mb-6">
              "I'm exploring how technology can become not just responsive, but emotionally literate—systems that don't just calculate, but connect — not just respond, but relate."
            </blockquote>
            
            <p className="text-lg max-w-3xl mx-auto">My work bridges rigorous engineering with deep human understanding. Every algorithm is tested not just for accuracy, but for reliability, cultural sensitivity, and genuine benefit to people who need technology most.</p>
          </div>
          
          <div className="future-questions mb-12">
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
                <p className="text-base">How might emotion-aware AI enable new forms of art or modes of shared experience?</p>
              </div>
            </div>
          </div>
          
          {/* Research Philosophy */}
          <div className="research-philosophy p-8 bg-primary/10 rounded-2xl text-center">
            <h3 className="font-heading text-2xl text-primary mb-6">Research Philosophy</h3>
            <p className="text-lg mb-4">I don't want to just publish papers. I want to build systems that actually reach the families who need them most.</p>
            <p className="text-base">This means designing for reliability, accessibility, and human dignity from the ground up. My engineering background ensures research can transition from lab prototypes to real-world clinical systems.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;