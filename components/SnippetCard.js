import {Badge, Box, Heading, HStack, Icon, Link, Spacer, Text, useColorMode, VStack} from "@chakra-ui/react";
import theme from "../styles/theme";
import {SiSwift} from "react-icons/si";
import NextLink from 'next/link'

const SnippetCard = ({ title, iosVersion, slug }) => {
  const { colorMode } = useColorMode()

  const secondaryTextColor = theme.colors.colorSecondary;
  const secondaryThemeColor = theme.colors.secondary;
  const tertiaryThemeColor = theme.colors.tertiary;

  return (
    <NextLink href={`snippets/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' padding={4}
             _hover={{
               transform: "scale(1.02)",
               cursor: "pointer"
             }}
        >
          <VStack alignItems="flex-start">
            <Text fontSize="lg" fontWeight="semibold" colorScheme={secondaryThemeColor}>
              {title}
            </Text>
            <HStack>
              <Icon as={SiSwift} w={5} h={5} color={secondaryThemeColor[colorMode]}/>
              <Badge>{iosVersion}</Badge>
            </HStack>
          </VStack>
        </Box>
      </Link>
    </NextLink>
  )
}

export default SnippetCard