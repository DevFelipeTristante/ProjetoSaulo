import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getAllCompras, deleteCompra } from "../../../slices/compraSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProdutos } from "../../../slices/produtoSlice";

export default function CompraUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { compras } = useSelector((state) => state.compra);
  const { produtos } = useSelector((state) => state.produto);

  useEffect(() => {
    dispatch(getAllCompras());
    dispatch(getAllProdutos());
  }, [dispatch]);

  const editarCompra = (compra) => {
    navigate("/CadastroCompra", { state: { compra } });
  };

  const handleDelete = async (id_compra) => {
    await dispatch(deleteCompra(id_compra)).unwrap();
    // Dispatch getAllFornecedors to refresh the list from the server
    dispatch(getAllCompras());
  };

  const getProdutoNome = (idProduto) => {
    const produto = produtos.find((produto) => produto.id_produto === idProduto);
    return produto ? produto.descricao_produto : "Produto não encontrado";
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="EMPRESAS CADASTRADAS" />
      <div className="flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="w-full border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-6 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base">
              <label htmlFor="" className="font-semibold">
                NÚMERO NOTA FISCAL
              </label>
              <label htmlFor="" className="font-semibold text-center">
                PRODUTO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                QUANTIDADE
              </label>
              <label htmlFor="" className="font-semibold text-center">
                VALOR
              </label>
              <label htmlFor="" className="font-semibold text-center">
                DATA NOTA FISCAL
              </label>
              <label htmlFor="" className="font-semibold text-center">
                AÇÕES
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {compras.map((compra) => (
                <div
                  key={compra.numeroNF}
                  className="grid grid-cols-6 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base"
                >
                  <label htmlFor="">{compra.numeroNF}</label>
                  <label htmlFor="" className="text-center">
                    {getProdutoNome(compra.id_produto)}
                  </label>
                  <label htmlFor="" className="text-center">
                    {compra.quantidade}
                  </label>
                  <label htmlFor="" className="text-center">
                    {compra.valor}
                  </label>
                  <label htmlFor="" className="text-center">
                    {compra.data_nf}
                  </label>
                  <label className="text-center">
                    <FontAwesomeIcon icon={faPencil} className="mr-5 cursor-pointer" onClick={() => editarCompra(compra)} />
                    <FontAwesomeIcon icon={faCancel} color="red" className="cursor-pointer" onClick={() => handleDelete(compra.id_compra)} />
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