import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { withAuth } from "utils/withAuth";
import AccountActivities from "modules/Activities/Activities";

function AccountActivitiesPage() {
  return (
    <Box>
      <Head>
        <title>Your activities - Base</title>
      </Head>
      <AccountActivities />
    </Box>
  );
}

export default withAuth(AccountActivitiesPage);
