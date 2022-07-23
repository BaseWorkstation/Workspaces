import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { withAuth } from "utils/withAuth";
import AccountCardSettings from "modules/Settings/Card/Card";

function AccountCardSettingsPage() {
  return (
    <Box>
      <Head>
        <title>Card Settings - Base</title>
      </Head>
      <AccountCardSettings />
    </Box>
  );
}

export default withAuth(AccountCardSettingsPage);
