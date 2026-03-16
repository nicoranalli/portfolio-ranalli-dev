'use client'

import { useState, FormEvent } from 'react'
import { Box, Flex, Heading, Text, Input, Textarea, Button, Link } from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const socialContacts = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/', username: '@tuusuario' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/', username: '/in/tuusuario' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/', username: '@tuusuario' },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Build mailto link and open it
    const subject = encodeURIComponent(`Contacto desde Portfolio - ${formData.name}`)
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )
    const mailtoLink = `mailto:placeholder@email.com?subject=${subject}&body=${body}`

    window.open(mailtoLink, '_blank')
    setStatus('sent')
    setFormData({ name: '', email: '', message: '' })

    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <Box id="contact" py={{ base: '80px', md: '100px' }}>
      <Box maxW="1200px" mx="auto" px={{ base: '24px', md: '48px' }}>
        <Heading
          as="h2"
          fontSize={{ base: '1.75rem', md: '2rem' }}
          fontWeight="700"
          mb="16px"
          textAlign="center"
          color="#7EA3CC"
        >
          Contacto
        </Heading>
        <Text
          textAlign="center"
          color="#a0b4c8"
          mb="48px"
          fontSize="md"
        >
          ¿Tenés un proyecto en mente? ¡Hablemos!
        </Text>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap="32px"
          align="stretch"
        >
          {/* Contact Form */}
          <Box flex="1" className="glass-card" p={{ base: '28px', md: '36px' }}>
            <form onSubmit={handleSubmit}>
              <Flex direction="column" gap="20px">
                <Box>
                  <Text fontSize="sm" fontWeight="600" color="#f0f4f8" mb="8px">
                    Nombre
                  </Text>
                  <Input
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    bg="rgba(9, 39, 73, 0.3)"
                    border="1px solid rgba(126, 163, 204, 0.2)"
                    borderRadius="12px"
                    color="#f0f4f8"
                    px="16px"
                    py="12px"
                    _hover={{ borderColor: 'rgba(126, 163, 204, 0.4)' }}
                    _focus={{ borderColor: '#7EA3CC', boxShadow: '0 0 0 1px #7EA3CC' }}
                    _placeholder={{ color: '#5a7a96' }}
                    transition="all 0.2s ease"
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="600" color="#f0f4f8" mb="8px">
                    Email
                  </Text>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    bg="rgba(9, 39, 73, 0.3)"
                    border="1px solid rgba(126, 163, 204, 0.2)"
                    borderRadius="12px"
                    color="#f0f4f8"
                    px="16px"
                    py="12px"
                    _hover={{ borderColor: 'rgba(126, 163, 204, 0.4)' }}
                    _focus={{ borderColor: '#7EA3CC', boxShadow: '0 0 0 1px #7EA3CC' }}
                    _placeholder={{ color: '#5a7a96' }}
                    transition="all 0.2s ease"
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="600" color="#f0f4f8" mb="8px">
                    Mensaje
                  </Text>
                  <Textarea
                    placeholder="Contame sobre tu proyecto..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    bg="rgba(9, 39, 73, 0.3)"
                    border="1px solid rgba(126, 163, 204, 0.2)"
                    borderRadius="12px"
                    color="#f0f4f8"
                    px="16px"
                    py="12px"
                    _hover={{ borderColor: 'rgba(126, 163, 204, 0.4)' }}
                    _focus={{ borderColor: '#7EA3CC', boxShadow: '0 0 0 1px #7EA3CC' }}
                    _placeholder={{ color: '#5a7a96' }}
                    transition="all 0.2s ease"
                    resize="vertical"
                  />
                </Box>
                <Button
                  type="submit"
                  bg="#255C99"
                  color="white"
                  py="12px"
                  borderRadius="12px"
                  fontWeight="600"
                  fontSize="md"
                  _hover={{ bg: '#7EA3CC', transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(37, 92, 153, 0.4)' }}
                  transition="all 0.3s ease"
                  disabled={status === 'sending'}
                  w="100%"
                >
                  {status === 'sending' ? 'Enviando...' : status === 'sent' ? '¡Mensaje enviado!' : 'Enviar Mensaje'}
                </Button>
                {status === 'sent' && (
                  <Text fontSize="sm" color="#7EA3CC" textAlign="center">
                    Se abrió tu cliente de email con el mensaje. ¡Gracias!
                  </Text>
                )}
              </Flex>
            </form>
          </Box>

          {/* Contact Info */}
          <Flex
            flex="1"
            direction="column"
            gap="20px"
            justify="center"
          >
            {/* Email */}
            <Box className="glass-card" p="24px">
              <Flex align="center" gap="16px">
                <Box
                  p="12px"
                  borderRadius="12px"
                  bg="rgba(126, 163, 204, 0.15)"
                  color="#7EA3CC"
                >
                  <FaEnvelope size={20} />
                </Box>
                <Box>
                  <Text fontSize="sm" color="#a0b4c8">Email</Text>
                  <Link
                    href="mailto:placeholder@email.com"
                    fontSize="md"
                    fontWeight="600"
                    color="#f0f4f8"
                    _hover={{ color: '#7EA3CC', textDecoration: 'none' }}
                    transition="color 0.2s ease"
                  >
                    placeholder@email.com
                  </Link>
                </Box>
              </Flex>
            </Box>

            {/* Social Links */}
            {socialContacts.map((social) => (
              <Box key={social.label} className="glass-card" p="24px">
                <Flex align="center" gap="16px">
                  <Box
                    p="12px"
                    borderRadius="12px"
                    bg="rgba(126, 163, 204, 0.15)"
                    color="#7EA3CC"
                  >
                    <social.icon size={20} />
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="#a0b4c8">{social.label}</Text>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      fontSize="md"
                      fontWeight="600"
                      color="#f0f4f8"
                      _hover={{ color: '#7EA3CC', textDecoration: 'none' }}
                      transition="color 0.2s ease"
                    >
                      {social.username}
                    </Link>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
