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
import React, { useEffect, useState } from "react";

import Task from "./Task";

const TaskList = ({ tasksList }) => {
  const [tasks, setTasks] = useState(tasksList);

  useEffect(() => {
    setTasks(tasksList);
  }, [tasksList]);

  const handleAddTask = () => {
    const newTask = { title: "To do", description: "...", isChecked: false };
    fetch("http://localhost:3001/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    }).then(() => setTasks([...tasks, newTask]));
  };

  const handleEditTask = (index, task) => {
    console.log(task);
    fetch(`http://localhost:3001/api/todo/${task.todoId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: task.title,
        desc: task.desc,
        isChecked: task.isChecked,
      }),
    }).then(() =>
      setTasks((oldTasks) =>
        oldTasks
          .slice(0, index)
          .concat(task)
          .concat(oldTasks.slice(index + 1))
      )
    );
  };

  const handleDeleteTask = (id, index) => {
    fetch(`http://localhost:3001/api/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() =>
      setTasks((oldTasks) =>
        oldTasks.slice(0, index).concat(oldTasks.slice(index + 1))
      )
    );
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
                  todoId={task.todoid}
                  taskTitle={task.title}
                  checked={task.ischecked}
                  index={index}
                  handleEditTask={handleEditTask}
                  handleDeleteTask={handleDeleteTask}
                >
                  {task.description}
                </Task>
              ))}
            {tasks.length === 0 && <p>No tasks to complete~ 🥳</p>}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskList;
