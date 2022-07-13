import React from "react";
import { withAuth } from "utils/withAuth";

function Index() {
  return <div>Index</div>;
}

export default withAuth(Index);
