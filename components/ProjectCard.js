import React from "react"
import {Box, Image, Badge, useColorMode} from "@chakra-ui/react"
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
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor={borderColor[colorMode]}
      transition="transform 125ms ease-in-out"
      _hover={{
        transform: "scale(1.0250)",
        boxShadow: "lg"
      }}
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
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
        <Box d="flex" alignItems="baseline" mt="1">
          <Badge borderRadius="full" px="2" colorScheme="blue">
            SwiftUI
          </Badge>
        </Box>
        </Box>
    </Box>
    // <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
    //   <Image src={property.imageUrl} alt={property.imageAlt} />
    //   <Box p="6">
    //     <Box d="flex" alignItems="baseline">
    //       <Badge borderRadius="full" px="2" colorScheme="teal">
    //         New
    //       </Badge>
    //       <Box
    //         color="gray.500"
    //         fontWeight="semibold"
    //         letterSpacing="wide"
    //         fontSize="xs"
    //         textTransform="uppercase"
    //         ml="2"
    //       >
    //         {property.beds} beds &bull; {property.baths} baths
    //       </Box>
    //     </Box>
    //
    //     <Box
    //       mt="1"
    //       fontWeight="semibold"
    //       as="h4"
    //       lineHeight="tight"
    //       isTruncated
    //     >
    //       {property.title}
    //     </Box>
    //
    //     <Box>
    //       {property.formattedPrice}
    //       <Box as="span" color="gray.600" fontSize="sm">
    //         / wk
    //       </Box>
    //     </Box>
    //
    //   </Box>
    // </Box>
  )
}

export default ProjectCard