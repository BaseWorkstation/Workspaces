import { Box, Circle, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function SpaceCard() {
  return (
    <Link href="/spaces/1">
      <HStack
        cursor="pointer"
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        fontWeight={700}
        minH={[134, 154, 215]}
        spacing={[4, 6]}
        rounded={["xl", "xl", "2xl"]}
      >
        <Image
          w={[131, 151, 210]}
          h={["full"]}
          objectFit="cover"
          rounded={["xl", "xl", "2xl"]}
          src="/images/space.png"
        />
        <Box py={[3, 3, 3, 0]} pr={2}>
          <Text fontSize={["md", "md", "lg"]} color="primary.900">
            Venia Business Hub
          </Text>
          <HStack spacing={0} color="primary.900" align="baseline">
            <Text>₦200/</Text>
            <Text fontSize={10}>HR</Text>
          </HStack>
          <Stack fontSize={["xs", "xs", "md"]} spacing={1} mt={[1, 1, 3]}>
            <HStack spacing={2}>
              <Circle size={2} bg="green.400" />
              <Text color="gray.500">OPEN</Text>
            </HStack>
            <Text fontWeight={500}>09:00 AM - 06: 00 PM</Text>
            <Text fontWeight={500}>12, Adeniyi jones Av, Ikeja, Lagos</Text>
          </Stack>
        </Box>
      </HStack>
    </Link>
  );
}
