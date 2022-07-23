import {
  Button,
  Link as ChakraLink,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import SettingsLayout from "layout/SettingsLayout/SettingsLayout";
import Link from "next/link";

export default function AccountPasswordSettings() {
  return (
    <SettingsLayout>
      <Stack as="form" px={[4, 4, 16]} py={[4, 4, 24]} spacing={10}>
        <Stack w="full">
          <Text>Enter old password</Text>
          <Input
            w="full"
            maxW={278}
            size="lg"
            type="password"
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
