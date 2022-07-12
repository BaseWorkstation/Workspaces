import {
  Center,
  Heading,
  Link as ChakraLink,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import Link from "next/link";
import InputDetails from "./components/InputDetails";
import ShowPin from "./components/ShowPin";
import useRegisterHook from "./useRegisterHook";

export default function Register() {
  const { handleSubmit, basePin, stage, ...rest } = useRegisterHook();

  return (
    <Center bg="gray.50" minH="100vh" py={[12, 20]}>
      <VStack w="full" spacing={[10, 16]}>
        <Logo notLinked />

        <VStack w="full" spacing={8}>
          <Stack
            w="full"
            maxW={["full", "lg"]}
            as="form"
            bg="white"
            onSubmit={handleSubmit}
            border="1px solid"
            borderColor="gray.100"
            rounded={20}
            pt={9}
            pb={6}
          >
            {stage === "INPUT_DETAILS" && <InputDetails {...rest} />}

            {stage === "SHOW_PIN" && <ShowPin basePin={basePin} />}
          </Stack>

          <Text fontSize="sm" textAlign="center">
            Got an account?{" "}
            <Link href="/register">
              <ChakraLink fontWeight="semibold" color="primary.500">
                Sign in
              </ChakraLink>
            </Link>
          </Text>
        </VStack>
      </VStack>
    </Center>
  );
}
