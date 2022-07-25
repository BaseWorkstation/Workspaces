import {
  Box,
  Heading,
  Link as ChakraLink,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { QrReader } from "react-qr-reader";

export default function ScanQR({ handleScanResult }) {
  return (
    <Stack divider={<StackDivider />} spacing={0}>
      <Stack pb={8} px={6}>
        <Heading fontSize="xl">Check-in</Heading>
        <Text>
          Scan the QR Code at the entrance of your current workspace to check-in
        </Text>
      </Stack>
      <Stack px={0} spacing={6}>
        <Box w="full">
          <QrReader
            constraints={{ facingMode: "environment" }}
            scanDelay={1000}
            onResult={handleScanResult}
            videoContainerStyle={{ paddingTop: "76%" }}
            videoStyle={{ objectFit: "cover", objectFill: "cover" }}
            containerStyle={{ width: "100%", height: "fit-content" }}
          />
        </Box>
        <Text fontSize="xs" textAlign="center">
          Unable to scan?{" "}
          <Link href="/account/support">
            <ChakraLink fontWeight="semibold" color="primary.500">
              Get support
            </ChakraLink>
          </Link>
        </Text>
      </Stack>
    </Stack>
  );
}
