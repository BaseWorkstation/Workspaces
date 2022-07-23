import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { withAuth } from "utils/withAuth";
import AccountPasswordSettings from "modules/Settings/Password/Password";

function AccountPasswordSettingsPage() {
  return (
    <Box>
      <Head>
        <title>Change Password - Base</title>
      </Head>
      <AccountPasswordSettings />
    </Box>
  );
}

export default withAuth(AccountPasswordSettingsPage);
