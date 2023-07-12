import { useDisclosure } from "@mantine/hooks";
import { Modal, Text, Title } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import { ActionIcon, Tooltip } from "@mantine/core";

export default function ViewTask({ task }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} centered>
        <Title fz="lg">
          #{task?.id} {task?.title}
        </Title>
        <Text fz="sm">Assigned To: {task.assignedTo}</Text>
        <Text fz="sm">Completed: {task.completed ? "Yes" : "No"}</Text>
        <Text fz="sm">Due Date: {task.dueDate}</Text>
        <Text fz="sm" mb={"md"}>
          Description: {task.description}
        </Text>
      </Modal>

      <ActionIcon onClick={open}>
        <Tooltip label="View">
          <IconEye size="1rem" stroke={1.5} />
        </Tooltip>
      </ActionIcon>
    </>
  );
}
