import { HStack, IconButton, Show } from "@chakra-ui/react";
import { Logo } from "components/Logo";
import { IoGrid } from "react-icons/io5";

export default function MobileNav({ onToggle }) {
  return (
    <Show below="lg">
      <HStack
        w="full"
        pos="fixed"
        pt={5}
        pb={6}
        px="5%"
        bottom={0}
        bg="white"
        borderTop="1px solid"
        borderColor="gray.400"
        justify="space-between"
      >
        <Logo w={58} />

        <IconButton
          onClick={onToggle}
          icon={<IoGrid />}
          colorScheme="default"
          color="primary.500"
          fontSize={28}
        />
      </HStack>
    </Show>
  );
}
