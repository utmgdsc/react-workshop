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

import Task from "./Task";

const TaskList = () => (
  <Box as="section">
    <Box>
      <Box bg={mode("white", "gray.700")} shadow="base">
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
          <Task taskTitle="CSC300 A2" checked={false}>
            Read article on facial recognition, take notes on lectures, and
            write responses!
          </Task>
          <Task taskTitle="Present an awesome react workshop" checked={false}>
            Overhaul react workshop from last year to cover more intricate React
            material
          </Task>
          <Task taskTitle="Listen to DONDA" checked={false}>
            Need a wake me up after hearing CLB
          </Task>
          <Task taskTitle="Buy Halloween costume" checked={false}>
            Squid game?
          </Task>
        </Stack>
      </Box>
    </Box>
  </Box>
);

export default TaskList;
