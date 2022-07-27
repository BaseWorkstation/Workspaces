import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function BillingRate() {
  return (
    <Stack spacing={6}>
      <Text fontSize={["lg", "lg", "xl"]} color="blue.800" fontWeight="bold">
        Billing Rate
      </Text>
      <HStack align="flex-start" spacing={5}>
        <Icon as={AiOutlineClockCircle} color="primary.500" fontSize={21} />
        <Stack spacing={[1, 1, 0]}>
          <Text fontWeight={["bold", "bold", 500]}>
            Minute Charge: N1,000/min.
          </Text>
          <Text color="gray.600" fontSize={["xs", "xs", "sm"]}>
            Minimum charge N500
          </Text>
        </Stack>
      </HStack>

      <HStack align="flex-start" spacing={5}>
        <Icon as={AiOutlineClockCircle} color="primary.500" fontSize={21} />
        <Stack spacing={[1, 1, 0]}>
          <Text fontWeight={["bold", "bold", 500]}>
            Hourly Charge: N2,000/min.
          </Text>
          <Text color="gray.600" fontSize={["xs", "xs", "sm"]}>
            Minimum charge N1,000
          </Text>
        </Stack>
      </HStack>
    </Stack>
  );
}
