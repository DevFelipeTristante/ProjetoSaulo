import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { getAllProdutos, resetMessage } from "../../../slices/produtoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllTabelas, insertTabela } from "../../../slices/tabelaSlice";
import Message from "../../Message/Message";

export default function TabelaPreco() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.usuario);
  const {
    loading: loadingTabela,
    message,
    error,
  } = useSelector((state) => state.tabela);

  useEffect(() => {
    dispatch(getAllProdutos());
    dispatch(getAllTabelas());
  }, [dispatch]);

  const [preco, setPreco] = useState("");

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const tabela = {
      preco
    };

    dispatch(insertTabela(tabela));

    setPreco("");

    resetComponentMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label="CADASTRO DE PREÇOS" />
      <div className="flex justify-center items-center mt-14">
        <form onSubmit={submitHandle} className="flex flex-col gap-4 w-96">
          {/* quantidade */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="preco" className="text-white font-bold">
              PREÇO:
            </Label>
            <Input
              type="number"
              id="preco"
              placeholder="Escreva o preço do produto"
              onChange={(e) => setPreco(e.target.value)}
              value={preco || ""}
            />
          </div>
          <div className="flex justify-center">
            {!loadingTabela && (
              <button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl">
                Cadastrar
              </button>
            )}
            {loadingTabela && (
              <button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl">
                Aguarde...
              </button>
            )}
          </div>
        </form>
      </div>
      {error && <Message msg={error} type="error" />}
      {message && <Message msg={message} type="success" />}
      <BarMenu />
    </GradientWrapper>
  );
}
