import { Badge } from '@/components/ui/badge'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Agencia de Autos - Backend',
    description: 'Sistema de gestión para una agencia de ventas desarrollado con Spring Boot.',
    image: '',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/nicoranalli/Agencia_Ventas_SpringBoot',
    demo: 'https://example.com/',
  },
  {
    title: 'Cashtracker',
    description: 'Aplicacion que permite la creacion de una cuenta para crear presupuestos y gestionar gastos. Utilizando autenticación JWT para el control de la sesión y App Router (NextJs) para el frontend.',
    image: 'https://via.placeholder.com/600x340?text=Proyecto+2',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'Ecoharmony App',
    description: 'Implementación mobile para dar soporte a la compra de entradas de un Eco Parque, con integración con MercadoPago. Trabajo realizado para la materia Ingeniería en Calidad de Software de la carrera Ingeniería en Sistemas de Información',
    image: '/EcoHarmony.png',
    tags: ['React Native', 'TypeScript', 'MercadoPago'],
    github: 'https://github.com/nicoranalli/Ecoharmony_App',
    demo: 'https://example.com/',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#7EA3CC]">
          Proyectos
        </h2>
        <p className="text-center text-[#a0b4c8] mb-12 text-base">
          Algunos de mis trabajos destacados
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden flex flex-col"
            >

              {/* Content */}
              <div className="flex flex-col p-6 flex-1">
                <h3 className="text-lg font-bold text-[#f0f4f8] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#a0b4c8] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#7EA3CC]/20 bg-[#7EA3CC]/12 text-[#7EA3CC] text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#a0b4c8] hover:text-[#7EA3CC] transition-colors"
                  >
                    <FaGithub /> Código
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#a0b4c8] hover:text-[#7EA3CC] transition-colors not-active"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
