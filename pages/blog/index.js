import React, { useState } from 'react'
import Head from 'next/head'
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode
} from '@chakra-ui/react'

import Container from "../../components/Container";
import { getAllFilesFrontMatter } from "../../lib/mdx";
import BlogPost from "../../components/BlogPost";
import { SearchIcon } from '@chakra-ui/icons';
import theme from '../../styles/theme';

export default function Index({ posts }) {
  const [searchValue, setSearchValue] = useState('')
  const { colorMode } = useColorMode();
  const accentColor = theme.colors.accent;

  const filteredBlogPosts = posts
    .sort(
      (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <>
      <Head>
        <title>azura.dev | Blog</title>
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
            <Heading letterSpacing="tight" mb={6} as="h1" size="2xl" color={accentColor[colorMode]}>
              Blog
              {/*({posts.length} posts)*/}
            </Heading>
            <InputGroup mb={6} mr={4} w="100%">
              <Input
                aria-label="Search by title"
                placeholder="Search by title"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <InputRightElement>
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>
            {!filteredBlogPosts.length && 'No posts found :('}
            {filteredBlogPosts.map((frontMatter) => <BlogPost key={frontMatter.title} {...frontMatter} />)}
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}