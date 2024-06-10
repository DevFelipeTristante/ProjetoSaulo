import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getAllFornecedors, deleteFornecedor } from "../../../slices/fornecedorSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCidades } from "../../../slices/cidadeSlice";

export default function FornecedorUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { fornecedors } = useSelector((state) => state.fornecedor);
  const { cidades } = useSelector((state) => state.cidade);

  useEffect(() => {
    dispatch(getAllFornecedors());
    dispatch(getAllCidades());
  }, [dispatch]);

  const editarFornecedor = (fornecedor) => {
    navigate("/CadastroFornecedor", { state: { fornecedor } });
  };

  const handleDelete = async (id_fornecedor) => {
    await dispatch(deleteFornecedor(id_fornecedor)).unwrap();
    // Dispatch getAllFornecedors to refresh the list from the server
    dispatch(getAllFornecedors());
  };

  const getCidadeNome = (idCidade) => {
    const cidade = cidades.find((cidade) => cidade.id_cidade === idCidade);
    return cidade ? cidade.nome_cidade : "Cidade não encontrada";
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="FORNECEDORES CADASTRADOS" />
      <div className="flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="w-full border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-4 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base">
              <label htmlFor="" className="font-semibold">
                ID FORNECEDOR
              </label>
              <label htmlFor="" className="font-semibold text-center">
                NOME FORNECEDOR
              </label>
              <label htmlFor="" className="font-semibold text-center">
                CIDADE
              </label>
              <label htmlFor="" className="font-semibold text-center">
                AÇÕES
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {fornecedors.map((fornecedor) => (
                <div
                  key={fornecedor.id_fornecedor}
                  className="grid grid-cols-4 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base"
                >
                  <label htmlFor="">{fornecedor.id_fornecedor}</label>
                  <label htmlFor="" className="text-center">
                    {fornecedor.nome_fornecedor}
                  </label>
                  <label htmlFor="" className="text-center">
                    {getCidadeNome(fornecedor.id_cidade)}
                  </label>
                  <label className="text-center">
                    <FontAwesomeIcon icon={faPencil} className="mr-5 cursor-pointer" onClick={() => editarFornecedor(fornecedor)} />
                    <FontAwesomeIcon icon={faCancel} color="red" className="cursor-pointer" onClick={() => handleDelete(fornecedor.id_fornecedor)} />
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
