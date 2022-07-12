import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import useAddCardHook from "./useAddCardHook";

export default function AddCard() {
  const {
    cardDetails,
    focusedInput,
    handleSubmit,
    isLoading,
    handleChange,
    handleInputFocus,
    handleCardCallback,
  } = useAddCardHook();

  const { cardNumber, name, expiry, cvc, issuer } = cardDetails;

  return (
    <Center bg="gray.50" minH="100vh" py={[16, 20]}>
      <VStack w="full" spacing={16}>
        <Logo notLinked />

        <VStack w="full" spacing={8}>
          <Stack
            w="full"
            maxW={["full", "lg"]}
            as="form"
            bg="white"
            onSubmit={handleSubmit}
            border="1px solid"
            borderColor="gray.100"
            rounded={20}
            divider={<StackDivider borderColor="gray.200" />}
            spacing={6}
            pt={9}
            pb={6}
          >
            <Heading pl={6} fontSize="xl">
              Add a card
            </Heading>

            <Stack px={6} spacing={6}>
              <Box>
                <Card
                  number={cardNumber}
                  name={name}
                  expiry={expiry}
                  cvc={cvc}
                  focused={focusedInput}
                  callback={handleCardCallback}
                />
              </Box>
              <Stack spacing={1}>
                <Text>Card Number</Text>
                <Input
                  size="lg"
                  fontWeight={500}
                  placeholder="Enter card number"
                  type="tel"
                  isRequired
                  pattern="[\d| ]{16,22}"
                  value={cardNumber}
                  name="cardNumber"
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                />
              </Stack>
              <Stack spacing={1}>
                <Text>Name on card</Text>
                <Input
                  size="lg"
                  fontWeight={500}
                  placeholder="Enter name on card"
                  isRequired
                  value={name}
                  name="name"
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                />
              </Stack>

              <Stack spacing={[6, 4]} direction={["column", "row"]}>
                <Stack w="full" spacing={1}>
                  <Text>Expiry date</Text>
                  <Input
                    size="lg"
                    fontWeight={500}
                    placeholder="MM/YY"
                    isRequired
                    type="tel"
                    pattern="\d\d/\d\d"
                    value={expiry}
                    name="expiry"
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                  />
                </Stack>
                <Stack w="full" spacing={1}>
                  <Text>CVC</Text>
                  <Input
                    size="lg"
                    fontWeight={500}
                    placeholder="CVC"
                    isRequired
                    type="tel"
                    value={cvc}
                    pattern="\d{3,4}"
                    name="cvc"
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                  />
                </Stack>
              </Stack>

              <Box w="full" pt={9}>
                <Button
                  type="submit"
                  width="full"
                  size="lg"
                  fontWeight={500}
                  isLoading={isLoading}
                  loadingText="Adding..."
                  variant="solid"
                  colorScheme="primary"
                >
                  Add card
                </Button>
              </Box>
            </Stack>
          </Stack>
        </VStack>
      </VStack>
    </Center>
  );
}
