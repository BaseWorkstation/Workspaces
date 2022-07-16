import React from "react";
import {
  Box,
  Button,
  Divider,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RiAddCircleLine } from "react-icons/ri";

export default function AddMemberModal({
  memberDetails,
  handleChange,
  isAddingMember,
  handleSubmitMember,
  addMemberModalState,
}) {
  const { isOpen, onOpen, onClose } = addMemberModalState;

  const { email } = memberDetails;

  return (
    <Box>
      <Button
        fontWeight={500}
        colorScheme="default"
        variant="ghost"
        iconSpacing={2}
        onClick={onOpen}
        leftIcon={
          <Icon as={RiAddCircleLine} color="primary.500" fontSize={20} />
        }
      >
        Add User
      </Button>

      <Modal size={["sm", "md"]} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded={20}>
          <ModalHeader pt={5} pb={3}>
            Add team member
          </ModalHeader>
          <Divider />
          <ModalCloseButton top={5} />
          <ModalBody p={0}>
            <Stack
              as="form"
              pb={8}
              onSubmit={handleSubmitMember}
              px={6}
              spacing={4}
            >
              <Stack py={6} spacing={1}>
                <Text>Enter email address</Text>
                <Input
                  size="lg"
                  placeholder="Email address"
                  type="email"
                  isRequired
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
              </Stack>

              <Box w="full" pt={0}>
                <Button
                  type="submit"
                  width={250}
                  size="lg"
                  fontWeight={500}
                  isLoading={isAddingMember}
                  loadingText="Adding..."
                  variant="solid"
                  colorScheme="primary"
                >
                  Add team member
                </Button>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
