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
  IconButton,
  Center,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AddIcon } from "@chakra-ui/icons";
import Spinner from "components/Spinner/Spinner";
import UploadImage from "modules/Details/components/UploadImage";
import { HiUpload } from "react-icons/hi";
import { separateWithComma } from "utils/helpers";

export default function EachService({
  service: initialService,
  handleSaveService,
  handleUploadServiceImage,
}) {
  const { loading } = useSelector((state) => state.services);
  const { enums } = useSelector((state) => state.common);

  const [service, setService] = useState(initialService);

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

  const currentServiceImage = initialService.images?.[0];

  const amountUserPays =
    Number(service.pricePerMinute) +
    Number(enums?.base_share_details?.base_markup);

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box
            color="blue.800"
            fontWeight={500}
            fontSize="xl"
            flex="1"
            textAlign="left"
          >
            {initialService?.name}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel as="form" onSubmit={handleSubmit} pb={4}>
        <Stack spacing={4} direction={["column", "column", "column", "row"]}>
          <Stack pt={4} pos="relative">
            <Center
              border="1px solid"
              borderColor="primary.500"
              bg="cyan.50"
              bgImage={currentServiceImage?.file_path}
              w={[100, 120]}
              rounded={12}
              bgSize="cover"
              bgPos="center"
              h={120}
              objectFit="cover"
            >
              {loading === "UPLOAD_SERVICE_IMAGE" ? (
                <Spinner />
              ) : (
                <IconButton
                  rounded="full"
                  w={6}
                  fontSize="xs"
                  size="sm"
                  h={7}
                  colorScheme="primary"
                  icon={currentServiceImage ? <HiUpload /> : <AddIcon />}
                />
              )}
            </Center>
            <UploadImage
              uploadImageFile={(event) =>
                handleUploadServiceImage(event, service.id)
              }
            />
          </Stack>
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
                <Text color="gray.500">
                  Price per minute{" "}
                  {/* {service.pricePerMinute
                    ? `(User will pay N${separateWithComma(amountUserPays)})`
                    : ""} */}
                </Text>
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
                    readOnly
                    isDisabled
                    variant="flushed"
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
        </Stack>

        <HStack mt={4} justify="flex-end">
          <Button
            isLoading={loading === "EDIT_SERVICE"}
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
