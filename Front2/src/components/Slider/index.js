import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles.css";
import { Grid, Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesStacked,
  faCity,
  faDolly,
  faHandHoldingDollar,
  faList,
  faPeopleGroup,
  faPhone,
  faPrint,
  faStore,
  faTruck,
  faTruckRampBox,
} 
from "@fortawesome/free-solid-svg-icons";

const icones = [
  { icone: faStore, rotulo: 'Cadastro de Fornecedores' },
  { icone: faTruck, rotulo: 'Cadastro de Vendedores' },
  { icone: faPeopleGroup, rotulo: 'Cadastro de Clientes' },
  { icone: faBoxesStacked, rotulo: 'Cadastro de Vendas' },
  { icone: faCity, rotulo: 'Cadastro de Cidades' },
  { icone: faDolly, rotulo: 'Cadastro de Produtos' },
  { icone: faList, rotulo: 'Cadastro de Categorias' },
  { icone: faPhone, rotulo: 'Cadastro de Telefones' },
  { icone: faHandHoldingDollar, rotulo: 'Cadastro de Contas' },
  { icone: faTruckRampBox, rotulo: 'Cadastro de Movimentação' },
  { icone: faPrint, rotulo: 'Relatórios' },
];

const Slider = () => {
  return (
    <Swiper
        navigation={true}
        loop={true}
        slidesPerView={4}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper h-28"
      >
      {icones.map((item) => (
        <SwiperSlide className="bg-emerald-700">
          <div className="flex flex-col gap-0.5">
            <FontAwesomeIcon icon={item.icone} className="h-20" />
            <label className="text-white font-bold">{item.rotulo}</label>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
