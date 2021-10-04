import React, { useState, useEffect } from "react";
import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
  Button, Center
} from '@chakra-ui/react'
import Container from "../components/Container";
import Skills from "../components/Skills";
import theme from "../styles/theme";
import ProjectCard from "../components/ProjectCard";

export default function Index() {
  const { colorMode } = useColorMode()
  const secondaryTextColor = theme.colors.colorSecondary;
  const accentColor = theme.colors.accent;
  const secondaryColor = theme.colors.secondary;

  let counter = 0;
  const arrayOfMessages = ['Welcome!', 'ようこそ', 'Halo!', '안녕하세요', 'Hai!'];
  const [welcomeMessage, setWelcomeMessage] = useState(arrayOfMessages[counter]);
  useEffect(() => {
    const interval = setInterval(() => changeText(), 5000);
    return () => clearInterval(interval);
  }, []);

  const changeText = () => {
    setWelcomeMessage(arrayOfMessages[counter]);
    if (counter <= 3) {
      counter++;
    } else {
      counter = 0;
    }
  }

  return (
    <Container>
      <Head>
        <title>azura.dev | Home</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2} transition="transform 125ms ease-in-out" color={accentColor[colorMode]} size="2xl">{welcomeMessage}</Heading>
          <Heading mb={2} size="lg" color={secondaryColor[colorMode]}>I'm Azura Sakan Taufik 👋</Heading>
          <Text color={secondaryTextColor[colorMode]}>I'm a junior developer at Apple Developer Academy Indonesia @ BINUS learning all things iOS! I'm currently exploring my interests surrounding <span style={{ fontWeight: 'bold' }}>mobile, web, and game development.</span></Text>
          <Heading as="h3" size="md" my={2}>My Skills</Heading>
          <Text color={secondaryTextColor[colorMode]}>Through my studies, I learned a lot of fundamental concepts of computer science and app development. I like to build and apply these knowledge into tangible products.</Text>
          <Skills/>
          <Heading as="h3" size="md" my={2}>What I've been up to</Heading>
          <Text color={secondaryTextColor[colorMode]}>I love to build things, and always have something I'm working on to sharpen up my skills. Take a look at some of the applications I've build over the years.</Text>
          <SimpleGrid columns={[1, null,1]} gap={6} m="1.5rem 0">
            <ProjectCard/>
            <ProjectCard/>
          </SimpleGrid>
        </Flex>
      </Stack>
    </Container>
  )
}