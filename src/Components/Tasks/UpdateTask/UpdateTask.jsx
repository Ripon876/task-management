import { useDisclosure } from "@mantine/hooks";
import { Modal, ActionIcon, Tooltip } from "@mantine/core";
import Form from "./Form";
import { IconPencil } from "@tabler/icons-react";

export default function UpdateTask() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Update Task" centered>
        <Form />
      </Modal>
      <ActionIcon onClick={open}>
        <Tooltip label="Edit">
          <IconPencil size="1rem" stroke={1.5} />
        </Tooltip>
      </ActionIcon>
    </>
  );
}
