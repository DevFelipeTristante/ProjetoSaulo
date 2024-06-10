import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getAllProdutos, deleteProduto } from "../../../slices/produtoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategorias } from "../../../slices/categoriaSlice";
import { getAllTabelas } from "../../../slices/tabelaSlice";

export default function ProdutoUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { produtos } = useSelector((state) => state.produto);
  const { categorias } = useSelector((state) => state.categoria);
  const { tabelas } = useSelector((state) => state.tabela);

  useEffect(() => {
    dispatch(getAllProdutos());
    dispatch(getAllCategorias());
    dispatch(getAllTabelas())
  }, [dispatch]);

  const editarProduto = (produto) => {
    // Encontrar a categoria correspondente ao produto
    const categoriaProduto = categorias.find((categoria) => categoria.id_categoria === produto.id_categoria);
    
    // Adicionar a categoria ao objeto do produto
    const produtoComCategoria = { ...produto, categoria: categoriaProduto };
  
    // Passar o produto atualizado para o estado do histórico de navegação
    navigate("/CadastroProduto", { state: { produto: produtoComCategoria } });
  };
  
  const handleDelete = async (id_produto) => {
    await dispatch(deleteProduto(id_produto)).unwrap();
    // Dispatch getAllFornecedors to refresh the list from the server
    dispatch(getAllProdutos());
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="PRODUTOS CADASTRADOS" />
      <div className="flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="w-full border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-4 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base mt-1">
              <label htmlFor="" className="font-semibold">
                ID PRODUTO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                DESCRIÇÕES
              </label>
              <label htmlFor="" className="font-semibold text-center">
                PREÇO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                AÇÕES
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {produtos.map((produto) => (
                <div
                  key={produto.id_produto}
                  className="grid grid-cols-4 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base"
                >
                  <label htmlFor="">{produto.id_produto}</label>
                  <label htmlFor="" className="text-center">
                    {produto.descricao_produto}
                  </label>
                  <label htmlFor="" className="text-center">
                    {/* Aqui você precisa buscar o preço correto na tabela de preços */}
                    R${tabelas.find((tabela) => tabela.id_tabela === produto.id_tabela)?.preco}
                  </label>
                  <label className="text-center">
                    <FontAwesomeIcon icon={faPencil} className="mr-5 cursor-pointer" onClick={() => editarProduto(produto)} />
                    <FontAwesomeIcon icon={faCancel} color="red" className="cursor-pointer" onClick={() => handleDelete(produto.id_produto)} />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
