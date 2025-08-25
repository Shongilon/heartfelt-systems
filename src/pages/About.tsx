import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [expandedPeriod, setExpandedPeriod] = useState<string | null>(null);

  const timelinePeriods = [
    {
      id: '2008-2015',
      title: 'Safety-Critical Systems',
      subtitle: '2008-2015',
      description: '"I thought perfect code meant bulletproof systems. Then I met users who broke every assumption."',
      details: [
        "Built aviation systems where failure wasn't an option",
        "Learned that humans are the most unpredictable component",
        "Discovered the gap between technical perfection and human reality"
      ]
    },
    {
      id: '2015-2020',
      title: 'Human-Centered Awakening',
      subtitle: '2015-2020',
      description: '"Technology should serve people, not missions."',
      details: [
        "Shifted from military to civilian applications",
        "Started focusing on user experience in high-stress environments",
        "Realized that the best interface adapts to human limitations"
      ]
    },
    {
      id: '2020-2024',
      title: 'Emotion AI Research',
      subtitle: '2020-2024',
      description: '"What if your heartbeat could be a language?"',
      details: [
        "Founded research into emotion recognition technology",
        "Built EmotiVoice for ALS communication",
        "Proved that privacy and emotion AI can coexist"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-heading text-5xl text-primary mb-6">
            The Journey
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            From building systems that couldn't fail to building systems that can feel
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5" />
          
          {/* Timeline Points */}
          <div className="space-y-16">
            {timelinePeriods.map((period, index) => (
              <motion.div
                key={period.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Marker */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10" />
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="story-card">
                    <div className="mb-4">
                      <h3 className="font-heading text-2xl text-primary mb-2">
                        {period.title}
                      </h3>
                      <p className="text-text-light font-mono text-sm">
                        {period.subtitle}
                      </p>
                    </div>
                    
                    <blockquote className="text-lg italic text-secondary mb-6">
                      {period.description}
                    </blockquote>
                    
                    <button
                      onClick={() => setExpandedPeriod(
                        expandedPeriod === period.id ? null : period.id
                      )}
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      {expandedPeriod === period.id ? 'Show less' : 'Learn more'} →
                    </button>
                    
                    {/* Expandable Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedPeriod === period.id ? 'auto' : 0,
                        opacity: expandedPeriod === period.id ? 1 : 0
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-border">
                        <ul className="space-y-3">
                          {period.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                              <p className="text-foreground/80">{detail}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 mt-20 bg-primary/5 rounded-3xl px-8"
        >
          <div className="text-center max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-heading text-primary leading-relaxed mb-8">
              "I believe the most sophisticated AI means nothing if it doesn't understand 
              a grandmother's frustration with her password, or a child's excitement about 
              a new discovery, or the subtle sadness in a voice when someone says they're 'fine.'"
            </blockquote>
            <div className="hand-underline" />
          </div>
        </motion.section>

        {/* Faculty Connection Story */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl text-primary mb-8">
              My Turning Point
            </h3>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                When my cousin was diagnosed with autism at 8, I watched him struggle to express emotions 
                while being incredibly intelligent. This moment made me realize: we're building AI that talks, 
                but not AI that truly communicates.
              </p>
              <p>
                Emotion-aware technology isn't just an academic curiosity—it's personally urgent. After 15 years 
                in systems engineering, I've learned that the real frontier isn't making machines faster or more reliable, 
                but making them truly understand us. My work now focuses on building technology that enhances human 
                connection rather than replacing it.
              </p>
              
              {/* Contextual link */}
              <div className="mt-6 text-sm text-text-light">
                <a 
                  href="https://www.linkedin.com/in/itai-katz-esa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  See my professional journey
                </a> from defense systems to emotion AI research.
              </div>
            </div>
            
            {/* Hand-drawn annotation */}
            <div className="relative mt-8 pl-8">
              <div className="hand-emphasis">
                <span className="font-hand text-secondary text-lg">
                  This changed everything
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Personal Profile Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 mt-20 bg-primary/5 rounded-3xl px-8"
        >
          <div className="container max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl text-primary mb-8 text-center">From Systems Engineering to Emotion AI</h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="profile-content">
                <p className="text-lg mb-6">I'm a systems engineer who spent 15+ years building technology for extreme reliability—from navigation systems to augmented reality platforms. Now I explore what happens when that same rigor meets human emotion.</p>
                
                <p className="text-lg mb-6">As <strong>CTO at REACTU.io</strong>, I'm exploring how physiological signals might become a new alphabet of human expression—helping people communicate emotions when words fail.</p>
                
                <p className="text-lg">What if technology could let emotions travel without words? I believe the engineering discipline that creates unbreakable systems can also create <strong>technology that truly understands us</strong>.</p>
              </div>
              
              <div className="research-interests">
                <h4 className="font-heading text-xl text-secondary mb-4">Core Research Interests</h4>
                
                <div className="interest-cluster mb-4">
                  <h5 className="font-heading text-base text-primary mb-2">Multisensory AI for Human Experience</h5>
                  <p className="text-sm text-text-light">Multimodal signal fusion, human-AI symbiosis, real-time neural architectures</p>
                </div>
                
                <div className="interest-cluster mb-4">
                  <h5 className="font-heading text-base text-primary mb-2">Responsive Sensing Environments</h5>
                  <p className="text-sm text-text-light">Wearable sensor networks, ambient intelligence, interactive healthcare interfaces</p>
                </div>
                
                <div className="interest-cluster mb-4">
                  <h5 className="font-heading text-base text-primary mb-2">Social AI & Assistive Technology</h5>
                  <p className="text-sm text-text-light">Emotion-aware systems, communication barrier solutions, AI ethics in healthcare</p>
                </div>
              </div>
            </div>
            
            {/* Highlight Block: The Human Challenge */}
            <div className="human-challenge mt-16 p-8 bg-primary/10 rounded-2xl">
              <h4 className="font-heading text-2xl text-primary mb-6 text-center">The Human Challenge Driving My Research</h4>
              
              <blockquote className="text-xl text-center text-primary italic mb-8 max-w-3xl mx-auto">
                "Imagine being fully aware, trapped in a body that cannot express even the simplest emotions. Millions of people live this reality daily."
              </blockquote>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="stat-item">
                  <span className="text-3xl font-heading text-secondary">20M+</span>
                  <p className="text-sm text-text-light">People with preserved cognition but cannot express emotions</p>
                </div>
                
                <div className="stat-item">
                  <span className="text-3xl font-heading text-secondary">4 Conditions</span>
                  <p className="text-sm text-text-light">ALS, locked-in syndrome, cerebral palsy, severe stroke</p>
                </div>
                
                <div className="stat-item">
                  <span className="text-3xl font-heading text-secondary">Vast Need</span>
                  <p className="text-sm text-text-light">Unmet need in human expression technology</p>
                </div>
              </div>
              
              <p className="text-center text-lg mt-6 max-w-2xl mx-auto">
                REACTU.io creates <strong>"AI that feels you"</strong> — technology designed to restore dignity and connection for those who need it most.
              </p>
            </div>
            
            {/* Compact Technical Foundation */}
            <div className="technical-foundation mt-12 pt-8 border-t border-border">
              <h4 className="font-heading text-lg text-secondary mb-6 text-center">Technical Foundation</h4>
              
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="foundation-item">
                  <h5 className="font-heading text-base text-primary mb-2">Education & Leadership</h5>
                  <p className="text-text-light">MBA Technology Management (Tel Aviv), B.Sc. Computer Science (Haifa)</p>
                  <p className="text-text-light">Led international teams, managed complex research collaborations</p>
                </div>
                
                <div className="foundation-item">
                  <h5 className="font-heading text-base text-primary mb-2">Core Technologies</h5>
                  <p className="text-text-light">PyTorch, multimodal signal processing, biosensor integration, real-time neural networks</p>
                </div>
                
                <div className="foundation-item">
                  <h5 className="font-heading text-base text-primary mb-2">Systems Expertise</h5>
                  <p className="text-text-light">Exploring multimodal signals as a new alphabet of human expression, real-time emotion processing architectures</p>
                </div>
              </div>
              
              <div className="career-timeline mt-8 text-center">
                <div className="timeline-flow text-xs text-text-light">
                  <strong>High-Reliability Systems</strong> → <strong>Spatial Computing</strong> → <strong>AI Manufacturing</strong> → <strong>Emotion AI Research</strong>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;