import React from "react";
import Container from "../../components/Container";
import Head from "next/head";
import {Flex, Heading, SimpleGrid, Stack, Text, useColorMode} from "@chakra-ui/react";
import theme from "../../styles/theme";
import ProjectCard from "../../components/ProjectCard";

export default function Index() {

  const { colorMode } = useColorMode()
  const secondaryTextColor = theme.colors.colorSecondary;
  const accentColor = theme.colors.accent;
  const secondaryColor = theme.colors.secondary;

  return (
    <>
      <Head>
        <title>azura.dev | Projects</title>
        <style>
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
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl" color={accentColor[colorMode]}>
              Projects
              {/*<Text as="u">Projects</Text>*/}
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>Here are some of my work throughout the years :)</Text>
            <SimpleGrid columns={[1, null,1]} gap={6} m="1.5rem 0">
              <ProjectCard/>
              <ProjectCard/>
            </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}