import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, ArrowRight, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "The Zenith Penthouse",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000",
    description: "A minimalist approach to luxury living in the heart of the city."
  },
  {
    id: 2,
    title: "Ethereal Lounge",
    category: "Commercial",
    image: "https://i.ibb.co/0RrH2gQx/Scandinavian-Minimalism-Design-Creating-Warmth-Comfort.jpg",
    description: "Curated textures and organic forms for a serene hospitality experience."
  },
  {
    id: 3,
    title: "Sienna Estate",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000",
    description: "Timeless elegance meets modern functionality in this sprawling estate."
  },
  {
    id: 4,
    title: "Obsidian Studio",
    category: "Creative Space",
    image: "https://i.ibb.co/Tfnyj9t/Capture1.png",
    description: "A bold, monochromatic workspace designed for focus and inspiration."
  }
];

const services = [
  {
    title: "Architectural Planning",
    description: "Defining the structural soul of your space through meticulous spatial design."
  },
  {
    title: "Bespoke Furnishing",
    description: "Curating unique pieces that tell your story and elevate your daily rituals."
  },
  {
    title: "Art Curation",
    description: "Integrating meaningful art that harmonizes with the architectural narrative."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen selection:bg-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-serif tracking-[0.2em] font-light"
        >
          INTERIA
        </motion.div>
        
        <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.3em] font-light">
          <a href="#projects" className="hover:text-gold transition-colors">Projects</a>
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isMenuOpen ? { x: 0 } : { x: '100%' }}
        className="fixed inset-0 bg-ink z-40 flex flex-col items-center justify-center space-y-8 text-white md:hidden"
      >
        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif italic">Projects</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif italic">About</a>
        <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif italic">Services</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif italic">Contact</a>
      </motion.div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Interior" 
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="block text-[10px] uppercase tracking-[0.5em] mb-6 font-light"
          >
            Est. 2014 — Rawalpindi
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-[120px] font-light leading-[0.9] mb-8"
          >
            Crafting <br />
            <span className="italic">Timeless</span> Spaces
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-px h-24 bg-white/30 animate-pulse" />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-12 left-12 hidden lg:block">
          <div className="vertical-text text-[10px] uppercase tracking-[0.4em] text-white/50">
            Scroll to explore
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="about" className="py-32 px-6 md:px-24 bg-paper">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-medium">The Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-light leading-tight">
              We believe that <span className="italic">luxury</span> is a state of mind, not a price point.
            </h2>
            <p className="text-ink/60 leading-relaxed max-w-md font-light">
              Interia Interiors is a multi-disciplinary studio focused on creating environments that resonate with the human spirit. Our approach combines architectural precision with a deep understanding of materiality and light.
            </p>
            <button className="group flex items-center space-x-4 text-[11px] uppercase tracking-[0.2em] font-medium border-b border-ink/20 pb-2 hover:border-gold transition-colors">
              <span>Our Story</span>
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="oval-mask w-full aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1616486341351-70ad52b6f4aa?auto=format&fit=crop&q=80&w=1000" 
                alt="Studio Detail" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-white p-8 hidden md:block shadow-xl">
              <div className="text-4xl font-serif italic mb-2">Legacy</div>
              <div className="text-[10px] uppercase tracking-widest text-ink/40">Towards Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-medium block mb-4">Selected Works</span>
              <h2 className="text-5xl md:text-7xl font-light">Portfolio</h2>
            </div>
            <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] text-ink/40">
              <button className="text-ink border-b border-ink">All</button>
              <button className="hover:text-ink transition-colors">Residential</button>
              <button className="hover:text-ink transition-colors">Commercial</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-8">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-serif italic">{project.title}</h3>
                  </div>
                  <span className="text-[10px] text-ink/30 font-mono">0{project.id}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-ink text-white px-6 md:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-medium block mb-6">Expertise</span>
              <h2 className="text-5xl font-light mb-12">Our <br /><span className="italic">Services</span></h2>
            </div>
            <div className="lg:col-span-8 space-y-px bg-white/10">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-ink py-12 group cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-6">
                    <div className="flex items-start space-x-8">
                      <span className="text-gold font-mono text-xs mt-1">0{index + 1}</span>
                      <div>
                        <h3 className="text-2xl font-serif mb-4 group-hover:italic transition-all">{service.title}</h3>
                        <p className="text-white/40 text-sm max-w-md leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-white/20 group-hover:text-gold group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-24 bg-paper">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-6xl md:text-[100px] font-light leading-none mb-12">
              Let's build <br />
              <span className="italic">something</span> beautiful.
            </h2>
            <a 
              href="mailto:contact@interia.com" 
              className="text-2xl md:text-4xl font-serif italic border-b border-ink/20 pb-4 hover:text-gold hover:border-gold transition-all"
            >
              contact@interia.com
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left pt-24 border-t border-ink/10">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gold">
                <MapPin size={16} />
                <span className="text-[10px] uppercase tracking-widest font-semibold">Location</span>
              </div>
              <p className="text-sm text-ink/60">219, Sreet 26, Safari Valley, Phase VIII,<br />Bahria Town, Rawalpindi</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gold">
                <Phone size={16} />
                <span className="text-[10px] uppercase tracking-widest font-semibold">Contact</span>
              </div>
              <p className="text-sm text-ink/60">+92 323 1688 089<br />studio@interia.com</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gold">
                <Instagram size={16} />
                <span className="text-[10px] uppercase tracking-widest font-semibold">Social</span>
              </div>
              <div className="flex space-x-6 text-sm text-ink/60">
                <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                <a href="#" className="hover:text-gold transition-colors">Pinterest</a>
                <a href="#" className="hover:text-gold transition-colors">YouTube</a>
                <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-24 bg-paper border-t border-ink/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-ink/40">
            © 2026 Interia Interiors. All Rights Reserved.
          </div>
          <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] text-ink/40">
            <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
