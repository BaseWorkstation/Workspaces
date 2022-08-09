import {
  Box,
  Button,
  HStack,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import NoWorkspaceView from "components/NoWorkspaceView/NoWorkspaceView";
import Spinner from "components/Spinner/Spinner";

export default function WorkspaceActivities({
  workspaceLoading,
  workspace,
  workspaceActivities,
}) {
  if (workspaceLoading) return <Spinner />;

  if (!workspace)
    return (
      <NoWorkspaceView caption="Create a workspace to check its activities here" />
    );

  if (!workspaceActivities.data.length)
    return (
      <Text textAlign="center">
        When users check in to your workspace, you will see them here
      </Text>
    );

  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead color="primary.500">
            <Tr>
              <Th textTransform="capitalize" fontSize="md" color="primary.500">
                User
              </Th>
              <Th textTransform="capitalize" fontSize="md" color="primary.500">
                Check In
              </Th>
              <Th textTransform="capitalize" fontSize="md" color="primary.500">
                Check Out
              </Th>
              <Th
                textTransform="capitalize"
                fontSize="md"
                color="primary.500"
                isNumeric
              >
                Amount spent
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {workspaceActivities.data.map(({ id, user, workstation }) => (
              <Tr key={id}>
                <Td textTransform="capitalize" py={8}>
                  {user.first_name} {user.last_name}
                </Td>
                <Td py={8}>09:00 am</Td>
                <Td py={8}>05:00pm</Td>
                <Td py={8} isNumeric>
                  N2.500
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack spacing={16} pt={12} justify="flex-end">
        <Text fontWeight="bold" color="primary.500" fontSize="lg">
          TOTAL SPENT
        </Text>
        <Text fontWeight="bold" color="primary.500" fontSize="lg">
          N10,000
        </Text>
      </HStack>
    </Box>
  );
}
