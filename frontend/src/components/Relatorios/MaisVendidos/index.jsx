import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import { getProdutos } from "../../../slices/produtoSlice";

export default function MaisVendidos() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.usuario);
  const { produtos } = useSelector((state) => state.produto);

  const [ordenacaoProduto, setOrdenacaoProduto] = useState("crescente");
  const [ordenacaoQuantidade, setOrdenacaoQuantidade] = useState("crescente");
  const [ordenacaoPreco, setOrdenacaoPreco] = useState("crescente");

  useEffect(() => {
    dispatch(getProdutos());
  }, [dispatch]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  const ordenarPorProduto = (produtos, ordem) => {
    return produtos.slice().sort((a, b) => {
      const produtoA = a.Produto || '';
      const produtoB = b.Produto || '';
  
      if (ordem === "crescente") {
        return produtoA.localeCompare(produtoB);
      } else {
        return produtoB.localeCompare(produtoA);
      }
    });
  };  

  const ordenarPorQuantidade = (produtos, ordem) => {
    return produtos.slice().sort((a, b) => {
      if (ordem === "crescente") {
        return b.Quantidade - a.Quantidade;
      } else {
        return a.Quantidade - b.Quantidade;
      }
    });
  };

  const ordenarPorPreco = (produtos, ordem) => {
    return produtos.slice().sort((a, b) => {
      if (ordem === "crescente") {
        return b.PrecoTotal - a.PrecoTotal;
      } else {
        return a.PrecoTotal - b.PrecoTotal;
      }
    });
  };

  const ordenarProdutos = (produtos) => {
    let produtosOrdenados = [...produtos];

    if (ordenacaoProduto) {
      produtosOrdenados = ordenarPorProduto(produtosOrdenados, ordenacaoProduto);
    }

    if (ordenacaoQuantidade) {
      produtosOrdenados = ordenarPorQuantidade(produtosOrdenados, ordenacaoQuantidade);
    }

    if (ordenacaoPreco) {
      produtosOrdenados = ordenarPorPreco(produtosOrdenados, ordenacaoPreco);
    }

    return produtosOrdenados;
  };


  return (
    <GradientWrapper>
      <HeaderCadsatro label="PRODUTOS MAIS VENDIDOS" />
      <div className="flex justify-center items-center mt-4">
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
        <div className="p-4 flex flex-col sm:flex-row items-center gap-x-4">
  <button
    className={`p-2 text-sm font-bold ${ordenacaoProduto === "crescente" ? "bg-green-500" : ordenacaoProduto === "decrescente" ? "bg-red-500" : "bg-gray-300"
      }`}
    onClick={() => {
      setOrdenacaoProduto(ordenacaoProduto === "crescente" ? "decrescente" : "crescente");
      setOrdenacaoQuantidade(null);
      setOrdenacaoPreco(null);
    }}
  >
    Descrição {ordenacaoProduto === "crescente" ? "Crescente" : "Decrescente"}
  </button>
  <button
    className={`p-2 text-sm font-bold ${ordenacaoQuantidade === "crescente" ? "bg-green-500" : ordenacaoQuantidade === "decrescente" ? "bg-red-500" : "bg-gray-300"
      }`}
    onClick={() => {
      setOrdenacaoQuantidade(ordenacaoQuantidade === "crescente" ? "decrescente" : "crescente");
      setOrdenacaoProduto(null);
      setOrdenacaoPreco(null);
    }}
  >
    {ordenacaoQuantidade === "crescente" ? "Maior" : "Menor"} Quantidade 
  </button>
  <button
    className={`p-2 text-sm font-bold ${ordenacaoPreco === "crescente" ? "bg-green-500" : ordenacaoPreco === "decrescente" ? "bg-red-500" : "bg-gray-300"
      }`}
    onClick={() => {
      setOrdenacaoPreco(ordenacaoPreco === "crescente" ? "decrescente" : "crescente");
      setOrdenacaoProduto(null);
      setOrdenacaoQuantidade(null);
    }}
  >
    {ordenacaoPreco === "crescente" ? "Maior" : "Menor"} Preço
  </button>
</div>


          <div className="w-full sm:w-11/12 border-2 border-black bg-white rounded-xl mt-4">
            <div className="grid grid-cols-3 p-2 border-b-2 border-black">
              <label htmlFor="" className="font-semibold">
                DESCRIÇÃO DO PRODUTO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                UNIDADES VENDIDAS
              </label>
              <label htmlFor="" className="font-semibold text-right">
                VALOR TOTAL
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] sm:h-[200px] overflow-auto">
              {ordenarProdutos(produtos).map((produto, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 p-2 border-b-2 border-black"
                >
                  <label htmlFor="" className="">
                    {produto.Produto}
                  </label>
                  <label htmlFor="" className="text-center">
                    {produto.Quantidade} UN
                  </label>
                  <label htmlFor="" className="text-right">
                    R$ {produto.PrecoTotal}
                  </label>
                </div>
              ))}
            </div>

          </div>
          <button className="p-2 text-white bg-black w-[150px] sm:w-[200px] m-2 rounded-xl font-semibold">
            IMPRIMIR
          </button>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
