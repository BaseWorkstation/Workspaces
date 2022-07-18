import { Stack } from "@chakra-ui/react";
import ExploreLayout from "layout/ExploreLayout/ExploreLayout";
import Head from "next/head";

export default function ViewSpace() {
  return (
    <ExploreLayout>
      <Head>
        <title>Venia Business Hub - Base</title>
      </Head>
      <Stack spacing={[8, 10, 12, 70]}></Stack>
    </ExploreLayout>
  );
}
