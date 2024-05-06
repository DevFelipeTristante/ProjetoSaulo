import Botoes from "../Botoes";
import Campos from "../Campos";
import Slider from "../Slider";
import Titulo from "../Titulo";

function CadastroTelefone() {
  return (
    <div className="bg-gradient-to-r from-black to-green-500 w-screen h-screen">
      <Slider />
      <div className="flex justify-center">
        <div className="bg-neutral-500 w-11/12 h-[500px] mt-8 rounded-lg border-2 border-black">
          <Titulo label="Produtos" />
          <div className="w-full h-[370px]">
            <div className="grid grid-rows-3 grid-cols-4 grid-flow-col gap-x-[45rem]">
              <Campos label="Número: " />
            </div>
          </div>
          <Botoes/>
        </div>
      </div>
    </div>
  );
}

export default CadastroTelefone;
