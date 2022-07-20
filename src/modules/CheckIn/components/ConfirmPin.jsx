import {
  Button,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  Stack,
  StackDivider,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function ConfirmPin({ workspace, handleSubmitPin }) {
  const [pin, setPin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitPin(pin);
  };

  return (
    <Stack divider={<StackDivider />} pb={6} spacing={0}>
      <Stack color="blue.800" pb={4} px={6}>
        <Heading textAlign="center" fontSize="2xl">
          Check in to {workspace?.name}
        </Heading>
      </Stack>
      <VStack as="form" onSubmit={handleSubmit} pt={8} px={0}>
        <VStack>
          <Text fontSize="xl" fontWeight={700}>
            Enter PIN
          </Text>
          <Text textAlign="center" color="blue.800">
            Enter your 4 digit pin to check in to this base
          </Text>
        </VStack>

        <HStack pt={97} pb={20} spacing={10}>
          <PinInput
            value={pin}
            onChange={setPin}
            variant="flushed"
            focusBorderColor="primary.500"
            size="lg"
            type="number"
            mask
            otp
            autoFocus
          >
            {[0, 1, 2, 3].map((index) => (
              <PinInputField
                required
                key={index}
                borderBottom="2px solid"
                borderBottomColor="gray.500"
              />
            ))}
          </PinInput>
        </HStack>

        <Button
          size="lg"
          colorScheme="primary"
          fontWeight={500}
          w={250}
          h={57}
          type="submit"
        >
          Check In
        </Button>
        <Text pt={8} fontSize="xs" textAlign="center">
          Don't have a pin?{" "}
          <Link href="/register">
            <ChakraLink fontWeight="semibold" color="primary.500">
              Create a Base account now
            </ChakraLink>
          </Link>
        </Text>
      </VStack>
    </Stack>
  );
}
