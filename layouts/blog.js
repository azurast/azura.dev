import React from 'react'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Container from '../components/Container'
import theme from "../styles/theme"

export default function BlogLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode()

  const secondaryTextColor = theme.colors.colorSecondary;
  const accentTextColor = theme.colors.accent;

  const router = useRouter()
  const slug = router.asPath.replace('/blog', '')
  return (
    <Container>
      <Head>
        <title>{slug} - Blog - Azura Sakan Taufik</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </Head>
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl" color={accentTextColor[colorMode]}>
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
                src="../images/profile.jpg"
                mr={2}
              />
              <Text fontSize="sm" color={secondaryTextColor[colorMode]}>
                {frontMatter.by}
                {'Azura Sakan Taufik / '}
                {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
            </Text>
          </Flex>
        </Flex>
        {children}
      </Stack>
    </Container>
  )
}

