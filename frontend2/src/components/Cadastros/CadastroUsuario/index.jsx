import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";

const options = ["Option 1", "Option 2"];

export default function CadastroUsuario() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="CADASTRO DE USUÁRIO" />
      <div className="flex justify-center items-center mt-14  ">
        {/* Formulario */}
        <form action="" className="flex flex-col gap-4 w-96">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome_usuario" className="text-white font-bold">
              NOME:
            </Label>
            <Input
              type="text"
              id="nome_usuario"
              placeholder="Escreva o nome do usuário"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="senha" className="text-white font-bold">
              Senha:
            </Label>
            <Input
              type="text"
              id="senha"
              placeholder="Escreva o nome do usuário"
            />
          </div>
          {/* Autocomplete do perfil */}
          <div> 
            <label className="text-white font-bold">
              Perfil:{" "}
              <Autocomplete
                id="id_perfil"
                options={options}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                    <input
                      type="text"
                      {...params.inputProps}
                      className="flex h-10 w-full rounded-md border border-neutral-200
                    bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium placeholder:text-neutral-500 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                     dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                      dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                      text-black mt-1 font-normal font-sm"
                      placeholder="Selecione o perfil"
                    />
                  </div>
                )}
              />
            </label>
          </div>
          {/* Valor da comissao */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              COMISSÃO:
            </Label>
            <Input
              type="text"
              id="cidade"
              placeholder="Escreva o valor da comissão"
            />
          </div>
          {/* Autocomplete da empresa */}
          <div> 
            <label className="text-white font-bold">
              EMPRESA:{" "}
              <Autocomplete
                id="id_empresa"
                options={options}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                    <input
                      type="text"
                      {...params.inputProps}
                      className="flex h-10 w-full rounded-md border border-neutral-200
                    bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium placeholder:text-neutral-500 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                     dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                      dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                      text-black mt-1 font-normal font-sm"
                      placeholder="Selecione a empresa"
                    />
                  </div>
                )}
              />
            </label>
          </div>
          {/* botao */}
          <div className="flex justify-center">
            <button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
