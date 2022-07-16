import {
  Button,
  Divider,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function DeleteMemberModal({
  isDeletingMember,
  handleRemoveMember,
  deleteMemberModalState,
}) {
  const { isOpen, onClose } = deleteMemberModalState;

  return (
    <Modal size={["sm", "lg"]} isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent rounded={20}>
        <ModalHeader color="red.400" pt={5} pb={3}>
          Remove team member?
        </ModalHeader>
        <Divider />
        <ModalCloseButton top={5} />
        <ModalBody p={0}>
          <Stack pb={8} pt={6} px={6} spacing={6}>
            <Text>Are you sure you want to remove this team member?</Text>
            <HStack w="full" pt={0} spacing={6}>
              <Button
                width={155}
                size="lg"
                fontWeight={500}
                isLoading={isDeletingMember}
                loadingText="Removing..."
                onClick={handleRemoveMember}
                bg="red.400"
                colorScheme="default"
              >
                Yes
              </Button>

              <Button
                width={145}
                size="lg"
                fontWeight={500}
                onClick={onClose}
                variant="outline"
                isDisabled={isDeletingMember}
              >
                No
              </Button>
            </HStack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
