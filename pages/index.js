import React, { useState, useEffect } from "react";
import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
  VStack, Box, Spacer, Avatar, Button
} from '@chakra-ui/react'
import Container from "../components/Container";
import Skills from "../components/Skills";
import theme from "../styles/theme";
import ProjectCard from "../components/ProjectCard";
import {getAllFilesFrontMatter} from "../lib/mdx";
import NextLink from "next/link";
// import GooglyEyes from "../components/GooglyEyes";

export default function Index({ projects }) {
  const { colorMode } = useColorMode()
  const secondaryTextColor = theme.colors.colorSecondary;
  const accentColor = theme.colors.accent;
  const secondaryColor = theme.colors.secondary;
  const textColor = theme.colors.textColor;

  const bgColor = {
    light: "white",
    dark: theme.colors.dark
  }

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
        <meta name="theme-color" content={bgColor[colorMode]}/>
        <style>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
        <meta name="google-site-verification" content="AVb08B566O3Wuy0Zbw5fbqUsZ_mLipveVsN13N-02dc" />
      </Head>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          // m="0 auto 4rem auto"
          // maxWidth="700px"
          px={8}
          m={"auto"}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Box>
                <VStack align="stretch">
                  <Heading mb={1} transition="transform 125ms ease-in-out" color={accentColor[colorMode]} size="2xl">{welcomeMessage}</Heading>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <Heading mb={1} size="lg" color={secondaryColor[colorMode]}>I'm Azura Sakan Taufik 👋</Heading>
                </VStack>
              </Box>
              <Spacer />
              <Box>
                {/*<Image src='/images/azura_profile.jpg' width={{ base: 50, sm: 100, md: 100, lg: 100 }} height={{ base: 50, sm: 100, md: 100, lg: 100 }} layout="responsive" alt="azura memoji"/>*/}
                <Avatar
                    size="xl"
                    name="Azura Sakan Taufik"
                    src="../images/azura_profile.jpg"
                    mr={2}
                />
              </Box>
            </Flex>
            <Stack justify="space-between" spacing="auto" mb={4} direction={{ base: 'row', md: ['column', 'row'] }} >
              {/*<GooglyEyes/>*/}
            </Stack>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Text color={secondaryTextColor[colorMode]}>
              I'm a junior iOS Developer who just graduated from Apple Developer Academy Indonesia @ BINUS where I learned the end-to-end process of product development starting from research, design, and development! I also just recently graduated from Universitas Multimedia Nusantara with a Bachelor in Computer Science where I was mainly involved in web, game, and mobile development. I'm currently honing my skills in  <span style={{ fontWeight: 'bold' }}>iOS development. </span>
            </Text>
            <Heading as="h3" size="md" py={4} color={textColor[colorMode]}>My Skills</Heading>
            <Text color={secondaryTextColor[colorMode]}>Through my studies, I learned a lot of fundamental concepts of computer science and app development. I like to build and apply these knowledge into tangible products.</Text>
            <Skills/>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Heading as="h3" size="md" py={4} color={textColor[colorMode]}>What I've been up to</Heading>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Text color={secondaryTextColor[colorMode]}>I love to build things, and always have something I'm working on to sharpen up my skills. Here are my featured latest works.</Text>
            <SimpleGrid columns={[1, null,2]} gap={6} m="1.5rem 0">
              {
                projects.map((frontMatter) => {
                  if (frontMatter.featured === "yes") {
                    return (<ProjectCard key={frontMatter.title} {...frontMatter}/>)
                  }
                })
              }
            </SimpleGrid>
            <NextLink href='projects' passHref>
              <Button colorScheme='brandSecondary' size='lg' variant='link'>
                View All Projects
              </Button>
            </NextLink>
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