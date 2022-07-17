import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { withAuth } from "utils/withAuth";
import AccountBasicInfoSettings from "modules/Settings/BasicInfo/BasicInfo";

function AccountBasicInfoSettingsPage() {
  return (
    <Box>
      <Head>
        <title>Basic Information Settings - Base</title>
      </Head>
      <AccountBasicInfoSettings />
    </Box>
  );
}

export default withAuth(AccountBasicInfoSettingsPage);
