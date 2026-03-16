'use client'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { FaGraduationCap, FaUser } from 'react-icons/fa'

export default function AboutSection() {
  return (
    <Box id="about" py={{ base: '80px', md: '100px' }}>
      <Box maxW="1200px" my="10px" mx="auto" px={{ base: '24px', md: '48px' }}>
        <Heading
          as="h2"
          fontSize={{ base: '1.75rem', md: '2rem' }}
          fontWeight="700"
          mb="48px"
          textAlign="center"
          color="#7EA3CC"
        >
          Sobre Mí
        </Heading>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap="32px"
          align="stretch"
        >
          {/* About Card */}
          <Box
            flex="1"
            className="glass-card"
            p={{ base: '28px', md: '36px' }}
          >
            <Flex align="center" gap="12px" mb="20px">
              <Box
                p="10px"
                borderRadius="12px"
                bg="rgba(126, 163, 204, 0.15)"
                color="#7EA3CC"
              >
                <FaUser size={20} />
              </Box>
              <Text fontSize="lg" fontWeight="700" color="#f0f4f8">
                ¿Quién soy?
              </Text>
            </Flex>
            <Text
              fontSize="md"
              color="#a0b4c8"
              lineHeight="1.8"
            >
              Soy un desarrollador apasionado por la tecnología y la
              programación. Me interesa crear soluciones innovadoras que
              resuelvan problemas reales. Tengo experiencia en desarrollo
              web full stack y siempre estoy buscando aprender nuevas
              tecnologías y mejorar mis habilidades.
            </Text>
          </Box>

          {/* Education Card */}
          <Box
            flex="1"
            className="glass-card"
            p={{ base: '28px', md: '36px' }}
          >
            <Flex align="center" gap="12px" mb="20px">
              <Box
                p="10px"
                borderRadius="12px"
                bg="rgba(126, 163, 204, 0.15)"
                color="#7EA3CC"
              >
                <FaGraduationCap size={20} />
              </Box>
              <Text fontSize="lg" fontWeight="700" color="#f0f4f8">
                Formación Académica
              </Text>
            </Flex>
            <Flex direction="column" gap="16px">
              <Box
                pl="16px"
                borderLeft="2px solid #255C99"
              >
                <Text fontSize="md" fontWeight="600" color="#f0f4f8">
                  Ingeniería en Sistemas / Lic. en Informática
                </Text>
                <Text fontSize="sm" color="#7EA3CC">
                  Universidad Placeholder • 2020 - 2025
                </Text>
                <Text fontSize="sm" color="#a0b4c8" mt="4px">
                  Enfoque en desarrollo de software y arquitectura de sistemas.
                </Text>
              </Box>
              <Box
                pl="16px"
                borderLeft="2px solid rgba(126, 163, 204, 0.3)"
              >
                <Text fontSize="md" fontWeight="600" color="#f0f4f8">
                  Curso / Certificación Placeholder
                </Text>
                <Text fontSize="sm" color="#7EA3CC">
                  Plataforma Educativa • 2023
                </Text>
                <Text fontSize="sm" color="#a0b4c8" mt="4px">
                  Especialización en tecnologías web modernas.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
