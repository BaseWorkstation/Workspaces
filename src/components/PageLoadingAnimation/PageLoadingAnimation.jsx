import { Center } from "@chakra-ui/react";
import { Logo } from "components/Logo";
import Spinner from "components/Spinner/Spinner";
import React from "react";

export default function PageLoadingAnimation() {
  return (
    <Center minH="100vh" flexDirection="column">
      <Logo mb={4} />
      <Spinner />
    </Center>
  );
}
