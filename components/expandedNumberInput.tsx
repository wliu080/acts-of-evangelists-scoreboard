import { useState, useRef } from "react";
import { NumberInput, Group, NumberInputHandlers, ActionIcon, Stack } from "@mantine/core";

export interface ExpandedNumberInputProps {
  defaultValue: number;
}

const ExpandedNumberInput = ({ defaultValue }: ExpandedNumberInputProps): React.ReactElement => {
  const [value, setValue] = useState(defaultValue ? defaultValue : 0);

  const decrement = (decr: number): void => {
    if (value - decr < 0) {
      setValue(0);
    } else {
      setValue(value - decr);
    }
  };

  return (
    <Group spacing={5}>
      <NumberInput
        hideControls
        value={value}
        onChange={(val) => {
          if (val) {
            setValue(val);
          }
        }}
        styles={{ input: { width: 54, textAlign: "center" } }}
      />

      <Stack spacing={0}>
        <ActionIcon size={24} variant="default" onClick={() => setValue(value + 1)}>
          +
        </ActionIcon>
        <ActionIcon size={24} variant="default" onClick={() => decrement(1)}>
          –
        </ActionIcon>
      </Stack>
      <Stack spacing={0}>
        <ActionIcon size={24} variant="default" onClick={() => setValue(value + 5)}>
          +5
        </ActionIcon>
        <ActionIcon size={24} variant="default" onClick={() => decrement(5)}>
          –5
        </ActionIcon>
      </Stack>
    </Group>
  );
};

export { ExpandedNumberInput };
