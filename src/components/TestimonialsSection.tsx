
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "Working with John was an absolute pleasure. He understood our requirements perfectly and delivered a website that exceeded our expectations. His attention to detail and technical expertise is impressive.",
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    content: "John transformed our outdated website into a modern, responsive platform that has significantly improved our user engagement. He is professional, communicative, and delivers exceptional work.",
    name: "Michael Brown",
    position: "Marketing Director, GrowthLabs",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    content: "I've worked with many developers, but John stands out for his creativity and problem-solving abilities. He built a complex web application for our company that has streamlined our operations considerably.",
    name: "Emily Rodriguez",
    position: "Product Manager, InnovateCorp",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 bg-portfolio-blue-dark text-white">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-portfolio-accent uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Customer Success Stories<br />and Reviews
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-portfolio-accent mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                </svg>
                
                <p className="text-lg md:text-xl mb-8">{testimonials[activeTestimonial].content}</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonials[activeTestimonial].avatar} 
                    alt={testimonials[activeTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div className="text-left">
                    <h4 className="font-semibold">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-sm text-gray-300">{testimonials[activeTestimonial].position}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeTestimonial ? "bg-portfolio-accent" : "bg-white/30"
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={prevTestimonial}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={nextTestimonial}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
