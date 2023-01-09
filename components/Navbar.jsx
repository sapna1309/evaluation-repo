import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <HStack spacing={10} bg={"black"} color={"white"}>
      <Link href="/">
        {" "}
        <Text
          padding={5}
          fontWeight={"semibold"}
          fontSize={"xl"}
          _hover={{
            textDecoration: "underline",
            cursor: "pointer",
            color: "teal.300",
          }}
        >
          Sapna Sharma
        </Text>{" "}
      </Link>
      <Link href="/projects">
        {" "}
        <Text
          padding={5}
          fontWeight={"semibold"}
          fontSize={"xl"}
          _hover={{
            textDecoration: "underline",
            cursor: "pointer",
            color: "teal.300",
          }}
        >
          Projects
        </Text>{" "}
      </Link>
    </HStack>
  );
};

export default Navbar;
