import React from "react";
import AddPaymentMethod from "modules/Settings/Payment/AddMethod/AddMethod";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function AddPaymentMethodPage() {
  return (
    <Box>
      <Head>
        <title>Add a payment method - Base</title>
      </Head>
      <AddPaymentMethod />
    </Box>
  );
}
