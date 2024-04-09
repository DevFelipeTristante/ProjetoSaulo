function Campos(props) { 
  return (
    <div className="flex items-center gap-x-24">
      <div className="flex-grow">
        <label className="text-3xl text-white font-bold">{props.label}</label>
      </div>
      <input
        className="bg-slate-200 rounded-xl w-[350px] p-2"
        id="nome_fornecedor"
      />
    </div>
  ); } 
  
export default Campos;
  