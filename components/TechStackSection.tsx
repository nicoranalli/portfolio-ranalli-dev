import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaDatabase,
} from 'react-icons/fa'
import {
  SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss,
  SiMongodb, SiPostgresql,
} from 'react-icons/si'

const techStack = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Fastapi', icon: FaPython, color: '#3776AB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'SQL', icon: FaDatabase, color: '#7EA3CC' },
]

export default function TechStackSection() {
  return (
    <section id="stack" className="py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#7EA3CC]">
          Stack Tecnológico
        </h2>
        <p className="text-center text-[#a0b4c8] mb-12 text-base">
          Tecnologías y herramientas con las que trabajo
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="glass-card flex flex-col items-center justify-center p-5 md:p-6 gap-3 cursor-default group"
            >
              <div
                className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-125"
                style={{ color: tech.color }}
              >
                <tech.icon />
              </div>
              <span className="text-xs md:text-sm font-medium text-[#a0b4c8] text-center group-hover:text-[#f0f4f8] transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
