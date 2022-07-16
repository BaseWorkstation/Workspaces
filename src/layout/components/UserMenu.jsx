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

export default function UserMenu() {
  return (
    <Menu placement="bottom-end">
      <MenuButton textAlign="left">
        <HStack>
          <Avatar name="Best" width={9} height={9} />
          <Show above="md">
            <Box>
              <Text fontWeight="bold">GTBank</Text>
              <Text fontSize="xs">Bestomotayo@gtbank.com</Text>
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
