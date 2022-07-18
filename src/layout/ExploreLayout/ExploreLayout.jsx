import React from "react";
import { Box, Stack, useDisclosure } from "@chakra-ui/react";
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

      <Stack pl={[0, 0, 0, 224]} pb={[32, 24]} w="full" spacing={0}>
        {children}
      </Stack>
    </Box>
  );
}
