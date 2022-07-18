import React from "react";
import { Box } from "@chakra-ui/react";
import ViewSpace from "modules/ExploreSpaces/ViewSpace/ViewSpace";
import { withAuth } from "utils/withAuth";

function ViewSpacePage() {
  return (
    <Box>
      <ViewSpace />
    </Box>
  );
}

export default withAuth(ViewSpacePage);
