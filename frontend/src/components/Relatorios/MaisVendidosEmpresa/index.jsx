import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllEmpresas, getProdutosVendidosEmpresa } from "../../../slices/empresaSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"; // Importe o useState
const options = ["Option 1", "Option 2"];

const vendasEmpresa = [
  {
    descricaoProduto: "Calça",
    unidadesVendidas: "500",
    valorTotal: "50.000,00",
  },
];

export default function MaisVendidosEmpresa() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.usuario);
  const { empresas, empresas2 } = useSelector((state) => state.empresa);

  const [autocompleteOptions, setAutocompleteOptions] = useState([]);

  // Estados para as datas inicial e final
  const [idEmpresa, setIdEmpresa] = useState("");

  useEffect(() => {
    // Carregar empresas inicialmente
    dispatch(getAllEmpresas());
  }, [dispatch]);

  // Atualizar lista de opções do Autocomplete quando empresas mudar
  useEffect(() => {
    setAutocompleteOptions(empresas);
  }, [empresas]);

  const handleBuscarClick = () => {
    dispatch(getProdutosVendidosEmpresa(idEmpresa));
  };


  // Renderizar um componente de carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label="MAIS VENDIDOS POR EMPRESA" />
      <div className="flex flex-col items-center mt-4">
        <div className="w-full lg:w-3/4 xl:w-2/3 rounded-3xl bg-[#053057] flex flex-col items-center">
          {/* inputs */}
          <div className="p-4 flex flex-col sm:flex-row items-center gap-x-4 w-full">
            <Autocomplete
              id="id_empresa"
              options={empresas2}
              getOptionLabel={(option) => option.nome}
              onChange={(event, newValue) => {
                setIdEmpresa(newValue ? newValue.id_empresa : "");
              }}
              isOptionEqualToValue={(option, value) => option.id_empresa === value.id_empresa}
              renderInput={(params) => (
                <div ref={params.InputProps.ref} className="w-full">
                  <input
                    type="text"
                    {...params.inputProps}
                    className="h-10 w-full rounded-md border border-neutral-200
                      bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                      file:text-sm file:font-medium placeholder:text-neutral-500 
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                      focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                       dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                        dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                        text-black mt-1 font-normal"
                    placeholder="INSIRA A EMPRESA"
                  />
                </div>
              )}
            />
            <button className="h-10 w-full sm:w-auto bg-black rounded-xl border border-black px-3 py-2 text-xs flex justify-center items-center mt-1 text-white" onClick={handleBuscarClick}>
              BUSCAR
            </button>
          </div>
          <div className="w-full border-2 border-black bg-white rounded-xl mt-4">
            <div className="grid grid-cols-3 p-2 border-b-2 border-black">
              <label htmlFor="" className="font-semibold">
                DESCRIÇÃO DO PRODUTO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                UNIDADES VENDIDAS
              </label>
              <label htmlFor="" className="font-semibold text-right">
                VALOR TOTAL
              </label>
            </div>
            <div className="h-[300px] lg:h-[200px] overflow-auto">
              {empresas.map((empresa, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 p-2 border-b-2 border-black"
                >
                  <label htmlFor="" className="text-center">
                    {empresa.Produto}
                  </label>
                  <label htmlFor="" className="text-right">
                    {empresa.Quantidade} UN
                  </label>
                  <label htmlFor="" className="text-right">
                    R$ {empresa.PrecoTotal}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button className="p-2 text-white bg-black w-full sm:w-[150px] lg:w-[200px] m-2 rounded-xl font-semibold">
            IMPRIMIR
          </button>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
