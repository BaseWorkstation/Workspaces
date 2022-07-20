import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import ListSpaces from "modules/ExploreSpaces/ListSpaces/ListSpaces";

function ListSpacesPage() {
  return (
    <Box>
      <Head>
        <title>Explore Spaces - Base</title>
      </Head>
      <ListSpaces />
    </Box>
  );
}

export default ListSpacesPage;
