import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import useCreateTeamHook from "./useCreateTeamHook";

export default function CreateTeam() {
  const { teamDetails, handleChange, handleSubmit, isLoading } =
    useCreateTeamHook();
  const { name } = teamDetails;

  return (
    <Center bg="gray.50" minH="100vh" py={[16, 20]}>
      <VStack w="full" spacing={16}>
        <Logo />

        <VStack w="full" spacing={8}>
          <Stack
            w="full"
            maxW={["full", "sm"]}
            as="form"
            bg="white"
            onSubmit={handleSubmit}
            border="1px solid"
            borderColor="gray.100"
            rounded={20}
            divider={<StackDivider borderColor="gray.200" />}
            spacing={6}
            pt={9}
            pb={6}
          >
            <Heading pl={6} fontSize="xl">
              Create a team
            </Heading>

            <Stack px={6} spacing={6}>
              <Stack py={8} spacing={1}>
                <Text>Team name</Text>
                <Input
                  size="lg"
                  placeholder="Enter team name"
                  isRequired
                  value={name}
                  name="name"
                  onChange={handleChange}
                />
              </Stack>

              <Box w="full" pt={9}>
                <Button
                  type="submit"
                  width="full"
                  size="lg"
                  isLoading={isLoading}
                  loadingText="Creating..."
                  variant="solid"
                  colorScheme="primary"
                >
                  Create team
                </Button>
              </Box>
            </Stack>
          </Stack>
        </VStack>
      </VStack>
    </Center>
  );
}
