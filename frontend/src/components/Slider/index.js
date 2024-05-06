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
} from "@fortawesome/free-solid-svg-icons";

const icones = [
  { icone: faStore, rotulo: 'Cadastro de Fornecedores', link: '/cadastro-fornecedores' },
  { icone: faTruck, rotulo: 'Cadastro de Vendedores', link: '/cadastro-vendedores' },
  { icone: faPeopleGroup, rotulo: 'Cadastro de Clientes', link: '/cadastro-clientes' },
  { icone: faBoxesStacked, rotulo: 'Cadastro de Vendas', link: '/cadastro-vendas' },
  { icone: faCity, rotulo: 'Cadastro de Cidades', link: '/cadastro-cidades' },
  { icone: faDolly, rotulo: 'Cadastro de Produtos', link: '/cadastro-produtos' },
  { icone: faList, rotulo: 'Cadastro de Categorias', link: '/cadastro-categorias' },
  { icone: faPhone, rotulo: 'Cadastro de Telefones', link: '/cadastro-telefones' },
  { icone: faHandHoldingDollar, rotulo: 'Cadastro de Contas', link: '/cadastro-contas' },
  { icone: faTruckRampBox, rotulo: 'Cadastro de Movimentação', link: '/cadastro-movimentacao' },
  { icone: faPrint, rotulo: 'Relatórios', link: '/relatorios' },
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
      {icones.map((item, index) => (
        <SwiperSlide key={index} className="bg-emerald-700">
          <a href={item.link} className="flex flex-col gap-0.5">
            <FontAwesomeIcon icon={item.icone} className="h-20" />
            <label className="text-white font-bold">{item.rotulo}</label>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
