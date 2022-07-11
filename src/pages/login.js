import { Box } from "@chakra-ui/react";
import Login from "modules/Login/Login";
import Head from "next/head";
import React from "react";

export default function LoginPage() {
  return (
    <Box>
      <Head>
        <title>Welcome Back - Base</title>
      </Head>
      <Login />
    </Box>
  );
}
