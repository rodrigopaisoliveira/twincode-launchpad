import { Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="fade-in-view mb-16 md:mb-24 text-center">
          <span className="font-mono text-xs tracking-widest opacity-60 uppercase block mb-4">
            03 / contacto
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mx-auto max-w-3xl">
            Vamos trabalhar juntos?
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="fade-in-view grid md:grid-cols-2 gap-16 md:gap-24 mb-24 max-w-5xl mx-auto justify-items-center">

          {/* Phone Section - Mantido igual para consistência */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-6">
              <Phone size={18} className="opacity-60" />
              <span className="font-mono text-xs opacity-60 uppercase tracking-wider">Telemóvel</span>
            </div>
            <div className="space-y-6">
              <a href="tel:+351932132036" className="group block">
                <span className="text-xl md:text-2xl font-medium block hover:opacity-70 transition-opacity">
                  +351 932 132 036
                </span>
                <span className="text-[10px] font-mono opacity-30 uppercase tracking-widest mt-1 block">Rodrigo Oliveira</span>
              </a>
              <a href="tel:+351926318581" className="group block">
                <span className="text-xl md:text-2xl font-medium block hover:opacity-70 transition-opacity">
                  +351 926 318 581
                </span>
                <span className="text-[10px] font-mono opacity-30 uppercase tracking-widest mt-1 block">Leonardo Luz</span>
              </a>
            </div>
          </div>

          {/* Social Section - Ajustado para ser clicável apenas no @ */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-6">
              <Instagram size={18} className="opacity-60" />
              <span className="font-mono text-xs opacity-60 uppercase tracking-wider">Social</span>
            </div>
            <div className="space-y-6">
              
              {/* Instagram */}
              <div className="text-xl md:text-2xl font-medium cursor-default">
                Instagram 
                <a 
                  href="https://instagram.com/twincode.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base opacity-40 font-light ml-2 transition-all duration-300 hover:opacity-100 hover:text-white cursor-pointer inline-block"
                >
                  @twincode.pt
                </a>
              </div>

              {/* TikTok */}
              <div className="text-xl md:text-2xl font-medium cursor-default">
                TikTok 
                <a 
                  href="https://tiktok.com/@twincode.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base opacity-40 font-light ml-2 transition-all duration-300 hover:opacity-100 hover:text-white cursor-pointer inline-block"
                >
                  @twincode.pt
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Divider & Credits */}
        <div className="fade-in-view border-t border-background/10 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest order-2 md:order-1 text-center md:text-left">
              Built with code by Twincode
            </div>

            <div className="font-mono text-lg order-1 md:order-2">
              <span className="opacity-40">//</span> twincode
              <span className="animate-blink">_</span>
            </div>

            <div className="font-mono text-[10px] opacity-40 order-3 text-center md:text-right">
              © {new Date().getFullYear()} — TODOS OS DIREITOS RESERVADOS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;