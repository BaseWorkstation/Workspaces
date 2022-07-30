import { Center, Heading, Stack, Text } from "@chakra-ui/react";

export default function AboutBase({ about, policies }) {
  return (
    <Stack spacing={6} rounded={20} px={[5, 8]} pt={8} pb={20} bg="white">
      <Stack spacing={4}>
        <Heading fontSize="xl" color="blue.800">
          About this Base
        </Heading>
        <Text as="span" dangerouslySetInnerHTML={{ __html: about }} />
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

        <Text as="span" dangerouslySetInnerHTML={{ __html: policies }} />
      </Stack>
    </Stack>
  );
}
