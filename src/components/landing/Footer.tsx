import { Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="fade-in-view mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-widest opacity-60 uppercase block mb-4">
            03 / contacto
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            Vamos trabalhar juntos?
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="fade-in-view grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 mb-20">
          {/* Email */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Mail size={18} className="opacity-60" />
              <span className="font-mono text-xs opacity-60 uppercase tracking-wider">Email</span>
            </div>
            <a 
              href="mailto:rodrigopaisoliveira2003@gmail.com"
              className="text-lg md:text-xl font-medium hover:opacity-80 transition-opacity break-all"
            >
              rodrigopaisoliveira2003@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Phone size={18} className="opacity-60" />
              <span className="font-mono text-xs opacity-60 uppercase tracking-wider">Telemóvel</span>
            </div>
            <div className="space-y-2">
              <a 
                href="tel:+351932132036"
                className="block text-lg md:text-xl font-medium hover:opacity-80 transition-opacity"
              >
                Rodrigo Oliveira: 932 132 036
              </a>
              <a 
                href="tel:+351926318581"
                className="block text-lg md:text-xl font-medium hover:opacity-80 transition-opacity"
              >
                Leonardo Luz: 926 318 581
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Instagram size={18} className="opacity-60" />
              <span className="font-mono text-xs opacity-60 uppercase tracking-wider">Social</span>
            </div>
            <div className="space-y-2">
              <a 
                href="https://instagram.com/twincode.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg md:text-xl font-medium hover:opacity-80 transition-opacity"
              >
                Instagram @twincode.pt
              </a>
              <a 
                href="https://tiktok.com/@twincode.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg md:text-xl font-medium hover:opacity-80 transition-opacity"
              >
                TikTok @twincode.pt
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="fade-in-view border-t border-background/20 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Credits */}
            <div className="font-mono text-xs opacity-60">
              Built with code by Twincode
            </div>

            {/* Logo */}
            <div className="font-mono text-sm">
              <span className="opacity-60">//</span> twincode
              <span className="animate-blink">_</span>
            </div>

            {/* Year */}
            <div className="font-mono text-xs opacity-60">
              © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
