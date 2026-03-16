import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 w-full animate-fade-in-up">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-base md:text-lg text-[#7EA3CC] font-semibold mb-3 tracking-widest uppercase">
            Hola, soy
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 gradient-text">
            Nicolás!
          </h1>
          <p className="text-lg md:text-xl text-[#a0b4c8] max-w-[500px] mx-auto md:mx-0 mb-8 leading-relaxed">
            Estudiante de 5to año de Ingeniería en Sistemas en la Universidad Tecnológica Nacional, apasionado por el desarrollo de software.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button asChild className="bg-[#255C99] text-white px-8 py-3 h-auto rounded-xl font-semibold text-base hover:bg-[#7EA3CC] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,92,153,0.4)] transition-all duration-300">
              <a href="#contact">Contáctame</a>
            </Button>
            <Button asChild variant="outline" className="border-[#7EA3CC] text-[#7EA3CC] px-8 py-3 h-auto rounded-xl font-semibold text-base hover:bg-[#7EA3CC]/10 hover:-translate-y-0.5 transition-all duration-300">
              <a href="#projects">Ver Proyectos</a>
            </Button>
          </div>
        </div>

        {/* Photo */}
        <div className="shrink-0">
          <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full p-1 bg-gradient-to-br from-[#7EA3CC] via-[#255C99] to-[#092749] animate-float">
            <img
              src="/profile-picture.jpeg"
              alt="Profile photo"
              className="w-full h-full rounded-full object-cover bg-[#092749]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
