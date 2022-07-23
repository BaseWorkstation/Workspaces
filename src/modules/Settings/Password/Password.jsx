import {
  Button,
  Link as ChakraLink,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import SettingsLayout from "layout/SettingsLayout/SettingsLayout";
import Link from "next/link";
import usePasswordHook from "./usePasswordHook";

export default function AccountPasswordSettings() {
  const { passwordDetails, handleChange, handleSubmit, isLoading } =
    usePasswordHook();

  return (
    <SettingsLayout>
      <Stack
        as="form"
        onSubmit={handleSubmit}
        px={[4, 4, 16]}
        py={[4, 4, 24]}
        spacing={10}
      >
        <Stack w="full">
          <Text>Enter old password</Text>
          <Input
            w="full"
            maxW={278}
            size="lg"
            type="password"
            value={passwordDetails.oldPassword}
            name="oldPassword"
            onChange={handleChange}
            isRequired
            placeholder="Enter old password"
          />
        </Stack>
        <Stack w="full">
          <Text>Enter new password</Text>
          <Input
            w="full"
            maxW={278}
            size="lg"
            type="password"
            value={passwordDetails.newPassword}
            name="newPassword"
            onChange={handleChange}
            isRequired
            placeholder="Enter new password"
          />
        </Stack>
        <Stack w="full">
          <Text>Verify new password</Text>
          <Input
            w="full"
            maxW={278}
            size="lg"
            type="password"
            value={passwordDetails.confirmNewPassword}
            name="confirmNewPassword"
            onChange={handleChange}
            isRequired
            placeholder="Verify new password"
          />
        </Stack>
        <Stack spacing={4}>
          <Button
            maxW={220}
            colorScheme="primary"
            h={57}
            type="submit"
            isLoading={isLoading}
            loadingText="Updating..."
            size="lg"
          >
            Update
          </Button>
          <Link href="/forgot-password">
            <ChakraLink fontSize="sm" color="primary.500">
              Forgot password?
            </ChakraLink>
          </Link>
        </Stack>
      </Stack>
    </SettingsLayout>
  );
}
