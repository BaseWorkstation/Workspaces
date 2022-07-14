import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Link as ChakraLink,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import Link from "next/link";
import useForgotPasswordHook from "./useForgotPasswordHook";

export default function ForgotPassword() {
  const { forgotPasswordDetails, handleSubmit, isLoading, handleChange } =
    useForgotPasswordHook();

  const { email } = forgotPasswordDetails;

  return (
    <Center bg="gray.50" minH="100vh" py={[16, 20]}>
      <VStack w="full" spacing={16}>
        <Logo notLinked />

        <VStack w="full" spacing={8}>
          <Stack
            w="full"
            maxW={["full", "sm"]}
            as="form"
            bg="white"
            onSubmit={handleSubmit}
            border="1px solid"
            borderColor="gray.100"
            rounded={20}
            divider={<StackDivider borderColor="gray.200" />}
            spacing={6}
            pt={9}
            pb={6}
          >
            <Stack pl={6}>
              <Heading fontSize="xl">Forgot Password?</Heading>

              <Text fontSize="sm">
                Enter your email address to get a reset link
              </Text>
            </Stack>

            <Stack px={6} spacing={6}>
              <Stack spacing={1}>
                <Text>Email Address</Text>
                <Input
                  size="lg"
                  placeholder="Enter email address"
                  type="email"
                  isRequired
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
              </Stack>

              <Box w="full" pt={9}>
                <Button
                  type="submit"
                  width="full"
                  size="lg"
                  isLoading={isLoading}
                  loadingText="Sending..."
                  variant="solid"
                  colorScheme="primary"
                >
                  Send Link
                </Button>
              </Box>
            </Stack>
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
