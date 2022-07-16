import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { withAuth } from "utils/withAuth";
import ViewTeam from "modules/Team/ViewTeam/ViewTeam";

function ViewTeamPage() {
  return (
    <Box>
      <Head>
        <title>My team - Base</title>
      </Head>
      <ViewTeam />
    </Box>
  );
}

export default withAuth(ViewTeamPage);
