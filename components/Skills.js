import React from "react";
import {
  SiSwift,
  SiFlutter,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
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
import { SimpleGrid, Box, Icon, Tooltip, Button, Badge } from "@chakra-ui/react";
import Container from "./Container";

const mySkills = [
  {
    text: 'Swift',
    icon: SiSwift,
    color: 'brandTertiary.400'
  },
  {
    text: 'SwiftUI',
    icon: FaSwift,
    color: 'brandPrimary.400'
  },
  {
    text: 'Flutter',
    icon: SiFlutter,
    color: 'brandSecondary.400'
  },
  {
    text: 'JavaScript ES6+',
    icon: SiJavascript,
    color: 'brandTertiary.400'
  },
  {
    text: 'HTML',
    icon: SiHtml5,
    color: 'brandSecondary.400'
  },
  {
    text: 'CSS',
    icon: SiCss3,
    color: 'brandPrimary.400'
  },
  {
    text: 'React',
    icon: SiReact,
    color: 'brandSecondary.400'
  },
  {
    text: 'Next.js',
    icon: SiNextdotjs,
    color: 'brandTertiary.400'
  },
  {
    text: 'C#',
    icon: SiCsharp,
    color: 'brandPrimary.400'
  },
  {
    text: 'Unity',
    icon: SiUnity,
    color: 'brandSecondary.400'
  },
]

const Skills = () => {
  return (
    <SimpleGrid columns={[7, null, 10]} gap={6} m="1.5rem 0">
      {
        mySkills.map((skill) => {
          return (
            <Tooltip label={skill.text} key={skill.text}>
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
