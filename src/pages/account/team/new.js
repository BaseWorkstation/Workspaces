import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { withAuth } from "utils/withAuth";
import CreateTeam from "modules/Team/CreateTeam/CreateTeam";

function CreateTeamPage() {
  return (
    <Box>
      <Head>
        <title>Create a team - Base</title>
      </Head>
      <CreateTeam />
    </Box>
  );
}

export default withAuth(CreateTeamPage);
