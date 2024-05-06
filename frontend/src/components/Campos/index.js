import './Campo.css';

function Campos(props) {
  return (
    <div className="grid grid-row-1 grid-cols-2 content-center p-6 gap-x-60">
      <div className="w-[240px]">
        <label className="text-3xl text-white font-bold campo">{props.label}</label>
      </div>
      <input
        className="bg-white rounded-xl w-[350px] h-10 p-2 shadow-md shadow-black"
        id="nome_fornecedor"
      />
    </div>
  );
}

export default Campos;
