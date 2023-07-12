import React from "react"; 
import { Box, Container } from "@mantine/core";
import TaskTable from "./TaskTable/TaskTable";
import AddTask from "./AddTask/AddTask";

const Tasks = () => {
  return (
    <Container
      size={"md"}
      py={"50px"}
      display={"flex"}
      sx={{
        justifyContent: "center",
      }}
    >
      <Box>
        <AddTask />
        <TaskTable />
      </Box>
    </Container>
  );
};

export default Tasks;
