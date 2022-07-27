import {
  Center,
  Divider,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function CheckInInstructions() {
  return (
    <>
      <Stack spacing={6}>
        <Heading fontSize="xl" color="blue.800">
          Check in Instructions
        </Heading>
        <Stack spacing={4}>
          <HStack spacing={4}>
            <Center
              bg="primary.500"
              color="white"
              boxSize={27}
              fontWeight="bold"
              rounded="full"
            >
              1
            </Center>
            <Text>Open your phone camera</Text>
          </HStack>
          <HStack spacing={4}>
            <Center
              bg="primary.500"
              color="white"
              boxSize={27}
              fontWeight="bold"
              rounded="full"
            >
              2
            </Center>
            <Text>Scan the QR code at entrance to check in</Text>
          </HStack>
          <HStack spacing={4}>
            <Center
              bg="primary.500"
              color="white"
              boxSize={27}
              fontWeight="bold"
              rounded="full"
            >
              3
            </Center>
            <Text>Voila!, get to work</Text>
          </HStack>
        </Stack>
      </Stack>

      <HStack spacing={2}>
        <Icon
          as={RiInformationLine}
          bg="gray.100"
          fontSize={18}
          rounded="full"
        />

        <Text>Open this page on a mobile device to sign in to this base</Text>
      </HStack>

      <Divider borderColor="gray.400" />
    </>
  );
}
