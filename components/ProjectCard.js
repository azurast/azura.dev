import React from "react"
import NextLink from 'next/link'
import {Box, Image, useColorMode, VStack, Text, HStack, IconButton} from "@chakra-ui/react"
import theme from "../styles/theme";
import {ArrowForwardIcon} from "@chakra-ui/icons";

const ProjectCard = ({ briefDescription, imageUrl, imageAlt, slug }) => {

  const { colorMode } = useColorMode()

  // const borderColor =  {
  //   light: 'gray.200',
  //   dark: 'gray.700'
  // }

  return (
    <VStack
      transition="transform 225ms ease-in-out"
      direction={["column", "row"]}
      _hover={{
        transform: "scale(1.0150)"
      }}
    >
      <Box
        width={{ base: "90%", sm: "75%", md: "100%" }}
        minWidth={{ base: "90%", sm: "75%", md: "50%" }}
        borderRadius="sm"
        overflow="hidden"
      >
        <Image
            src={imageUrl}
            alt={imageAlt}
        />
        <HStack py={2}>
          <Box
              as="h4"
              lineHeight="tight"
              color={theme.colors.colorSecondary[colorMode]}
          >
            <Text fontWeight={"medium"}>{briefDescription}</Text>
          </Box>
          <Box d="flex" alignItems="baseline" mt="2">
            <NextLink href={`projects/${slug}`} passHref>
              <IconButton aria-label="View Project" icon={<ArrowForwardIcon/>} colorScheme="brandSecondary"/>
            </NextLink>
          </Box>
        </HStack>
      </Box>
      {/*<Box p={{ base: "0", sm: "2", md: "2" }}>*/}

      {/*</Box>*/}
    </VStack>
  )
}

export default ProjectCard