'use client'

import { Box, Flex, Heading, Text, Image, Link, SimpleGrid } from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Una aplicación web moderna construida con React y Node.js. Sistema de gestión completo con autenticación y dashboard interactivo.',
    image: 'https://via.placeholder.com/600x340?text=Proyecto+1',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'Proyecto 2',
    description: 'API REST robusta con documentación automática. Implementación de microservicios con Docker y despliegue en la nube.',
    image: 'https://via.placeholder.com/600x340?text=Proyecto+2',
    tags: ['Python', 'FastAPI', 'Docker'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'Proyecto 3',
    description: 'Plataforma de e-commerce con carrito de compras, pasarela de pagos y panel de administración.',
    image: 'https://via.placeholder.com/600x340?text=Proyecto+3',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
]

export default function ProjectsSection() {
  return (
    <Box id="projects" py={{ base: '80px', md: '100px' }}>
      <Box maxW="1200px" mx="auto" px={{ base: '24px', md: '48px' }}>
        <Heading
          as="h2"
          fontSize={{ base: '1.75rem', md: '2rem' }}
          fontWeight="700"
          mb="16px"
          textAlign="center"
          color="#7EA3CC"
        >
          Proyectos
        </Heading>
        <Text
          textAlign="center"
          color="#a0b4c8"
          mb="48px"
          fontSize="md"
        >
          Algunos de mis trabajos destacados
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="28px">
          {projects.map((project) => (
            <Box
              key={project.title}
              className="glass-card"
              overflow="hidden"
              display="flex"
              flexDirection="column"
            >
              {/* Project Image */}
              <Box overflow="hidden" borderTopRadius="16px">
                <Image
                  src={project.image}
                  alt={project.title}
                  w="100%"
                  h="180px"
                  objectFit="cover"
                  transition="transform 0.4s ease"
                  _hover={{ transform: 'scale(1.05)' }}
                />
              </Box>

              {/* Content */}
              <Flex direction="column" p="24px" flex="1">
                <Text fontSize="lg" fontWeight="700" color="#f0f4f8" mb="8px">
                  {project.title}
                </Text>
                <Text fontSize="sm" color="#a0b4c8" lineHeight="1.7" mb="16px" flex="1">
                  {project.description}
                </Text>

                {/* Tags */}
                <Flex gap="8px" flexWrap="wrap" mb="16px">
                  {project.tags.map((tag) => (
                    <Box
                      key={tag}
                      px="10px"
                      py="4px"
                      borderRadius="8px"
                      bg="rgba(126, 163, 204, 0.12)"
                      border="1px solid rgba(126, 163, 204, 0.2)"
                    >
                      <Text fontSize="xs" color="#7EA3CC" fontWeight="500">
                        {tag}
                      </Text>
                    </Box>
                  ))}
                </Flex>

                {/* Links */}
                <Flex gap="16px">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    display="flex"
                    alignItems="center"
                    gap="6px"
                    fontSize="sm"
                    color="#a0b4c8"
                    _hover={{ color: '#7EA3CC', textDecoration: 'none' }}
                    transition="color 0.2s ease"
                  >
                    <FaGithub /> Código
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    display="flex"
                    alignItems="center"
                    gap="6px"
                    fontSize="sm"
                    color="#a0b4c8"
                    _hover={{ color: '#7EA3CC', textDecoration: 'none' }}
                    transition="color 0.2s ease"
                  >
                    <FaExternalLinkAlt /> Demo
                  </Link>
                </Flex>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
