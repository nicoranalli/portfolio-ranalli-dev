import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-[#7EA3CC]/12 py-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#a0b4c8]">
          © {new Date().getFullYear()} Nicolas Ranalli. Todos los derechos reservados.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/nicoranalli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0b4c8] hover:text-[#7EA3CC] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/nicolas-ranalli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0b4c8] hover:text-[#7EA3CC] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://instagram.com/nicoranalli_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0b4c8] hover:text-[#7EA3CC] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
