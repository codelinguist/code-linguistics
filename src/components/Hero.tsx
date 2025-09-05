import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-subtle pt-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Solution Architect &
              <span className="text-primary"> Tech Leader</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Designing scalable systems and sharing insights through technical expertise. 
              Building the future of enterprise architecture, one solution at a time.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Read Blog Posts
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Available for consultation</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={heroImage}
              alt="Solution Architect working with system architecture"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;