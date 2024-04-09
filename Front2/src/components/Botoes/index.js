function Botoes(){
    return(
        <div className="flex items-end justify-evenly">
            <button
                className="border-2 border-black bg-lime-600 rounded-2xl w-60 flex justify-center"
            >
                <div className="text-white text-2xl p-0.5">Cadastrar</div>
            </button>
            <button
                className="border-2 border-black bg-red-600 rounded-2xl w-60 flex justify-center"
            >
                <div className="text-white text-2xl p-0.5">Cancelar</div>
            </button>
        </div>
    );
};

export default Botoes;