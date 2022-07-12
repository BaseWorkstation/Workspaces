import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiOutlineArrowRight } from "react-icons/hi";
import useChoosePlanHook from "./useChoosePlanHook";

export default function ChoosePaymentPlan() {
  const theme = useTheme();
  const { subscriptionPlans } = useChoosePlanHook();

  return (
    <Center bg="gray.50" minH="100vh" py={[16, 20]}>
      <VStack w="full" spacing={12}>
        <Logo notLinked />

        <VStack w="full" spacing={8}>
          <Stack
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

              <Stack
                px={[10, 20, 40, 10, 0]}
                w="full"
                direction={["column", "column", "column", "row"]}
                pt={4}
                spacing={6}
              >
                {subscriptionPlans.map(({ name, amount, ctaColor }) => (
                  <Stack
                    key={name}
                    w="full"
                    border="1px solid"
                    borderColor="gray.200"
                    rounded={20}
                    spacing={2}
                    divider={<StackDivider borderColor="gray.100" />}
                  >
                    <Stack spacing={0} p={6} pb={3}>
                      <Heading color="blue.800" fontSize="3xl">
                        {name}
                      </Heading>
                      <Text fontSize="xl" color="gray.400">
                        {amount} p/month
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

                      <Box pt={7}>
                        <Button
                          fontWeight={500}
                          iconSpacing={4}
                          rightIcon={<HiOutlineArrowRight />}
                          w="full"
                          colorScheme="default"
                          bg={ctaColor}
                          size="lg"
                        >
                          Select Plan
                        </Button>
                      </Box>
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
