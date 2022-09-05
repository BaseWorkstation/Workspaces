import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Select,
  Stack,
  Switch,
  Text,
  Textarea,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import PageLoadingAnimation from "components/PageLoadingAnimation/PageLoadingAnimation";
import Spinner from "components/Spinner/Spinner";
import AccountLayout from "layout/AccountLayout/AccountLayout";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdQrCode2 } from "react-icons/md";
import { separateWithComma } from "utils/helpers";
import UploadImage from "./components/UploadImage";
import useDetailsHook from "./useDetailsHook";

export default function WorkspaceDetails() {
  const {
    workstation,
    infoDetails,
    setInfoDetails,
    isLoadingWorkstation,
    isCreatingWorkstation,
    isEditingWorkstation,
    isUploadingLogo,
    isUploadingImage,
    handleWorkstationInfoSubmit,
    handleUploadWorkstationLogo,
    handleUploadWorkstationImage,
    handleDeleteImage,
    isDeletingImage,
    handleChange,
    amountUserPays,
  } = useDetailsHook();

  if (isLoadingWorkstation) return <PageLoadingAnimation />;

  return (
    <AccountLayout>
      <Stack
        border="1px solid"
        bg="white"
        borderColor="gray.200"
        rounded={16}
        as="form"
        onSubmit={handleWorkstationInfoSubmit}
        pos="relative"
        minH="lg"
        px={[4, 4, 10]}
        py={8}
        spacing={12}
      >
        <Stack
          align="flex-end"
          spacing={[8, 8, 8, 20]}
          direction={["column", "column", "column", "row"]}
        >
          <Input
            w="full"
            onChange={handleChange}
            name="name"
            value={infoDetails.name}
            size="lg"
            fontSize={32}
            fontWeight="bold"
            _placeholder={{ color: "gray.400" }}
            variant="flushed"
            isRequired
            placeholder="What's the name of your workspace?"
          />
          {workstation && (
            <Link download href={workstation?.qr_code_path}>
              <Button
                leftIcon={<MdQrCode2 />}
                variant="link"
                colorScheme="primary"
              >
                Download QR Code
              </Button>
            </Link>
          )}
        </Stack>

        <Stack>
          <Text fontWeight="bold" color="blue.800">
            CONTACT & ADDRESS
          </Text>
          <Wrap spacingX={7} spacingY={30}>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Street *</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  name="street"
                  value={infoDetails.street}
                  size="lg"
                  isRequired
                  placeholder="eg. Floor 1, Adeniran Ogunsanya mall"
                />
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">City *</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  name="city"
                  isRequired
                  value={infoDetails.city}
                  size="lg"
                  placeholder="eg. Surulere"
                />
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">State *</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  name="state"
                  value={infoDetails.state}
                  size="lg"
                  isRequired
                  placeholder="eg. Lagos"
                />
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Contact Email *</Text>
                <Input
                  w="full"
                  type="email"
                  onChange={handleChange}
                  name="email"
                  value={infoDetails.email}
                  size="lg"
                  isRequired
                  placeholder="eg. support@newbase.com"
                />
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Contact Phone number *</Text>
                <Input
                  w="full"
                  type="tel"
                  onChange={handleChange}
                  name="phone"
                  value={infoDetails.phone}
                  size="lg"
                  isRequired
                  placeholder="eg. 08012345678"
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
            <Text color="gray.500">About *</Text>
            <Textarea
              w="full"
              onChange={handleChange}
              name="about"
              value={infoDetails.about}
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
              name="otherPolicies"
              value={infoDetails.otherPolicies}
              size="lg"
              minH={28}
              placeholder="Enter Other Policies here..."
            />
          </Stack>
        </Stack>

        {/* <Stack>
          <Text fontWeight="bold" color="blue.800">
            AMENITIES
          </Text>
          <Stack spacing={0} w="full">
            <Text color="gray.500">Choose available amenities</Text>
            <Select
              w="full"
              onChange={handleChange}
              name="amenities"
              value={infoDetails.amenities}
              size="lg"
              placeholder="Choose..."
            />
          </Stack>
        </Stack> */}

        <Stack spacing={4}>
          <Text fontWeight="bold" color="blue.800">
            AVAILABILITY
          </Text>
          <Wrap spacingX={7} spacingY={30}>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Default Opening time *</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  name="openTime"
                  value={infoDetails.openTime}
                  type="time"
                  size="lg"
                  isRequired
                />
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Default Closing time *</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  name="closeTime"
                  value={infoDetails.closeTime}
                  type="time"
                  size="lg"
                  isRequired
                />
              </Stack>
            </WrapItem>

            {/* <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Closed?</Text>
                <Flex>
                  <Switch
                    onChange={(event) =>
                      setInfoDetails((prev) => ({
                        ...prev,
                        isClosed: event.target.checked,
                      }))
                    }
                    isChecked={infoDetails.isClosed}
                    type="time"
                    size="lg"
                    isRequired
                  />
                </Flex>
              </Stack>
            </WrapItem> */}
          </Wrap>

          <Wrap spacingX={7} spacingY={30}>
            <WrapItem>
              <Stack spacing={0} w={278}>
                <Text color="gray.500">Weekday Opening time</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  name="weekdayOpenTime"
                  isDisabled={infoDetails.isWeekdayClosed}
                  value={infoDetails.weekdayOpenTime}
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
                  name="weekdayCloseTime"
                  isDisabled={infoDetails.isWeekdayClosed}
                  value={infoDetails.weekdayCloseTime}
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
                    onChange={(event) =>
                      setInfoDetails((prev) => ({
                        ...prev,
                        isWeekdayClosed: event.target.checked,
                      }))
                    }
                    isChecked={infoDetails.isWeekdayClosed}
                    type="time"
                    size="lg"
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
                  name="weekendOpenTime"
                  isDisabled={infoDetails.isWeekendClosed}
                  value={infoDetails.weekendOpenTime}
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
                  name="weekendCloseTime"
                  isDisabled={infoDetails.isWeekendClosed}
                  value={infoDetails.weekendCloseTime}
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
                    onChange={(event) =>
                      setInfoDetails((prev) => ({
                        ...prev,
                        isWeekendClosed: event.target.checked,
                      }))
                    }
                    isChecked={infoDetails.isWeekendClosed}
                    type="time"
                    size="lg"
                  />
                </Flex>
              </Stack>
            </WrapItem>
          </Wrap>
        </Stack>

        {!workstation && (
          <Stack spacing={4}>
            <Text fontWeight="bold" color="blue.800">
              BILLING RATE
            </Text>
            <Wrap spacingX={7} spacingY={30}>
              <WrapItem>
                <Stack spacing={0} w={278}>
                  <Text color="gray.500">
                    Minute Charge *{" "}
                    {/* {infoDetails.pricePerMinute
                      ? `(User will pay N${separateWithComma(amountUserPays)})`
                      : ""} */}
                  </Text>
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
                      min={0.01}
                      onChange={handleChange}
                      name="pricePerMinute"
                      value={infoDetails.pricePerMinute}
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
            </WrapItem> */}
            </Wrap>

            {/* <Wrap spacingX={7} spacingY={30}>
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
          </Wrap> */}
          </Stack>
        )}

        <Stack>
          <Text fontWeight="bold" color="blue.800">
            COORDINATES
          </Text>
          <Wrap spacingX={7} spacingY={30}>
            <WrapItem>
              <Stack spacing={0} w={[300, 350]} maxW="6xl">
                <Text color="gray.500">Coordinates (Lat, Lng) *</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  name="coordinates"
                  value={infoDetails.coordinates}
                  size="lg"
                  isRequired
                  placeholder="eg. 12.2324343, 90.4343434"
                />
              </Stack>
            </WrapItem>
          </Wrap>
        </Stack>

        <Stack>
          <Text fontWeight="bold" color="blue.800">
            PAYMENT METHOD
          </Text>
          <Wrap spacingX={7} spacingY={30}>
            <WrapItem>
              <Stack spacing={0} w={[300, 350]} maxW="6xl">
                <Text color="gray.500">Bank Details *</Text>
                <Input
                  w="full"
                  onChange={handleChange}
                  name="bankDetails"
                  value={infoDetails.bankDetails}
                  size="lg"
                  isRequired
                  placeholder="eg. Sterling bank 0012222323"
                />
              </Stack>
            </WrapItem>
          </Wrap>
        </Stack>

        <Stack spacing={4}>
          <Text fontWeight="bold" color="blue.800">
            PICTURES
          </Text>
          <Stack spacing={4} w="full">
            <Text color="gray.500">Upload workspace logo</Text>
            <Avatar
              src={workstation?.logo?.file_path}
              icon={<HiOutlineOfficeBuilding fontSize={60} color="white" />}
              rounded="full"
              boxSize={109}
            />
            <Flex w="fit-content" cursor="pointer" pos="relative">
              <UploadImage uploadImageFile={handleUploadWorkstationLogo} />
              <Button
                isLoading={isUploadingLogo}
                loadingText="Updating..."
                size="sm"
                fontWeight={500}
              >
                Upload
              </Button>
            </Flex>
          </Stack>

          <Stack w="full">
            <Text color="gray.500">Upload workspace images</Text>
            <Wrap spacingX={7} spacingY={30}>
              {workstation?.images?.map((image) => (
                <WrapItem key={image.id}>
                  <Stack pt={4} pos="relative">
                    <Image
                      w={[300, 200]}
                      h={150}
                      objectFit="cover"
                      src={image?.file_path}
                    />
                    <IconButton
                      isLoading={isDeletingImage}
                      onClick={() => handleDeleteImage(image.id)}
                      pos="absolute"
                      top={0}
                      rounded="full"
                      w={6}
                      fontSize="xs"
                      size="sm"
                      h={7}
                      right={-2}
                      colorScheme="red"
                      icon={<CloseIcon />}
                    />
                  </Stack>
                </WrapItem>
              ))}

              <WrapItem>
                <Stack pt={4} pos="relative">
                  <Center
                    border="1px solid"
                    borderColor="primary.500"
                    bg="cyan.50"
                    w={[300, 200]}
                    rounded={12}
                    h={150}
                    objectFit="cover"
                  >
                    {isUploadingImage ? (
                      <Spinner />
                    ) : (
                      <IconButton
                        rounded="full"
                        w={6}
                        fontSize="xs"
                        size="sm"
                        h={7}
                        colorScheme="primary"
                        icon={<AddIcon />}
                      />
                    )}
                  </Center>
                  <UploadImage uploadImageFile={handleUploadWorkstationImage} />
                </Stack>
              </WrapItem>
            </Wrap>
          </Stack>
        </Stack>

        <HStack
          w="full"
          justify="center"
          pos="sticky"
          bottom={[20, 20, 20, 0]}
          bg="white"
          py={4}
          zIndex={20}
          left={0}
          boxShadow="0 -4px 10px -5px rgba(0, 0, 0, 0.1)"
        >
          <Button
            isLoading={isCreatingWorkstation || isEditingWorkstation}
            type="submit"
            colorScheme="primary"
            w="full"
            size="lg"
            h={57}
          >
            Save
          </Button>
        </HStack>
      </Stack>
    </AccountLayout>
  );
}
