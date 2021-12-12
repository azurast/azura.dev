import { Badge, Flex, Heading, Stack, Text, useColorMode, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import Container from "../components/Container";
import Head from 'next/head';
import theme from "../styles/theme";
import { useRouter } from "next/router";

export default function ProjectLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode()
  const accentTextColor = theme.colors.accent;

  const router = useRouter()

  const meta = {
    siteName: "azura.dev",
    title: frontMatter.title || "azura.dev",
    description: frontMatter.briefDescription || "Azura Sakan Taufik's Blog",
    image: frontMatter.banner || frontMatter.imageUrl || "/images/azuradev_banner.png"
  }
  const badgeColor = {
    light: "brandPrimary",
    dark: "brandTertiary"
  }
  return (
    <>
      <Head>
        <title>{frontMatter.title} - Project - Azura Sakan Taufik</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta content={meta.description} name="description" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={`https://azura.dev${router.asPath}`} />
        <meta name="image" property="og:image" content={`https://azura.dev${meta.image}`} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`https://azura.dev${meta.image}`} />
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