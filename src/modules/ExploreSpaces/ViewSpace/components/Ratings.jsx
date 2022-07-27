import {
  Avatar,
  Heading,
  HStack,
  Icon,
  IconButton,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

export default function Ratings() {
  const [showFeedback, setShowFeedback] = useState(false);

  const mobileFeedbackDisplay = showFeedback ? "flex" : "none";

  return (
    <>
      <HStack
        px={[5, 8, 0]}
        pt={[8, 8, 0]}
        pb={[8, 8, 0]}
        justify="space-between"
      >
        <Stack spacing={[4, 4, 6]}>
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
              <Icon as={IoStarOutline} fontSize={18} color="gray.300" />
            </HStack>
            <Text>4.0 202 reviews</Text>
          </HStack>
        </Stack>
        <Show below="md">
          <IconButton
            fontSize={20}
            colorScheme="default"
            color="black"
            onClick={() => setShowFeedback((prev) => !prev)}
            icon={<BsChevronRight />}
          />
        </Show>
      </HStack>

      <Stack
        display={[mobileFeedbackDisplay, mobileFeedbackDisplay, "flex"]}
        px={[5, 8, 0]}
        spacing={8}
        pb={[12, 12, 0]}
      >
        {[0, 1, 2].map((index) => (
          <Stack key={index}>
            <HStack justify="space-between">
              <HStack spacing={3}>
                <Avatar
                  size="sm"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Stack
                  spacing={[0, 0, 3]}
                  direction={["column", "column", "row"]}
                >
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
                    <Icon as={IoStarOutline} fontSize={16} color="gray.300" />
                  </HStack>
                </Stack>
              </HStack>
              <Text color="gray.600">7th June, 2022</Text>
            </HStack>
            <Text color="gray.700">
              Amazing facility, front desk officer was also very courteous, food
              is great as well
            </Text>
          </Stack>
        ))}
      </Stack>
    </>
  );
}
