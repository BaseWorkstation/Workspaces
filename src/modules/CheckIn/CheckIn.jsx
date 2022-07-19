import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link as ChakraLink,
  Link,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import { MdCropFree } from "react-icons/md";

export default function CheckIn() {
  const [data, setData] = useState("No result");

  return (
    <Center bg="gray.50" minH="100vh" py={[16, 20]}>
      <VStack w="full" spacing={16}>
        <Logo notLinked />

        <VStack w="full" spacing={8}>
          <Stack
            w="full"
            maxW={["full", "sm"]}
            bg="white"
            border="1px solid"
            borderColor="gray.100"
            rounded={20}
            spacing={0}
            pt={9}
            pb={6}
          >
            <Stack pb={8} px={6}>
              <Heading fontSize="xl">Check-in</Heading>
              <Text>
                Scan the QR Code at the entrance of your current workspace to
                check-in
              </Text>
            </Stack>
            <Stack px={0} spacing={6}>
              <Box w="full">
                <QrReader
                  constraints={{ facingMode: "environment" }}
                  scanDelay={1000}
                  onResult={(result, error) => {
                    if (!!result) {
                      alert(result?.text);

                      setData(result?.text);
                    }

                    if (!!error) {
                      console.log(error);
                    }
                  }}
                  //   facingMode="environment"
                  //   delay={500}
                  //   onError={handleError}
                  //   onScan={handleScan}
                  //   // chooseDeviceId={()=>selected}
                  //   ViewFinder={(props) => (
                  //     <Center
                  //       w="full"
                  //       zIndex={9999}
                  //       top={0}
                  //       h="full"
                  //       pos="absolute"
                  //     >
                  //       <Icon fontSize={340} color="white" as={MdCropFree} />
                  //     </Center>
                  //   )}
                  videoContainerStyle={{ paddingTop: "76%" }}
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
        </VStack>
      </VStack>
    </Center>
  );
}
