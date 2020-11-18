import { useState } from "react";

import { SerialContainer } from "./styles";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import Antenna from "../../assets/icons/antena.png";

export default function SerialSettings() {
  const [settings, setSettings] = useState({
    stop_bits: 1,
    baudrate: 115200,
    databits: 8,
    parity: "odd",
  });

  const comPorts = ["COM1", "COM2", "COM3"];

  return (
    <SerialContainer>
      <form>
        <div>Serial Settings</div>
        <img src={Antenna} alt="Configure Communication" />
        <div>
          <label>Stop Bits: </label>
          <TextField
            id="stop_bits"
            size="small"
            type="number"
            min="0"
            max="1"
            value={settings.stop_bits}
          />
        </div>
        <div>
          <label>Baudrate: </label>
          <TextField
            id="baudrate"
            size="small"
            type="number"
            min="0"
            value={settings.baudrate}
          />
        </div>
        <div>
          <label>Data bits: </label>
          <TextField
            id="databits"
            size="small"
            type="number"
            min="5"
            max="8"
            value={settings.databits}
          />
        </div>
        <div>
          <label>Parity: </label>
          <TextField id="parity" select size="small">
            <MenuItem key="odd" value={"odd"}>
              odd
            </MenuItem>
            <MenuItem key="even" value={"even"}>
              even
            </MenuItem>
          </TextField>
        </div>
        <div>
          <label>Port: </label>
          <TextField id="port" select size="small">
            {comPorts.map((comPort) => (
              <MenuItem key={comPort} value={comPort}>
                {comPort}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </form>
    </SerialContainer>
  );
}
