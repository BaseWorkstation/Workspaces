import { Box } from "@chakra-ui/react";
import React from "react";

export default function UploadImage({ uploadImageFile }) {
  return (
    <Box
      as="input"
      zIndex={5}
      opacity={0}
      w="full"
      h="full"
      pos="absolute"
      top={0}
      cursor="pointer"
      type="file"
      onChange={uploadImageFile}
      accept="image/jpeg, image/png, image/jpg"
    />
  );
}
