import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getAllVendas, deleteVenda } from "../../../slices/vendaSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllEmpresas } from "../../../slices/empresaSlice";
import { getAllUsuarios } from "../../../slices/usuarioSlice";
import Message from "../../Message/Message";

export default function VendasUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message,
    error, vendas } = useSelector((state) => state.venda);
  const { usuarios, loading } = useSelector((state) => state.usuario);
  const { empresas } = useSelector((state) => state.empresa);

  useEffect(() => {
    dispatch(getAllVendas());
    dispatch(getAllUsuarios())
    dispatch(getAllEmpresas());
  }, [dispatch]);

  const editarVenda = (venda) => {
    navigate("/CadastroVenda", { state: { venda  } });
  };

  const handleDelete = async (id_venda) => {
    await dispatch(deleteVenda(id_venda)).unwrap();
    dispatch(getAllVendas());
  };

  const getUsuarioNome = (idUsuario) => {
    const usuario = usuarios.find((usuario) => usuario.id_usuario === idUsuario);
    return usuario ? usuario.nome_usuario : "Usuário não encontrado";
  };

  const getEmpresaNome = (idEmpresa) => {
    const empresa = empresas.find((empresa) => empresa.id_empresa === idEmpresa);
    return empresa ? empresa.nome : "Empresa não encontrada";
  };

  if(loading) {
    return <p>Carregando...</p>;
  }
  
  return (
    <GradientWrapper>
      <HeaderCadsatro label="VENDAS REALIZADAS" />
      <div className="flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="w-full border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-6 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base">
              <label className="font-semibold">VENDA Nº</label>
              <label className="font-semibold text-center">DATA GERAÇÃO</label>
              <label className="font-semibold text-center">VALOR DA CONTA</label>
              <label className="font-semibold text-center">VENDEDOR</label>
              <label className="font-semibold text-center">EMPRESA</label>
              <label className="font-semibold text-center">AÇÕES</label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {vendas.map((venda) => (
                <div
                  key={venda.id_venda}
                  className="grid grid-cols-6 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base"
                >
                  <label>{venda.id_venda}</label>
                  <label className="text-center">{venda.data}</label>
                  <label className="text-center">R$ {venda.valor_venda}</label>
                  <label className="text-center">{getUsuarioNome(venda.id_usuario)}</label>
                  <label className="text-center">{getEmpresaNome(venda.id_empresa)}</label>
                  <label className="text-center">
                    <FontAwesomeIcon icon={faPencil} className="mr-5 cursor-pointer" onClick={() => editarVenda(venda)} />
                    <FontAwesomeIcon icon={faCancel} color="red" className="cursor-pointer" onClick={() => handleDelete(venda.id_venda)} />
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