import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import MobileNav from "layout/shared/MobileNav";
import Link from "next/link";
import Router from "next/router";
import { useSelector } from "react-redux";
import { exploreMenuOptions } from "utils/constants";

export default function MobileExploreDrawer({ isOpen, onToggle }) {
  const { userDetails } = useSelector((state) => state.user);

  return (
    <Drawer size="full" isOpen={isOpen} placement="right">
      <DrawerOverlay />
      <DrawerContent p={0}>
        <DrawerHeader px={5} pt={10}>
          <HStack>
            <Avatar name={userDetails?.first_name} width={9} height={9} />
            <Box>
              <Text textTransform="capitalize" fontWeight="bold">
                {userDetails?.first_name} {userDetails?.last_name}
              </Text>
              <Text fontSize="xs">{userDetails?.email}</Text>
            </Box>
          </HStack>
        </DrawerHeader>

        <DrawerBody pb={24}>
          <Stack
            fontSize="lg"
            fontWeight={500}
            h="full"
            color="blue.800"
            justify="flex-end"
            spacing={12}
            pb={10}
          >
            {exploreMenuOptions.map(({ name, href }) => (
              <Link key={href} href={href}>
                <Text w="fit-content">{name}</Text>
              </Link>
            ))}

            <Text
              cursor="pointer"
              onClick={() => Router.push("/login")}
              color="red.500"
            >
              Logout
            </Text>
          </Stack>
        </DrawerBody>

        <DrawerFooter p={0}>
          <MobileNav onToggle={onToggle} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
