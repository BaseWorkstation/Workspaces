import { Box, useDisclosure } from "@chakra-ui/react";
import MobileNav from "layout/shared/MobileNav";
import DesktopExporeNav from "./components/DesktopExporeNav";
import MobileExploreDrawer from "./components/MobileExploreDrawer";

export default function ExploreLayout({ children }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="blackAlpha.50" minH="100vh" spacing={0}>
      <DesktopExporeNav />
      <MobileNav onToggle={onToggle} />
      <MobileExploreDrawer isOpen={isOpen} onToggle={onToggle} />

      <Box w="full">{children}</Box>
    </Box>
  );
}
