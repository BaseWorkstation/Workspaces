import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { withAuth } from "utils/withAuth";
import WorkspaceServices from "modules/Services/Services";

function WorkspaceServicesPage() {
  return (
    <Box>
      <Head>
        <title>Your Workspace's Services - Base</title>
      </Head>
      <WorkspaceServices />
    </Box>
  );
}

export default withAuth(WorkspaceServicesPage);
