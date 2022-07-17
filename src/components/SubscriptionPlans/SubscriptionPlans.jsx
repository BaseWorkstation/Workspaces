import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Spinner from "components/Spinner/Spinner";
import { useEffect, useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaymentPlans } from "redux/slices/paymentSlice";
import theme from "theme";
import { kConvert } from "utils/helpers";

const ctaColors = ["primary.500", "#9747FF", "gray.800"]; // Used for mapping bgColors to the CTA buttons

export default function SubscriptionPlans({ currentPlanId, onSelect }) {
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const { paymentPlans, loading } = useSelector((state) => state.payments);

  const dispatch = useDispatch();

  useEffect(() => {
    // If plans havent been fetched, then fetch them
    if (!paymentPlans.length) {
      dispatch(fetchPaymentPlans());
    }
  }, []);

  const isLoading = loading === "ADD_PAYMENT_METHOD";

  return (
    <Stack
      w="full"
      direction={["column", "column", "column", "row"]}
      pt={4}
      spacing={6}
    >
      <Spinner loading={!paymentPlans.length} />

      {paymentPlans.map(({ id, name, price_per_month }, index) => {
        const isCurrent = currentPlanId === id;

        return (
          <Stack
            key={id}
            w="full"
            border="1px solid"
            borderColor="gray.200"
            rounded={20}
            spacing={2}
            divider={<StackDivider borderColor="gray.100" />}
          >
            <Stack spacing={0} p={6} pb={3}>
              <Heading color="blue.800" fontSize="3xl">
                {name}
              </Heading>
              <Text fontSize="xl" color="gray.400">
                {kConvert(price_per_month)} p/month
              </Text>
            </Stack>
            <Stack spacing={6} p={6} pt={4}>
              {[0, 1, 2, 3, 4].map((index) => (
                <HStack key={index} spacing={3}>
                  <IoIosCheckmarkCircle
                    fontSize={24}
                    color={theme.colors.primary[500]}
                  />
                  <Text key={index} color="gray.500">
                    No contracts, cancel any time
                  </Text>
                </HStack>
              ))}

              <Box pt={7}>
                <Button
                  fontWeight={500}
                  iconSpacing={4}
                  rightIcon={
                    isCurrent ? <CheckCircleIcon /> : <HiOutlineArrowRight />
                  }
                  w="full"
                  colorScheme="default"
                  isLoading={isLoading && selectedPlanId === id}
                  isDisabled={isLoading || isCurrent}
                  loadingText="Loading..."
                  bg={ctaColors[index]}
                  size="lg"
                  h="56px"
                  onClick={() => {
                    setSelectedPlanId(id);
                    onSelect(id);
                  }}
                >
                  {isCurrent ? "Currently Active" : "Select Plan"}
                </Button>
              </Box>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
