import { Badge, Flex, Heading, Stack, Text, useColorMode, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import Container from "../components/Container";
import Head from 'next/head';
import theme from "../styles/theme";

export default function ProjectLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode()
  const accentTextColor = theme.colors.accent;

  const badgeColor = {
    light: "brandPrimary",
    dark: "brandTertiary"
  }
  return (
    <>
      <Head>
        <title>{frontMatter.title}- Project - Azura Sakan Taufik</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="web icon" href='/images/logo/light-logo.png' />
        <style>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </Head>
      <Container>
        <Stack
          as="explanation"
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
            <Text fontWeight="bold" mb={2}>
              {`${frontMatter.type} | ${frontMatter.platform} | ${frontMatter.year}`}
            </Text>
            <Wrap mb={4}>
              {
                frontMatter.techStack.map((each) => {
                  return (
                    <WrapItem key={each}>
                      <Badge key={each} borderRadius="full" px="2" colorScheme={badgeColor[colorMode]} fontSize="0.8em">
                        {each}
                      </Badge>
                    </WrapItem>
                  )
                })
              }
            </Wrap>
          </Flex>
          {children}
        </Stack>
      </Container>
    </>
  )
}