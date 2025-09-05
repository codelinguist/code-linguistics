import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    "Cloud Architecture", "Microservices", "System Design", "DevOps",
    "Enterprise Integration", "API Design", "Security Architecture", "Performance Optimization"
  ];

  const experiences = [
    {
      title: "Senior Solution Architect",
      company: "Enterprise Tech Corp",
      period: "2021 - Present",
      description: "Leading architectural decisions for cloud-native solutions serving 10M+ users"
    },
    {
      title: "Platform Architect",
      company: "Scale Systems",
      period: "2019 - 2021",
      description: "Designed and implemented microservices architecture reducing deployment time by 80%"
    },
    {
      title: "Technical Lead",
      company: "Innovation Labs",
      period: "2017 - 2019",
      description: "Built distributed systems handling millions of transactions with 99.9% uptime"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building scalable, resilient systems that drive business success.
            With over 8 years of experience in enterprise architecture and system design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Core Expertise</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-card rounded-lg p-3 text-center shadow-card hover:shadow-elegant transition-smooth"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-smooth">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;