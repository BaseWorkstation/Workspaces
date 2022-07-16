import { HStack, Stack, StackDivider, useDisclosure } from "@chakra-ui/react";
import AccountHeader from "layout/components/AccountHeader";
import DesktopAccountNav from "layout/components/DesktopAccountNav";
import MobileDrawer from "layout/components/MobileDrawer";
import MobileNav from "layout/components/MobileNav";

export default function AccountLayout({ children }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <HStack align="stretch" bg="blackAlpha.50" minH="100vh" spacing={0}>
      <DesktopAccountNav />

      <MobileNav onToggle={onToggle} />
      <MobileDrawer isOpen={isOpen} onToggle={onToggle} />

      <Stack
        pl={[0, 0, 0, 224]}
        pb={[32, 24]}
        w="full"
        divider={<StackDivider />}
        spacing={0}
      >
        <AccountHeader />
        <Stack pt={12} px={["5%", "5%", "5%", 12]}>
          {children}
        </Stack>
      </Stack>
    </HStack>
  );
}
