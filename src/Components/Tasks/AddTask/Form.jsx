import { useState } from "react";
import {
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  Select,
  Box,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import useStyles from "./styles";

export default function Form({ close }) {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { classes } = useStyles();

  const onSubmit = (data) => {
    dispatch({
      type: "ADD_TASK",
      task: { ...data, ...formData },
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
          <div style={{ width: "50%" }}>
            <Select
              label="Assign To"
              placeholder="Pick one"
              data={[
                { value: "John", label: "John" },
                { value: "Sarah", label: "Sarah" },
                { value: "David", label: "David" },
              ]}
              onChange={(e) => setFormData({ ...formData, assignedTo: e })}
            />
          </div>
          <div style={{ width: "50%" }}>
            <DateInput
              name="dueDate"
              label="Due Date"
              placeholder="July 18, 2023"
              onChange={(e) => setFormData({ ...formData, dueDate: e })}
            />
          </div>
        </div>

        <Textarea
          required
          label="Description"
          placeholder="Create a visually appealing homepage design"
          minRows={4}
          mt="md"
          {...register("description")}
          classNames={{ input: classes.input, label: classes.inputLabel }}
        />
        {errors.title && (
          <Text fz="sm" c="red">
            Description field is required
          </Text>
        )}
        <Group position="right" mt="md">
          <Button className={classes.control} onClick={handleSubmit(onSubmit)}>
            Add
          </Button>
        </Group>
      </div>
    </Box>
  );
}
