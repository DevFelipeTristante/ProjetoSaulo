import './Titulo.css';

function Titulo(props){
    return(
        <div className="text-center mt-8">
            <div className="font-bold text-4xl text-white titulo">
              Cadastro de {props.label}
            </div>
        </div>
    );
};

export default Titulo;