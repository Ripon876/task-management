import { useState } from "react";
import {
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  Select,
  Box,
  Checkbox,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import useStyles from "./styles";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function Form({ task, index, close }) {
  const { classes } = useStyles();
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const date = new Date(task?.dueDate || "July 12, 2023");
  const formattedDate = date.toDateString();
  const formattedTimezone = date.toLocaleTimeString("en-US", {
    timeZoneName: "short",
  });
  const formattedDateString = `${formattedDate} ${formattedTimezone}`;

  const onSubmit = (data) => {
    dispatch({
      type: "UPDATE_TASK",
      task: { ...task, ...data, ...formData },
      index,
    });
    reset();
    close();
  };

  return (
    <Box>
      <div className={classes.form}>
        <TextInput
          label="Title"
          placeholder="Design Homepage"
          required
          defaultValue={task?.title}
          {...register("title", { required: true })}
          classNames={{ input: classes.input, label: classes.inputLabel }}
        />
        {errors.title && (
          <Text fz="sm" c="red">
            Title is required
          </Text>
        )}
        <div
          style={{
            display: "flex",
            gap: "50px",
            marginTop: "20px",
          }}
        >
          <Select
            label="Assign To"
            placeholder="Pick one"
            data={[
              { value: "John", label: "John" },
              { value: "Sarah", label: "Sarah" },
              { value: "David", label: "David" },
            ]}
            defaultValue={task?.assignedTo}
            onChange={(e) => setFormData({ ...formData, assignedTo: e })}
            w={"50%"}
          />
          <DateInput
            defaultValue={new Date(formattedDateString)}
            label="Due Date"
            placeholder="July 18, 2023"
            w={"50%"}
            onChange={(e) => setFormData({ ...formData, dueDate: e })}
          />
        </div>
        <Textarea
          required
          label="Description"
          placeholder="Create a visually appealing homepage design"
          minRows={4}
          mt="md"
          defaultValue={task?.description}
          {...register("description",{ required: true })}
          classNames={{ input: classes.input, label: classes.inputLabel }}
        />
        {errors.description && (
          <Text fz="sm" c="red">
            Description field is required
          </Text>
        )}
        <Checkbox
          mt={"md"}
          label="Compelted"
          defaultChecked={task?.completed}
          {...register("completed")}
        />
        <Group position="right" mt="md">
          <Button className={classes.control} onClick={handleSubmit(onSubmit)}>
            Update
          </Button>
        </Group>
      </div>
    </Box>
  );
}
