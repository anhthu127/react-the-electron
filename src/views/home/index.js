import { useState } from "react";

import { Content } from "./styles";

import SerialSettings from "../../components/serial";

import Universe from "../../assets/icons/universe.png";
import Launch from "../../assets/icons/launch.png";
import Chart from "../../assets/icons/line-chart.png";

export default function Home() {
  const [showCustomizeDashboard, setShowCustomizeDashboard] = useState(true);

  return (
    <Content>
      <div className="Table">
        <div className="Cell">
          <SerialSettings />
        </div>
        <div className="Cell">
          <img src={Universe} alt="Variables" />
          <h2>Manage Variables</h2>
          <label>
            {15} variables inserted <br />
            Click here to create, update and remove variables
          </label>
        </div>

        {showCustomizeDashboard && (
          <div className="Cell">
            <img src={Chart} alt="Configure Dashboard" />
            <h2>Customize Dashboard Dashboard</h2>
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
    </Content>
  );
}
