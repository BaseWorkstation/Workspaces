import { HStack, Stack, StackDivider, useDisclosure } from "@chakra-ui/react";
import AccountHeader from "./components/AccountHeader";
import DesktopAccountNav from "./components/DesktopAccountNav";
import MobileAccountDrawer from "./components/MobileAccountDrawer";
import MobileNav from "../shared/MobileNav";

export default function AccountLayout({ children }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <HStack align="stretch" bg="blackAlpha.50" minH="100vh" spacing={0}>
      <DesktopAccountNav />

      <MobileNav onToggle={onToggle} />
      <MobileAccountDrawer isOpen={isOpen} onToggle={onToggle} />

      <Stack
        pl={[0, 0, 0, 224]}
        pb={[32, 24]}
        w="full"
        divider={<StackDivider />}
        spacing={0}
      >
        <AccountHeader />
        <Stack pt={12} px={[0, 0, "5%", 12]}>
          {children}
        </Stack>
      </Stack>
    </HStack>
  );
}
