import { React, useState } from "react";

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

export default function VariableSettings() {
  const [variable, setVariable] = useState({ id: "", name: "", units: "" });
  const [variables, setVariables] = useState([]);

  const handleChange = (e) => {
    setVariable({ ...variable, [e.currentTarget.id]: e.currentTarget.value });
  };

  const addVariable = () => {
    console.log(variable, variables);
    setVariables((variables) => [...variables, variable]);
    setVariable({ id: "", name: "", units: "" });
    console.log(variable, variables);
  };

  const renderVariables = () => {
    if (variables.length) {
      return (
        <div>
          <hr />
          {variables.map((variable) => (
            <div key={variable.id}>
              {variable.id} {variable.name} [{variable.units}]
              <IconButton
                color="secondary"
                aria-label="Remove variable"
                component="span"
                size="small"
              >
                <FaMinusCircle />
              </IconButton>
            </div>
          ))}
        </div>
      );
    }
    return;
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
          aria-label="Add variable"
          component="span"
          onClick={addVariable}
        >
          <FaPlusCircle />
        </IconButton>
      </div>

      {renderVariables()}
    </div>
  );
}
