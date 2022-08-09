import { Button, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function NoWorkspaceView({ caption }) {
  return (
    <VStack my={20} spacing={8}>
      <Image src="/images/spaceholder.png" objectFit="cover" boxSize={126} />
      <Text fontWeight={500} textAlign="center">
        {caption}
      </Text>
      <Link href="/details">
        <Button colorScheme="primary" w={250} size="lg" h="56px">
          Create workspace
        </Button>
      </Link>
    </VStack>
  );
}
