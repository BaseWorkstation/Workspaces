import { Center, Heading, Stack, Text } from "@chakra-ui/react";

export default function AboutBase() {
  return (
    <Stack spacing={6} rounded={20} px={[5, 8]} pt={8} pb={20} bg="white">
      <Stack spacing={4}>
        <Heading fontSize="xl" color="blue.800">
          About this Base
        </Heading>
        <Text>
          Surrounded by various good eateries, B.Y.O food using reusable
          containers (barePack). Healthier choices of beverages and snacks are
          available for purchase. Flexible workspace configurations with various
          IT equipment support on request.
          <br />
          <br />
          Health inspired cafe meets yoga studio meets cycle store located in Al
          Safa - work from this beautiful cafe for the day and enjoy their
          buzzing ambience!
          <br />
          <br />
          Parking: Paid RTA parking available outside.
        </Text>
      </Stack>

      <Stack pt={6} spacing={4}>
        <Heading fontSize="xl" color="blue.800">
          Schedule:
        </Heading>
        <Stack spacing={[4, 4, 8]} direction={["column", "column", "row"]}>
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
          No outside food permitted. Instead, enjoy 20% off your food and
          beverage order while working from this space.
        </Text>
      </Stack>
    </Stack>
  );
}
