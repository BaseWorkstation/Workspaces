import { Box, Button, Flex, HStack, Show, Stack } from "@chakra-ui/react";
import ExploreLayout from "layout/ExploreLayout/ExploreLayout";
import Head from "next/head";
import Link from "next/link";
import AboutBase from "./components/AboutBase";
import Amenities from "./components/Amenities";
import BillingRate from "./components/Billing";
import CheckInInstructions from "./components/CheckInInstructions";
import Hero from "./components/Hero";
import Ratings from "./components/Ratings";
import SpaceOnMap from "./components/SpaceOnMap";
import useViewSpaceHook from "./useViewSpaceHook";

export default function ViewSpace() {
  const { currentCheckIn } = useViewSpaceHook();

  return (
    <ExploreLayout>
      <Head>
        <title>Venia Business Hub - Base</title>
      </Head>
      <Box pb={[48, 48, 40, 12]}>
        <Hero />

        <Stack
          spacing={[6, 6, 12]}
          mt={[6, 12, 67]}
          px={[0, 0, "5%"]}
          w="full"
          justify="center"
          align="center"
        >
          <Stack
            w="full"
            maxW="6xl"
            direction={["column", "column", "column", "column", "row"]}
            spacing={8}
            align="stretch"
          >
            <Stack w="full" spacing={[6, 6, 12]}>
              <Amenities />
              <AboutBase />
            </Stack>
            <Stack w="full" rounded={20} bg="white" spacing={8}>
              <Show above="md">
                <Stack spacing={12} p={8}>
                  <BillingRate />

                  <CheckInInstructions />

                  <Ratings />
                </Stack>
              </Show>

              <Show below="md">
                <Ratings />
              </Show>
            </Stack>
          </Stack>

          <SpaceOnMap />
        </Stack>

        <Show below="md">
          {!currentCheckIn && (
            <HStack pos="fixed" bottom={28} left={0} w="full" justify="center">
              <Flex w="fit-content">
                <Link href="/check-in">
                  <Button w={250} h={57} colorScheme="primary">
                    Check In
                  </Button>
                </Link>
              </Flex>
            </HStack>
          )}
        </Show>
      </Box>
    </ExploreLayout>
  );
}
