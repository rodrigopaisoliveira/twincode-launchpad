import { Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header - Centralizado para melhor estética */}
        <div className="fade-in-view mb-16 md:mb-24 text-center">
          <span className="font-mono text-xs tracking-widest opacity-60 uppercase block mb-4">
            03 / contacto
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mx-auto max-w-3xl">
            Vamos trabalhar juntos?
          </h2>
        </div>

        {/* Contact Grid - Centralizado e com melhor espaçamento */}
        <div className="fade-in-view grid md:grid-cols-2 gap-16 md:gap-24 mb-24 max-w-4xl mx-auto">

          {/* Phone Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <Phone size={18} className="opacity-60" />
              <span className="font-mono text-xs opacity-60 uppercase tracking-wider">Telemóvel</span>
            </div>
            <div className="space-y-4">
              <a 
                href="tel:+351932132036"
                className="group block"
              >
                <span className="text-xl md:text-2xl font-medium block hover:opacity-70 transition-opacity">
                  +351 932 132 036
                </span>
                <span className="text-xs font-mono opacity-40 uppercase tracking-tighter">Rodrigo Oliveira</span>
              </a>
              <a 
                href="tel:+351926318581"
                className="group block"
              >
                <span className="text-xl md:text-2xl font-medium block hover:opacity-70 transition-opacity">
                  +351 926 318 581
                </span>
                <span className="text-xs font-mono opacity-40 uppercase tracking-tighter">Leonardo Luz</span>
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <Instagram size={18} className="opacity-60" />
              <span className="font-mono text-xs opacity-60 uppercase tracking-wider">Social</span>
            </div>
            <div className="space-y-6">
              <a 
                href="https://instagram.com/twincode.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl md:text-2xl font-medium hover:opacity-70 transition-all hover:translate-x-1"
              >
                Instagram <span className="opacity-40 text-lg">@twincode.pt</span>
              </a>
              <a 
                href="https://tiktok.com/@twincode.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl md:text-2xl font-medium hover:opacity-70 transition-all hover:translate-x-1"
              >
                TikTok <span className="opacity-40 text-lg">@twincode.pt</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Credits */}
        <div className="fade-in-view border-t border-background/10 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest order-2 md:order-1">
              Built with code by Twincode
            </div>

            <div className="font-mono text-lg order-1 md:order-2">
              <span className="opacity-40">//</span> twincode
              <span className="animate-blink">_</span>
            </div>

            <div className="font-mono text-[10px] opacity-40 order-3">
              © {new Date().getFullYear()} — TODOS OS DIREITOS RESERVADOS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;