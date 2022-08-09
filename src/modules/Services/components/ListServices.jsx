import NoWorkspaceView from "components/NoWorkspaceView/NoWorkspaceView";
import Spinner from "components/Spinner/Spinner";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Wrap,
  WrapItem,
  Text,
  Stack,
  Input,
  Select,
  HStack,
  Button,
  InputRightElement,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import React from "react";
import EachService from "./EachService";
import NewService from "./NewService";

export default function ListServices({
  isLoading,
  workstation,
  services,
  handleSaveService,
}) {
  if (isLoading) return <Spinner />;

  if (!workstation)
    return (
      <NoWorkspaceView caption="Create a workspace to check its services here" />
    );

  return (
    <Box>
      <Heading fontSize="2xl" mb={4} color="blue.800">
        Services
      </Heading>
      <Accordion allowToggle>
        {services.map((service) => (
          <EachService
            key={service.id}
            service={service}
            handleSaveService={handleSaveService}
          />
        ))}
        <NewService handleSaveService={handleSaveService} />
      </Accordion>
    </Box>
  );
}
