import { Stack } from "@chakra-ui/react";
import AccountLayout from "layout/AccountLayout/AccountLayout";
import React from "react";
import ListServices from "./components/ListServices";
import useServicesHook from "./useServicesHook";

export default function WorkspaceServices() {
  const {
    workstation,
    services,
    setServices,
    isLoadingServices,
    handleSaveService,
  } = useServicesHook();

  return (
    <AccountLayout>
      <Stack
        border="1px solid"
        bg="white"
        borderColor="gray.200"
        rounded={16}
        pos="relative"
        minH="lg"
        px={[4, 4, 10]}
        py={8}
        spacing={12}
      >
        <ListServices
          workstation={workstation}
          services={services}
          isLoading={isLoadingServices}
          handleSaveService={handleSaveService}
        />
      </Stack>
    </AccountLayout>
  );
}
