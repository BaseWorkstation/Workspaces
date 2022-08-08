import {
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Stack,
  Switch,
  Text,
  Textarea,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import AccountLayout from "layout/AccountLayout/AccountLayout";
import useDetailsHook from "./useDetailsHook";

export default function WorkspaceDetails() {
  const { handleChange } = useDetailsHook();

  return (
    <AccountLayout>
      <Stack
        border="1px solid"
        bg="white"
        borderColor="gray.200"
        rounded={16}
        as="form"
        pos="relative"
        minH="lg"
        px={[4, 4, 10]}
        py={8}
        spacing={12}
      >
        <Input
          w="full"
          onChange={handleChange}
          // name="teamName"
          // value={teamName}
          size="lg"
          fontSize={32}
          fontWeight="bold"
          _placeholder={{ color: "gray.400" }}
          variant="flushed"
          isRequired
          placeholder="What's the name of your workspace?"
        />

        <Stack>
          <Text fontWeight="bold" color="blue.800">
            ADDRESS
          </Text>
          <Wrap spacingX={7} spacingY={30}>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Street</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  // name="teamName"
                  // value={teamName}
                  size="lg"
                  isRequired
                  placeholder="eg. Floor 1, Adeniran Ogunsanya mall"
                />
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">City</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  // name="teamAddress"
                  // value={teamAddress}
                  size="lg"
                  placeholder="eg. Surulere"
                />
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">State</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  // name="teamEmail"
                  // value={teamEmail}
                  size="lg"
                  placeholder="eg. Lagos"
                />
              </Stack>
            </WrapItem>
          </Wrap>
        </Stack>

        <Stack spacing={4}>
          <Text fontWeight="bold" color="blue.800">
            INFO
          </Text>
          <Stack spacing={0}>
            <Text color="gray.500">About</Text>
            <Textarea
              w="full"
              onChange={handleChange}
              // name="teamName"
              // value={teamName}
              size="lg"
              minH={32}
              isRequired
              placeholder="Give a description of your base"
            />
          </Stack>

          <Stack spacing={0}>
            <Text color="gray.500">Other Policies</Text>
            <Textarea
              w="full"
              onChange={handleChange}
              // name="teamName"
              // value={teamName}
              size="lg"
              minH={28}
              isRequired
              placeholder="Enter Other Policies here..."
            />
          </Stack>
        </Stack>

        <Stack>
          <Text fontWeight="bold" color="blue.800">
            AMENITIES
          </Text>
          <Stack spacing={0} w="full">
            <Text color="gray.500">Choose available amenities</Text>
            <Select
              w="full"
              onChange={handleChange}
              // name="teamName"
              // value={teamName}
              size="lg"
              isRequired
              placeholder="Choose..."
            />
          </Stack>
        </Stack>

        <Stack spacing={4}>
          <Text fontWeight="bold" color="blue.800">
            AVAILABILITY
          </Text>
          <Wrap spacingX={7} spacingY={30}>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Default Opening time</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  // name="teamName"
                  // value={teamName}
                  type="time"
                  size="lg"
                  isRequired
                />
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Default Closing time</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  // name="teamAddress"
                  // value={teamAddress}
                  type="time"
                  size="lg"
                  isRequired
                />
              </Stack>
            </WrapItem>

            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Closed?</Text>
                <Flex>
                  <Switch
                    onChange={handleChange}
                    // name="teamAddress"
                    // value={teamAddress}
                    type="time"
                    size="lg"
                    isRequired
                  />
                </Flex>
              </Stack>
            </WrapItem>
          </Wrap>

          <Wrap spacingX={7} spacingY={30}>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Weekday Opening time</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  // name="teamName"
                  // value={teamName}
                  type="time"
                  size="lg"
                  isRequired
                />
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Weekday Closing time</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  // name="teamAddress"
                  // value={teamAddress}
                  type="time"
                  size="lg"
                  isRequired
                />
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Not available on weekdays?</Text>
                <Flex>
                  <Switch
                    onChange={handleChange}
                    // name="teamAddress"
                    // value={teamAddress}
                    type="time"
                    size="lg"
                    isRequired
                  />
                </Flex>
              </Stack>
            </WrapItem>
          </Wrap>

          <Wrap spacingX={7} spacingY={30}>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Weekend Opening time</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  // name="teamName"
                  // value={teamName}
                  type="time"
                  size="lg"
                  isRequired
                />
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Weekend Closing time</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  // name="teamAddress"
                  // value={teamAddress}
                  type="time"
                  size="lg"
                  isRequired
                />
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Not available on weekends?</Text>
                <Flex>
                  <Switch
                    onChange={handleChange}
                    // name="teamAddress"
                    // value={teamAddress}
                    type="time"
                    size="lg"
                    isRequired
                  />
                </Flex>
              </Stack>
            </WrapItem>
          </Wrap>
        </Stack>

        <Stack spacing={4}>
          <Text fontWeight="bold" color="blue.800">
            BILLING RATE
          </Text>
          <Wrap spacingX={7} spacingY={30}>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Minute Charge</Text>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="₦"
                  />

                  <Input
                    type="number"
                    step={0.01}
                    w="full"
                    onChange={handleChange}
                    // name="teamName"
                    // value={teamName}
                    isRequired
                    placeholder="Minute Charge"
                  />
                  <InputRightElement
                    pr={4}
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="/min"
                  />
                </InputGroup>
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Minimum minute Charge</Text>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="₦"
                  />

                  <Input
                    type="number"
                    step={0.01}
                    w="full"
                    onChange={handleChange}
                    // name="teamName"
                    // value={teamName}
                    isRequired
                    placeholder="Minimum charge"
                  />
                  <InputRightElement
                    pr={4}
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="/min"
                  />
                </InputGroup>
              </Stack>
            </WrapItem>
          </Wrap>

          <Wrap spacingX={7} spacingY={30}>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Hourly Charge</Text>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="₦"
                  />

                  <Input
                    type="number"
                    step={0.01}
                    w="full"
                    onChange={handleChange}
                    // name="teamName"
                    // value={teamName}
                    isRequired
                    placeholder="Hourly Charge"
                  />
                  <InputRightElement
                    pr={4}
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="/hr"
                  />
                </InputGroup>
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Minimum hourly Charge</Text>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="₦"
                  />

                  <Input
                    type="number"
                    step={0.01}
                    w="full"
                    onChange={handleChange}
                    // name="teamName"
                    // value={teamName}
                    isRequired
                    placeholder="Minimum charge"
                  />
                  <InputRightElement
                    pr={4}
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="/hr"
                  />
                </InputGroup>
              </Stack>
            </WrapItem>
          </Wrap>
        </Stack>

        <Stack>
          <Text fontWeight="bold" color="blue.800">
            COORDINATES
          </Text>
          <Wrap spacingX={7} spacingY={30}>
            <WrapItem>
              <Stack spacing={0} w={[300, 350]} maxW="6xl">
                <Text color="gray.500">Coordinates (Lat, Lng)</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  // name="teamName"
                  // value={teamName}
                  size="lg"
                  isRequired
                  placeholder="eg. 12.2324343, 90.4343434"
                />
              </Stack>
            </WrapItem>
          </Wrap>
        </Stack>

        <HStack
          w="full"
          justify="center"
          pos="sticky"
          bottom={[20, 20, 20, 0]}
          bg="white"
          py={4}
          zIndex={4}
          left={0}
          boxShadow="0 -4px 10px -5px rgba(0, 0, 0, 0.1)"
        >
          <Button type="submit" colorScheme="primary" w="full" size="lg" h={57}>
            Save
          </Button>
        </HStack>
      </Stack>
    </AccountLayout>
  );
}
