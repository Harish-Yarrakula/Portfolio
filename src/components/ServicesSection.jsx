import { Code, Server, Database, Globe, FileCode, LineChart } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and intuitive user interfaces with modern frameworks and libraries.",
      skills: ["React", "Vue", "HTML5", "CSS3", "JavaScript"]
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs to power your digital solutions.",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Designing and optimizing database structures for efficient data storage and retrieval.",
      skills: ["SQL", "NoSQL", "Data Modeling", "Optimization"]
    },
    {
      icon: Globe,
      title: "API Integration",
      description: "Connecting your application with third-party services and platforms through APIs.",
      skills: ["RESTful Services", "Third-party APIs", "WebSockets"]
    },
    {
      icon: FileCode,
      title: "AI Integration",
      description: "Implementing artificial intelligence solutions to enhance application capabilities.",
      skills: ["Natural Language Processing", "Computer Vision", "ChatGPT Integration"]
    },
    {
      icon: LineChart,
      title: "ML Model Training",
      description: "Developing and training machine learning models for predictive analytics and data insights.",
      skills: ["TensorFlow", "PyTorch", "Custom Model Development"]
    }
  ];

  return (
    <section id="service" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold inline-block text-gradient mb-2 pt-4 pb-3"><u>Services Offered</u></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Comprehensive development services to bring your digital vision to life, from concept to deployment.
          </p>
        </div>

        <div className="container row-cols-1 " >
          <div className="row">
            {services.map((service, index) => (
              <div key={service.title + index} className="col pb-4">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  skills={service.skills}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;