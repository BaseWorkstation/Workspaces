import React from "react";
import { Box, Stack, StackDivider, Text } from "@chakra-ui/react";
import SubscriptionPlans from "components/SubscriptionPlans/SubscriptionPlans";

export default function TeamSubscription({ handleChoosePlan }) {
  return (
    <Stack spacing={[4, 8]} divider={<StackDivider />}>
      <Text>
        You're currently subscribed to the{" "}
        <Box as="span" fontWeight="bold" color="primary.500">
          Gold
        </Box>{" "}
        Plan. To change your plan select from an option below
      </Text>

      <SubscriptionPlans onSelect={handleChoosePlan} />
    </Stack>
  );
}
