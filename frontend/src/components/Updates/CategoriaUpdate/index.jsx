import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import { deleteCategoria, getAllCategorias } from "../../../slices/categoriaSlice";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function CategoriaUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categorias } = useSelector((state) => state.categoria);

  useEffect(() => {
    dispatch(getAllCategorias());
  }, [dispatch]);

  const editarCategoria = (categoria) => {
    navigate("/CadastroCategoria", { state: { categoria } });
  };

  const handleDelete = async (id_categoria) => {
    await dispatch(deleteCategoria(id_categoria)).unwrap();
    // Dispatch getAllFornecedors to refresh the list from the server
    dispatch(getAllCategorias());
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="PRODUTOS CADASTRADOS" />
      <div className="flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="w-full border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-3 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base ">
              <label htmlFor="" className="font-semibold">
             CÓDIGO DA CATEGORIA
              </label>
              <label htmlFor="" className="font-semibold text-center">
                DESCRIÇÃO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                AÇÕES
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {categorias.map((categoria) => (
                <div
                  key={categoria.id_categoria}
                  className="grid grid-cols-3 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base"
                >
                  <label htmlFor="">{categoria.id_categoria}</label>
                  <label htmlFor="" className="text-center">
                    {categoria.categoria}
                  </label>
                  <label className="text-center">
                    <FontAwesomeIcon icon={faPencil} className="mr-5 cursor-pointer" onClick={() => editarCategoria(categoria)} />
                    <FontAwesomeIcon icon={faCancel} color="red" className="cursor-pointer"
                    onClick={() => handleDelete(categoria.id_categoria)}
                    />
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
