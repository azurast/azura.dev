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
} from "react-icons/si"
import Head from "next/head";
import { SimpleGrid, Box, Icon } from "@chakra-ui/react";
import Container from "./Container";

const mySkills = [
  {
    text: 'Swift',
    icon: SiSwift,
  },
  {
    text: 'Flutter',
    icon: SiFlutter,
  },
  {
    text: 'JavaScript ES6+',
    icon: SiJavascript,
  },
  {
    text: 'HTML',
    icon: SiHtml5,
  },
  {
    text: 'CSS',
    icon: SiCss3,
  },
  {
    text: 'React',
    icon: SiReact,
  },
  {
    text: 'Next.js',
    icon: SiNextDotJs,
  },
  {
    text: 'C#',
    icon: SiCsharp,
  },
  {
    text: 'Unity',
    icon: SiUnity,
  },
]

const Skills = () => {
  return (
    <SimpleGrid columns={[5, null, 10]} gap={6} m="1.5rem auto">
      {
        mySkills.map((skill) => {
          return (
            <Box key={skill.text}>
              <Icon as={skill.icon} w={8} h={8}/>
            </Box>
          )
        })
      }
    </SimpleGrid>
  )
}

export default Skills