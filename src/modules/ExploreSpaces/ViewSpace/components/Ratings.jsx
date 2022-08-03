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
import Moment from "react-moment";
import "moment-timezone";

export default function Ratings({ spaceReviews }) {
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
              {Array.from(Array(spaceReviews.total_no_of_ratings)).map(
                (index) => (
                  <Icon
                    as={IoStarSharp}
                    color="#FFCE31"
                    fontSize={22}
                    key={index}
                  />
                )
              )}
              {Array.from(Array(5 - spaceReviews.total_no_of_ratings)).map(
                (index) => (
                  <Icon
                    key={index}
                    as={IoStarOutline}
                    fontSize={18}
                    color="gray.300"
                  />
                )
              )}
            </HStack>
            <Text>
              {spaceReviews.average_rating}.0 {spaceReviews.total_no_of_reviews}{" "}
              reviews
            </Text>
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
        {spaceReviews.reviews?.map(
          ({ id, rating, author, review, created_at }) => (
            <Stack key={id}>
              <HStack justify="space-between">
                <HStack spacing={3}>
                  <Avatar
                    size="sm"
                    name={`${author?.first_name} ${author?.last_name}`}
                    src={author?.avatar?.file_path}
                  />
                  <Stack
                    spacing={[0, 0, 3]}
                    direction={["column", "column", "row"]}
                  >
                    <Text textTransform="capitalize">
                      {author?.first_name} {author?.last_name}
                    </Text>
                    <HStack>
                      {Array.from(Array(rating)).map((index) => (
                        <Icon
                          as={IoStarSharp}
                          color="#FFCE31"
                          fontSize={18}
                          key={index}
                        />
                      ))}
                      {Array.from(Array(5 - rating)).map((index) => (
                        <Icon
                          key={index}
                          as={IoStarOutline}
                          fontSize={16}
                          color="gray.300"
                        />
                      ))}
                    </HStack>
                  </Stack>
                </HStack>
                <Text color="gray.600">
                  <Moment format="Do MMMM, YYYY">{created_at}</Moment>
                </Text>
              </HStack>
              <Text color="gray.700">{review}</Text>
            </Stack>
          )
        )}
      </Stack>
    </>
  );
}
