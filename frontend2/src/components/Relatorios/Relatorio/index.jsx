import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";

export default function Relatorio() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="RELATÓRIOS" />
      <div className="flex justify-center items-center mt-4">
        <div className="w-11/12 h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center"></div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
