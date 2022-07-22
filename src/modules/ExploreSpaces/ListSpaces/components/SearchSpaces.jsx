import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchSpaces({ value, onChange }) {
  return (
    <InputGroup size="lg" w={["full", "full", 224]}>
      <InputLeftElement
        pointerEvents="none"
        children={<AiOutlineSearch color="gray.300" />}
      />
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        bg="white"
        rounded="full"
        placeholder="Search"
      />
    </InputGroup>
  );
}
