import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'MFGIL Construções',
    url: 'https://mfgilconstrucoes.pt',
    category: 'Construção Civil',
  },
  {
    name: 'Tank18',
    url: 'https://tank-18.pt',
    category: 'Restauração',
  },
  {
    name: 'CGL Transportes',
    url: 'https://cgltransportes.pt',
    category: 'Logística',
  },
  {
    name: 'JAP Jardins & Piscinas',
    url: 'https://japjardinspiscinas.pt',
    category: 'Serviços',
  },
  {
    name: 'Churrasqueira Alto S. João',
    url: 'https://churrasqueiraltosaojoao.pt',
    category: 'Restauração',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 grid-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="fade-in-view mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
            02 / portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            Projetos que geraram resultados
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="fade-in-view portfolio-card group p-8 md:p-10 flex flex-col justify-between min-h-[200px]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <span className="font-mono text-xs text-muted-foreground block mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {project.name}
                </h3>
              </div>
              
              <div className="flex items-center justify-between mt-8">
                <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Ver projeto
                </span>
                <ExternalLink 
                  size={18} 
                  className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                />
              </div>
            </a>
          ))}

          {/* CTA Card */}
          <div 
            className="fade-in-view p-8 md:p-10 bg-foreground text-background flex flex-col justify-between min-h-[200px]"
            style={{ transitionDelay: `${projects.length * 100}ms` }}
          >
            <div>
              <span className="font-mono text-xs opacity-60 block mb-4">
                O seu projeto
              </span>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                Poderia estar aqui
              </h3>
            </div>
            
            <button
              onClick={() => {
                const element = document.getElementById('contacto');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-mono text-xs mt-8 text-left opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
            >
              Fale connosco →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
