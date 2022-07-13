import { Flex } from "@chakra-ui/react";
import React from "react";
import { StageSpinner } from "react-spinners-kit";
import theme from "theme";

export default function Spinner({ loading, ...rest }) {
  if (loading === false) return null;

  return (
    <Flex w="full" justify="center">
      <StageSpinner
        color={theme.colors.primary[500]}
        speedMultiplier={0.5}
        {...rest}
      />
    </Flex>
  );
}
