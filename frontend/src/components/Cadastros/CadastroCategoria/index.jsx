import { useEffect, useState } from "react";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useNavigate, useLocation } from "react-router-dom";
import { getAllCategorias, insertCategoria, resetMessage, updateCategoria } from "../../../slices/categoriaSlice";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../Message/Message";

export default function CadastroCategoria() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading } = useSelector((state) => state.usuario);

  const {
    loading: loadingCategoria,
    message,
    error,
  } = useSelector((state) => state.categoria);

  const [categoria, setCategoria] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (location.state && location.state.categoria) {
      const { categoria } = location.state;
      setCategoria(categoria.categoria);
      setIsEdit(true);
    } else {
      // Reset to insertion mode if no fornecedor in location state
      setCategoria("");
      setIsEdit(false);
    }
  }, [location.state]);

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const categoriaData = {
      categoria
    };

    if (isEdit) {
      dispatch(updateCategoria({ ...categoriaData, id_categoria: location.state.categoria.id_categoria }))
        .then(() => {
          resetComponentMessage();
          navigate("/CategoriaUpdate");
        });
    } else {
      dispatch(insertCategoria(categoriaData))
        .then(() => {
          resetComponentMessage();
        });
    }

    setCategoria("");
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label={isEdit ? "EDITAR CATEGORIA" : "CADASTRO DE CATEGORIA"} />
      <div className="flex justify-center items-center mt-14">
        <form onSubmit={submitHandle} className="flex flex-col gap-4 w-full max-w-md px-4">
          {/* nome da categoria */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="id_categoria" className="text-white font-bold">
              CATEGORIA:
            </Label>
            <Input
              type="text"
              id="categoria"
              placeholder="Escreva o nome da categoria"
              className="w-full"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="text-white bg-black font-bold w-full max-w-xs h-10 rounded-xl">
              {isEdit ? "Atualizar" : "Confirmar"}
            </button>
          </div>
        </form>
      </div>
      {error && <Message msg={error} type="error" />}
      {message && <Message msg={message} type="success" />}
      <BarMenu />
    </GradientWrapper>
  );
}
