import { useState } from "react";

import { SerialContainer } from "./styles";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import Antenna from "../../assets/icons/antenna.png";

export default function SerialSettings() {
  const [advanced, setAdvanced] = useState(false);

  const [settings, setSettings] = useState({
    stop_bits: 1,
    baudrate: 115200,
    data_bits: 8,
    parity: "odd",
  });

  const comPorts = ["COM1", "COM2", "COM3"];

  const handleChange = (e) => {
    setSettings({ ...settings, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleAdvancedOptions = () => {
    setAdvanced(!advanced);
  };

  return (
    <SerialContainer>
      <img src={Antenna} alt="Configure Communication" />
      <h2>Serial Settings</h2>
      <form>
        <div>
          <label>Baudrate: </label>
          <TextField
            id="baudrate"
            size="small"
            type="number"
            min="0"
            value={settings.baudrate}
            onChange={handleChange}
            InputProps={{ disableUnderline: true, min: 0 }}
            className="Baudrate"
          />
        </div>
        <div>
          <label>Port: </label>
          <TextField
            id="port"
            select
            size="small"
            onChange={handleChange}
            InputProps={{ disableUnderline: true }}
          >
            {comPorts.map((comPort) => (
              <MenuItem key={comPort} value={comPort}>
                {comPort}
              </MenuItem>
            ))}
          </TextField>
        </div>

        {advanced && (
          <div>
            <div>
              <label>Stop Bits: </label>
              <TextField
                id="stop_bits"
                size="small"
                type="number"
                value={settings.stop_bits}
                onChange={handleChange}
                InputProps={{ disableUnderline: true, min: 0, max: 1 }}
              />
            </div>
            <div>
              <label>Data bits: </label>
              <TextField
                id="data_bits"
                size="small"
                type="number"
                value={settings.data_bits}
                onChange={handleChange}
                InputProps={{ disableUnderline: true, min: 5, max: 8 }}
              />
            </div>
            <div>
              <label>Parity: </label>
              <TextField
                id="parity"
                select
                size="small"
                onChange={handleChange}
                InputProps={{ disableUnderline: true }}
              >
                <MenuItem key="odd" value={"odd"}>
                  odd
                </MenuItem>
                <MenuItem key="even" value={"even"}>
                  even
                </MenuItem>
              </TextField>
            </div>
          </div>
        )}

        <label className="AdvancedOptions" onClick={handleAdvancedOptions}>
          {advanced ? "Hide" : "Show"} advanced options
        </label>
      </form>
    </SerialContainer>
  );
}
