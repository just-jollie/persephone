import { TextField } from "@mui/material";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

export interface TextInputProps {
  control: Control<FieldValues, any> | undefined;
  name: string;
  label: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
  required?: boolean;
  error: boolean;
  random: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  control,
  name,
  label,
  variant = "outlined",
  required = "This field is required.",
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      render={({ field: { ref, onBlur, name, onChange, value }, fieldState: { error } }) => {
        return (
          <TextField
            label={label}
            variant={variant}
            inputRef={ref}
            helperText={!!error && error?.message}
            error={!!error}
            onBlur={onBlur}
            onChange={onChange}
            name={name}
            value={value}
          />
        );
      }}
    />
  );
};
