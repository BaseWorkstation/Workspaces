import {
  Box,
  Circle,
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
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
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
      <Box pb={12}>
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

        <HStack mt={67} w="full" justify="center">
          <Stack
            w="full"
            maxW="6xl"
            direction={["column", "column", "column", "row"]}
            spacing={8}
          >
            <Stack w="full" spacing={8}>
              <Stack spacing={8} rounded={20} p={8} bg="white">
                <Heading fontSize="xl" color="blue.800">
                  Amenities
                </Heading>
                <Grid rowGap={10} templateColumns="repeat(4, 1fr)" gap={6}>
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                    <GridItem key={index} w="100%">
                      <VStack>
                        <Icon
                          as={AiOutlineBulb}
                          fontSize={40}
                          color="primary.500"
                        />
                        <Text
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
            </Stack>
            <Stack w="full" spacing={8}>
              <Stack rounded={20} p={8} bg="white"></Stack>
            </Stack>
          </Stack>
        </HStack>
      </Box>
    </ExploreLayout>
  );
}
