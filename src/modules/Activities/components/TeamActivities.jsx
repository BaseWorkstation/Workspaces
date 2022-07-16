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

export default function TeamActivities({ teamLoading, teams, teamActivities }) {
  if (teamLoading) return <Spinner />;

  if (!teams.length) return <NoTeamView />;

  if (!teamActivities.length)
    return (
      <Text textAlign="center">
        When your team members check in to workspaces, you will see it here
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
            {teamActivities.map((index) => (
              <Tr key={index}>
                <Td py={8} pl={0}>
                  Venia Business Hub
                </Td>
                <Td py={8}>Best Omotayo</Td>
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

const NoTeamView = () => (
  <VStack my={20} spacing={8}>
    <Image src="/illustrations/team.svg" boxSize={126} />
    <Text fontWeight={500} textAlign="center">
      Create a team to check their activities here
    </Text>
    <Link href="/account/team/new">
      <Button colorScheme="primary" w={250} size="lg" h="56px">
        Create team
      </Button>
    </Link>
  </VStack>
);
