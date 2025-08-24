import { motion } from "framer-motion";

const Research = () => {
  return (
    <div className="research-page">
      {/* Research Hero */}
      <section className="research-hero py-20">
        <div className="container text-center">
          <h1 className="font-heading text-5xl text-primary mb-6">Research & Technical Innovation</h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Advancing multisensory AI, responsive sensing environments, and human-centered robotics through 
            15+ years of mission-critical systems development and breakthrough emotion recognition technology.
          </p>
        </div>
      </section>

      {/* Project 1: REACTU.io - Primary Research Focus */}
      <section className="project-section py-20">
        <div className="container">
          <div className="project-header mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-heading text-4xl text-primary mb-4">REACTU.io: Physiological Emotion AI Platform</h2>
                <p className="text-xl text-secondary">CTO & Lead AI Engineer • 2023-Present</p>
              </div>
              <div className="project-links">
                <a href="#" className="tech-link text-accent hover:text-accent/80 transition-colors">View Technical Implementation →</a>
              </div>
            </div>
            
            <div className="project-tagline bg-accent/10 p-6 rounded-xl mb-12">
              <h3 className="font-heading text-2xl text-accent mb-3">"AI That Feels You"</h3>
              <p className="text-lg">Breakthrough technology translating physiological signals into real-time emotional expression for 20+ million people with preserved cognition but communication barriers—starting with ALS patients, locked-in syndrome, and severe stroke survivors.</p>
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="technical-architecture mb-16">
            <h3 className="font-heading text-2xl text-primary mb-8">Multimodal Signal Processing Architecture</h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="architecture-details">
                <h4 className="font-heading text-xl text-secondary mb-4">Core Technical Innovation</h4>
                
                <div className="tech-stack mb-6">
                  <h5 className="font-heading text-lg mb-3">Neural Network Pipeline</h5>
                  <ul className="tech-list space-y-2">
                    <li><strong>PyTorch Framework:</strong> Custom transformer architectures for time-series emotion classification</li>
                    <li><strong>Real-Time Processing:</strong> Edge-deployed models with &lt;200ms latency for clinical applications</li>
                    <li><strong>Multimodal Fusion:</strong> Biosensor integration (GSR, EMG, ECG, IMU) with advanced feature extraction</li>
                    <li><strong>Federated Learning:</strong> Privacy-preserving model updates across distributed patient populations</li>
                  </ul>
                </div>
                
                <div className="research-contributions mb-6">
                  <h5 className="font-heading text-lg mb-3">Research Contributions</h5>
                  <ul className="contribution-list space-y-2">
                    <li>• Novel cross-cultural emotion recognition algorithms (Hebrew, English, Arabic validation)</li>
                    <li>• First clinical-grade emotion AI system for neurological communication disorders</li>
                    <li>• Privacy-first architecture meeting HIPAA and medical device compliance standards</li>
                    <li>• Adaptive personalization algorithms learning individual emotional expression patterns</li>
                  </ul>
                </div>
              </div>
              
              <div className="system-diagram">
                {/* Hand-drawn system architecture */}
                <div className="diagram-placeholder bg-background border-2 border-border rounded-xl p-8">
                  <h5 className="font-heading text-lg text-center mb-6">Real-Time Emotion Recognition Pipeline</h5>
                  <div className="pipeline-flow">
                    <div className="flow-step mb-4 p-4 bg-primary/10 rounded">
                      <strong>Input Layer:</strong> Multi-sensor physiological data acquisition
                    </div>
                    <div className="flow-step mb-4 p-4 bg-secondary/10 rounded">
                      <strong>Processing:</strong> Real-time feature extraction & neural classification
                    </div>
                    <div className="flow-step mb-4 p-4 bg-accent/10 rounded">
                      <strong>Output:</strong> Emotional state recognition with confidence scores
                    </div>
                  </div>
                  <p className="text-sm text-text-light text-center mt-4">All processing occurs locally - zero cloud dependency</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Impact & Validation */}
          <div className="research-impact mb-16">
            <h3 className="font-heading text-2xl text-primary mb-8">Clinical Research & Validation</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="impact-metric text-center">
                <span className="metric-number text-4xl font-heading text-primary">89%</span>
                <p className="metric-label text-sm text-text-light">Cross-language accuracy</p>
                <p className="metric-detail text-xs text-text-light">Hebrew, English, Arabic validation</p>
              </div>
              
              <div className="impact-metric text-center">
                <span className="metric-number text-4xl font-heading text-primary">12</span>
                <p className="metric-label text-sm text-text-light">ALS families in beta</p>
                <p className="metric-detail text-xs text-text-light">Clinical validation studies</p>
              </div>
              
              <div className="impact-metric text-center">
                <span className="metric-number text-4xl font-heading text-primary">0</span>
                <p className="metric-label text-sm text-text-light">Privacy incidents</p>
                <p className="metric-detail text-xs text-text-light">18 months deployment</p>
              </div>
              
              <div className="impact-metric text-center">
                <span className="metric-number text-4xl font-heading text-primary">&lt;200ms</span>
                <p className="metric-label text-sm text-text-light">Response latency</p>
                <p className="metric-detail text-xs text-text-light">Real-time performance</p>
              </div>
            </div>
            
            <div className="clinical-collaboration mt-8 p-6 bg-background rounded-xl">
              <h4 className="font-heading text-lg text-secondary mb-3">Healthcare Research Partnerships</h4>
              <p className="text-base mb-4">Collaborating with leading neurological rehabilitation centers and ALS research institutions to establish clinical validation protocols and regulatory pathways for assistive communication devices.</p>
              <div className="partnership-focus grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Clinical Applications:</strong> ALS communication, locked-in syndrome, severe stroke recovery, cerebral palsy assistance
                </div>
                <div>
                  <strong>Regulatory Path:</strong> FDA medical device classification, CPT reimbursement codes, clinical trial design
                </div>
              </div>
            </div>
          </div>

          {/* Future Research Directions */}
          <div className="future-research">
            <h3 className="font-heading text-2xl text-primary mb-6">Research Questions & Future Directions</h3>
            <div className="research-questions grid md:grid-cols-2 gap-8">
              <div className="question-cluster">
                <h4 className="font-heading text-lg text-secondary mb-3">Cross-Cultural Emotion AI</h4>
                <p className="text-base mb-3">How do we develop emotion recognition systems that work universally across cultural and linguistic boundaries while preserving individual expression patterns?</p>
                <p className="text-sm text-text-light">Relevant to multisensory AI research in diverse populations and human-AI symbiosis.</p>
              </div>
              
              <div className="question-cluster">
                <h4 className="font-heading text-lg text-secondary mb-3">Privacy-Preserving Healthcare AI</h4>
                <p className="text-base mb-3">Can we design federated learning architectures for emotion AI that enable research collaboration while maintaining patient privacy and regulatory compliance?</p>
                <p className="text-sm text-text-light">Critical for responsible AI deployment in vulnerable populations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 2: Elbit Systems - Spatial Computing & HCI */}
      <section className="project-section py-20 bg-background">
        <div className="container">
          <div className="project-header mb-12">
            <h2 className="font-heading text-3xl text-primary mb-4">AI-Powered Spatial Computing Systems</h2>
            <p className="text-xl text-secondary">Senior Program Engineering Manager • Elbit Systems • 2015-2023</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="project-content">
              <h3 className="font-heading text-2xl text-secondary mb-6">IVAS Headset: Mixed Reality for Extreme Environments</h3>
              
              <div className="technical-details mb-8">
                <h4 className="font-heading text-lg text-primary mb-4">Advanced Human-Computer Interaction</h4>
                <ul className="tech-achievements space-y-3">
                  <li><strong>Adaptive Interface Design:</strong> Real-time UI complexity adjustment based on user cognitive load and environmental stress</li>
                  <li><strong>HoloLens Integration:</strong> Custom spatial computing applications with Microsoft Azure cloud services integration</li>
                  <li><strong>3D Augmented Reality:</strong> Advanced mapping technologies with GPS-denied navigation capabilities</li>
                  <li><strong>Multimodal Interaction:</strong> Voice, gesture, and gaze-based control systems for hands-free operation</li>
                </ul>
              </div>
              
              <div className="innovation-highlight p-6 bg-accent/10 rounded-xl mb-8">
                <h4 className="font-heading text-lg text-accent mb-3">Key Innovation: Stress-Adaptive Interfaces</h4>
                <p className="text-base">Developed first large-scale operational system using real-time physiological monitoring to adapt interface complexity—reducing cognitive load by 40% in high-stress scenarios while maintaining critical information accessibility.</p>
              </div>
              
              <div className="research-relevance">
                <h4 className="font-heading text-lg text-primary mb-3">Research Applications</h4>
                <p className="text-base">This work directly informs responsive environment design, where sensor networks detect human state and adapt system behavior accordingly—applicable to healthcare monitoring, assistive robotics, and ambient intelligence systems.</p>
              </div>
            </div>
            
            <div className="technical-specs">
              <h3 className="font-heading text-2xl text-secondary mb-6">Technical Architecture</h3>
              
              <div className="specs-grid space-y-6">
                <div className="spec-item p-4 bg-primary/5 rounded">
                  <h5 className="font-heading text-base text-primary mb-2">Real-Time Processing</h5>
                  <p className="text-sm">GPU computing architecture for simultaneous 3D mapping, object recognition, and AR overlay rendering</p>
                </div>
                
                <div className="spec-item p-4 bg-secondary/5 rounded">
                  <h5 className="font-heading text-base text-primary mb-2">Sensor Fusion</h5>
                  <p className="text-sm">IMU, cameras, LIDAR, and GPS integration for robust spatial understanding in challenging environments</p>
                </div>
                
                <div className="spec-item p-4 bg-accent/5 rounded">
                  <h5 className="font-heading text-base text-primary mb-2">Network Architecture</h5>
                  <p className="text-sm">Mesh networking protocols for distributed computing and collaborative spatial mapping across multiple users</p>
                </div>
                
                <div className="spec-item p-4 bg-primary/5 rounded">
                  <h5 className="font-heading text-base text-primary mb-2">Safety Compliance</h5>
                  <p className="text-sm">DO-178C and ISO 26262 compliant software development for mission-critical applications</p>
                </div>
              </div>
              
              <div className="impact-metrics mt-8">
                <h4 className="font-heading text-lg text-primary mb-4">Measurable Impact</h4>
                <div className="metrics-grid grid grid-cols-2 gap-4 text-sm">
                  <div className="metric">
                    <span className="metric-value font-heading text-2xl text-secondary">40%</span>
                    <p className="metric-desc">Reduction in task completion time</p>
                  </div>
                  <div className="metric">
                    <span className="metric-value font-heading text-2xl text-secondary">60%</span>
                    <p className="metric-desc">Improvement in user satisfaction</p>
                  </div>
                  <div className="metric">
                    <span className="metric-value font-heading text-2xl text-secondary">0</span>
                    <p className="metric-desc">Safety incidents in field deployment</p>
                  </div>
                  <div className="metric">
                    <span className="metric-value font-heading text-2xl text-secondary">1000s</span>
                    <p className="metric-desc">Users across international programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 3: NVIDIA - Advanced Manufacturing Systems */}
      <section className="project-section py-20">
        <div className="container">
          <div className="project-header mb-12">
            <h2 className="font-heading text-3xl text-primary mb-4">Co-Packaged Optics: AI-Driven Manufacturing Systems</h2>
            <p className="text-xl text-secondary">Senior Technical Program Manager • NVIDIA • 2022-2023</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="project-overview col-span-2">
              <h3 className="font-heading text-2xl text-secondary mb-6">High-Volume AI Manufacturing Integration</h3>
              
              <p className="text-lg mb-6">Led end-to-end development of AI-powered manufacturing systems for next-generation optical interconnects, integrating machine learning with precision hardware manufacturing for datacenter-scale deployment.</p>
              
              <div className="technical-contributions mb-8">
                <h4 className="font-heading text-lg text-primary mb-4">Technical Leadership</h4>
                <ul className="contributions space-y-3">
                  <li><strong>Cross-Functional AI Integration:</strong> Coordinated Engineering, Product, Strategy, and Regulatory teams for AI-driven quality control systems</li>
                  <li><strong>Data-Driven Manufacturing:</strong> Implemented real-time analytics and statistical modeling for predictive maintenance and yield optimization</li>
                  <li><strong>Customer Integration:</strong> Developed feedback loops with hyperscale datacenter operators to refine manufacturing processes</li>
                  <li><strong>Scalability Architecture:</strong> Designed systems capable of processing millions of optical components with consistent quality metrics</li>
                </ul>
              </div>
              
              <div className="research-connection p-6 bg-background rounded-xl">
                <h4 className="font-heading text-lg text-primary mb-3">Connection to Responsive Environment Research</h4>
                <p className="text-base">This experience with large-scale sensor networks, real-time data processing, and adaptive manufacturing control directly applies to ambient intelligence systems and distributed sensing environments—core areas of responsive environment research.</p>
              </div>
            </div>
            
            <div className="technical-expertise">
              <h3 className="font-heading text-2xl text-secondary mb-6">Systems Integration</h3>
              
              <div className="expertise-areas space-y-4">
                <div className="area p-4 border border-border rounded">
                  <h5 className="font-heading text-base text-primary mb-2">Real-Time Analytics</h5>
                  <p className="text-sm">Machine learning pipelines for manufacturing quality prediction and anomaly detection</p>
                </div>
                
                <div className="area p-4 border border-border rounded">
                  <h5 className="font-heading text-base text-primary mb-2">Distributed Systems</h5>
                  <p className="text-sm">Network architecture for coordinating AI processing across manufacturing facilities</p>
                </div>
                
                <div className="area p-4 border border-border rounded">
                  <h5 className="font-heading text-base text-primary mb-2">Hardware Integration</h5>
                  <p className="text-sm">Embedded AI deployment in manufacturing equipment with microsecond response requirements</p>
                </div>
                
                <div className="area p-4 border border-border rounded">
                  <h5 className="font-heading text-base text-primary mb-2">Regulatory Compliance</h5>
                  <p className="text-sm">Quality management systems meeting international manufacturing and AI deployment standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 4: Rafael - Advanced Data Processing */}
      <section className="project-section py-20 bg-background">
        <div className="container">
          <div className="project-header mb-12">
            <h2 className="font-heading text-3xl text-primary mb-4">Advanced Signal Processing & Autonomous Systems</h2>
            <p className="text-xl text-secondary">Software/Systems Engineer • Rafael Advanced Defense Systems • 2003-2008</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="foundational-work">
              <h3 className="font-heading text-2xl text-secondary mb-6">Big Data & Image Processing Foundations</h3>
              
              <p className="text-lg mb-6">Developed comprehensive signal processing systems for topographical analysis and autonomous navigation, establishing the technical foundation for later work in real-time AI and sensor fusion.</p>
              
              <div className="core-technologies mb-8">
                <h4 className="font-heading text-lg text-primary mb-4">Core Technical Development</h4>
                <ul className="tech-foundations space-y-3">
                  <li><strong>3D Modeling & Reconstruction:</strong> Advanced algorithms for real-time topographical mapping and environmental understanding</li>
                  <li><strong>Autonomous Systems Integration:</strong> GIS systems coordination with real-time navigation and path planning</li>
                  <li><strong>High-Performance Computing:</strong> C/C++ optimization for real-time signal processing with strict latency requirements</li>
                  <li><strong>System Optimization:</strong> Performance tuning for data-intensive applications processing terabytes of sensor data</li>
                </ul>
              </div>
              
              <div className="career-foundation p-6 bg-primary/5 rounded-xl">
                <h4 className="font-heading text-lg text-primary mb-3">Career Foundation</h4>
                <p className="text-base">This early experience established my approach to building reliable, high-performance systems that process complex data in real-time—principles that now underpin REACTU.io's emotion recognition architecture and inform my research interests in responsive sensing environments.</p>
              </div>
            </div>
            
            <div className="research-evolution">
              <h3 className="font-heading text-2xl text-secondary mb-6">Research Evolution</h3>
              
              <div className="evolution-path space-y-6">
                <div className="evolution-step">
                  <h5 className="font-heading text-base text-accent mb-2">Signal Processing Mastery</h5>
                  <p className="text-sm">Developed expertise in real-time data processing, sensor fusion, and autonomous system coordination</p>
                </div>
                
                <div className="evolution-arrow text-center text-2xl text-text-light">↓</div>
                
                <div className="evolution-step">
                  <h5 className="font-heading text-base text-accent mb-2">Human-Computer Interaction</h5>
                  <p className="text-sm">Applied signal processing to AR/VR systems, learning how humans interact with complex technical systems</p>
                </div>
                
                <div className="evolution-arrow text-center text-2xl text-text-light">↓</div>
                
                <div className="evolution-step">
                  <h5 className="font-heading text-base text-accent mb-2">Emotion AI Research</h5>
                  <p className="text-sm">Now combining signal processing expertise with human-centered design for healthcare applications</p>
                </div>
              </div>
              
              <div className="research-synthesis mt-8 p-6 bg-accent/10 rounded-xl">
                <h4 className="font-heading text-lg text-accent mb-3">Research Synthesis</h4>
                <p className="text-base">15+ years of technical evolution from autonomous systems to human-centered AI demonstrates the logical progression toward research in multisensory intelligence, responsive environments, and assistive robotics—combining technical rigor with human impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Vision & Future Work */}
      <section className="research-vision py-20">
        <div className="container">
          <h2 className="font-heading text-4xl text-primary text-center mb-12">Research Vision & Future Directions</h2>
          
          <div className="vision-grid grid md:grid-cols-3 gap-8">
            <div className="vision-area p-8 bg-primary/5 rounded-2xl">
              <h3 className="font-heading text-2xl text-primary mb-4">Multisensory AI for Healthcare</h3>
              <p className="text-base mb-6">Advancing human-AI symbiosis through multimodal emotion recognition systems that preserve privacy while enabling clinical-grade performance across diverse populations.</p>
              <div className="research-focus">
                <h4 className="font-heading text-lg text-secondary mb-2">Key Questions</h4>
                <ul className="text-sm space-y-2">
                  <li>• Cross-cultural emotion AI generalization</li>
                  <li>• Federated learning for healthcare applications</li>
                  <li>• Real-time multimodal signal fusion</li>
                </ul>
              </div>
            </div>
            
            <div className="vision-area p-8 bg-secondary/5 rounded-2xl">
              <h3 className="font-heading text-2xl text-primary mb-4">Responsive Sensing Environments</h3>
              <p className="text-base mb-6">Developing ambient intelligence systems that adapt to human emotional and physiological states while maintaining unobtrusiveness and user autonomy.</p>
              <div className="research-focus">
                <h4 className="font-heading text-lg text-secondary mb-2">Key Questions</h4>
                <ul className="text-sm space-y-2">
                  <li>• Energy-efficient continuous emotion monitoring</li>
                  <li>• Privacy-preserving ambient sensing</li>
                  <li>• Human-environment interaction models</li>
                </ul>
              </div>
            </div>
            
            <div className="vision-area p-8 bg-accent/5 rounded-2xl">
              <h3 className="font-heading text-2xl text-primary mb-4">Social AI & Assistive Robotics</h3>
              <p className="text-base mb-6">Creating emotion-aware robotic systems that can understand and respond to human emotional needs in healthcare, education, and assistive technology applications.</p>
              <div className="research-focus">
                <h4 className="font-heading text-lg text-secondary mb-2">Key Questions</h4>
                <ul className="text-sm space-y-2">
                  <li>• Ethical AI deployment in vulnerable populations</li>
                  <li>• Long-term human-robot emotional relationships</li>
                  <li>• Adaptive robotic behavior for individual needs</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="research-commitment mt-16 text-center">
            <h3 className="font-heading text-3xl text-primary mb-6">Commitment to Research Excellence</h3>
            <p className="text-xl max-w-4xl mx-auto mb-8">My goal is to bridge the gap between advanced technical research and real-world deployment, ensuring that breakthrough discoveries in AI and robotics genuinely improve human lives—particularly for those who need technology most.</p>
            
            <div className="commitment-pillars grid md:grid-cols-3 gap-6 mt-12">
              <div className="pillar text-center">
                <div className="pillar-icon text-4xl text-primary mb-4">🔬</div>
                <h4 className="font-heading text-lg text-secondary mb-2">Technical Rigor</h4>
                <p className="text-sm">Applying defense-grade engineering standards to research for clinical deployment</p>
              </div>
              
              <div className="pillar text-center">
                <div className="pillar-icon text-4xl text-primary mb-4">🤝</div>
                <h4 className="font-heading text-lg text-secondary mb-2">Human-Centered Design</h4>
                <p className="text-sm">Technology that serves human flourishing and preserves dignity</p>
              </div>
              
              <div className="pillar text-center">
                <div className="pillar-icon text-4xl text-primary mb-4">🌍</div>
                <h4 className="font-heading text-lg text-secondary mb-2">Global Impact</h4>
                <p className="text-sm">Research that scales to help millions across cultural and linguistic boundaries</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;