import { FaGraduationCap, FaUser } from 'react-icons/fa'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#7EA3CC]">
          Sobre Mí
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* About Card */}
          <div className="flex-1 glass-card p-7 md:p-9">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-[#7EA3CC]/15 text-[#7EA3CC]">
                <FaUser size={20} />
              </div>
              <span className="text-lg font-bold text-[#f0f4f8]">
                ¿Quién soy?
              </span>
            </div>
            <p className="text-base text-[#a0b4c8] leading-relaxed">
              Desarrollador Junior con experiencia en Desarrollo PL/SQL en proyectos de software de gran alcance, con un amplio interés en el desarrollo Backend.
              En búsqueda de nuevos desafíos y oportunidades para crecer profesionalmente.
            </p>
          </div>

          {/* Education Card */}
          <div className="flex-1 glass-card p-7 md:p-9">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-[#7EA3CC]/15 text-[#7EA3CC]">
                <FaGraduationCap size={20} />
              </div>
              <span className="text-lg font-bold text-[#f0f4f8]">
                Formación Académica
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="pl-4 border-l-2 border-[#255C99]">
                <p className="text-base font-semibold text-[#f0f4f8]">
                  Ingeniería en Sistemas de Información
                </p>
                <p className="text-sm text-[#7EA3CC]">
                  Universidad Tecnológica Nacional - Córdoba • 2020 - 2026
                </p>
                <p className="text-sm text-[#a0b4c8] mt-1">
                  En proceso de tesis - Promedio: 8.54
                </p>

              </div>
              <div className="pl-4 border-l-2 border-[#7EA3CC]/30">
                <p className="text-base font-semibold text-[#f0f4f8]">
                  Full Stack Node.js React TS NestJS Next.js Creando Proyectos
                </p>
                <p className="text-sm text-[#7EA3CC]">
                  Curso realizado en Udemy • 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
