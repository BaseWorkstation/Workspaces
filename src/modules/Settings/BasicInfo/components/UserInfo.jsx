import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function UserInfo() {
  return (
    <Stack as="form" pt={12} spacing={54}>
      <Stack spacing={6}>
        <Image rounded="full" src="/images/space.png" boxSize={109} />
        <Flex>
          <Button variant="link" fontWeight={500}>
            Change Picture
          </Button>
        </Flex>
      </Stack>

      <Wrap spacingX={12} spacingY={30}>
        <WrapItem>
          <Stack w={278}>
            <Text>First Name</Text>
            <Input
              w="full"
              size="lg"
              isRequired
              placeholder="Enter First name"
            />
          </Stack>
        </WrapItem>
        <WrapItem>
          <Stack w={278}>
            <Text>Last Name</Text>
            <Input
              w="full"
              size="lg"
              isRequired
              placeholder="Enter Last name"
            />
          </Stack>
        </WrapItem>
        <WrapItem>
          <Stack w={278}>
            <Text>Address</Text>
            <Input w="full" size="lg" placeholder="Enter Address" />
          </Stack>
        </WrapItem>

        <WrapItem>
          <Stack w={278}>
            <Text>Phone Number</Text>
            <Input
              w="full"
              type="tel"
              size="lg"
              placeholder="Enter Phone Number"
            />
          </Stack>
        </WrapItem>
      </Wrap>

      <Button maxW={176} colorScheme="primary" h={57} type="submit" size="lg">
        Update
      </Button>
    </Stack>
  );
}
