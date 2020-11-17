import { HomeContainer } from "./styles";

import Universo from "../../assets/icons/universo.png";
import Launch from "../../assets/icons/lancamento.png";
import Antenna from "../../assets/icons/antena.png";
import Chart from "../../assets/icons/line-chart.png";

export default function Home() {
  return (
    <HomeContainer>
      <div className="Table">
        <div className="Cell">
          <div>Config Serial</div>
          <img src={Antenna} alt="Configure Communication" />
        </div>
        <div className="Cell">
          <div>Configurar Variáveis</div>
          <div>
            <img src={Universo} alt="Configurar variáveis" />
          </div>
        </div>
        <div className="Cell">
          <div>Configurar Layout</div>
          <img src={Chart} alt="Configure Layout" />
        </div>
      </div>
      <hr />
      <div>
        <div>Carregar layout</div>
        <img src={Launch} alt="Carregar Layout" />
      </div>
    </HomeContainer>
  );
}
