import { Button, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import SettingsLayout from "layout/SettingsLayout/SettingsLayout";

export default function AccountCardSettings() {
  return (
    <SettingsLayout>
      <Stack px={[4, 4, 16]} py={[4, 4, 24]} spacing={10}>
        <Text>To remove a card, add another card first.</Text>
        <HStack spacing={4}>
          <Image src="/icons/mastercard.png" />
          <Text>**** **** **** 6475</Text>
          <Flex pl={8}>
            <Button variant="link" colorScheme="primary">
              Edit
            </Button>
          </Flex>
        </HStack>
        <Button maxW={220} colorScheme="primary" h={57} type="submit" size="lg">
          Add new card
        </Button>
      </Stack>
    </SettingsLayout>
  );
}
