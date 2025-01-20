"use client";
import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const ChatTemplate = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minH="100vh"
      bg={useColorModeValue("gray.50", "gray.800")}
      position="relative"
      p={8}
    >
      test
    </Box>
  );
};

export default function Top() {
  return <ChatTemplate />;
}
