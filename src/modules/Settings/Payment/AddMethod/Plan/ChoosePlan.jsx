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
import { kConvert } from "utils/helpers";
import Spinner from "components/Spinner/Spinner";

export default function ChoosePaymentPlan() {
  const theme = useTheme();
  const {
    subscriptionPlans,
    ctaColors,
    handleChoosePlan,
    isLoading,
    selectedPlanId,
    setSelectedPlanId,
  } = useChoosePlanHook();

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
              maxW="5xl"
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
                <Spinner loading={!subscriptionPlans.length} />

                {subscriptionPlans.map(
                  ({ id, name, price_per_month }, index) => (
                    <Stack
                      key={id}
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
                          {kConvert(price_per_month)} p/month
                        </Text>
                      </Stack>
                      <Stack spacing={6} p={6} pt={4}>
                        {[0, 1, 2, 3, 4].map((index) => (
                          <HStack key={index} spacing={3}>
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
                            isLoading={isLoading && selectedPlanId === id}
                            isDisabled={isLoading}
                            loadingText="Loading..."
                            bg={ctaColors[index]}
                            size="lg"
                            h="56px"
                            onClick={() => {
                              setSelectedPlanId(id);
                              handleChoosePlan(id);
                            }}
                          >
                            Select Plan
                          </Button>
                        </Box>
                      </Stack>
                    </Stack>
                  )
                )}
              </Stack>
            </VStack>
          </Stack>
        </VStack>
      </VStack>
    </Center>
  );
}
