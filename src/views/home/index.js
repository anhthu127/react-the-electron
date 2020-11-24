import { React, useState } from "react";

import { Content } from "./styles";

import Modal from "../../components/modal";
import SerialSettings from "../../components/serialSettings";
import VariablesSettings from "../../components/variablesSettings";

import Universe from "../../assets/icons/universe.png";
import Launch from "../../assets/icons/launch.png";
import Chart from "../../assets/icons/line-chart.png";

export default function Home() {
  const [showDashboardOption, setShowDashboardOption] = useState(true);
  const [showVariableSettings, setShowVariableSettings] = useState(false);

  const handleOpenVariables = () => {
    setShowVariableSettings(true);
  };

  const handleCloseVariables = () => {
    setShowVariableSettings(false);
  };

  return (
    <Content>
      <div className="Table">
        <div className="Cell">
          <SerialSettings />
        </div>
        <div className="Cell" onClick={handleOpenVariables}>
          <img src={Universe} alt="Variables" />
          <h2>Manage Variables</h2>
          <label>
            {15} variables inserted <br />
            Click here to create, update and remove variables
          </label>
        </div>

        {showDashboardOption && (
          <div className="Cell">
            <img src={Chart} alt="Configure Dashboard" />
            <h2> Dashboard Dashboard</h2>
            <label>
              All set! <br /> Click here to create new dashboard
            </label>
          </div>
        )}
      </div>
      <hr />
      <div className="LoadDashboard">
        <h2>Launch Existing Setup</h2>
        <img src={Launch} alt="Load Dashboard" />
      </div>

      <Modal
        component={VariablesSettings}
        handleClose={handleCloseVariables}
        open={showVariableSettings}
      />
    </Content>
  );
}
