import {
  Box,
  Center,
  Heading,
  Stack,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import SubscriptionPlans from "components/SubscriptionPlans/SubscriptionPlans";
import useChoosePlanHook from "./useChoosePlanHook";

export default function ChoosePaymentPlan() {
  const { handleChoosePlan } = useChoosePlanHook();

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

              <Box px={[10, 20, 40, 10, 0]}>
                <SubscriptionPlans onSelect={handleChoosePlan} />
              </Box>
            </VStack>
          </Stack>
        </VStack>
      </VStack>
    </Center>
  );
}
