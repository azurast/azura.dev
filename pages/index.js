import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack, HStack,
} from '@chakra-ui/react'
import Container from "../components/Container";
import Skills from "../components/Skills";
import theme from "../styles/theme";
import ProjectCard from "../components/ProjectCard";

export default function Index() {
  const { colorMode } = useColorMode()
  const color = theme.colors.colorSecondary;

  return (
    <Container>
      <Head>
        <title>azura.dev | Home</title>
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
          <Heading mb={2}>Hi, i'm Azura Sakan Taufik</Heading>
          <Text color={color[colorMode]}>I'm a junior developer at Apple Developer Academy Indonesia @ BINUS learning all things iOS! I'm currently exploring my interests surrounding <span style={{ fontWeight: 'bold' }}>mobile, web, and game development.</span></Text>
          <Heading as="h3" size="md" my={2}>My Skills</Heading>
          <Text color={color[colorMode]}>Through my studies, I learned a lot of fundamental concepts of computer science and app development. I like to build and apply these knowledge into tangible products.</Text>
          <Skills/>
          <Heading as="h3" size="md" my={2}>What I've been up to</Heading>
          <Text color={color[colorMode]}>I love to build things, and always have something I'm working on to sharpen up my skills. Take a look at some of the applications I've build over the years.</Text>
          <HStack spacing={8} my={4}>
            <ProjectCard/>
            <ProjectCard/>
          </HStack>
        </Flex>
      </Stack>
    </Container>
  )
}