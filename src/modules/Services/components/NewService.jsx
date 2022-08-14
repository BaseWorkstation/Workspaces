import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Wrap,
  WrapItem,
  Text,
  Stack,
  Input,
  Select,
  HStack,
  Button,
  InputRightElement,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";

export default function NewService({ handleSaveService }) {
  const { loading } = useSelector((state) => state.services);

  const [service, setService] = useState({
    name: "",
    category: "space",
    pricePerMinute: "",
    pricePerHour: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setService({
      ...service,
      [name]: value,
    }); // onChange handler
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSaveService(service);
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box
            color="primary.500"
            fontWeight={500}
            fontSize="xl"
            flex="1"
            textAlign="left"
          >
            <AddIcon mr={4} fontSize="12px" />
            Add new service
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel as="form" onSubmit={handleSubmit} pb={4}>
        <Wrap spacingX={4} spacingY={3}>
          <WrapItem>
            <Stack spacing={0} w={278}>
              <Text color="gray.500">Service name</Text>
              <Input
                w="full"
                name="name"
                value={service.name}
                onChange={handleChange}
                isRequired
                placeholder="Enter service name"
              />
            </Stack>
          </WrapItem>

          <WrapItem>
            <Stack spacing={0} w={278}>
              <Text color="gray.500">Service category</Text>
              <Select
                w="full"
                name="category"
                value={service.category}
                onChange={handleChange}
                isRequired
              >
                <option value="space">Space</option>
              </Select>
            </Stack>
          </WrapItem>

          <WrapItem>
            <Stack spacing={0} w={278}>
              <Text color="gray.500">Price per minute</Text>
              <InputGroup>
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
                  name="pricePerMinute"
                  onChange={handleChange}
                  value={service.pricePerMinute}
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

          {/* <WrapItem>
            <Stack spacing={0} w={278}>
              <Text color="gray.500">Price per hour</Text>
              <InputGroup>
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
                  name="pricePerHour"
                  onChange={handleChange}
                  value={service.pricePerHour}
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
          </WrapItem> */}
        </Wrap>

        <HStack mt={4} justify="flex-end">
          <Button
            isLoading={loading === "CREATE_SERVICE"}
            width={40}
            type="submit"
            colorScheme="primary"
          >
            Save
          </Button>
        </HStack>
      </AccordionPanel>
    </AccordionItem>
  );
}
