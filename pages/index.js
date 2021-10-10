import React, { useState, useEffect } from "react";
import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
  Image,
  VStack,
} from '@chakra-ui/react'
import Container from "../components/Container";
import Skills from "../components/Skills";
import theme from "../styles/theme";
import ProjectCard from "../components/ProjectCard";
import {getAllFilesFrontMatter} from "../lib/mdx";
// import GooglyEyes from "../components/GooglyEyes";

export default function Index({ projects }) {
  const { colorMode } = useColorMode()
  const secondaryTextColor = theme.colors.colorSecondary;
  const accentColor = theme.colors.accent;
  const secondaryColor = theme.colors.secondary;
  const textColor = theme.colors.textColor;

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
    <>
      <Head>
        <title>azura.dev | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="web icon" href='/images/logo/light-logo.png' />
        <style>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </Head>
      <Container>
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
            <Stack justify="space-between" spacing={{ base: 2, sm: 2, md: 24 }} mb={4} direction={{ base: ["column", "row"], sm: ["column", "row"], md: ["column", "row"] }}>
              <VStack align="stretch">
                <Heading mb={1} transition="transform 125ms ease-in-out" color={accentColor[colorMode]} size="2xl">{welcomeMessage}</Heading>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <Heading mb={1} size="lg" color={secondaryColor[colorMode]}>I'm Azura Sakan Taufik 👋</Heading>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <Text color={secondaryTextColor[colorMode]}>I'm a junior developer at Apple Developer Academy Indonesia @ BINUS learning all things iOS starting from research, design, and development! I'm currently exploring my interests surrounding <span style={{ fontWeight: 'bold' }}>mobile, web, and game development. </span></Text>
              </VStack>
              <Image src='/images/me.png' width={{ base: 50, sm: 100, md: 100, lg: 150 }} height={{ base: 50, sm: 100, md: 100, lg: 150 }} layout="responsive" alt="azura memoji"/>
              {/*<GooglyEyes/>*/}
            </Stack>
            <Heading as="h3" size="md" my={2} color={textColor[colorMode]}>My Skills</Heading>
            <Text color={secondaryTextColor[colorMode]}>Through my studies, I learned a lot of fundamental concepts of computer science and app development. I like to build and apply these knowledge into tangible products.</Text>
            <Skills/>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Heading as="h3" size="md" my={2} color={textColor[colorMode]}>What I've been up to</Heading>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Text color={secondaryTextColor[colorMode]}>I love to build things, and always have something I'm working on to sharpen up my skills. Here are some of the applications I've build over the years.</Text>
            <SimpleGrid columns={[1, null,1]} gap={6} m="1.5rem 0">
              {
                projects.map((frontMatter) => <ProjectCard key={frontMatter.title} {...frontMatter}/>)
              }
            </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects')

  return { props: { projects } }
}