import {Avatar, Flex, Heading, Stack, Text, useColorMode} from "@chakra-ui/react";
import theme from "../styles/theme";
import Head from "next/head";
import Container from "../components/Container";
import {format, parseISO} from "date-fns";
import React from "react";

export default function SnippetLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode()

  const secondaryTextColor = theme.colors.colorSecondary;
  const accentTextColor = theme.colors.accent;

  return (
    <>
      <Head>
        <title>{frontMatter.title} - Snippet - Azura Sakan Taufik</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="web icon" href='/images/logo/light-logo.png' />
        <style>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </Head>
      <Container>
        <Stack
          as="article"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
          px={4}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl" css={{ wordBreak: "break-all" }} color={accentTextColor[colorMode]}>
              {frontMatter.title}
            </Heading>
            <Flex
              justify="space-between"
              align={['initial', 'center']}
              direction={['column', 'row']}
              mt={2}
              w="100%"
              mb={4}
            >
              <Flex align="center">
                <Avatar
                  size="xs"
                  name="Azura Sakan Taufik"
                  src="../images/azura_profile.jpg"
                  mr={2}
                />
                <Text fontSize="sm" color={secondaryTextColor[colorMode]}>
                  {frontMatter.by}
                  {'Azura Sakan Taufik / '}
                  {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {children}
        </Stack>
      </Container>
    </>
  )
}