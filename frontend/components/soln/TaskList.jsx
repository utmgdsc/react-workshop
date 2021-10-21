import {
  Button,
  Box,
  Divider,
  Flex,
  Stack,
  StackDivider,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { Task } from "./Task";

const jerryTasks = [
  {
    title: "CSC300 A2",
    desc:
      "Read article on facial recognition, take notes on lectures, and write responses!",
    isChecked: false,
  },
  {
    title: "Present an awesome react workshop",
    desc:
      "Overhaul react workshop from last year to cover more intricate React material",
    isChecked: false,
  },
];

export const TaskList = () => {
  const [tasks, setTasks] = useState(jerryTasks);

  const handleAddTask = () => {
    setTasks([...tasks, { title: "To do", desc: "...", isChecked: false }]);
  };

  const handleDeleteTask = (index) => {
    setTasks((oldTasks) => oldTasks.slice(0, index).concat(oldTasks.slice(index + 1)));
  };

  return (
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
            <Button colorScheme="blue" minW="20" onClick={handleAddTask}>
              Add task
            </Button>
          </Flex>
          <Divider />
          <Stack spacing="6" py="5" px="8" divider={<StackDivider />}>
            {tasks &&
              tasks.map((task, index) => (
                <Task
                  key={`task-${task.title}`}
                  taskTitle={task.title}
                  checked={task.isChecked}
                  index={index}
                  handleDeleteTask={handleDeleteTask}
                >
                  {task.desc}
                </Task>
              ))}
              {tasks.length === 0 && <p>No tasks to complete~ 🥳</p>}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
