import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { withAuth } from "utils/withAuth";
import AccountSupport from "modules/Support/Support";

function AccountSupportPage() {
  return (
    <Box>
      <Head>
        <title>Support - Base</title>
      </Head>
      <AccountSupport />
    </Box>
  );
}

export default withAuth(AccountSupportPage);
