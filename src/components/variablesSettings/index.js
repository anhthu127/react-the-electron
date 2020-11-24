import { React, useState } from "react";

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

import { FaPlusCircle } from "react-icons/fa";

export default function VariableSettings() {
  const [variable, setVariable] = useState({});
  const [variables, setVariables] = useState({});

  const handleChange = (e) => {
    setVariable({ ...variable, [e.currentTarget.id]: e.currentTarget.value });
  };

  const addVariable = () => {
    console.log(variable);
  };

  return (
    <div>
      <div>
        <TextField
          id="id"
          size="small"
          label="Variable id"
          value={variable.id}
          onChange={handleChange}
        />
        <TextField
          id="name"
          size="small"
          label="Name"
          value={variable.name}
          onChange={handleChange}
        />
        <TextField
          id="units"
          size="small"
          label="Units"
          value={variable.units}
          onChange={handleChange}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={addVariable}
        >
          <FaPlusCircle />
        </IconButton>
      </div>
    </div>
  );
}
