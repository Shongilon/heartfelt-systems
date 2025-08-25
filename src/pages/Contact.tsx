import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Contact Hero */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="contact-hero py-20"
      >
        <div className="container text-center">
          <h1 className="font-heading text-4xl text-primary mb-6">Let's Connect</h1>
          <p className="text-xl text-text-light max-w-2xl mx-auto">
            I'm always interested in discussing emotion AI research, cross-cultural technology, 
            and how engineering rigor can serve human connection.
          </p>
        </div>
      </motion.section>

      {/* Contact Details */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="contact-details py-16"
      >
        <div className="container max-w-4xl">
          <div className="contact-grid grid md:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="contact-methods">
              <h2 className="font-heading text-2xl text-primary mb-8">Get In Touch</h2>
              
              <div className="contact-item mb-6 flex items-center">
                <div className="contact-icon text-2xl mr-4" aria-hidden="true">📧</div>
                <div className="contact-info">
                  <h3 className="font-heading text-lg">Email</h3>
                  <a 
                    href="mailto:itai.katz@reactu.io" 
                    className="contact-link text-secondary hover:text-primary transition-colors"
                  >
                    itai.katz@reactu.io
                  </a>
                </div>
              </div>
              
              <div className="contact-item mb-6 flex items-center">
                <div className="contact-icon text-2xl mr-4" aria-hidden="true">📍</div>
                <div className="contact-info">
                  <h3 className="font-heading text-lg">Location</h3>
                  <p className="text-text-light">Tel Aviv, with frequent research collaborations in the US</p>
                </div>
              </div>
              
              {/* Professional Links Section */}
              <div className="professional-links mt-8">
                <h3 className="font-heading text-lg text-secondary mb-4">Professional Links</h3>
                <div className="links-grid space-y-3">
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/itai-katz-esa/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link-item flex items-center text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>

                  {/* GitHub */}
                  <a 
                    href="https://github.com/Shongilon"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link-item flex items-center text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="GitHub Projects"
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.303 24 12 24 5.373 18.627 0 12 0z"/>
                    </svg>
                    <span>GitHub Projects</span>
                  </a>

                  {/* REACTU.io */}
                  <a 
                    href="https://reactu.io"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link-item flex items-center text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="REACTU.io"
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M14 3l7 7-4 1-4 4-1 4-7-7 4-1 4-4 1-4zM5 19l3-3-2-.999L5 19z"/>
                    </svg>
                    <span>REACTU.io</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Research Interests */}
            <div className="research-focus">
              <h2 className="font-heading text-2xl text-primary mb-8">Research Collaboration Interests</h2>
              
              <div className="interests-list space-y-6">
                <div className="interest-area">
                  <h3 className="font-heading text-lg text-secondary mb-3">Multisensory AI & Healthcare</h3>
                  <ul className="list-disc pl-5 text-sm text-text-light space-y-1">
                    <li>Cross-cultural emotion recognition systems</li>
                    <li>Privacy-preserving federated learning</li>
                    <li>Clinical-grade AI for assistive technology</li>
                    <li>Real-time multimodal signal processing</li>
                  </ul>
                </div>

                <div className="interest-area">
                  <h3 className="font-heading text-lg text-secondary mb-3">Responsive Environments</h3>
                  <ul className="list-disc pl-5 text-sm text-text-light space-y-1">
                    <li>Ambient intelligence and sensor networks</li>
                    <li>Human–environment interaction models</li>
                    <li>Wearable emotion monitoring systems</li>
                    <li>Adaptive interface design</li>
                  </ul>
                </div>

                <div className="interest-area">
                  <h3 className="font-heading text-lg text-secondary mb-3">Social Robotics & Assistive Technology</h3>
                  <ul className="list-disc pl-5 text-sm text-text-light space-y-1">
                    <li>Emotion-aware robotic systems</li>
                    <li>Communication barrier solutions</li>
                    <li>AI ethics in healthcare applications</li>
                    <li>Long-term human–robot interaction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="cta-section text-center mt-16 pt-12 border-t border-border">
            <h3 className="font-heading text-2xl text-primary mb-4">Ready to Collaborate?</h3>
            <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
              I'd love to discuss research opportunities, collaboration ideas, 
              or how emotion AI can solve real-world problems.
            </p>
            
            <a 
              href="mailto:itai.katz@reactu.io?subject=Research%20Collaboration%20Opportunity" 
              className="cta-button bg-primary text-background px-8 py-4 rounded-lg font-heading text-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Start a Conversation →
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;