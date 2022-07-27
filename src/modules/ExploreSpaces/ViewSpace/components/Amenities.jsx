import {
  Grid,
  GridItem,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineBulb } from "react-icons/ai";

export default function Amenities() {
  return (
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
  );
}
