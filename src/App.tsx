import { Box } from "@mui/material";

import { Form } from "./reusableComponents/Form";
import { TextInput } from "./reusableComponents/TextInput";

const arrayOfInputs = [
  {
    inputType: TextInput,
    name: "firstName",
    label: "First Name",
    required: true,
    defaultValue: "Locke",
  },
  {
    inputType: TextInput,
    name: "lastName",
    label: "Last Name",
    required: true,
    defaultValue: "Lamora",
  },
  {
    inputType: TextInput,
    name: "address",
    label: "Address",
    required: false,
    defaultValue: "1337 Gambler Rd",
  },
];

function App() {
  return (
    <Box sx={{ width: "100%", marginTop: 2 }}>
      <Form arrayOfInputs={arrayOfInputs} />
    </Box>
  );
}

export default App;
