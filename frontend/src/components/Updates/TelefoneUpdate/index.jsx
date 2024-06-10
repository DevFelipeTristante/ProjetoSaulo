import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getAllTelefones, deleteTelefone } from "../../../slices/telefoneSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllClientes } from "../../../slices/clienteSlice";

export default function TelefoneUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { telefones } = useSelector((state) => state.telefone);
  const { clientes } = useSelector((state) => state.cliente);

  useEffect(() => {
    dispatch(getAllTelefones());
    dispatch(getAllClientes());
  }, [dispatch]);

  const editarTelefone = (telefone) => {
    navigate("/CadastroTelefones", { state: { telefone } });
  };

  const handleDelete = async (id_telefone) => {
    await dispatch(deleteTelefone(id_telefone)).unwrap();
    // Dispatch getAllTelefones to refresh the list from the server
    dispatch(getAllTelefones());
  };

  const getClienteNome = (idCliente) => {
    const cliente = clientes.find((cliente) => cliente.id_cliente === idCliente);
    return cliente ? cliente.nome_cliente : "Cliente não encontrado";
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="TELEFONE CADASTRADOS" />
      <div className="flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="w-full border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-4 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base">
              <label htmlFor="" className="font-semibold">
                ID TELEFONE
              </label>
              <label htmlFor="" className="font-semibold text-center">
                CLIENTE
              </label>
              <label htmlFor="" className="font-semibold text-center">
                TELEFONE
              </label>
              <label htmlFor="" className="font-semibold text-center">
                AÇÕES
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {telefones.map((telefone) => (
                <div
                  key={telefone.id_telefone}
                  className="grid grid-cols-4 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base"
                >
                  <label htmlFor="">{telefone.id_telefone}</label>
                  <label htmlFor="" className="text-center">
                    {getClienteNome(telefone.id_cliente)}
                  </label>
                  <label htmlFor="" className="text-center">
                    {telefone.numero}
                  </label>
                  <label className="text-center">
                    <FontAwesomeIcon icon={faPencil} className="mr-5 cursor-pointer" onClick={() => editarTelefone(telefone)} />
                    <FontAwesomeIcon icon={faCancel} color="red" className="cursor-pointer" onClick={() => handleDelete(telefone.id_telefone)} />
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