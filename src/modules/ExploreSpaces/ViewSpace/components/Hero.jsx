import {
  Box,
  Circle,
  Heading,
  HStack,
  IconButton,
  Image,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import Slider from "react-slick";
import BillingRate from "./Billing";

export default function Hero() {
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
    <>
      <Box pt={[0, 0, 20, 185, 185]} bg="white">
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
          <BillingRate />
        </Stack>
      </Show>
    </>
  );
}