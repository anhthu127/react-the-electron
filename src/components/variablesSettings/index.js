import { React, useState } from "react";

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";

import { FaPlusCircle, FaTrashAlt, FaTimes } from "react-icons/fa";

import { Container } from "./styles";

export default function VariableSettings() {
  const [message, setMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

  const [variable, setVariable] = useState({ id: "", name: "", unit: "" });
  const [variables, setVariables] = useState([]);

  const handleChange = (e) => {
    setVariable({ ...variable, [e.currentTarget.id]: e.currentTarget.value });
  };

  const addVariable = () => {
    if (isVariableValid()) {
      setVariables((variables) => [...variables, variable].sort(sortVariables));
      setVariable({ id: "", name: "", unit: "" });

      setMessage("Variable created");
      setAlertSeverity("success");
    } else {
      setAlertSeverity("error");
    }
  };

  // since id maybe either integer or string, it'll be nicer to order ir
  const sortVariables = (a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }

    return 0;
  };

  const removeVariable = (id) => {
    setVariables(variables.filter((v) => v.id !== id));

    setMessage("Variable removed");
    setAlertSeverity("success");
  };

  // Verify if all fields are correctly filed and if there is
  // already id being used
  const isVariableValid = () => {
    if (variable.id === "") {
      setMessage("Please insert highlighted variable information");

      return false;
    } else if (variables.filter((v) => v.id === variable.id).length) {
      setMessage("Variable ID already exists");

      return false;
    }

    if (variable.name === "" || variable.unit === "") {
      setMessage("Please insert highlighted variable information");

      return false;
    }

    return true;
  };

  const isToShowMessage = () => {
    if (message === "") {
      return false;
    }

    return true;
  };

  const filterVariables = () => {
    var filteredVariables = variables;

    if (variable.id !== "") {
      filteredVariables = filteredVariables.filter((v) => v.id === variable.id);
    }

    if (variable.name !== "") {
      filteredVariables = filteredVariables.filter((v) =>
        v.name.includes(variable.name)
      );
    }

    return filteredVariables;
  };

  const clearFilter = () => {
    setVariable({ id: "", name: "", unit: "" });

    setAlertSeverity("info");
    setMessage("Query filter cleaned");
  };

  const renderVariables = () => {
    if (!variables.length) {
      return (
        <div className="FootMessage">
          <i>No variables created. Start creating one!</i>
        </div>
      );
    }

    const filteredVariables = filterVariables();

    if (filteredVariables.length) {
      return (
        <div className="TableWrapper">
          <div className="Table">
            <div className="TableHead">
              <div className="TableCell">Id</div>
              <div className="TableCell">Color</div>
              <div className="TableCell">Name</div>
              <div className="TableCell">Unit</div>
              <div className="TableCell">Options</div>
            </div>
            {filteredVariables.map((variable) => (
              <div className="TableRow" key={variable.id}>
                <div className="TableCell">{variable.id}</div>
                <div className="TableCell">Col</div>
                <div className="TableCell">{variable.name}</div>
                <div className="TableCell">{variable.unit}</div>
                <IconButton
                  aria-label="Remove variable"
                  component="span"
                  size="small"
                  onClick={() => removeVariable(variable.id)}
                >
                  <FaTrashAlt />
                </IconButton>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="FootMessage">
          <i onClick={clearFilter}>
            Filter returned no results. Click here to clear filter, or create a
            new variable.
          </i>
        </div>
      );
    }
  };

  return (
    <Container>
      <Collapse in={isToShowMessage()}>
        <Alert
          severity={alertSeverity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setMessage("");
              }}
            >
              <FaTimes fontSize="inherit" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
      <h1>Create or Search Variable</h1>
      <label>
        Create new variable or search existing ones by id or name to
        edit/remove.
      </label>

      <div>
        <TextField
          id="id"
          className="IdField"
          size="small"
          label="Id"
          value={variable.id}
          onChange={handleChange}
          error={alertSeverity === "error" && variable.id === ""}
        />
        <TextField
          id="name"
          className="NameField"
          size="small"
          label="Name"
          value={variable.name}
          onChange={handleChange}
          error={alertSeverity === "error" && variable.name === ""}
        />
        <TextField
          id="unit"
          className="UnitField"
          size="small"
          label="Unit"
          value={variable.unit}
          onChange={handleChange}
          error={alertSeverity === "error" && variable.unit === ""}
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
    </Container>
  );
}
