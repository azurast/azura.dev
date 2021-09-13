import React from "react";
import {
  SiSwift,
  SiFlutter,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextDotJs,
  SiUnity,
  SiCsharp,
  SiGit,
  SiGithub,
  SiLinkedin,
  SiMedium,
  SiGmail,
} from "react-icons/si";
import {
  FaSwift
} from "react-icons/fa";
import Head from "next/head";
import { SimpleGrid, Box, Icon, Tooltip } from "@chakra-ui/react";
import Container from "./Container";

const mySkills = [
  {
    text: 'Swift',
    icon: SiSwift,
    color: 'orange.500'
  },
  {
    text: 'SwiftUI',
    icon: FaSwift,
    color: 'blue.500'
  },
  {
    text: 'Flutter',
    icon: SiFlutter,
    color: 'blue.500'
  },
  {
    text: 'JavaScript ES6+',
    icon: SiJavascript,
    color: 'yellow.400'
  },
  {
    text: 'HTML',
    icon: SiHtml5,
    color: 'orange.500'
  },
  {
    text: 'CSS',
    icon: SiCss3,
    color: 'blue.500'
  },
  {
    text: 'React',
    icon: SiReact,
    color: 'cyan.500'
  },
  {
    text: 'Next.js',
    icon: SiNextDotJs,
    color: 'gray.600'
  },
  {
    text: 'C#',
    icon: SiCsharp,
    color: 'purple.500'
  },
  {
    text: 'Unity',
    icon: SiUnity,
    color: 'gray.600'
  },
]

const Skills = () => {
  return (
    <SimpleGrid columns={[5, null, 10]} gap={6} m="1.5rem auto">
      {
        mySkills.map((skill) => {
          return (
            <Tooltip label={skill.text}>
              <Box
                  key={skill.text}
                  transition="transform 125ms ease-in-out"
                  _hover={{
                    transform: "scale(1.0625)",
                  }}
              >
                <Icon as={skill.icon} w={8} h={8} _hover={{ color: skill.color }}/>
              </Box>
            </Tooltip>
          )
        })
      }
    </SimpleGrid>
  )
}

export default Skills