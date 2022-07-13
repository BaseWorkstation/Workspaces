import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import AddCard from "modules/Settings/Payment/AddMethod/Card/AddCard";
import { withAuth } from "utils/withAuth";

function AddCardPage() {
  return (
    <Box>
      <Head>
        <title>Add a card - Base</title>
      </Head>
      <AddCard />
    </Box>
  );
}

export default withAuth(AddCardPage);
