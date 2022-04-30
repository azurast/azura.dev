import React from "react";
import {Flex, Heading, SimpleGrid, Stack, Text, useColorMode} from "@chakra-ui/react";
import theme from "../../styles/theme";
import Head from "next/head";
import Container from "../../components/Container";
import SnippetCard from "../../components/SnippetCard";
import { getAllFilesFrontMatter } from "../../lib/mdx";

export default function Index({ posts }) {
  const { colorMode } = useColorMode()
  const secondaryTextColor = theme.colors.colorSecondary;
  const accentColor = theme.colors.accent;

  return (
    <>
    <Head>
      <title>azura.dev | Snippets</title>
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
        justifyContent="flex-start"
        alignItems="flex-start"
        m="0 1rem 1rem 1rem"
        maxWidth="700px"
        px={8}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} as="h1" size="2xl" color={accentColor[colorMode]}>
            Snippets
            {/*<Text as="u">Projects</Text>*/}
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>Swift-related code snippets!</Text>
          <SimpleGrid columns={2} spacing={8} mt={4}>
            {posts.map((frontMatter) => <SnippetCard key={frontMatter.title} {...frontMatter}/>)}
          </SimpleGrid>
        </Flex>
      </Stack>
    </Container>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('snippets')

  return { props: { posts } }
}