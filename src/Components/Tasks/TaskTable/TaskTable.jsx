import { Table, ActionIcon, ScrollArea, Box, Tooltip } from "@mantine/core";
import { IconFileDownload } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import Row from "./Row";
import AddTask from "../AddTask/AddTask";

export default function TaskTable() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const deleteTask = (index) => {
    dispatch({
      type: "DELETE_TASK",
      index,
    });
  };

  return (
    <ScrollArea>
      <Box>
        <Box
          sx={{
            display: "flex",
            maxWidth: "60px",
            marginLeft: "auto",
          }}
        >
          <AddTask />
          <ActionIcon ml={"auto"}>
            <Tooltip label="Export">
              <IconFileDownload color="black" stroke={1.5} />
            </Tooltip>
          </ActionIcon>
        </Box>
      </Box>
      <Table verticalSpacing="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Assigned To</th>
            <th>Due Date</th>
            <th>Completed</th>
            <th>Actions</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task, i) => (
            <Row task={task} index={i} deleteTask={deleteTask} key={i}/>
          ))}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
