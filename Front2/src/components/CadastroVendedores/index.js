import React from "react";
import Slider from "../Slider";
import Titulo from "../Titulo";

function CadastroVendedores() {
  return (
    <div className="bg-gradient-to-r from-black to-green-500 w-screen h-screen">
      <Slider />
      <div className="flex justify-center">
        <div className="bg-lime-800 w-11/12 h-[500px] mt-8 rounded-lg border-2 border-black px-4 py-4">
          <Titulo label="Vendedor" />
        </div>
      </div>
    </div>
  );
}

export default CadastroVendedores;
