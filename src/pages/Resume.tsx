const Resume = () => {
  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl">
      {/* Header */}
      <div className="text-center border-b-2 border-primary pb-6 mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Itai Katz</h1>
        <div className="text-xl text-primary font-semibold mb-4">
          Emotion AI Researcher & Systems Engineer
        </div>
        <div className="text-muted-foreground">
          <a href="mailto:itai.katz@reactu.io" className="text-primary hover:underline">
            itai.katz@reactu.io
          </a>
          {" • "}
          <a href="tel:+972549991771" className="text-primary hover:underline">
            +972-54-9991771
          </a>
          {" • "}
          <a 
            href="https://linkedin.com/in/itaikatz" 
            className="text-primary hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Research Objective */}
      <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-foreground mb-3">Research Objective</h2>
        <p className="text-muted-foreground leading-relaxed">
          Systems engineer with 15+ years in safety-critical software development seeking to advance emotion AI research through interdisciplinary PhD studies. Combining deep technical expertise in real-time systems with emerging focus on multimodal emotion recognition for healthcare applications. Passionate about developing culturally-aware, privacy-preserving emotion AI that enhances human communication and supports individuals with neurological conditions.
        </p>
      </div>

      {/* Research Interests */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-5 pb-2 border-b border-border">
          Research Interests & Focus Areas
        </h2>
        <div className="bg-muted/30 border border-border rounded-lg p-5 mb-6">
          <p className="font-semibold text-foreground mb-4">
            <strong>Primary Research Direction:</strong> Cross-cultural emotion recognition systems with privacy-preserving architectures for clinical applications
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-background border border-border rounded-lg p-4">
              <strong className="text-foreground">Multimodal Affective Computing:</strong>
              <span className="text-muted-foreground"> Voice analysis, physiological signal processing, and sensor fusion for emotion recognition</span>
            </div>
            <div className="bg-background border border-border rounded-lg p-4">
              <strong className="text-foreground">Cross-Cultural AI:</strong>
              <span className="text-muted-foreground"> Addressing linguistic and cultural bias in emotion recognition systems</span>
            </div>
            <div className="bg-background border border-border rounded-lg p-4">
              <strong className="text-foreground">Privacy-Preserving Healthcare AI:</strong>
              <span className="text-muted-foreground"> Edge computing and federated learning for sensitive medical applications</span>
            </div>
            <div className="bg-background border border-border rounded-lg p-4">
              <strong className="text-foreground">Assistive Communication Technology:</strong>
              <span className="text-muted-foreground"> AI-powered tools for individuals with ALS and neurological conditions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-5 pb-2 border-b border-border">
          Research Experience & Publications
        </h2>
        <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-5 mb-6">
          <div className="space-y-3">
            <div className="text-sm">
              <span className="font-semibold text-purple-900 dark:text-purple-100">
                "Cross-Cultural Voice Emotion Recognition: Addressing Bias in Hebrew and English Processing"
              </span>
              <span className="text-purple-700 dark:text-purple-300"> - </span>
              <span className="italic text-purple-600 dark:text-purple-400">
                International Conference on Affective Computing (Submitted 2024)
              </span>
            </div>
            <div className="text-sm">
              <span className="font-semibold text-purple-900 dark:text-purple-100">
                "Privacy-Preserving Physiological Signal Processing for Healthcare AI"
              </span>
              <span className="text-purple-700 dark:text-purple-300"> - </span>
              <span className="italic text-purple-600 dark:text-purple-400">
                ACM Digital Health (In Preparation)
              </span>
            </div>
            <div className="text-sm">
              <span className="font-semibold text-purple-900 dark:text-purple-100">
                "Real-Time Emotion Recognition Systems for Assistive Communication"
              </span>
              <span className="text-purple-700 dark:text-purple-300"> - </span>
              <span className="italic text-purple-600 dark:text-purple-400">
                IEEE Transactions on Human-Machine Systems (Planned Submission)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-5 pb-2 border-b border-border">
          Professional Experience
        </h2>

        {/* Research Experience */}
        <div className="border-l-4 border-green-500 bg-muted/30 border border-border rounded-lg p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
            <div>
              <h3 className="text-lg font-bold text-foreground">Volunteer CTO & Research Lead</h3>
              <div className="text-primary font-semibold">REACTU.io</div>
            </div>
            <div className="text-muted-foreground font-medium">2023 - Present</div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
            <div className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Primary Research Project:</div>
            <div className="text-blue-800 dark:text-blue-200">
              Leading development of real-time physiological signal processing pipeline for emotion recognition using Python/PyTorch, achieving &gt;90% accuracy on multi-sensor datasets. Contributing core components to open-source healthcare AI repository.
            </div>
          </div>
          
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Developed neural network models for time-series emotion classification from voice and physiological signals</li>
            <li>Implemented privacy-preserving AI architectures using federated learning approaches</li>
            <li>Collaborated with healthcare partners to validate emotion recognition systems in clinical settings</li>
            <li>Published technical documentation and research methodologies for reproducible emotion AI research</li>
          </ul>
        </div>

        {/* Industry Experience */}
        <div className="border-l-4 border-primary bg-muted/30 border border-border rounded-lg p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
            <div>
              <h3 className="text-lg font-bold text-foreground">Software/Systems Engineering Manager</h3>
              <div className="text-primary font-semibold">Elbit Systems, Israel</div>
            </div>
            <div className="text-muted-foreground font-medium">2019 – 2022, 2023 - Present</div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Led engineering teams developing AI-powered spatial computing platforms with real-time 3D mapping capabilities</li>
            <li>Architected safety-critical software systems following DO-178C and ISO 26262 standards</li>
            <li>Implemented LIDAR and multi-sensor calibration systems for autonomous navigation applications</li>
            <li>Managed technical roadmap bridging research prototypes to production deployment</li>
          </ul>
        </div>

        <div className="border-l-4 border-primary bg-muted/30 border border-border rounded-lg p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
            <div>
              <h3 className="text-lg font-bold text-foreground">Technical Advisor & R&D Lead</h3>
              <div className="text-primary font-semibold">Certidian</div>
            </div>
            <div className="text-muted-foreground font-medium">2024 - Present</div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Advising AI-powered platform development for safety-critical certification in aerospace and automotive</li>
            <li>Contributing technical architecture expertise for compliance framework integration across DO-178C, DO-254, and ISO 26262</li>
          </ul>
        </div>

        <div className="border-l-4 border-primary bg-muted/30 border border-border rounded-lg p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
            <div>
              <h3 className="text-lg font-bold text-foreground">Senior Technical Program Manager</h3>
              <div className="text-primary font-semibold">NVIDIA, Israel</div>
            </div>
            <div className="text-muted-foreground font-medium">2022 - 2023</div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Managed cross-functional teams delivering AI infrastructure hardware for hyperscale data centers</li>
            <li>Coordinated complex technical programs requiring real-time system integration and optimization</li>
          </ul>
        </div>

        <div className="border-l-4 border-primary bg-muted/30 border border-border rounded-lg p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
            <div>
              <h3 className="text-lg font-bold text-foreground">Principal Technical Program Manager</h3>
              <div className="text-primary font-semibold">Elbit Systems of America, Fort Worth, TX</div>
            </div>
            <div className="text-muted-foreground font-medium">2015 – 2019</div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Led development of autonomous decision-making systems and mixed reality vision systems</li>
            <li>Managed safety-critical embedded software lifecycle using V-model methodology</li>
            <li>Delivered production-grade autonomous systems compliant with DO-178C and DAL A standards</li>
          </ul>
        </div>

        <div className="border-l-4 border-primary bg-muted/30 border border-border rounded-lg p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
            <div>
              <h3 className="text-lg font-bold text-foreground">Systems Engineering Team Leader</h3>
              <div className="text-primary font-semibold">Elbit Systems, Israel</div>
            </div>
            <div className="text-muted-foreground font-medium">2008 – 2015</div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Led development of GPU-accelerated 3D mapping systems using LIDAR and camera sensor fusion</li>
            <li>Architected real-time computer vision algorithms for autonomous vehicle navigation</li>
          </ul>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-5 pb-2 border-b border-border">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-muted/30 border border-border rounded-lg p-5">
            <h3 className="font-bold text-foreground mb-3">AI & Machine Learning</h3>
            <div className="text-muted-foreground text-sm leading-relaxed">
              Python (PyTorch, NumPy, SciPy, Pandas), Neural Networks, Computer Vision, Time Series Analysis, Signal Processing, Emotion Recognition, Multimodal AI Systems
            </div>
          </div>
          <div className="bg-muted/30 border border-border rounded-lg p-5">
            <h3 className="font-bold text-foreground mb-3">Safety-Critical Systems</h3>
            <div className="text-muted-foreground text-sm leading-relaxed">
              DO-178C, DO-254, ISO 26262, ASPICE, MISRA, DAL A / ASIL D Compliance, V-Model Development, Real-Time Systems, Embedded Software
            </div>
          </div>
          <div className="bg-muted/30 border border-border rounded-lg p-5">
            <h3 className="font-bold text-foreground mb-3">Sensor Technologies</h3>
            <div className="text-muted-foreground text-sm leading-relaxed">
              LIDAR, Radar, Camera, IMU, Multi-Modal Sensor Calibration, Sensor Fusion, 3D Mapping & Localization, Physiological Signal Processing
            </div>
          </div>
          <div className="bg-muted/30 border border-border rounded-lg p-5">
            <h3 className="font-bold text-foreground mb-3">Software Engineering</h3>
            <div className="text-muted-foreground text-sm leading-relaxed">
              C++, C#, Distributed Systems, Concurrent Programming, Git, Cloud Infrastructure (Azure, GCP), Production Deployment, System Architecture
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-5 pb-2 border-b border-border">
          Education
        </h2>
        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-5">
          <div className="space-y-2">
            <div>
              <span className="font-bold text-green-900 dark:text-green-100">
                MBA, Technology Management & Information Systems
              </span>
              <span className="text-green-700 dark:text-green-300"> — </span>
              <span className="text-green-600 dark:text-green-400 font-medium">
                Tel Aviv University
              </span>
            </div>
            <div>
              <span className="font-bold text-green-900 dark:text-green-100">
                B.Sc., Computer Science
              </span>
              <span className="text-green-700 dark:text-green-300"> — </span>
              <span className="text-green-600 dark:text-green-400 font-medium">
                Haifa University
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;