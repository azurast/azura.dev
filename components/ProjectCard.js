import React from "react"
import {Box, Image, Badge, useColorMode, HStack, Button} from "@chakra-ui/react"
import theme from "../styles/theme";

const ProjectCard = () => {
  const property = {
    imageUrl: "/images/projects/donor+.png",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Donor+",
    subtitle: "Donor+ is a convalescent plasma donor app created with SwiftUI",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  const { colorMode } = useColorMode()

  const borderColor =  {
    light: 'gray.200',
    dark: 'gray.700'
  }

  return (
    <HStack
      transition="transform 225ms ease-in-out"
      _hover={{
        transform: "scale(1.0150)"
      }}
    >
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        borderColor={borderColor[colorMode]}
      >
        <Image src={property.imageUrl} alt={property.imageAlt} />
      </Box>
      <Box p="6">
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
          {property.title}
        </Box>
        <Box
          mt="1"
          as="h4"
          lineHeight="tight"
          color={theme.colors.colorSecondary[colorMode]}
        >
          {property.subtitle}
        </Box>
        <Box d="flex" alignItems="baseline" mt="2">
          {/*<Badge borderRadius="full" px="2" colorScheme="brandPrimary">*/}
          {/*  SwiftUI*/}
          {/*</Badge>*/}
          <Button colorScheme="brandSecondary" variant="link">
            View project →
          </Button>
        </Box>
      </Box>
    </HStack>
  )
}

export default ProjectCard