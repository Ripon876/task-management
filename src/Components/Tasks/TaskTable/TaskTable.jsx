import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  ScrollArea,
  useMantineTheme,
  Box,
  Tooltip,
} from "@mantine/core";
import { IconPencil, IconTrash, IconFileDownload } from "@tabler/icons-react";

const data = [
  {
    id: 1,
    title: "Design Homepage",
    description: "Create a visually appealing homepage design",
    dueDate: "2023-07-15",
    assignedTo: "John",
    completed: false,
  },
  {
    id: 2,
    title: "Implement Login Functionality",
    description: "Develop login functionality using React and Firebase",
    dueDate: "2023-07-20",
    assignedTo: "Sarah",
    completed: true,
  },
  {
    id: 3,
    title: "Write API Documentation",
    description: "Create clear and concise documentation for the API endpoints",
    dueDate: "2023-07-18",
    assignedTo: "David",
    completed: false,
  },
];

const jobColors = {
  engineer: "blue",
  manager: "cyan",
  designer: "pink",
};

export default function TaskTable() {
  const theme = useMantineTheme();
  const rows = data.map((item) => (
    <tr key={item.id}>
      <td>
        <Text fz="sm" c="dimmed">
          {item.id}
        </Text>
      </td>
      <td>
        <Text fz="sm" c="dimmed">
          {item.title}
        </Text>
      </td>
      <td>
        <Text fz="sm" c="dimmed">
          {item.description?.substring(0, 30)}...
        </Text>
      </td>
      <td>
        <Text fz="sm" c="dimmed">
          {item.assignedTo}
        </Text>
      </td>
      <td>
        <Text fz="sm" c="dimmed">
          {item.dueDate}
        </Text>
      </td>
      <td>
        <Text fz="sm" c="dimmed">
          {item.completed ? "Yes" : "No"}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <IconPencil size="1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon color="red">
            <IconTrash size="1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Box sx={{ minWidth: 800 }} mr={"xl"}>
        <ActionIcon ml={"auto"}>
          <Tooltip label="Export">
            <IconFileDownload color="black" stroke={1.5} />
          </Tooltip>
        </ActionIcon>
      </Box>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
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
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
