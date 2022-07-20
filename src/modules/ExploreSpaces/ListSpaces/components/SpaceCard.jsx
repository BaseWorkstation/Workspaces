import { Box, Circle, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function SpaceCard({ space }) {
  const {
    id,
    name,
    city,
    state,
    country_iso,
    country_name,
    phone,
    email,
    currency_code,
    default_service,
    logo,
    qr_code_path,
  } = space;

  return (
    <Link href={`/spaces/${id}`}>
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
        <Box
          w={[131, 151, 210]}
          h={["full"]}
          bgSize={logo ? "cover" : "60%"}
          rounded={["xl", "xl", "2xl"]}
          bgRepeat="no-repeat"
          bgPos="center"
          bgImage={logo || "/images/spaceholder.png"}
        />
        <Box py={[3, 3, 3, 0]} pr={2}>
          <Text fontSize={["md", "md", "lg"]} color="primary.900">
            {name}
          </Text>
          <HStack spacing={0} color="primary.900" align="baseline">
            <Text>
              {default_service?.price_per_minute?.amount} {currency_code}/
            </Text>
            <Text fontSize={10}>MIN</Text>
          </HStack>
          <Stack fontSize={["xs", "xs", "md"]} spacing={1} mt={[1, 1, 3]}>
            <HStack spacing={2}>
              <Circle size={2} bg="green.400" />
              <Text color="gray.500">OPEN</Text>
            </HStack>
            <Text fontWeight={500}>09:00 AM - 06:00 PM</Text>
            <Text textTransform="capitalize" fontWeight={500}>
              {city}, {state}
            </Text>
          </Stack>
        </Box>
      </HStack>
    </Link>
  );
}
