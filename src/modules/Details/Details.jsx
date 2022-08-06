import { Stack } from "@chakra-ui/react";
import AccountLayout from "layout/AccountLayout/AccountLayout";
import useDetailsHook from "./useDetailsHook";

export default function WorkspaceDetails() {
  const {
    currentTeam,
    basicInfoDetails,
    handleChange,
    handleUserInfoSubmit,
    handleTeamInfoSubmit,
    isUserInfoLoading,
    isTeamInfoLoading,
    handleUploadTeamImage,
    handleUploadUserImage,
  } = useDetailsHook();

  return (
    <AccountLayout>
      <Stack
        border="1px solid"
        bg="white"
        borderColor="gray.200"
        rounded={16}
        minH="lg"
        px={[4, 4, 16]}
        py={8}
        spacing={54}
      ></Stack>
    </AccountLayout>
  );
}
