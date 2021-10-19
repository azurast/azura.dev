import React from "react"
import NextLink from 'next/link'
import {Box, Image, useColorMode, Stack, Button} from "@chakra-ui/react"
import theme from "../styles/theme";

const ProjectCard = ({ title, briefDescription, imageUrl, imageAlt, slug }) => {

  const { colorMode } = useColorMode()

  const borderColor =  {
    light: 'gray.200',
    dark: 'gray.700'
  }

  return (
    <Stack
      transition="transform 225ms ease-in-out"
      direction={["column", "row"]}
      _hover={{
        transform: "scale(1.0150)"
      }}
    >
      <Box
        width={{ base: "100%", sm: "50%", md: "75%" }}
        minWidth={{ base: "100%", sm: "50%", md: "50%" }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        borderColor={borderColor[colorMode]}
        _hover={{
          boxShadow: "lg"
        }}
      >
        <Image src={imageUrl} alt={imageAlt} />
      </Box>
      <Box p={{ base: "0", sm: "2", md: "6" }}>
        <Box
          mt="1"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          isTruncated
          color={theme.colors.accent[colorMode]}
          fontFamily={theme.fonts.heading}
          fontSize='24'
        >
          {title}
        </Box>
        <Box
          mt="1"
          as="h4"
          lineHeight="tight"
          color={theme.colors.colorSecondary[colorMode]}
        >
          {briefDescription}
        </Box>
        <Box d="flex" alignItems="baseline" mt="2">
          {/*<Badge borderRadius="full" px="2" colorScheme="brandPrimary">*/}
          {/*  SwiftUI*/}
          {/*</Badge>*/}
          <NextLink href={`projects/${slug}`} passHref>
            <Button color={theme.colors.secondary[colorMode]} variant="link">
              View project →
            </Button>
          </NextLink>
        </Box>
      </Box>
    </Stack>
  )
}

export default ProjectCard