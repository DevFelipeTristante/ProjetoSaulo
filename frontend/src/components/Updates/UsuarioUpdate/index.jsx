import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getAllUsuarios, deleteUsuario } from "../../../slices/usuarioSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPerfils } from "../../../slices/perfilSlice";
import { getAllEmpresas } from "../../../slices/empresaSlice";

export default function UsuarioUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { usuarios, loading } = useSelector((state) => state.usuario);
  const { perfils } = useSelector((state) => state.perfil);
  const { empresas } = useSelector((state) => state.empresa);

  useEffect(() => {
    dispatch(getAllUsuarios());
    dispatch(getAllPerfils());
    dispatch(getAllEmpresas())
  }, [dispatch]);

  const editarUsuario = (usuario) => {
    navigate("/CadastroUsuario", { state: { usuario } });
  };
  
  const handleDelete = async (id_usuario) => {
    await dispatch(deleteUsuario(id_usuario)).unwrap();
    // Dispatch getAllFornecedors to refresh the list from the server
    dispatch(getAllUsuarios());
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label="USUÁRIOS CADASTRADOS" />
      <div className="flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="w-full border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-5 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base">
              <label htmlFor="" className="font-semibold">
                ID USUARIO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                NOME USUARIO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                EMPRESA
              </label>
              <label htmlFor="" className="font-semibold text-center">
                PAPEL DO USUARIO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                AÇÕES
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {usuarios.map((usuario) => (
                <div
                  key={usuario.id_usuario}
                  className="grid grid-cols-5 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base"
                >
                  <label htmlFor="">{usuario.id_usuario}</label>
                  <label htmlFor="" className="text-center">
                    {usuario.nome_usuario}
                  </label>
                  <label htmlFor="" className="text-center">
                  {empresas.find((empresa) => empresa.id_empresa === usuario.id_empresa)?.nome}
                  </label>
                  <label htmlFor="" className="text-center">
                  {perfils.find((perfil) => perfil.id_perfil === usuario.id_perfil)?.descricao}
                  </label>
                  <label className="text-center">
                    <FontAwesomeIcon icon={faPencil} className="mr-5 cursor-pointer" onClick={() => editarUsuario(usuario)} />
                    <FontAwesomeIcon icon={faCancel} color="red" className="cursor-pointer" onClick={() => handleDelete(usuario.id_usuario)} />
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
