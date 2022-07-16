import React from "react";
import {
  Avatar,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Show,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Router from "next/router";
import { useSelector } from "react-redux";

export default function UserMenu() {
  const { userDetails } = useSelector((state) => state.user);

  return (
    <Menu placement="bottom-end">
      <MenuButton textAlign="left">
        <HStack>
          <Avatar name={userDetails?.first_name} width={9} height={9} />
          <Show above="md">
            <Box>
              <Text textTransform="capitalize" fontWeight="bold">
                {userDetails?.first_name} {userDetails?.last_name}
              </Text>
              <Text fontSize="xs">{userDetails?.email}</Text>
            </Box>
          </Show>
        </HStack>
      </MenuButton>
      <MenuList color="blue.800">
        <Link href="/account">
          <MenuItem fontWeight={500}>Account</MenuItem>
        </Link>
        <MenuDivider m={0} />
        <Link href="/account/settings">
          <MenuItem fontWeight={500}>Settings</MenuItem>
        </Link>
        <MenuDivider m={0} />
        <MenuItem
          onClick={() => Router.push("/login")}
          fontWeight={500}
          color="red.400"
        >
          Sign out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
