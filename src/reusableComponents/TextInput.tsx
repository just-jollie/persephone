import { TextField } from "@mui/material";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

export interface TextInputProps {
  control: Control<FieldValues, any> | undefined;
  name: string;
  label: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
  required?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  control,
  name,
  label,
  variant = "outlined",
  required = true,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { ref, onBlur, name, onChange, value },
        fieldState: { isTouched, error },
        formState: { defaultValues },
      }) => {
        return (
          <TextField
            label={label}
            variant={variant}
            inputRef={ref}
            helperText={!!error && isTouched && <>This field is required.</>}
            error={!!error && isTouched}
            onBlur={onBlur}
            onChange={onChange}
            name={name}
            value={value}
          />
        );
      }}
      rules={{ required: required }}
    />
  );
};
