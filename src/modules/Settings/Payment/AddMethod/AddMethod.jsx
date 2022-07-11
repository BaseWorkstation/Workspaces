import {
  Box,
  Button,
  Center,
  Heading,
  Link as ChakraLink,
  Radio,
  RadioGroup,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import Link from "next/link";
import useAddMethodHook from "./useAddMethodHook";

export default function AddPaymentMethod() {
  const { options, paymentOption, setPaymentOption, proceedWithOption } =
    useAddMethodHook();

  return (
    <Center bg="gray.50" minH="100vh" py={[16, 20]}>
      <VStack w="full" spacing={16}>
        <Logo notLinked />

        <VStack w="full" spacing={8}>
          <Stack
            w="full"
            maxW={["full", "sm"]}
            bg="white"
            border="1px solid"
            borderColor="gray.100"
            rounded={20}
            divider={<StackDivider borderColor="gray.200" />}
            spacing={6}
            pt={9}
            pb={6}
          >
            <Heading pl={6} fontSize="xl">
              Add a payment method
            </Heading>

            <Stack px={6} pt={4} spacing={20}>
              <RadioGroup value={paymentOption} onChange={setPaymentOption}>
                <Stack color="blue.800" fontWeight="500" spacing={12}>
                  {options.map(({ name, href }) => (
                    <Radio
                      key={name}
                      borderColor="primary.500"
                      colorScheme="primary"
                      fontSize="sm"
                      size="lg"
                      spacing={4}
                      value={href}
                    >
                      {name}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
              <Box w="full" pt={9}>
                <Button
                  isDisabled={!paymentOption}
                  onClick={proceedWithOption}
                  width="full"
                  size="lg"
                  variant="solid"
                  colorScheme="primary"
                >
                  Continue
                </Button>
              </Box>
            </Stack>
          </Stack>

          <Text fontSize="sm" textAlign="center">
            <Link href="/">
              <ChakraLink color="primary.800">Skip, Ask me later</ChakraLink>
            </Link>
          </Text>
        </VStack>
      </VStack>
    </Center>
  );
}
