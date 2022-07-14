import {
  Box,
  Button,
  Center,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link as ChakraLink,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { Logo } from "components/Logo";
import React from "react";
import Link from "next/link";
import useResetPasswordHook from "./useResetPasswordHook";

export default function ResetPassword() {
  const {
    resetPasswordDetails,
    handleSubmit,
    isLoading,
    handleChange,
    showPassword,
    setShowPassword,
  } = useResetPasswordHook();

  const { password, confirmPassword } = resetPasswordDetails;

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
              <Heading fontSize="xl">Enter your new password</Heading>
            </Stack>

            <Stack px={6} spacing={6}>
              <Stack spacing={1}>
                <Text>Password</Text>
                <InputGroup size="lg">
                  <Input
                    size="lg"
                    type={showPassword ? "text" : "password"}
                    isRequired
                    minLength={8}
                    value={password}
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                  />

                  <InputRightElement width="4.5rem">
                    <IconButton
                      h="1.75rem"
                      color="gray.400"
                      bg="transparent"
                      icon={showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                      onClick={() => setShowPassword(!showPassword)}
                      fontSize="xl"
                    />
                  </InputRightElement>
                </InputGroup>
              </Stack>

              <Stack spacing={1}>
                <Text>Confirm Password</Text>
                <InputGroup size="lg">
                  <Input
                    size="lg"
                    type={showPassword ? "text" : "password"}
                    isRequired
                    minLength={8}
                    value={confirmPassword}
                    placeholder="Confirm password"
                    name="confirmPassword"
                    onChange={handleChange}
                  />

                  <InputRightElement width="4.5rem">
                    <IconButton
                      h="1.75rem"
                      color="gray.400"
                      bg="transparent"
                      icon={showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                      onClick={() => setShowPassword(!showPassword)}
                      fontSize="xl"
                    />
                  </InputRightElement>
                </InputGroup>
              </Stack>

              <Box w="full" pt={9}>
                <Button
                  type="submit"
                  width="full"
                  size="lg"
                  isLoading={isLoading}
                  loadingText="Saving..."
                  variant="solid"
                  colorScheme="primary"
                >
                  Save
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
