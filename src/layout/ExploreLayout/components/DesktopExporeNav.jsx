import { HStack, Link as ChakraLink, Show } from "@chakra-ui/react";
import { Logo } from "components/Logo";
import UserMenu from "layout/shared/UserMenu";
import Link from "next/link";

export default function DesktopExporeNav() {
  return (
    <Show above="lg">
      <HStack
        pos="fixed"
        top={0}
        bg="white"
        px="5%"
        py={4}
        justify="center"
        w="full"
      >
        <HStack w="full" maxW="6xl" justify="space-between">
          <Logo w={90} />

          <HStack fontSize="lg" fontWeight={500} spacing={12}>
            <Link href="https://trybase.co/teams">
              <ChakraLink>For teams</ChakraLink>
            </Link>
            <Link href="/">
              <ChakraLink color="primary.500">Explore spaces</ChakraLink>
            </Link>
            <Link href="/spaces">
              <ChakraLink>List my space</ChakraLink>
            </Link>
          </HStack>

          <UserMenu />
        </HStack>
      </HStack>
    </Show>
  );
}
