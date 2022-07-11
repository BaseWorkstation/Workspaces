import { Box } from "@chakra-ui/react";
import Register from "modules/Register/Register";
import Head from "next/head";
import React from "react";

export default function RegisterPage() {
  return (
    <Box>
      <Head>
        <title>Sign Up - Base</title>
      </Head>
      <Register />
    </Box>
  );
}
