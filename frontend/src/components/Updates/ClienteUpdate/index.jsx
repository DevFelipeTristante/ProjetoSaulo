import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getAllClientes, deleteCliente } from "../../../slices/clienteSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTipos } from "../../../slices/tipoSlice";
import { getAllCidades } from "../../../slices/cidadeSlice";
import { getAllTelefones } from "../../../slices/telefoneSlice";

export default function ClienteUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { clientes } = useSelector((state) => state.cliente);
  const { tipos } = useSelector((state) => state.tipo);
  const { cidades } = useSelector((state) => state.cidade);
  const { telefones } = useSelector((state) => state.telefone);

  useEffect(() => {
    dispatch(getAllClientes());
    dispatch(getAllTipos());
    dispatch(getAllCidades())
    dispatch(getAllTelefones())
  }, [dispatch]);

  const editarCliente = (cliente) => {
    // Encontrar a tipo correspondente ao cliente
    const tipo = tipos.find((tipo) => tipo.id_tipo === cliente.id_tipo);
    
    // Adicionar a tipo ao objeto do cliente
    const clienteTipo = { ...cliente, tipo: tipo };
  
    // Encontrar a cidade correspondente ao cliente
    const cidade = cidades.find((cidade) => cidade.id_cidade === cliente.id_cidade);
    
    // Adicionar a cidade ao objeto do cliente
    const clienteCidade = { ...clienteTipo, cidade: cidade };
  
    // Passar o cliente atualizado para o estado do histórico de navegação
    navigate("/CadastroClientes", { state: { cliente: clienteCidade } });
  };
  
  const handleDelete = async (id_cliente) => {
    await dispatch(deleteCliente(id_cliente)).unwrap();
    // Dispatch getAllFornecedors to refresh the list from the server
    dispatch(getAllClientes());
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="CLIENTES CADASTRADOS" />
      <div className="flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="w-full border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-4 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base mt-1">
              <label htmlFor="" className="font-semibold">
                ID CLIENTE
              </label>
              <label htmlFor="" className="font-semibold text-center">
                NOME CLIENTE
              </label>
              <label htmlFor="" className="font-semibold text-center">
                ENDEREÇO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                AÇÕES
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {clientes.map((cliente) => (
                <div
                  key={cliente.id_cliente}
                  className="grid grid-cols-4 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base"
                >
                  <label htmlFor="">{cliente.id_cliente}</label>
                  <label htmlFor="" className="text-center">
                    {cliente.nome_cliente}
                  </label>
                  <label htmlFor="" className="text-center">
                    {cliente.endereco}
                  </label>
                  <label className="text-center">
                    <FontAwesomeIcon icon={faPencil} className="mr-5 cursor-pointer" onClick={() => editarCliente(cliente)} />
                    <FontAwesomeIcon icon={faCancel} color="red" className="cursor-pointer" onClick={() => handleDelete(cliente.id_cliente)} />
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
