import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Center,
  Circle,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Show,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import ExploreLayout from "layout/ExploreLayout/ExploreLayout";
import Head from "next/head";
import { AiOutlineBulb, AiOutlineClockCircle } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiInformationLine,
} from "react-icons/ri";
import Slider from "react-slick";

export default function ViewSpace() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <IconButton
        icon={<RiArrowRightLine />}
        colorScheme="default"
        color="primary.500"
        bg="white"
        rounded="full"
        size="lg"
        fontSize={30}
        boxSize={[12, 12, 68]}
        right={[15, 15, 27, 90]}
        top="40%"
        pos="absolute"
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <IconButton
        icon={<RiArrowLeftLine />}
        colorScheme="default"
        color="primary.500"
        bg="white"
        rounded="full"
        size="lg"
        fontSize={30}
        boxSize={[12, 12, 68]}
        left={[15, 15, 27, 90]}
        top="40%"
        zIndex={4}
        pos="absolute"
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    arrows: true,
    slidesToShow: 3,
    dots: true,
    focusOnSelect: true,
    speed: 500,
    appendDots: (dots) => (
      <HStack spacing={[2, 2, 4]} justify="center" bottom={[-10, -10, -51]}>
        {dots}
      </HStack>
    ),
    customPaging: () => <Circle bg="primary.50" size={[3, 3, 5]} />,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1860,
        settings: {
          slidesToShow: 2,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 1,
          centerPadding: "400px",
        },
      },

      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 1,
          centerPadding: "340px",
        },
      },

      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 1,
          centerPadding: "280px",
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "230px",
        },
      },

      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          centerPadding: "200px",
        },
      },

      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ExploreLayout>
      <Head>
        <title>Venia Business Hub - Base</title>
      </Head>
      <Box pb={[40, 40, 40, 12]}>
        <Box pt={[0, 0, 20, 20, 185]} bg="white">
          <Show above="md">
            <Stack align="center" spacing={4}>
              <Heading
                className="gradientText"
                textAlign="center"
                fontSize={[36, 36, 50, 64]}
              >
                Venia Business Hub
              </Heading>
              <HStack spacing={4}>
                <Text textAlign="center" color="gray.600" fontWeight={500}>
                  12, Adeniyi jones Av, Ikeja, Lagos
                </Text>
                <HStack spacing={1}>
                  <Circle size={1.5} bg="green.400" />
                  <Text fontSize="xs" fontWeight="bold" color="gray.500">
                    OPEN
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Show>

          <Box mt={[0, 0, 69]} pb={[0, 0, 132]} w="full" align="center">
            <Slider {...settings}>
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <Box
                  w={[
                    "100% !important",
                    "100% !important",
                    "357px !important",
                    "437px !important",
                    "457px !important",
                    "487px !important",
                    "537px !important",
                  ]}
                  key={index}
                >
                  <Box>
                    <Image
                      rounded={[0, 0, 20]}
                      objectFit="cover"
                      w="full"
                      h={[338, 338, 230, 280, 308, 308, 338]}
                      src="/images/space.png"
                    />
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
        <Show below="md">
          <Stack bg="white" mt={12} rounded={20} px={4} py={8} spacing={8}>
            <Stack spacing={1}>
              <Heading fontSize="2xl" color="blue.800">
                Venia Business Hub
              </Heading>
              <Text fontSize="xs">12, Adeniyi jones Av, Ikeja, Lagos</Text>
              <HStack spacing={1}>
                <Circle size={1.5} bg="green.400" />
                <Text fontSize="xs" fontWeight="bold" color="gray.500">
                  OPEN
                </Text>
              </HStack>
            </Stack>
            <Stack spacing={6}>
              <Text fontSize="lg" fontWeight="bold">
                Billing Rate
              </Text>
              <HStack align="flex-start" spacing={5}>
                <Icon
                  as={AiOutlineClockCircle}
                  color="primary.500"
                  fontSize={21}
                />
                <Stack spacing={1}>
                  <Text fontWeight="bold">Minute Charge: N1,000/min.</Text>
                  <Text fontSize="xs">Minimum charge N500</Text>
                </Stack>
              </HStack>

              <HStack align="flex-start" spacing={5}>
                <Icon
                  as={AiOutlineClockCircle}
                  color="primary.500"
                  fontSize={21}
                />
                <Stack spacing={1}>
                  <Text fontWeight="bold">Hourly Charge: N2,000/min.</Text>
                  <Text fontSize="xs">Minimum charge N1,000</Text>
                </Stack>
              </HStack>
            </Stack>
          </Stack>
        </Show>

        <Stack
          spacing={[6, 6, 12]}
          mt={[6, 12, 67]}
          px={[0, 0, "5%"]}
          w="full"
          justify="center"
          align="center"
        >
          <Stack
            w="full"
            maxW="6xl"
            direction={["column", "column", "column", "row"]}
            spacing={8}
            align="stretch"
          >
            <Stack w="full" spacing={[6, 6, 12]}>
              <Stack spacing={8} rounded={20} px={[5, 8]} py={8} bg="white">
                <Heading fontSize="xl" color="blue.800">
                  Amenities
                </Heading>
                <Grid
                  rowGap={[6, 10]}
                  templateColumns={["repeat(3, 1fr)", "repeat(4, 1fr)"]}
                  pb={4}
                  gap={6}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                    <GridItem key={index} w="100%">
                      <VStack>
                        <Icon
                          as={AiOutlineBulb}
                          fontSize={[32, 32, 40]}
                          color="primary.500"
                        />
                        <Text
                          fontSize="sm"
                          textAlign="center"
                          fontWeight={500}
                          color="gray.600"
                        >
                          Adequate Lighting
                        </Text>
                      </VStack>
                    </GridItem>
                  ))}
                </Grid>
              </Stack>
              <Stack
                spacing={6}
                rounded={20}
                px={[5, 8]}
                pt={8}
                pb={20}
                bg="white"
              >
                <Stack spacing={4}>
                  <Heading fontSize="xl" color="blue.800">
                    About this Base
                  </Heading>
                  <Text>
                    Surrounded by various good eateries, B.Y.O food using
                    reusable containers (barePack). Healthier choices of
                    beverages and snacks are available for purchase. Flexible
                    workspace configurations with various IT equipment support
                    on request.
                    <br />
                    <br />
                    Health inspired cafe meets yoga studio meets cycle store
                    located in Al Safa - work from this beautiful cafe for the
                    day and enjoy their buzzing ambience!
                    <br />
                    <br />
                    Parking: Paid RTA parking available outside.
                  </Text>
                </Stack>

                <Stack pt={6} spacing={4}>
                  <Heading fontSize="xl" color="blue.800">
                    Schedule:
                  </Heading>
                  <Stack
                    spacing={[4, 4, 8]}
                    direction={["column", "column", "row"]}
                  >
                    <Center bg="blue.800" rounded={20} w={242} h={53}>
                      <Text fontWeight={500} color="white">
                        Weekdays: 08:00 to 17:00
                      </Text>
                    </Center>

                    <Center bg="blue.800" rounded={20} w={242} h={53}>
                      <Text fontWeight={500} color="white">
                        Weekdays: 08:00 to 17:00
                      </Text>
                    </Center>
                  </Stack>
                </Stack>

                <Stack pt={6} spacing={4}>
                  <Heading fontSize="xl" color="blue.800">
                    Other Policy:
                  </Heading>
                  <Text>
                    No outside food permitted. Instead, enjoy 20% off your food
                    and beverage order while working from this space.
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack w="full" rounded={20} bg="white" spacing={8}>
              <Show above="md">
                <Stack spacing={12} p={8}>
                  <Stack spacing={6}>
                    <Text fontSize="xl" color="blue.800" fontWeight="bold">
                      Billing Rate
                    </Text>
                    <HStack align="flex-start" spacing={5}>
                      <Icon
                        as={AiOutlineClockCircle}
                        color="primary.500"
                        fontSize={21}
                      />
                      <Stack spacing={0}>
                        <Text fontWeight={500}>Minute Charge: N1,000/min.</Text>
                        <Text color="gray.600" fontSize="sm">
                          Minimum charge N500
                        </Text>
                      </Stack>
                    </HStack>

                    <HStack align="flex-start" spacing={5}>
                      <Icon
                        as={AiOutlineClockCircle}
                        color="primary.500"
                        fontSize={21}
                      />
                      <Stack spacing={0}>
                        <Text fontWeight={500}>Hourly Charge: N2,000/min.</Text>
                        <Text color="gray.600" fontSize="sm">
                          Minimum charge N1,000
                        </Text>
                      </Stack>
                    </HStack>
                  </Stack>

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

                    <Text>
                      Open this page on a mobile device to sign in to this base
                    </Text>
                  </HStack>

                  <Divider borderColor="gray.400" />

                  <Stack spacing={6}>
                    <Heading fontSize="xl" color="blue.800">
                      Rating and Reviews
                    </Heading>
                    <HStack>
                      <HStack>
                        {[0, 1, 2, 3].map((index) => (
                          <Icon
                            as={IoStarSharp}
                            color="#FFCE31"
                            fontSize={22}
                            key={index}
                          />
                        ))}
                        <Icon
                          as={IoStarOutline}
                          fontSize={18}
                          color="gray.300"
                        />
                      </HStack>
                      <Text>4.0 202 reviews</Text>
                    </HStack>
                  </Stack>

                  <Stack spacing={8}>
                    {[0, 1, 2].map((index) => (
                      <Stack key={index}>
                        <HStack justify="space-between">
                          <HStack spacing={3}>
                            <Avatar
                              size="sm"
                              name="Segun Adebayo"
                              src="https://bit.ly/sage-adebayo"
                            />
                            <Text>Best Omotayo</Text>
                            <HStack>
                              {[0, 1, 2, 3].map((index) => (
                                <Icon
                                  as={IoStarSharp}
                                  color="#FFCE31"
                                  fontSize={18}
                                  key={index}
                                />
                              ))}
                              <Icon
                                as={IoStarOutline}
                                fontSize={16}
                                color="gray.300"
                              />
                            </HStack>
                          </HStack>
                          <Text color="gray.600">7th June, 2022</Text>
                        </HStack>
                        <Text color="gray.700">
                          Amazing facility, front desk officer was also very
                          courteous, food is great as well
                        </Text>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Show>

              <Show below="md">
                <HStack px={[5, 8]} py={8} justify="space-between">
                  <Stack spacing={4}>
                    <Heading fontSize="xl" color="blue.800">
                      Rating and Reviews
                    </Heading>
                    <HStack>
                      <HStack>
                        {[0, 1, 2, 3].map((index) => (
                          <Icon
                            as={IoStarSharp}
                            color="#FFCE31"
                            fontSize={22}
                            key={index}
                          />
                        ))}
                        <Icon
                          as={IoStarOutline}
                          fontSize={18}
                          color="gray.300"
                        />
                      </HStack>
                      <Text>4.0 202 reviews</Text>
                    </HStack>
                  </Stack>

                  <IconButton
                    fontSize={20}
                    colorScheme="default"
                    color="black"
                    icon={<BsChevronRight />}
                  />
                </HStack>
              </Show>
            </Stack>
          </Stack>

          <Box
            w="full"
            maxW="6xl"
            border="1px solid"
            borderColor="gray.300"
            h={[231, 300, 461]}
            rounded={20}
          ></Box>
        </Stack>
      </Box>
    </ExploreLayout>
  );
}
