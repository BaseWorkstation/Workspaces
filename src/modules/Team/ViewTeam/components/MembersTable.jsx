import {
  Box,
  Button,
  Icon,
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
import { AiOutlineDelete } from "react-icons/ai";
import DeleteMemberModal from "./DeleteMemberModal";

export default function MembersTable({
  teamMembers,
  teams,
  teamLoading,
  openDeleteMemberConfirmation,
  ...rest
}) {
  if (teamLoading) return <Spinner />;

  if (!teams.length) return <NoTeamView />;

  if (!teamMembers.data.length)
    return (
      <Text textAlign="center">
        When you add members to your team, they will appear here
      </Text>
    );

  return (
    <Box pt={0}>
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
                Name
              </Th>

              <Th textTransform="capitalize" fontSize="md" color="primary.500">
                Email address
              </Th>
              <Th textTransform="capitalize" fontSize="md" color="primary.500">
                Last Active
              </Th>
              <Th textTransform="capitalize" fontSize="md" color="primary.500">
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {teamMembers.data.map((index) => (
              <Tr key={index}>
                <Td py={8} pl={0}>
                  Best Omotayo
                </Td>
                <Td py={8}>bestomotayo@gmail.com</Td>
                <Td py={8}>2 min ago</Td>
                <Td py={8}>
                  <Button
                    fontWeight={500}
                    colorScheme="default"
                    color="red.400"
                    variant="ghost"
                    iconSpacing={2}
                    leftIcon={<Icon as={AiOutlineDelete} fontSize={20} />}
                    onClick={() => openDeleteMemberConfirmation(1)}
                  >
                    Remove User
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <DeleteMemberModal {...rest} />
      </TableContainer>
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
