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
import Moment from "react-moment";
import { separateWithComma } from "utils/helpers";
import "moment-timezone";

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
            {workspaceActivities.data.map(
              ({
                id,
                user,
                check_in_time,
                check_out_time,
                total_value_of_minutes_spent_in_naira,
                workstation,
              }) => (
                <Tr key={id}>
                  <Td textTransform="capitalize" py={8}>
                    {user.first_name} {user.last_name}
                  </Td>
                  <Td py={8}>
                    {check_in_time ? (
                      <Moment format="hh:mm a">
                        {new Date(check_in_time)}
                      </Moment>
                    ) : (
                      ""
                    )}
                  </Td>
                  <Td py={8}>
                    {check_out_time ? (
                      <Moment format="hh:mm a">
                        {new Date(check_out_time)}
                      </Moment>
                    ) : (
                      ""
                    )}
                  </Td>
                  <Td py={8} isNumeric>
                    N{separateWithComma(total_value_of_minutes_spent_in_naira)}
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
      {/* <HStack spacing={16} pt={12} justify="flex-end">
        <Text fontWeight="bold" color="primary.500" fontSize="lg">
          TOTAL SPENT
        </Text>
        <Text fontWeight="bold" color="primary.500" fontSize="lg">
          N10,000
        </Text>
      </HStack> */}
    </Box>
  );
}
