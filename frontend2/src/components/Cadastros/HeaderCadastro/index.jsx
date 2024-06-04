import LogoClothing from "../../../assets/imgs/logo.png";

export default function HeaderCadsatro(props) {
  return (
    <>
      <div className="flex items-center">
        <img src={LogoClothing} alt="Logo da Clothing" className="w-[130px]" />
        <label className="text-white font-bold text-2xl">
          {props.label}
        </label>
      </div>
      <div className="w-full h-0.5 bg-white"></div>
    </>
  );
}
