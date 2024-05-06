import Slider from "../Slider";
import Campos from "../Campos";
import Titulo from "../Titulo";
import Botoes from "../Botoes";

function CadastroCategoria() {
  return (
    <div className="bg-gradient-to-r from-black to-green-500 w-screen h-screen">
      <Slider />
      <div className="flex justify-center">
        <div className="bg-neutral-500 w-11/12 h-[500px] mt-8 rounded-lg border-2 border-black">
          <Titulo label="Cidade" />
          <div className="w-full h-[370px]">
            <div className="grid grid-rows-3 grid-cols-4 grid-flow-col gap-x-[45rem]">
              <Campos label="Categoria: " />
            </div>
          </div>
          <Botoes />
        </div>
      </div>
    </div>
  );
}

export default CadastroCategoria;
