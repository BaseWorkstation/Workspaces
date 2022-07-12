import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

export default function InputDetails({
  registerDetails,
  isLoading,
  handleChange,
  showPassword,
  setShowPassword,
}) {
  const { first_name, last_name, phone, email, password, areTermsAgreed } =
    registerDetails;

  return (
    <Stack divider={<StackDivider borderColor="gray.200" />} spacing={6}>
      <Heading pl={6} fontSize="xl">
        Create your account
      </Heading>
      <Stack px={6} spacing={6}>
        <Stack w="full" direction={["column", "row"]}>
          <Stack w="full" spacing={1}>
            <Text>First Name</Text>
            <Input
              size="lg"
              placeholder="Enter first name"
              isRequired
              value={first_name}
              name="first_name"
              onChange={handleChange}
            />
          </Stack>
          <Stack w="full" spacing={1}>
            <Text>Last Name</Text>
            <Input
              size="lg"
              placeholder="Enter last name"
              isRequired
              value={last_name}
              name="last_name"
              onChange={handleChange}
            />
          </Stack>
        </Stack>
        <Stack spacing={1}>
          <Text>Phone Number</Text>
          <Input
            size="lg"
            placeholder="Enter phone number"
            type="phone"
            isRequired
            value={phone}
            name="phone"
            onChange={handleChange}
          />
        </Stack>

        <Stack spacing={1}>
          <Text>Email Address</Text>
          <Input
            size="lg"
            placeholder="Enter email address"
            type="email"
            isRequired
            value={email}
            name="email"
            onChange={handleChange}
          />
        </Stack>
        <Stack spacing={1}>
          <Text>Password</Text>
          <InputGroup size="lg">
            <Input
              size="lg"
              minLength={8}
              type={showPassword ? "text" : "password"}
              isRequired
              value={password}
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
            />

            <InputRightElement width="4.5rem">
              <IconButton
                h="1.75rem"
                color="gray.400"
                bg="transparent"
                icon={showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                onClick={() => setShowPassword(!showPassword)}
                fontSize="xl"
              />
            </InputRightElement>
          </InputGroup>
        </Stack>
        <Flex>
          <Checkbox
            isChecked={areTermsAgreed}
            onChange={(event) => {
              handleChange({
                target: { name: "areTermsAgreed", value: event.target.checked },
              });
            }}
            fontSize="sm"
            borderColor="primary.500"
            colorScheme="primary"
          >
            I agree to the terms and condtions
          </Checkbox>
        </Flex>
        <Box w="full" pt={9}>
          <Button
            type="submit"
            width="full"
            isDisabled={!areTermsAgreed}
            size="lg"
            isLoading={isLoading}
            loadingText="Loading..."
            variant="solid"
            colorScheme="primary"
          >
            Sign up
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}
