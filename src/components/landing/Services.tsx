import { Globe, Search, MessageSquare } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Globe,
    title: 'Criação de Websites Profissionais',
    description: 'Desenvolvemos websites modernos, rápidos e otimizados que refletem a identidade da sua marca e convertem visitantes em clientes.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Visibilidade e SEO',
    description: 'Implementamos estratégias de otimização para motores de busca que aumentam o seu tráfego orgânico e melhoram o seu posicionamento online.',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Consultoria Digital',
    description: 'Analisamos o seu negócio e criamos estratégias digitais personalizadas para maximizar o seu potencial de crescimento online.',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="fade-in-view mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
            01 / serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            Soluções completas para o seu sucesso digital
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="fade-in-view group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-8 bg-background border border-border hover:border-foreground transition-all duration-500">
                {/* Number */}
                <span className="font-mono text-xs text-muted-foreground block mb-6">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-border mb-6 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
