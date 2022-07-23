import {
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import SettingsLayout from "layout/SettingsLayout/SettingsLayout";
import TeamInfo from "./components/TeamInfo";
import UserInfo from "./components/UserInfo";

export default function AccountBasicInfoSettings() {
  return (
    <SettingsLayout>
      <Stack px={[4, 4, 16]} py={8} spacing={54}>
        <Tabs pos="relative" variant="soft-rounded">
          <TabList
            border="1px solid"
            borderColor="gray.200"
            w={["fit-content"]}
            rounded={8}
          >
            <Tab
              rounded={8}
              color="gray.500"
              fontSize={["md", "md", "lg"]}
              px={[6, 8]}
              _selected={{ bg: "rgba(0, 171, 231, 0.15);", color: "blue.800" }}
            >
              Your Info
            </Tab>
            <Tab
              rounded={8}
              color="gray.500"
              fontSize={["md", "md", "lg"]}
              px={[6, 8]}
              _selected={{ bg: "rgba(0, 171, 231, 0.15);", color: "blue.800" }}
            >
              Team Info
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel px={0} pt={[5, 5]}>
              <UserInfo />
            </TabPanel>
            <TabPanel px={0} pt={[5, 5]}>
              <TeamInfo />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </SettingsLayout>
  );
}
