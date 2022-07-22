import {
  Box,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Spinner from "components/Spinner/Spinner";

export default function UserActivities({ userActivities, userLoading }) {
  if (userLoading) return <Spinner />;

  if (!userActivities.data.length)
    return (
      <Text textAlign="center">
        When you start checking in to workspaces, you will see them here
      </Text>
    );

  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead color="primary.500">
            <Tr>
              <Th
                textTransform="capitalize"
                fontSize="md"
                color="primary.500"
                pl={0}
              >
                Workspace
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
            {userActivities.data.map(({ id, workstation }) => (
              <Tr key={id}>
                <Td py={8} pl={0}>
                  {workstation.name}
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
