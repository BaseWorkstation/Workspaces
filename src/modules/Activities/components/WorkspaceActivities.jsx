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
import Spinner from "components/Spinner/Spinner";
import Link from "next/link";

export default function WorkspaceActivities({
  workspaceLoading,
  workspace,
  workspaceActivities,
}) {
  if (workspaceLoading) return <Spinner />;

  if (!workspace) return <NoWorkspaceView />;

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

const NoWorkspaceView = () => (
  <VStack my={20} spacing={8}>
    <Image src="/images/spaceholder.png" objectFit="cover" boxSize={126} />
    <Text fontWeight={500} textAlign="center">
      Create a workspace to check its activities here
    </Text>
    <Link href="/details">
      <Button colorScheme="primary" w={250} size="lg" h="56px">
        Create workspace
      </Button>
    </Link>
  </VStack>
);
