import React from "react";
import Container from "../../components/Container";
import Head from "next/head";
import {Button, Flex, Heading, Image, Stack, Text, useColorMode} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import theme from "../../styles/theme";
import NextLink from "next/link";

export default function Index() {

  const { colorMode } = useColorMode()
  const secondaryTextColor = theme.colors.colorSecondary;
  const accentColor = theme.colors.accent;
  const secondaryColor = theme.colors.secondary;

  return (
    <>
      <Head>
        <title>azura.dev | Resume</title>
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
          px={8}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl" color={accentColor[colorMode]}>
              About
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Growing up, I've always had interest with computers. My dad happens to be a gadget freak, he's one of your early adopters. Whenever he got a new computer or phone, I would always be the first to mess around with it. Be it trying out the new games he bought or painting with paint. I always overlooked this since I thought that as a girl I would have to follow the footsteps of my mom who followed the footsteps of her mom. They both work in law, and I was told that it was the major that girls would suit best (no beef to law students, you guys rock!). However, I soon realized that it was not for me. Even until high school, nothing ever really spark my interest.
              <br/>
              <br/>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              But, one afternoon in the last weeks of my senior year, we had an ICT class where we had to code a simple HTML site. I still vaguely remember we had to make tables, put pictures of pets, and style them. For everyone else who had known their path, it was painful and frustrating, but for me, it was a magical moment to see that the notepad I've been using all this time to write notes is the same tool that can be used to create websites?! 🤯 <span style={{ fontWeight: 'bold', color: `${secondaryColor[colorMode]}` }}> At that moment, I weirdly felt a sense of empowerment, it felt like I could build anything that I could ever dream of.</span>
              <br/>
              <br/>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              However, I was a little frustrated on how was I only discovering this in my last year?! This made me wonder why didn't the teachers tell us more about this thing? Why didn't we have more coding classes? As far as I can remember, no one ever even mentioned or told, let alone encouraged us, especially the girls, to choose this path. They've always just told us to choose the 'traditional' and 'safe' routes.
              <br/>
              <br/>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              4 years of university later, I could never be more grateful to have chosen this path. It has opened up so many new doors and opportunities for me. It has allowed me to see things I have never known before. But more importantly, it has allowed me to help others in ways I never thought was possible.
              <br/>
              <br/>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Whenever I look back to this moment, I wonder what I would be doing had I skipped that class. Now, it also made me realize how crucial representation and education is. As a young person, I did not have any woman in STEM figure to look up to, even my teachers who were supposed to tell us that there's this other world out there, did not.  <span style={{ fontWeight: 'bold', color: `${secondaryColor[colorMode]}` }}>It has since been my mission to advocate and to show younger girls that we too, can.</span>
              <br/>
              <br/>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Sometime ago, I found this picture below, it felt like I was meant for this path from the start. I thank this girl for staying curious, for I think it's her endless curiosity and her love of learning that brought me where I am today.
            </Text>
            <Image
              mt={8}
              src="/images/about/young-me.jpg"
              layout='fill'
              alrt="young me"
            />
            <Text as="i" fontSize="xs" color={secondaryTextColor[colorMode]}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Me, playing with my Dad's computer instead of the basket of toys behind. Circa 2003.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mt={4}>
              To learn more about my accomplishments, see my resume below.
            </Text>
            <NextLink href="https://drive.google.com/file/d/13EenSOyZ_zJZyplc3w6fOA-UaVCbk2Yk/view?usp=sharing" passHref>
              <Button mt={4} rightIcon={<DownloadIcon/>} colorScheme="brandSecondary" download>
                Resume
              </Button>
            </NextLink>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}
