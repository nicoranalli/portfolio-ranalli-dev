'use client'

import { Box, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react'
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
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'SQL', icon: FaDatabase, color: '#7EA3CC' },
]

export default function TechStackSection() {
  return (
    <Box id="stack" py={{ base: '80px', md: '100px' }}>
      <Box maxW="1200px" mx="auto" px={{ base: '24px', md: '48px' }}>
        <Heading
          as="h2"
          fontSize={{ base: '1.75rem', md: '2rem' }}
          fontWeight="700"
          mb="16px"
          textAlign="center"
          color="#7EA3CC"
        >
          Stack Tecnológico
        </Heading>
        <Text
          textAlign="center"
          color="#a0b4c8"
          mb="48px"
          fontSize="md"
        >
          Tecnologías y herramientas con las que trabajo
        </Text>

        <SimpleGrid columns={{ base: 3, sm: 4, md: 6 }} gap="20px">
          {techStack.map((tech) => (
            <Flex
              key={tech.name}
              direction="column"
              align="center"
              justify="center"
              className="glass-card"
              p={{ base: '20px', md: '24px' }}
              gap="12px"
              cursor="default"
              role="group"
            >
              <Box
                fontSize={{ base: '28px', md: '36px' }}
                color={tech.color}
                transition="all 0.3s ease"
                _groupHover={{ transform: 'scale(1.2)' }}
              >
                <tech.icon />
              </Box>
              <Text
                fontSize={{ base: 'xs', md: 'sm' }}
                fontWeight="500"
                color="#a0b4c8"
                textAlign="center"
                _groupHover={{ color: '#f0f4f8' }}
                transition="color 0.3s ease"
              >
                {tech.name}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
