'use client'

import { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
]

const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/nicoranalli', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/nicolas-ranalli', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com/nicoranalli_', label: 'Instagram' },
]

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#262626]/85 backdrop-blur-xl border-b border-[#7EA3CC]/15">
            <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-4 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#hero"
                    className="text-xl font-extrabold text-[#7EA3CC] hover:text-[#255C99] transition-colors tracking-tight"
                >
                    Portfolio
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-[#a0b4c8] hover:text-[#7EA3CC] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Social Icons — Desktop */}
                <div className="hidden md:flex items-center gap-3">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#a0b4c8] hover:text-[#7EA3CC] transition-colors"
                            aria-label={social.label}
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex items-center justify-center text-[#7EA3CC] hover:bg-[#7EA3CC]/10 rounded-lg p-2 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#262626]/95 border-t border-[#7EA3CC]/10 pb-5 animate-fade-in">
                    <div className="flex flex-col items-center gap-4 pt-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-base font-medium text-[#a0b4c8] hover:text-[#7EA3CC] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex gap-5 mt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#a0b4c8] hover:text-[#7EA3CC] transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}