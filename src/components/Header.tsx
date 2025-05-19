
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-portfolio-accent">Dev</span>
          <span className="text-xl font-bold text-portfolio-blue-dark">Portfolio</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {["Home", "Services", "Portfolio", "Skills", "Testimonials", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium text-gray-600 hover:text-portfolio-accent transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="default" className="bg-portfolio-accent hover:bg-portfolio-accent/90">Hire Me</Button>
      </div>
    </header>
  );
};

export default Header;
