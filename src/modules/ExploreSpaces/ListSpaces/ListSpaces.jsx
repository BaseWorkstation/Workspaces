import React from "react";
import ExploreLayout from "layout/ExploreLayout/ExploreLayout";
import {
  Box,
  Circle,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

export default function ListSpaces() {
  return (
    <ExploreLayout>
      <Stack spacing={70}>
        <VStack
          borderBottom="1px solid"
          borderColor="gray.200"
          bg="white"
          shadow="sm"
          w="full"
          pt={181}
          spacing={10}
          pb={12}
        >
          <Heading className="gradientText" textAlign="center" fontSize={64}>
            Find your next workspace
          </Heading>

          <Select maxW={610} fontWeight="bold" rounded="full" color="blue.800">
            <option value="Lagos">Lagos</option>
          </Select>
        </VStack>

        <HStack px="5%" justify="center" w="full">
          <Stack direction="row" w="full" maxW="6xl" spacing={5}>
            <Stack pb={8} spacing={12} w="full">
              <HStack justify="space-between">
                <Text fontWeight={500}>
                  74 results matching your search entries
                </Text>
                <InputGroup size="lg" w={224}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<AiOutlineSearch color="gray.300" />}
                  />
                  <Input bg="white" rounded="full" placeholder="Search" />
                </InputGroup>
              </HStack>

              <Stack spacing={8}>
                {[0, 1, 2, 3].map((index) => (
                  <Link href="/spaces/1">
                    <HStack
                      key={index}
                      cursor="pointer"
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      fontWeight={700}
                      spacing={6}
                      rounded="xl"
                    >
                      <Image
                        w={210}
                        h={215}
                        objectFit="cover"
                        src="/images/space.png"
                      />
                      <Box>
                        <Text fontSize="lg" color="primary.900">
                          Venia Business Hub
                        </Text>
                        <HStack
                          spacing={0}
                          color="primary.900"
                          align="baseline"
                        >
                          <Text>₦200/</Text>
                          <Text fontSize={10}>HR</Text>
                        </HStack>
                        <Stack spacing={1} mt={3}>
                          <HStack spacing={2}>
                            <Circle size={2} bg="green.400" />
                            <Text color="gray.500">OPEN</Text>
                          </HStack>
                          <Text fontWeight={500}>09:00 AM - 06: 00 PM</Text>
                          <Text fontWeight={500}>
                            12, Adeniyi jones Av, Ikeja, Lagos
                          </Text>
                        </Stack>
                      </Box>
                    </HStack>
                  </Link>
                ))}
              </Stack>
            </Stack>
            <Box w="full">
              <Image
                pos="sticky"
                top="5.5rem"
                w="full"
                h="calc(100vh - 7rem)"
                borderRadius={20}
                objectFit="cover"
                src="/images/map.png"
              />
            </Box>
          </Stack>
        </HStack>
      </Stack>
    </ExploreLayout>
  );
}
