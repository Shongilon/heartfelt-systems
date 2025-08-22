import { motion } from 'framer-motion';
import { useState } from 'react';

const Systems = () => {
  const [selectedCapability, setSelectedCapability] = useState<string | null>('systems-engineering');

  const capabilities = [
    {
      id: 'systems-engineering',
      title: 'Human-Centered Systems Engineering',
      position: { cx: 400, cy: 200 },
      radius: 60,
      description: 'Bringing 15+ years of safety-critical systems experience to emotion AI research.',
      details: [
        'Aviation systems with zero-failure tolerance',
        'Real-time processing under extreme constraints', 
        'Human factors integration in technical systems'
      ],
      link: '#emotivoice-demo'
    },
    {
      id: 'real-time',
      title: 'Real-Time Processing',
      position: { cx: 250, cy: 120 },
      radius: 40,
      description: '15+ years building systems that process critical data in milliseconds, not minutes.',
      details: [
        'Sub-millisecond latency requirements',
        'Distributed processing architectures',
        'Edge computing for privacy-first AI'
      ],
      link: '#emotivoice-demo'
    },
    {
      id: 'privacy-first',
      title: 'Privacy-First Architecture',
      position: { cx: 550, cy: 120 },
      radius: 40,
      description: 'Security and emotion recognition aren\'t contradictory—they\'re the same engineering challenge.',
      details: [
        'On-device processing for sensitive data',
        'Zero-knowledge emotion analysis',
        'HIPAA-compliant research platforms'
      ],
      link: '#reactu-platform'
    },
    {
      id: 'cross-cultural',
      title: 'Cross-Cultural AI',
      position: { cx: 200, cy: 300 },
      radius: 40,
      description: 'Building emotion AI that works for my grandmother in Tel Aviv and my colleagues in Boston.',
      details: [
        'Multi-language emotion recognition',
        'Cultural bias detection and mitigation',
        'Inclusive dataset development'
      ],
      link: '#research-questions'
    },
    {
      id: 'adaptive-systems',
      title: 'Adaptive Systems',
      position: { cx: 600, cy: 300 },
      radius: 40,
      description: 'Interfaces that get smarter when humans get stressed.',
      details: [
        'Dynamic UI adaptation based on user state',
        'Stress-aware interface simplification',
        'Context-driven interaction patterns'
      ],
      link: '#adaptive-interfaces'
    }
  ];

  const getCapability = (id: string) => capabilities.find(cap => cap.id === id);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-5xl text-primary mb-6">
            Technical Systems Thinking
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Click any capability to explore the intersection of systems engineering and emotion AI
          </p>
        </motion.div>

        {/* Interactive Constellation */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-gradient-subtle rounded-3xl p-8 min-h-96">
            <svg className="w-full h-96" viewBox="0 0 800 400">
              {/* Connection Lines */}
              <g className="opacity-30">
                <line x1="400" y1="200" x2="250" y2="120" stroke="currentColor" strokeWidth="2" className="text-border" />
                <line x1="400" y1="200" x2="550" y2="120" stroke="currentColor" strokeWidth="2" className="text-border" />
                <line x1="400" y1="200" x2="200" y2="300" stroke="currentColor" strokeWidth="2" className="text-border" />
                <line x1="400" y1="200" x2="600" y2="300" stroke="currentColor" strokeWidth="2" className="text-border" />
              </g>

              {/* Capability Nodes */}
              {capabilities.map((capability) => (
                <g 
                  key={capability.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedCapability === capability.id ? 'scale-110' : 'hover:scale-105'
                  }`}
                  onClick={() => setSelectedCapability(capability.id)}
                >
                  <circle
                    cx={capability.position.cx}
                    cy={capability.position.cy}
                    r={capability.radius}
                    className={`transition-all duration-300 ${
                      capability.id === 'systems-engineering'
                        ? 'fill-primary stroke-primary-glow'
                        : selectedCapability === capability.id
                        ? 'fill-secondary stroke-secondary'
                        : 'fill-accent stroke-accent-foreground'
                    }`}
                    fillOpacity="0.2"
                    strokeWidth="3"
                  />
                  <text
                    x={capability.position.cx}
                    y={capability.position.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={`font-heading text-sm font-medium pointer-events-none ${
                      capability.id === 'systems-engineering'
                        ? 'fill-primary'
                        : selectedCapability === capability.id
                        ? 'fill-secondary'
                        : 'fill-accent'
                    }`}
                  >
                    <tspan x={capability.position.cx} dy="-0.3em">
                      {capability.title.split(' ')[0]}
                    </tspan>
                    <tspan x={capability.position.cx} dy="1.2em">
                      {capability.title.split(' ').slice(1).join(' ')}
                    </tspan>
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Capability Details */}
        <motion.div
          key={selectedCapability}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl p-8 shadow-card"
        >
          {selectedCapability && (() => {
            const capability = getCapability(selectedCapability);
            return capability ? (
              <div>
                <h3 className="font-heading text-2xl text-primary mb-4">
                  {capability.title}
                </h3>
                <p className="text-lg text-foreground/80 mb-6">
                  {capability.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {capability.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                      <span className="text-foreground/80">{detail}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={capability.link}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  See this in action →
                </a>
              </div>
            ) : null;
          })()}
        </motion.div>

        {/* Personal Technical Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 mt-20 bg-primary/5 rounded-3xl px-8"
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-heading text-primary text-center mb-8">
              "Privacy and emotion recognition aren't contradictory—they're the same engineering challenge."
            </blockquote>
            
            {/* Supporting Story */}
            <div className="bg-background p-8 rounded-2xl">
              <p className="text-lg mb-4">
                When my grandmother with dementia kept forgetting her password, I realized our 
                'secure' systems fail the people who need them most.
              </p>
              <p className="text-lg mb-6">
                Real security means technology that works for human limitations, not despite them.
              </p>
              
              {/* Hand-drawn emphasis */}
              <div className="relative pl-8">
                <div className="hand-emphasis">
                  <span className="font-hand text-secondary text-lg">
                    This is the real challenge
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Systems Integration Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading text-3xl text-primary mb-8">
              From Safety-Critical to Emotion-Critical
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-heading text-xl text-secondary mb-4">
                  What I Learned in Aviation
                </h4>
                <ul className="text-left space-y-3 text-foreground/80">
                  <li>• Failure is not an option</li>
                  <li>• Humans are the unpredictable variable</li>
                  <li>• Perfect systems still fail in real conditions</li>
                  <li>• Trust is earned through reliability</li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-xl text-secondary mb-4">
                  What I Apply to Emotion AI
                </h4>
                <ul className="text-left space-y-3 text-foreground/80">
                  <li>• Privacy failure destroys everything</li>
                  <li>• Emotions are the signal, not noise</li>
                  <li>• Lab accuracy ≠ real-world utility</li>
                  <li>• Trust requires transparent systems</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Systems;