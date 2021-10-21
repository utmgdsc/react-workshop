import {
  Badge,
  Box,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  IconButton,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { HiTrash } from "react-icons/hi";

export const Task = ({ title, children }) => {
  return (
    <Box position="relative">
      <HStack
        fontSize="sm"
        fontWeight="bold"
        maxW="xl"
        color={mode("gray.500", "white")}
        mt="1"
      >
        <Checkbox defaultIsChecked />
        <Editable defaultValue={title}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </HStack>
      <Badge>Default</Badge>
      <Box mt="3" maxW="xl" color={mode("gray.600", "gray.200")}>
        <Editable defaultValue={children}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Box>
      <HStack
        position={{
          sm: "absolute",
        }}
        top={{
          sm: "0",
        }}
        insetEnd={{
          sm: "0",
        }}
        mt={{
          base: "4",
          sm: "0",
        }}
      >
        <IconButton
          aria-label="Delete"
          icon={<HiTrash />}
          rounded="full"
          size="sm"
        />
      </HStack>
    </Box>
  );
};
