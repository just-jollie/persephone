import { Box, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { ReactElement } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormProps {
  arrayOfInputs: any[];
}

export const Form: React.FC<FormProps> = ({ arrayOfInputs }) => {
  const defaultValues: any = {};
  arrayOfInputs.map((input) => (defaultValues[input.name] = input.defaultValue));
  const { control, handleSubmit } = useForm<FieldValues, any>({ defaultValues });
  return (
    <Box sx={{ width: "100%", maxWidth: "500px", margin: "0 auto", marginTop: 2 }}>
      <Box component="form" onSubmit={handleSubmit((values) => console.log(values))}>
        <Stack spacing={2}>
          {arrayOfInputs.map((input): ReactElement<any, any> => {
            const Input = input.inputType;
            return (
              <Input
                name={input.name}
                label={input.label}
                control={control}
                required={input.required}
                key={input.name}
                error={input.error}
              />
            );
          })}
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
