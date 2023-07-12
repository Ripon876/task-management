import { Table, ActionIcon, ScrollArea, Box, Tooltip } from "@mantine/core";
import { IconFileDownload } from "@tabler/icons-react";
import Row from "./Row";
import { intialData } from "./../../../data/data";
import AddTask from "../AddTask/AddTask";

export default function TaskTable() {
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
          {intialData?.map((task) => (
            <Row task={task} />
          ))}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
