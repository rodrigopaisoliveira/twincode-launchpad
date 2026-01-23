import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-8 md:left-16 font-mono text-xs text-muted-foreground hidden md:block">
        <span className="opacity-50">01</span>
      </div>
      
      <div className="absolute bottom-20 right-8 md:right-16 font-mono text-xs text-muted-foreground hidden md:block">
        <span className="opacity-50">// digital solutions</span>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Code-style label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="font-mono text-xs md:text-sm tracking-widest text-muted-foreground uppercase">
              {'<'} Agência 100% Remota {'/>'} 
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6"
          >
            Twincode: Elevamos a sua{' '}
            <span className="relative inline-block">
              Presença Digital
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-2 left-0 h-0.5 bg-foreground"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Desenvolvimento web especializado para empresas que procuram ganhar 
            visibilidade e autoridade online. Operação 100% remota.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('contacto')}
              className="font-mono text-sm px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 group"
            >
              Pedir Orçamento
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="font-mono text-sm px-8 py-4 border border-border hover:border-foreground transition-all duration-300"
            >
              Ver Trabalhos
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="font-mono text-xs">scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
