import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import itaiWorkstation from '@/assets/itai-workstation.jpg';
import emotionWaveformBg from '@/assets/emotion-waveform-bg.jpg';
import safetySystems from '@/assets/safety-systems.jpg';
import humanCenteredTransition from '@/assets/human-centered-transition.jpg';

const Index = () => {
  const storyCards = [
    {
      id: 'safety-critical',
      title: 'Safety-Critical Systems',
      subtitle: '"Where reliability isn\'t optional"',
      description: '15 years building aviation systems where failure meant losing lives, not just data.',
      image: safetySystems,
      link: '/story'
    },
    {
      id: 'human-centered',
      title: 'Human-Centered Awakening',
      subtitle: '"Technology serves people, not missions"',
      description: 'The moment I realized perfect code means nothing if humans can\'t use it.',
      image: humanCenteredTransition,
      link: '/story'
    },
    {
      id: 'emotion-ai',
      title: 'Emotion AI Research',
      subtitle: '"What if your heartbeat could be a language?"',
      description: 'Building AI that understands not just what you say, but how you feel.',
      image: emotionWaveformBg,
      link: '/research'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Waveform */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src={emotionWaveformBg} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center px-4">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl text-primary mb-6 leading-tight">
              From Systems That Save Lives
              <span className="block text-secondary mt-2">
                To Systems That Understand Lives
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xl md:text-2xl text-text-light mb-12 max-w-2xl mx-auto leading-relaxed">
              15 years building technology that couldn't fail.<br />
              Now building technology that can feel.
            </p>
          </motion.div>

          {/* Environmental Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <img 
              src={itaiWorkstation} 
              alt="Itai working with emotion data visualizations" 
              className="w-80 h-80 object-cover rounded-2xl mx-auto shadow-elegant"
            />
          </motion.div>

          {/* Interactive Demo Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-12"
          >
            <div className="max-w-md mx-auto bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></div>
                <span className="font-mono text-sm text-text-light">Real-time emotion waveform</span>
              </div>
              <p className="text-sm text-text-light">
                Move your mouse to see emotion AI in action →
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link to="/story" className="cta-button">
              Explore the Journey →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Story Preview Cards */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl text-primary mb-6">
              Three Transformations
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              The evolution from building bulletproof systems to building systems that understand bullets can't solve everything
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storyCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="story-card group"
              >
                {/* Card Visual */}
                <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-heading text-2xl text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-secondary font-medium italic mb-4">
                  {card.subtitle}
                </p>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {card.description}
                </p>
                
                <Link 
                  to={card.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group-hover:gap-3 duration-300"
                >
                  Learn more 
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Teaser */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl md:text-3xl font-heading text-primary mb-8 leading-relaxed">
              "The most sophisticated AI means nothing if it can't understand 
              a grandmother's frustration with her password."
            </blockquote>
            <div className="hand-underline" />
            <div className="mt-8">
              <Link to="/vision" className="text-secondary hover:text-secondary/80 font-medium">
                Read my research vision →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-heading text-3xl mb-8">
              Explore My Work
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { to: '/research', label: 'See EmotiVoice Demo' },
                { to: '/systems', label: 'Technical Philosophy' },
                { to: '/vision', label: 'MIT Research Plan' }
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
