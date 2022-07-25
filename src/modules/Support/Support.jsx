import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Link as ChakraLink,
  Stack,
  Text,
  Textarea,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import AccountLayout from "layout/AccountLayout/AccountLayout";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiWhatsappLine } from "react-icons/ri";
import { TbPhone } from "react-icons/tb";
import useSupportHook from "./useSupportHook";

export default function AccountSupport() {
  const { helpText, setHelpText, handleSubmit } = useSupportHook();

  return (
    <AccountLayout>
      <Stack
        color="blue.800"
        border="1px solid"
        bg="white"
        borderColor="gray.200"
        rounded={16}
        minH="lg"
        p={[5, 5, 8]}
      >
        <Box>
          <Heading fontSize="xl">Support</Heading>
          <Divider my={4} />
          <form onSubmit={handleSubmit}>
            <Heading mt={16} mb={6} fontSize="3xl">
              Need some help?
            </Heading>
            <Text>Tell us what you need help with</Text>
            <Textarea
              value={helpText}
              onChange={(event) => setHelpText(event.target.value)}
              fontSize="sm"
              mt={1}
              mb={8}
              isRequired
              minH={184}
              placeholder="Enter details here"
            />
            <Button
              type="submit"
              w={["full", 176]}
              colorScheme="primary"
              h="56px"
            >
              Send
            </Button>
          </form>
          <Box mt={20} fontWeight={500}>
            <Text mb={2}>You can also get across to us by</Text>
            <Divider />

            <Wrap spacing={8} mt={6} mb={12}>
              <WrapItem>
                <HStack>
                  <Icon as={AiOutlineMail} color="primary.500" />
                  <Text>
                    Email:{" "}
                    <ChakraLink href="mailto:support@trybase.co">
                      support@trybase.co
                    </ChakraLink>
                  </Text>
                </HStack>
              </WrapItem>

              <WrapItem>
                <HStack>
                  <Icon as={RiWhatsappLine} color="whatsapp.500" />
                  <Text>
                    Whatsapp:{" "}
                    <ChakraLink isExternal href="https://wa.me/+234904443825">
                      + 234 904 443 825
                    </ChakraLink>
                  </Text>
                </HStack>
              </WrapItem>

              <WrapItem>
                <HStack>
                  <Icon as={TbPhone} color="violet" />
                  <Text>
                    Phone call:{" "}
                    <ChakraLink href="tel:+234904443825">
                      + 234 904 443 825
                    </ChakraLink>
                  </Text>
                </HStack>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Stack>
    </AccountLayout>
  );
}
