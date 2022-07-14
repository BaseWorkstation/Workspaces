import {
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import Link from "next/link";
import React from "react";
import { IoHeadsetSharp, IoHeadsetOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import useActivitiesHook from "./useActivitiesHook";

export default function AccountActivities() {
  const { menuOptions, path } = useActivitiesHook();

  const onSupportPath = path === "/account/support";

  return (
    <HStack align="stretch" bg="blackAlpha.50" minH="100vh" spacing={0}>
      <Stack
        flexShrink={0}
        justify="space-between"
        bg="white"
        w={224}
        pb={20}
        pt={8}
        px={10}
      >
        <Stack spacing={87}>
          <Logo w={68} />
          <Stack spacing={43}>
            {menuOptions.map(({ name, href, lineIcon, filledIcon }) => {
              const isSelected = path === href;
              return (
                <Link key={href} href={href}>
                  <HStack cursor="pointer" spacing={6}>
                    <Icon
                      fontSize={22}
                      as={isSelected ? filledIcon : lineIcon}
                      color={isSelected ? "primary.500" : "blue.800"}
                    />
                    <Text
                      color={isSelected ? "primary.500" : "blue.800"}
                      fontWeight={isSelected ? 500 : 400}
                    >
                      {name}
                    </Text>
                  </HStack>
                </Link>
              );
            })}
          </Stack>
        </Stack>

        <Stack spacing={8}>
          <Link href="/account/support">
            <HStack cursor="pointer" spacing={6}>
              <Icon
                fontSize={22}
                as={onSupportPath ? IoHeadsetSharp : IoHeadsetOutline}
                color={onSupportPath ? "primary.500" : "blue.800"}
              />
              <Text
                color={onSupportPath ? "primary.500" : "blue.800"}
                fontWeight={onSupportPath ? 500 : 400}
              >
                Support
              </Text>
            </HStack>
          </Link>

          <HStack cursor="pointer" spacing={6}>
            <Icon fontSize={22} as={RiLogoutCircleLine} color="blue.800" />
            <Text color="blue.800">Logout</Text>
          </HStack>
        </Stack>
      </Stack>
      <Stack w="full" divider={<StackDivider />} spacing={0}>
        <HStack color="blue.800" justify="space-between" py={8} px={57}>
          <Heading fontSize="xl" fontWeight="500">
            Welcome,{" "}
            <Box as="span" color="primary.500">
              Best
            </Box>
            &nbsp; &nbsp;👋
          </Heading>
        </HStack>

        <Stack pt={56}></Stack>
      </Stack>
    </HStack>
  );
}
