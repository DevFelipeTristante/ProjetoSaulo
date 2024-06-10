import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import {
  faBoxesStacked,
  faHandHoldingDollar,
  faPercent,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

import { Navigate, useNavigate } from "react-router-dom";

export default function Relatorio() {
  const navigate = useNavigate();

  const irContasReceber = () => {
    navigate("/ContasReceber");
  };
  const irMaisVendidos = () => {
    navigate("/MaisVendidos");
  };
  const irPorEmpresa = () => {
    navigate("/MaisVendidosEmpresa");
  };
  const irEstoque = () => {
    navigate("/MovimentacaoEstoque");
  };
  const irComissao = () => {
    navigate("/Comissoes");
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="RELATÓRIOS" />
      <div className="flex justify-center items-center">
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* contas a receber */}
          <div className="bg-white p-4 flex flex-col items-center rounded-lg cursor-pointer" onClick={irContasReceber}>
            <FontAwesomeIcon icon={faSackDollar} className="h-16 md:h-24" />
            <label className="font-bold font-sans text-lg md:text-xl mt-2">
              CONTAS A RECEBER
            </label>
          </div>
          {/* mais vendidos */}
          <div className="bg-white p-4 flex flex-col items-center rounded-lg cursor-pointer" onClick={irMaisVendidos}>
            <FontAwesomeIcon icon={faHandHoldingDollar} className="h-16 md:h-24" />
            <label className="font-bold font-sans text-lg md:text-xl mt-2">
              MAIS VENDIDOS
            </label>
          </div>
          {/* mais vendidos por empresa */}
          <div className="bg-white p-4 flex flex-col items-center rounded-lg cursor-pointer" onClick={irPorEmpresa}>
            <FontAwesomeIcon icon={faBuilding} className="h-16 md:h-24" />
            <label className="font-bold font-sans text-lg md:text-xl mt-2">
              MAIS VENDIDOS POR EMPRESA
            </label>
          </div>
          {/* movimentação de estoque */}
          <div className="bg-white p-4 flex flex-col items-center rounded-lg cursor-pointer" onClick={irEstoque}>
            <FontAwesomeIcon icon={faBoxesStacked} className="h-16 md:h-24" />
            <label className="font-bold font-sans text-lg md:text-xl mt-2">
              MOVIMENTAÇÃO DE ESTOQUE
            </label>
          </div>
          {/* comissão */}
          <div className="bg-white p-4 flex flex-col items-center rounded-lg cursor-pointer" onClick={irComissao}>
            <FontAwesomeIcon icon={faPercent} className="h-16 md:h-24" />
            <label className="font-bold font-sans text-lg md:text-xl mt-2">
              COMISSÃO
            </label>
          </div>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
