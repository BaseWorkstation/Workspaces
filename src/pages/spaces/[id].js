import React from "react";
import { Box } from "@chakra-ui/react";
import ViewSpace from "modules/ExploreSpaces/ViewSpace/ViewSpace";
import Head from "next/head";

function ViewSpacePage() {
  return (
    <Box>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <ViewSpace />
    </Box>
  );
}

export default ViewSpacePage;
