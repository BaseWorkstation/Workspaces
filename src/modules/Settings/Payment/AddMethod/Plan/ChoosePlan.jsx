import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Link as ChakraLink,
  Stack,
  StackDivider,
  Text,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function ChoosePaymentPlan() {
  const theme = useTheme();

  return (
    <Center bg="gray.50" minH="100vh" py={[16, 20]}>
      <VStack w="full" spacing={12}>
        <Logo notLinked />

        <VStack w="full" spacing={8}>
          <Stack
            px={4}
            w="full"
            bg="white"
            border="1px solid"
            borderColor="gray.100"
            rounded={20}
            align="center"
            pt={6}
            pb={6}
          >
            <VStack
              w="full"
              maxW="6xl"
              spacing={6}
              divider={
                <StackDivider borderWidth="1px" borderColor="gray.200" />
              }
            >
              <Heading textAlign="center" pl={6} fontSize="xl">
                Select a plan
              </Heading>

              <Stack w="full" direction="row" spacing={6}>
                {["Silver", "Gold", "Platinum"].map((plan) => (
                  <Stack
                    key={plan}
                    w="full"
                    border="1px solid"
                    borderColor="gray.200"
                    rounded={20}
                    spacing={2}
                    divider={<StackDivider borderColor="gray.100" />}
                  >
                    <Stack spacing={0} p={6} pb={3}>
                      <Heading color="blue.800" fontSize="3xl">
                        {plan}
                      </Heading>
                      <Text fontSize="xl" color="gray.400">
                        10k p/month
                      </Text>
                    </Stack>
                    <Stack spacing={6} p={6} pt={4}>
                      {[0, 1, 2, 3, 4].map((index) => (
                        <HStack spacing={3}>
                          <IoIosCheckmarkCircle
                            fontSize={24}
                            color={theme.colors.primary[500]}
                          />
                          <Text key={index} color="gray.500">
                            No contracts, cancel any time
                          </Text>
                        </HStack>
                      ))}
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </VStack>
          </Stack>
        </VStack>
      </VStack>
    </Center>
  );
}
