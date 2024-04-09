import React from "react"; 
import Slider from "../Slider"; 
import Campos from "../Campos"; 
import Botoes from "../Botoes";
import Titulo from "../Titulo";

function CadastroFornecedor() { 
  return ( 
    // Backgroud do sistema
    <div className="bg-gradient-to-r from-black to-green-500 w-screen h-screen">
      <Slider />
      {/* Area de cadastro */}
      <div className="flex justify-center">
        <div
          className="bg-lime-800 w-11/12 h-[500px] mt-8 rounded-lg border-2 border-black"
        >
          <Titulo label="Forncedor"/>
          {/* Campos de cadastro */}
          <div className="flex w-full h-[370px]">
            <div className="grid grid-rows-3 grid-flow-col">
              <Campos label="Nome: " />
              <Campos label="Cidade: " />
              <Campos label="Cliente: " />
            </div>
          </div>
          {/* Botões */}
          <Botoes/>
        </div>
      </div>
    </div>
); } export default CadastroFornecedor;
