import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { withAuth } from "utils/withAuth";
import AccountSubscription from "modules/Subscriptions/Subscriptions";

function AccountSubscriptionPage() {
  return (
    <Box>
      <Head>
        <title>Your subscription - Base</title>
      </Head>
      <AccountSubscription />
    </Box>
  );
}

export default withAuth(AccountSubscriptionPage);
