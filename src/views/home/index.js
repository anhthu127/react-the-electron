import { HomeContainer } from "./styles";

import SerialSettings from "../../components/serial";

import Universo from "../../assets/icons/universo.png";
import Launch from "../../assets/icons/lancamento.png";
import Chart from "../../assets/icons/line-chart.png";

export default function Home() {
  return (
    <HomeContainer>
      <div className="Table">
        <div className="Cell">
          <SerialSettings />
        </div>
        <div className="Cell">
          <div>Variables</div>
          <div>
            <img src={Universo} alt="Variables" />
          </div>
        </div>
        <div className="Cell">
          <div>Customize Layout</div>
          <img src={Chart} alt="Configure Layout" />
        </div>
      </div>
      <hr />
      <div>
        <img src={Launch} alt="Load Layout" />
        Load Layout
      </div>
    </HomeContainer>
  );
}
