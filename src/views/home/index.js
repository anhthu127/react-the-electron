import { React, useState } from "react";

import { Content } from "./styles";

import Modal from "../../components/modal";
import SerialSettings from "../../components/serialSettings";
import VariablesSettings from "../../components/variablesSettings";
import DashboardLayout from "../../components/dashboardLayout";

import Universe from "../../assets/icons/universe.png";
import Launch from "../../assets/icons/launch.png";
import Chart from "../../assets/icons/line-chart.png";

export default function Home() {
  const [showDashboardOption, setShowDashboardOption] = useState(true);
  const [showVariableSettings, setShowVariableSettings] = useState(false);
  const [showDashboardSelect, setShowDashboardSelect] = useState(false);

  const handleOpenVariables = () => {
    setShowVariableSettings(true);
  };

  const handleCloseVariables = () => {
    setShowVariableSettings(false);
  };

  const handleOpenDashboard = () => {
    setShowDashboardSelect(true);
  };

  const handleCloseDashboard = () => {
    setShowDashboardSelect(false);
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
          <div className="Cell" onClick={handleOpenDashboard}>
            <img src={Chart} alt="Configure Dashboard" />
            <h2>Select Dashboard</h2>
            <label>
              All set! <br /> Click here to select dashboard layout
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

      <Modal
        component={DashboardLayout}
        handleClose={handleCloseDashboard}
        open={showDashboardSelect}
      />
    </Content>
  );
}
