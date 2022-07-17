import { Stack, Text } from "@chakra-ui/react";
import SettingsLayout from "layout/SettingsLayout/SettingsLayout";

export default function AccountBasicInfoSettings() {
  return (
    <SettingsLayout>
      <Stack px={16} py={24}>
        <Text>Change Picture</Text>
      </Stack>
    </SettingsLayout>
  );
}
