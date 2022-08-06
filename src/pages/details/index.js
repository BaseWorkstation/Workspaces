import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { withAuth } from "utils/withAuth";
import WorkspaceDetails from "modules/Details/Details";

function WorkspaceDetailsPage() {
  return (
    <Box>
      <Head>
        <title>Your Workspace - Base</title>
      </Head>
      <WorkspaceDetails />
    </Box>
  );
}

export default withAuth(WorkspaceDetailsPage);
