import {
  Center,
  Link as ChakraLink,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import Link from "next/link";
import InputDetails from "./components/InputDetails";
import useRegisterHook from "./useRegisterHook";

export default function Register() {
  const { handleSubmit, ...rest } = useRegisterHook();

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
            <InputDetails {...rest} />
          </Stack>

          <Text fontSize="sm" textAlign="center">
            Got an account?{" "}
            <Link href="/login">
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
