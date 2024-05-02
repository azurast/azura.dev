import React, { useState, useEffect } from "react";
import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
  VStack, Box, Spacer, Avatar, Button, Divider, Center, HStack, Link
} from '@chakra-ui/react'
import Container from "../components/Container";
import Skills from "../components/Skills";
import theme from "../styles/theme";
import ProjectCard from "../components/ProjectCard";
import {getAllFilesFrontMatter} from "../lib/mdx";
import NextLink from "next/link";
import {ArrowForwardIcon} from "@chakra-ui/icons";
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
            <Text color={secondaryTextColor[colorMode]} mb={2}>🇮🇩 Jakarta, ID</Text>
            <Text color={secondaryTextColor[colorMode]} mb={2}>An early bird iOS Software Engineer whose primary focus is on SwiftUI. I'm Currently building the iOS side of <NextLink href="https://apps.apple.com/id/app/kompas-id-baca-berita-lengkap/id1242195037">Kompas.id</NextLink></Text>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Text color={secondaryTextColor[colorMode]} mb={2}>This is my portfolio page but you can find my digital garden where I try my best to learn in public on <NextLink href="https://thought-oasis.me">thought-oasis.me</NextLink></Text>
            <NextLink href='projects' passHref>
              <Button colorScheme='brandPrimary' size='md' variant='link' rightIcon={<ArrowForwardIcon/>}>
                Click here to discover some of my work
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