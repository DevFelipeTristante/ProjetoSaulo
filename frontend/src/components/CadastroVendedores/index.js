import React from "react";
import Slider from "../Slider";
import Titulo from "../Titulo";
import Campos from "../Campos";
import Botoes from "../Botoes";

function CadastroVendedores() {
  return (
    <div className="bg-gradient-to-r from-black to-green-500 w-screen h-screen">
      <Slider />
      <div className="flex justify-center">
        <div className="bg-neutral-500 w-11/12 h-[500px] mt-8 rounded-lg border-2 border-black">
          <Titulo label="Vendedores" />
          <div className="w-full h-[370px]">
            <div className="grid grid-rows-3 grid-cols-4 grid-flow-col h-72">
              <Campos label="Nome: " />
              <Campos label="ID Perfil Usuário: " />
              <Campos label="Comissão: " />
            </div>
          </div>
          <Botoes />
        </div>
      </div>
    </div>
  );
}

export default CadastroVendedores;
