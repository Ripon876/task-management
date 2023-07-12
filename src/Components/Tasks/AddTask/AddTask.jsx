import { useState } from "react";
import {
  createStyles,
  Title,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
  Select,
  Box,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
    marginBottom: "100px",
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export default function AddTask() {
  const [value, setValue] = useState(null);
  const { classes } = useStyles();

  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <Box>
      <Title fz={"xl"}>Add New Task</Title>
      <div className={classes.form}>
        <TextInput
          label="Title"
          placeholder="Design Homepage"
          required
          classNames={{ input: classes.input, label: classes.inputLabel }}
        />

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
              { value: "react", label: "React" },
              { value: "ng", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "vue", label: "Vue" },
            ]}
            w={"50%"}
          />
          <DateInput
            value={value}
            onChange={setValue}
            label="Due Date"
            placeholder="July 18, 2023"
            w={"50%"}
          />
        </div>

        <Textarea
          required
          label="Description"
          placeholder="Create a visually appealing homepage design"
          minRows={4}
          mt="md"
          classNames={{ input: classes.input, label: classes.inputLabel }}
        />

        <Group position="right" mt="md">
          <Button className={classes.control}>Add</Button>
        </Group>
      </div>
    </Box>
  );
}
