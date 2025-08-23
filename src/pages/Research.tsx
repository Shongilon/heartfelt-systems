import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Research = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const startDemo = () => {
    setIsRecording(true);
    // Simulate recording for demo
    setTimeout(() => setIsRecording(false), 5000);
  };

  const projects = [
    {
      id: 'adaptive-interfaces',
      title: 'Adaptive Interfaces for Extreme Environments',
      description: 'When humans are under extreme stress, traditional interfaces become cognitive barriers.',
      impact: 'I built the first large-scale system that got smarter when humans got stressed.',
      metrics: ['40% faster completion', '60% improved satisfaction', 'Zero safety incidents'],
      details: [
        'Discovered operators were ignoring critical safety information because the system didn\'t adapt to their emotional state.',
        'The solution: Real-time emotion recognition that simplified interfaces when users were overwhelmed.',
        'Deployed in high-stress operational environments with measurable impact on human performance.'
      ]
    },
    {
      id: 'reactu-platform',
      title: 'REACTU.io Healthcare Platform',
      description: 'Healthcare data lives in silos. Emotion data doesn\'t exist at all.',
      impact: 'I built the infrastructure that makes emotion AI research possible in real healthcare settings.',
      metrics: ['10,000+ Users', 'Clinical-grade privacy', 'HIPAA compliant'],
      details: [
        'Created the first platform to safely process emotion signals in healthcare environments.',
        'Built privacy-first architecture that enables research without compromising patient data.',
        'Enables researchers to study emotion patterns in real clinical settings for the first time.'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl">
        {/* EmotiVoice Hero Project */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          {/* Project Header */}
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl text-primary mb-4">EmotiVoice</h1>
            <p className="text-xl text-text-light">
              AI that learns your unique emotional voice
            </p>
          </div>

          {/* Interactive Demo */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-card border-2 border-border rounded-3xl p-8 shadow-card">
              {/* Voice Input Interface */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <Button
                    onClick={startDemo}
                    disabled={isRecording}
                    className={`px-8 py-4 font-heading text-lg transition-all duration-300 ${
                      isRecording 
                        ? 'bg-secondary hover:bg-secondary' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${
                        isRecording ? 'bg-primary-foreground animate-pulse' : 'bg-primary-foreground'
                      }`} />
                      {isRecording ? 'Recording...' : 'Speak for 10 seconds'}
                    </div>
                  </Button>

                  {/* Language Selector */}
                  <div className="flex gap-2">
                    {[
                      { code: 'en', label: 'English' },
                      { code: 'he', label: 'עברית' },
                      { code: 'ar', label: 'العربية' }
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setSelectedLanguage(lang.code)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          selectedLanguage === lang.code
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Real-time Visualization */}
                <div className="bg-background rounded-xl p-6 mb-6">
                  <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-text-light font-mono">
                      {isRecording ? 'Processing audio waveform...' : 'Waveform visualization area'}
                    </div>
                  </div>
                </div>

                {/* Results Display */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {['Happiness', 'Sadness', 'Anger', 'Fear'].map((emotion) => (
                    <div key={emotion} className="bg-muted rounded-lg p-4">
                      <div className="text-sm text-muted-foreground mb-2">{emotion}</div>
                      <div className="w-full bg-background rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ 
                            width: isRecording ? `${Math.random() * 100}%` : '0%'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Privacy Badge */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="text-lg">🔒</div>
                  <span>All processing happens locally - your voice never leaves your device</span>
                </div>

                {/* Demo Actions */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/30">
                  <div className="text-sm text-text-light">
                    <span className="text-lg mr-2">🔒</span>
                    All processing happens locally
                  </div>
                  
                  <a 
                    href="https://github.com/Shongilon" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="code-link text-sm text-secondary hover:text-primary"
                  >
                    View technical implementation →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="cursor-pointer"
              onClick={() => setExpandedProject(
                expandedProject === 'emotivoice-story' ? null : 'emotivoice-story'
              )}
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-heading text-2xl text-primary">
                  The Story Behind EmotiVoice
                </h3>
                <span className="text-2xl transition-transform duration-300">
                  {expandedProject === 'emotivoice-story' ? '−' : '+'}
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={false}
              animate={{
                height: expandedProject === 'emotivoice-story' ? 'auto' : 0,
                opacity: expandedProject === 'emotivoice-story' ? 1 : 0
              }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-4 gap-8 bg-muted/30 rounded-2xl p-8">
                {[
                  {
                    title: 'The Challenge',
                    content: 'Sarah has ALS. Her voice changes daily, but her feelings don\'t.'
                  },
                  {
                    title: 'The Messy Middle',
                    content: 'Academic emotion AI works in labs. Real patients need something that works at 3am.'
                  },
                  {
                    title: 'What I Built',
                    content: 'AI that learns your unique emotional voice, adapts in real-time, never sends data to the cloud.'
                  },
                  {
                    title: 'What It Means',
                    content: '"For the first time, my computer understood when I was frustrated with it." —Beta tester'
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-heading text-lg text-secondary mb-4">
                      {step.title}
                    </h4>
                    <p className="text-foreground/80">
                      {step.content}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Impact Metrics */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-heading text-primary mb-2">89%</div>
                <div className="text-text-light">Accuracy across languages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading text-primary mb-2">12</div>
                <div className="text-text-light">Families testing in beta</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading text-primary mb-2">0</div>
                <div className="text-text-light">Privacy incidents</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Other Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.section
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`py-20 ${index % 2 === 0 ? 'bg-background' : ''}`}
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
              }`}>
                {/* Visual Placeholder */}
                <div className={index % 2 === 0 ? '' : 'md:col-start-2'}>
                  <div className="aspect-video bg-gradient-secondary rounded-2xl flex items-center justify-center">
                    <span className="text-white/80 font-mono">
                      Technical Architecture Visualization
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 0 ? '' : 'md:col-start-1'}>
                  <h3 className="font-heading text-3xl text-primary mb-6">
                    {project.title}
                  </h3>
                  <div className="space-y-4 mb-8">
                    <p className="text-lg">{project.description}</p>
                    <p className="text-lg font-medium text-secondary">
                      {project.impact}
                    </p>
                  </div>

                  {/* Expandable Details */}
                  <button
                    onClick={() => setExpandedProject(
                      expandedProject === project.id ? null : project.id
                    )}
                    className="text-primary hover:text-primary/80 font-medium transition-colors mb-6"
                  >
                    {expandedProject === project.id ? 'Hide details' : 'See the full story'} →
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedProject === project.id ? 'auto' : 0,
                      opacity: expandedProject === project.id ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 mb-8">
                      {project.details.map((detail, i) => (
                        <p key={i} className="text-foreground/80">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>

                  {/* Impact Numbers */}
                  <div className="flex flex-wrap gap-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="px-4 py-2 bg-accent/10 rounded-lg">
                        <span className="font-medium text-accent">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
