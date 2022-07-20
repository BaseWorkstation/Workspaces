import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Select,
  Show,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import ExploreLayout from "layout/ExploreLayout/ExploreLayout";
import Link from "next/link";
import SearchSpaces from "./components/SearchSpaces";
import SpaceCard from "./components/SpaceCard";
import useListSpacesHook from "./useListSpacesHook";

export default function ListSpaces() {
  const { spaces, isLoading } = useListSpacesHook();
  return (
    <ExploreLayout>
      <Stack spacing={[8, 10, 12, 70]}>
        <VStack
          borderBottom="1px solid"
          borderColor="gray.200"
          bg="white"
          shadow="sm"
          px="5%"
          w="full"
          pt={[55, 55, 55, 181]}
          pb={[4, 4, 12]}
        >
          <Heading
            className="gradientText"
            textAlign="center"
            fontSize={[36, 36, 50, 64]}
          >
            Find your next workspace
          </Heading>

          <HStack
            w="full"
            pt={8}
            justify={["space-between", "space-between", "center"]}
          >
            <Select
              maxW={[174, 254, 610]}
              fontWeight="bold"
              rounded={[8, 8, "full"]}
              color="blue.800"
              placeholder="Select Location"
              borderWidth={[0, 0, "1px"]}
            >
              <option value="Lagos">Lagos</option>
            </Select>
            <Show below="md">
              <Link href="/check-in">
                <Button
                  fontWeight={500}
                  colorScheme="primary"
                  size="lg"
                  w={152}
                >
                  Check In
                </Button>
              </Link>
            </Show>
          </HStack>

          <Show below="md">
            <Box w="full" pt={4}>
              <SearchSpaces />
            </Box>
          </Show>
        </VStack>

        <HStack align="flex-start" px="5%" justify="center" w="full">
          <Stack
            direction="row"
            w="full"
            pb={[20, 20, 20, 0]}
            maxW="6xl"
            spacing={5}
          >
            <Stack pb={8} spacing={12} w="full">
              <HStack justify="space-between">
                <Text fontSize={["sm", "md"]} fontWeight={500}>
                  74 results matching your search entries
                </Text>
                <Show above="md">
                  <SearchSpaces />
                </Show>
              </HStack>

              <Stack spacing={8}>
                {spaces.data.map((space) => (
                  <SpaceCard key={space.id} space={space} />
                ))}
              </Stack>
            </Stack>
            <Show above="lg">
              <Box
                pos="sticky"
                top="5.5rem"
                h="calc(100vh - 7rem)"
                borderRadius={20}
                w="full"
              >
                <Image
                  h="full"
                  w="full"
                  borderRadius={20}
                  objectFit="cover"
                  src="/images/map.png"
                />
              </Box>
            </Show>
          </Stack>
        </HStack>
      </Stack>
    </ExploreLayout>
  );
}
