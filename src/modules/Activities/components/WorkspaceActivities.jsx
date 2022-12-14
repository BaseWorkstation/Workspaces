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

  const totalAmount = workspaceActivities.data.reduce((accumulator, object) => {
    return accumulator + Number(object.workspace_share_for_duration);
  }, 0);

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
              <Th textTransform="capitalize" fontSize="md" color="primary.500">
                Time spent
              </Th>
              <Th
                textTransform="capitalize"
                fontSize="md"
                color="primary.500"
                isNumeric
              >
                Amount earned
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
                workspace_share_for_duration,
                total_minutes_spent,
                workstation,
              }) => (
                <Tr key={id}>
                  <Td textTransform="capitalize" py={8}>
                    {user.first_name} {user.last_name}
                  </Td>
                  <Td py={8}>
                    {check_in_time ? (
                      <Moment format="DD MMM YYYY, hh:mm a">
                        {new Date(check_in_time.replace("-", "/"))}
                      </Moment>
                    ) : (
                      ""
                    )}
                  </Td>
                  <Td py={8}>
                    {check_out_time ? (
                      <Moment format="DD MMM YYYY, hh:mm a">
                        {
                          new Date(
                            check_out_time
                              // .replace("-", "/")
                              .split(" ")
                              .join("T")
                          )
                        }
                      </Moment>
                    ) : (
                      <Text color="gray">Still checked in</Text>
                    )}
                  </Td>
                  <Td py={8}>{total_minutes_spent} minutes</Td>
                  <Td py={8} isNumeric>
                    ???{separateWithComma(workspace_share_for_duration)}
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack spacing={16} pt={12} justify="flex-end">
        <Text fontWeight="bold" color="primary.500" fontSize="lg">
          TOTAL EARNED
        </Text>
        <Text fontWeight="bold" color="primary.500" fontSize="lg">
          ???{separateWithComma(totalAmount)}
        </Text>
      </HStack>
    </Box>
  );
}
