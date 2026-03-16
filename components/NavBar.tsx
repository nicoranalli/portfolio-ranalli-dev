'use client'

import { useState } from 'react'
import { Box, Flex, Link, IconButton, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://instagram.com/', label: 'Instagram' },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      bg="rgba(38, 38, 38, 0.85)"
      backdropFilter="blur(12px)"
      borderBottom="1px solid rgba(126, 163, 204, 0.15)"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: '20px', md: '48px' }}
        py="16px"
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Link
          href="#hero"
          fontSize="xl"
          fontWeight="800"
          color="#7EA3CC"
          _hover={{ textDecoration: 'none', color: '#255C99' }}
          letterSpacing="-0.5px"
        >
          Portfolio
        </Link>

        {/* Desktop Nav Links */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          gap="32px"
          align="center"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              fontSize="sm"
              fontWeight="500"
              color="#a0b4c8"
              _hover={{ color: '#7EA3CC', textDecoration: 'none' }}
              transition="color 0.2s ease"
            >
              {link.label}
            </Link>
          ))}
        </Flex>

        {/* Social Icons — Desktop */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          gap="12px"
          align="center"
        >
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              color="#a0b4c8"
              _hover={{ color: '#7EA3CC' }}
              transition="color 0.2s ease"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </Link>
          ))}
        </Flex>

        {/* Mobile Hamburger */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="Toggle Menu"
          variant="ghost"
          color="#7EA3CC"
          fontSize="22px"
          _hover={{ bg: 'rgba(126, 163, 204, 0.1)' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </IconButton>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box
          display={{ base: 'block', md: 'none' }}
          bg="rgba(38, 38, 38, 0.95)"
          borderTop="1px solid rgba(126, 163, 204, 0.1)"
          pb="20px"
          className="animate-fade-in"
        >
          <Flex direction="column" align="center" gap="16px" pt="16px">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontSize="md"
                fontWeight="500"
                color="#a0b4c8"
                _hover={{ color: '#7EA3CC', textDecoration: 'none' }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Flex gap="20px" mt="8px">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="#a0b4c8"
                  _hover={{ color: '#7EA3CC' }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  )
}