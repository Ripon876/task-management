import React from "react";
import { Group, Text, ActionIcon, Tooltip } from "@mantine/core";
import { IconTrash, IconEye } from "@tabler/icons-react";
import UpdateTask from "../UpdateTask/UpdateTask";
import ViewTask from "../../ViewTask/ViewTask";

const Row = ({ task, deleteTask, index }) => {
  return (
    <tr key={task.id}>
      <td>
        <Text fz="sm" c="dimmed">
          {task.id}
        </Text>
      </td>
      <td>
        <Text fz="sm" c="dimmed">
          {task.title?.substring(0, 30)}...
        </Text>
      </td>
      <td>
        <Text fz="sm" c="dimmed">
          {task.description?.substring(0, 30)}...
        </Text>
      </td>
      <td>
        <Text fz="sm" c="dimmed">
          {task.assignedTo}
        </Text>
      </td>
      <td>
        <Text fz="sm" c="dimmed">
          {task.dueDate}
        </Text>
      </td>
      <td
        style={{
          textAlign: "center",
        }}
      >
        <Text fz="sm" c="dimmed">
          {task.completed ? "Yes" : "No"}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ViewTask task={task}/>

          <UpdateTask />
          <ActionIcon color="red" onClick={() => deleteTask(index)}>
            <Tooltip label="Delete">
              <IconTrash size="1rem" stroke={1.5} />
            </Tooltip>
          </ActionIcon>
        </Group>
      </td>
    </tr>
  );
};

export default Row;
