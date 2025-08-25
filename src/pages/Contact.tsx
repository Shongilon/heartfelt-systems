import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-heading text-5xl text-primary mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            I'm always interested in discussing emotion AI research, cross-cultural technology, 
            and how engineering rigor can serve human connection.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="contact-item text-center p-8 bg-card rounded-2xl">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-heading text-xl text-primary mb-4">Email</h3>
              <a 
                href="mailto:itai.katz@reactu.io" 
                className="text-secondary hover:text-secondary/80 transition-colors text-lg"
              >
                itai.katz@reactu.io
              </a>
            </div>
            
            <div className="contact-item text-center p-8 bg-card rounded-2xl">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-heading text-xl text-primary mb-4">Location</h3>
              <p className="text-text-light text-lg">Tel Aviv → Boston</p>
              <p className="text-sm text-text-light mt-2">(for studies)</p>
            </div>
            
            <div className="contact-item text-center p-8 bg-card rounded-2xl">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-heading text-xl text-primary mb-4">Timeline</h3>
              <p className="text-text-light text-lg">Applying Fall 2026</p>
              <p className="text-sm text-text-light mt-2">PhD Programs</p>
            </div>
          </div>
        </motion.section>

        {/* Research Interests */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="font-heading text-3xl text-primary text-center mb-12">
            Research Collaboration Interests
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="research-area p-8 bg-primary/5 rounded-2xl">
              <h3 className="font-heading text-xl text-secondary mb-4">Multisensory AI & Healthcare</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Cross-cultural emotion recognition systems</li>
                <li>• Privacy-preserving federated learning</li>
                <li>• Clinical-grade AI for assistive technology</li>
                <li>• Real-time multimodal signal processing</li>
              </ul>
            </div>
            
            <div className="research-area p-8 bg-secondary/5 rounded-2xl">
              <h3 className="font-heading text-xl text-secondary mb-4">Responsive Environments</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Ambient intelligence and sensor networks</li>
                <li>• Human-environment interaction models</li>
                <li>• Wearable emotion monitoring systems</li>
                <li>• Adaptive interface design</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Professional Links */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl text-primary mb-8">
            Professional Profile
          </h2>
          
          <div className="flex justify-center gap-8 mb-12">
            <a 
              href="https://www.linkedin.com/in/itai-katz-esa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-card rounded-xl hover:shadow-elegant transition-all duration-300"
            >
              <span className="text-2xl">💼</span>
              <span className="font-medium text-primary">LinkedIn Profile</span>
            </a>
            
            <a 
              href="https://reactu.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-card rounded-xl hover:shadow-elegant transition-all duration-300"
            >
              <span className="text-2xl">🚀</span>
              <span className="font-medium text-primary">REACTU.io</span>
            </a>
          </div>

          {/* Research Tags */}
          <div className="research-tags">
            <h3 className="font-heading text-xl text-secondary mb-6">Core Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Emotion AI
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                PyTorch & Neural Networks
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Systems Engineering
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Healthcare Technology
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Privacy-First AI
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Cross-Cultural Systems
              </span>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20 p-8 bg-gradient-subtle rounded-2xl"
        >
          <h3 className="font-heading text-2xl text-primary mb-4">
            Ready to Discuss Research Opportunities?
          </h3>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            Whether you're interested in collaboration, have questions about my work, 
            or want to explore how emotion AI can solve real-world problems—I'd love to hear from you.
          </p>
          
          <a 
            href="mailto:itai.katz@reactu.io?subject=Research Collaboration Inquiry"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-medium text-lg"
          >
            <span>Start a Conversation</span>
            <span>→</span>
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;