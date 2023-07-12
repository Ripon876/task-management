import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import Form from "./Form";
import { IconPlus } from "@tabler/icons-react";
import { Table, ActionIcon, ScrollArea, Box, Tooltip } from "@mantine/core";

export default function AddTask() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add New Task" centered>
        <Form />
      </Modal>

      <ActionIcon ml={"auto"} onClick={open}>
        <Tooltip label="Add New Task">
          <IconPlus color="black" stroke={1.5} />
        </Tooltip>
      </ActionIcon>
    </>
  );
}
