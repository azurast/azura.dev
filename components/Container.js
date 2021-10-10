import React from "react"
import {
  useColorMode,
  Button,
  Flex,
  Box,
  Text,
  SimpleGrid,
  Icon,
  Divider
} from "@chakra-ui/react";
import {
  SiGithub,
  SiLinkedin,
  SiMedium,
  SiGmail,
} from "react-icons/si";
import NextLink from "next/link"
import styled from "@emotion/styled";
import DarkModeSwitcher from '../components/DarkModeSwitcher'
import theme from '../styles/theme';

const Container = ({ children }) => {
  const { colorMode } = useColorMode()

  const bgColor = {
    light: 'white',
    dark: theme.colors.dark
  }
  const color = {
    light: 'black',
    dark: 'white'
  }

  const navHoverBg = {
    light: 'gray.100',
    dark: 'gray.600'
  }

  const gray = 'gray.500'

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height .5s, line-height .5s;
  `
  const Footer = styled(Flex)`
    z-index: 10;
    bottom: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height .5s, line-height .5s;
  `

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
              Home
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
              Blog
            </Button>
          </NextLink>
          <NextLink href="/projects" passHref>
            <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
              Projects
            </Button>
          </NextLink>
        </Box>
        <DarkModeSwitcher />
      </StickyNav >
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
      <Footer
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Divider orientation="horizontal" />
        <SimpleGrid columns={3} spacing={10} mt={6} mb={1}>
          <Box
            key="linkedin"
            _hover={{
              transform: "scale(1.01)",
              cursor: "pointer"
            }}
          >
            <NextLink href="https://www.linkedin.com/in/azurast/">
              <a target="_blank">
                <Icon as={SiLinkedin} w={6} h={6} color={gray} _hover={{ color: "blue.500" }}/>
              </a>
            </NextLink>
          </Box>
          <Box
            key="linkedin"
            _hover={{
              transform: "scale(1.01)",
              cursor: "pointer"
            }}
          >
            <NextLink href="https://github.com/azurast/">
              <a target="_blank">
                <Icon as={SiGithub} w={6} h={6} color={gray} _hover={{ color: color[colorMode] }}/>
              </a>
            </NextLink>
          </Box>
          <Box
            key="linkedin"
            _hover={{
              transform: "scale(1.01)",
              cursor: "pointer",
              color: "blue.500"
            }}
          >
            <NextLink href="https://medium.com/@azurast">
              <a target="_blank">
                <Icon as={SiMedium} w={6} h={6} color={gray} _hover={{ color: color[colorMode] }} />
              </a>
            </NextLink>
          </Box>
        </SimpleGrid>
        <Text color={color[colorMode]}mt={2} fontSize={12}>
          © {new Date().getFullYear()} Azura Sakan Taufik.
        </Text>
        <Text color={color[colorMode]} fontSize={12}>
          All Rights Reserved.
        </Text>
      </Footer>
    </>
  )
}

export default Container