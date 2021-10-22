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
import React from "react";
import { HiTrash } from "react-icons/hi";

const Task = ({ taskTitle, checked, children }) => {
  const badgeInfo = checked
    ? { color: "green", text: "Complete" }
    : { color: "yellow", text: "In Progress" };

  return (
    <Box position="relative">
      <HStack
        fontSize="sm"
        fontWeight="bold"
        maxW="xl"
        color={mode("gray.500", "white")}
        mt="1"
      >
        <Checkbox isChecked={checked} />
        <Editable value={taskTitle}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </HStack>
      <Badge colorScheme={badgeInfo.color}>{badgeInfo.text}</Badge>
      <Box mt="3" maxW="xl" color={mode("gray.600", "gray.200")}>
        <Editable value={children}>
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

export default Task;
