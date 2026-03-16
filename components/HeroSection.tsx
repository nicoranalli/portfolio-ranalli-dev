'use client'

import { Box, Flex, Heading, Text, Image, Link } from '@chakra-ui/react'

export default function HeroSection() {
  return (
    <Box
      id="hero"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      pt="80px"
    >


      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: '24px', md: '48px' }}
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
        justify="space-between"
        gap={{ base: '40px', md: '80px' }}
        w="100%"
        className="animate-fade-in-up"
      >
        {/* Text */}
        <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="#7EA3CC"
            fontWeight="600"
            mb="12px"
            letterSpacing="2px"
            textTransform="uppercase"
          >
            Hola, soy
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: '2.5rem', md: '3.5rem', lg: '4rem' }}
            fontWeight="800"
            lineHeight="1.1"
            mb="20px"
            className="gradient-text"
          >
            Tu Nombre Aquí
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="#a0b4c8"
            maxW="500px"
            mx={{ base: 'auto', md: '0' }}
            mb="32px"
            lineHeight="1.7"
          >
            Desarrollador Full Stack apasionado por crear experiencias
            digitales modernas y funcionales.
          </Text>
          <Flex
            gap="16px"
            justify={{ base: 'center', md: 'flex-start' }}
          >
            <Link
              href="#contact"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              bg="#255C99"
              color="white"
              px="32px"
              py="12px"
              borderRadius="12px"
              fontWeight="600"
              fontSize="md"
              _hover={{ bg: '#7EA3CC', transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(37, 92, 153, 0.4)', textDecoration: 'none' }}
              transition="all 0.3s ease"
            >
              Contáctame
            </Link>
            <Link
              href="#projects"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              border="1px solid #7EA3CC"
              color="#7EA3CC"
              px="32px"
              py="12px"
              borderRadius="12px"
              fontWeight="600"
              fontSize="md"
              _hover={{ bg: 'rgba(126, 163, 204, 0.1)', transform: 'translateY(-2px)', textDecoration: 'none' }}
              transition="all 0.3s ease"
            >
              Ver Proyectos
            </Link>
          </Flex>
        </Box>

        {/* Photo */}
        <Box
          flexShrink={0}
          position="relative"
        >
          <Box
            w={{ base: '200px', md: '280px' }}
            h={{ base: '200px', md: '280px' }}
            borderRadius="50%"
            p="4px"
            bg="linear-gradient(135deg, #7EA3CC, #255C99, #092749)"
            className="animate-float"
          >
            <Image
              src="https://via.placeholder.com/280x280?text=Foto"
              alt="Profile photo"
              w="100%"
              h="100%"
              borderRadius="50%"
              objectFit="cover"
              bg="#092749"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}
