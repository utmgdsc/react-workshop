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
import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";

const Task = ({
  index,
  todoId,
  taskTitle,
  checked,
  children,
  handleEditTask,
  handleDeleteTask,
}) => {
  const [title, setTitle] = useState(taskTitle);
  const [desc, setDesc] = useState(children);
  const [isChecked, setIsChecked] = useState(checked);

  const badgeInfo = isChecked
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
        <Checkbox
          isChecked={isChecked}
          onChange={() => {
            const newIsChecked = !isChecked;
            setIsChecked(newIsChecked);
            handleEditTask(index, {
              todoId,
              title,
              desc,
              isChecked: newIsChecked,
            });
          }}
        />
        <Editable
          value={title}
          onChange={(v) => {
            setTitle(v);
          }}
          onSubmit={() => {
            handleEditTask(index, { todoId, title, desc, isChecked });
          }}
        >
          <EditablePreview />
          <EditableInput />
        </Editable>
      </HStack>
      <Badge colorScheme={badgeInfo.color}>{badgeInfo.text}</Badge>
      <Box mt="3" maxW="xl" color={mode("gray.600", "gray.200")}>
        <Editable
          value={desc}
          onChange={(v) => {
            setDesc(v);
          }}
          onSubmit={() => {
            handleEditTask(index, { todoId, title, desc, isChecked });
          }}
        >
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
          onClick={() => handleDeleteTask(todoId, index)}
        />
      </HStack>
    </Box>
  );
};

export default Task;
