import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getAllEmpresas, deleteEmpresa } from "../../../slices/empresaSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCidades } from "../../../slices/cidadeSlice";

export default function EmpresaUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { empresas } = useSelector((state) => state.empresa);
  const { cidades } = useSelector((state) => state.cidade);

  useEffect(() => {
    dispatch(getAllEmpresas());
    dispatch(getAllCidades());
  }, [dispatch]);

  const editarEmpresa = (empresa) => {
    navigate("/CadastroEmpresa", { state: { empresa } });
  };

  const handleDelete = async (id_empresa) => {
    await dispatch(deleteEmpresa(id_empresa)).unwrap();
    // Dispatch getAllFornecedors to refresh the list from the server
    dispatch(getAllEmpresas());
  };

  const getCidadeNome = (idCidade) => {
    const cidade = cidades.find((cidade) => cidade.id_cidade === idCidade);
    return cidade ? cidade.nome_cidade : "Cidade não encontrada";
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="EMPRESAS CADASTRADAS" />
      <div className="flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="w-full border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-5 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base">
              <label htmlFor="" className="font-semibold">
                ID EMPRESA
              </label>
              <label htmlFor="" className="font-semibold text-center">
                NOME EMPRESA
              </label>
              <label htmlFor="" className="font-semibold text-center">
                CIDADE
              </label>
              <label htmlFor="" className="font-semibold text-center">
                CNPJ
              </label>
              <label htmlFor="" className="font-semibold text-center">
                AÇÕES
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {empresas.map((empresa) => (
                <div
                  key={empresa.id_empresa}
                  className="grid grid-cols-5 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base"
                >
                  <label htmlFor="">{empresa.id_empresa}</label>
                  <label htmlFor="" className="text-center">
                    {empresa.nome}
                  </label>
                  <label htmlFor="" className="text-center">
                    {getCidadeNome(empresa.id_cidade)}
                  </label>
                  <label htmlFor="" className="text-center">
                    {empresa.cnpj}
                  </label>
                  <label className="text-center">
                    <FontAwesomeIcon icon={faPencil} className="mr-5 cursor-pointer" onClick={() => editarEmpresa(empresa)} />
                    <FontAwesomeIcon icon={faCancel} color="red" className="cursor-pointer" onClick={() => handleDelete(empresa.id_empresa)} />
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