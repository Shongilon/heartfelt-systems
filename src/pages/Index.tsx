import { Link } from 'react-router-dom';
import itaiWorkstation from '@/assets/itai-workstation.jpg';
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
        subtitle: 'Technical systems that understand human experience',
        description: 'Building AI that recognizes emotional patterns in voice, creating more empathetic technology.',
        image: itaiWorkstation,
        link: '/research'
      }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing min-h-[80vh] flex items-center justify-center">        
        <div className="container mx-auto text-center px-4">
          <h1 className="text-foreground mb-6 mx-auto">
            From Systems That Save Lives
            <span className="block text-secondary mt-4">
              To Systems That Understand Lives
            </span>
          </h1>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            15 years building technology that couldn't fail. Now building technology that can understand human emotion through voice analysis.
          </p>

          <div className="mb-12">
            <img 
              src={itaiWorkstation} 
              alt="Research workspace with emotion AI visualizations" 
              className="w-96 h-80 object-cover rounded-lg mx-auto shadow-card"
            />
          </div>

          <Link to="/about" className="cta-button">
            Explore My Research
          </Link>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-spacing bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-6">
              Research Focus Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three complementary research domains exploring the intersection of human emotion and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storyCards.map((card) => (
              <div key={card.id} className="research-card">
                <div className="aspect-video mb-6 rounded-md overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-secondary font-medium mb-4">
                  {card.subtitle}
                </p>
                <p className="text-muted-foreground mb-6">
                  {card.description}
                </p>
                
                <Link 
                  to={card.link}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-2xl text-foreground mb-8 mx-auto">
            "Technology should amplify human understanding, not replace it."
          </blockquote>
          <div className="mt-8">
            <Link to="/vision" className="text-primary hover:text-primary/80 font-medium">
              Read Research Vision →
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-8">
            Explore Research Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { to: '/research', label: 'Technical Work' },
              { to: '/about', label: 'Background' },
              { to: '/vision', label: 'Future Plans' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="bg-primary-foreground text-primary px-6 py-3 rounded-md font-medium hover:bg-primary-foreground/90 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
