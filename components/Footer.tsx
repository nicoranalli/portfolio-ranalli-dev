'use client'

import { Box, Flex, Text, Link } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box
      as="footer"
      borderTop="1px solid rgba(126, 163, 204, 0.12)"
      py="32px"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: '24px', md: '48px' }}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        gap="16px"
      >
        <Text fontSize="sm" color="#a0b4c8">
          © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
        </Text>

        <Flex gap="20px">
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="#a0b4c8"
            _hover={{ color: '#7EA3CC' }}
            transition="color 0.2s ease"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </Link>
          <Link
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            color="#a0b4c8"
            _hover={{ color: '#7EA3CC' }}
            transition="color 0.2s ease"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </Link>
          <Link
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="#a0b4c8"
            _hover={{ color: '#7EA3CC' }}
            transition="color 0.2s ease"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}
