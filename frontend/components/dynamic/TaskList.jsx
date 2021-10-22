import {
  Box,
  Button,
  Divider,
  Flex,
  Stack,
  StackDivider,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React from "react";

import { jerryTasks } from "../../data/constants";
import Task from "./Task";

const TaskList = () => (
  <Box as="section" py="12" bg={mode("white", "gray.800")}>
    <Box
      maxW={{
        base: "xl",
        md: "7xl",
      }}
      minW={{
        base: "xl",
        md: "7xl",
      }}
      mx="auto"
      px={{
        md: "8",
      }}
    >
      <Box
        rounded={{
          lg: "lg",
        }}
        bg={mode("white", "gray.700")}
        maxW="3xl"
        mx="auto"
        shadow="base"
        overflow="hidden"
      >
        <Flex align="center" justify="space-between" px="6" py="4">
          <Text as="h3" fontWeight="bold" fontSize="lg">
            Daily Tasks
          </Text>
          <Button colorScheme="blue" minW="20">
            Add task
          </Button>
        </Flex>
        <Divider />
        <Stack spacing="6" py="5" px="8" divider={<StackDivider />}>
          {jerryTasks.map((task, index) => (
            <Task
              key={`task-${index}`}
              taskTitle={task.title}
              checked={task.isChecked}
            >
              {task.desc}
            </Task>
          ))}
          {jerryTasks.length === 0 && <p>No tasks to complete~ 🥳</p>}
        </Stack>
      </Box>
    </Box>
  </Box>
);

export default TaskList;
