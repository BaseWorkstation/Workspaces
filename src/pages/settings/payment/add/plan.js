import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import ChoosePaymentPlan from "modules/Settings/Payment/AddMethod/Plan/ChoosePlan";
import { withAuth } from "utils/withAuth";

function AddPaymentPlanPage() {
  return (
    <Box>
      <Head>
        <title>Choose a payment plan - Base</title>
      </Head>
      <ChoosePaymentPlan />
    </Box>
  );
}

export default withAuth(AddPaymentPlanPage);
