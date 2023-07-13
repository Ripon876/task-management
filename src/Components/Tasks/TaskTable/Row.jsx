import React from "react";
import { Group, Text, ActionIcon, Tooltip } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import UpdateTask from "../UpdateTask/UpdateTask";
import ViewTask from "../ViewTask/ViewTask";

const Row = ({ task, deleteTask, index }) => {
  const dateString = task?.dueDate;
  const targetDate = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Compare the target date with the current date
  const hasExpired = targetDate.getTime() < currentDate.getTime();

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
          <ViewTask task={task} />
          <UpdateTask task={task} index={index} />
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
