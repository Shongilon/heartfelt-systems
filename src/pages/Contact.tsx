import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-5xl text-primary mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            I'm always interested in discussing emotion AI research, cross-cultural technology, 
            and how engineering rigor can serve human connection.
          </p>
        </motion.div>

        {/* Contact Details */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="contact-details py-16"
        >
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
                    className="contact-link text-secondary hover:text-secondary/80 transition-colors"
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
              
              <div className="professional-links mt-8">
                <h3 className="font-heading text-lg text-secondary mb-4">Professional Links</h3>
                <div className="space-y-3">
                  <a 
                    href="https://www.linkedin.com/in/itai-katz-esa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
                  >
                    <span className="text-xl">💼</span>
                    <span>LinkedIn Profile</span>
                  </a>
                  
                  <a 
                    href="https://reactu.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
                  >
                    <span className="text-xl">🚀</span>
                    <span>REACTU.io</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Research Interests */}
            <div className="research-focus">
              <h2 className="font-heading text-2xl text-primary mb-8">Research Collaboration Interests</h2>
              
              <div className="space-y-6">
                <div className="research-area p-6 bg-primary/5 rounded-xl">
                  <h3 className="font-heading text-lg text-secondary mb-3">Multisensory AI & Healthcare</h3>
                  <ul className="space-y-2 text-text-light text-sm">
                    <li>• Cross-cultural emotion recognition systems</li>
                    <li>• Privacy-preserving federated learning</li>
                    <li>• Clinical-grade AI for assistive technology</li>
                    <li>• Real-time multimodal signal processing</li>
                  </ul>
                </div>
                
                <div className="research-area p-6 bg-secondary/5 rounded-xl">
                  <h3 className="font-heading text-lg text-secondary mb-3">Responsive Environments</h3>
                  <ul className="space-y-2 text-text-light text-sm">
                    <li>• Ambient intelligence and sensor networks</li>
                    <li>• Human-environment interaction models</li>
                    <li>• Wearable emotion monitoring systems</li>
                    <li>• Adaptive interface design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Single, Clear CTA */}
          <div className="cta-section text-center mt-16 pt-12 border-t border-border">
            <h3 className="font-heading text-2xl text-primary mb-4">Ready to Collaborate?</h3>
            <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
              I'd love to discuss research opportunities, collaboration ideas, 
              or how emotion AI can solve real-world problems.
            </p>
            
            <a 
              href="mailto:itai.katz@reactu.io?subject=Research%20Collaboration%20Opportunity" 
              className="cta-button bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading text-lg hover:bg-primary/90 transition-colors inline-block"
            >
              Start a Conversation →
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;