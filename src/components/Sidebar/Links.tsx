import {
  FiShoppingBag,
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
  FiMap,
  FiGrid,
  FiAlertTriangle,
} from "react-icons/fi";
import {
  AiOutlineCalendar,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
  AiFillFile,
  AiOutlineCar,
  AiTwotoneAlert,
  AiFillSetting,
  AiOutlineBorder,
  AiOutlineBorderOuter,
} from "react-icons/ai";
import { BsBarChart, BsKanban } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { GiLouvrePyramid } from "react-icons/gi";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "home",
        //icon: <FiShoppingBag />,
        icon: <FiGrid />,
      },
      {
        name: "mapa",
        //icon: <FiShoppingBag />,
        icon: <FiMap />,
      },
    ],
  },

  {
    title: "Páginas",
    links: [
      /*{
          name: "informes",
          //icon: <AiOutlineShoppingCart />,
          icon: <AiFillFile />,
        },*/
      {
        name: "alertas",
        //icon: <IoMdContacts />,
        icon: <AiTwotoneAlert />,
      },
      {
        name: "rutas",
        //icon: <RiContactsLine />,
        icon: <AiOutlineBorderOuter />,
      },
      {
        name: "flota",
        //icon: <RiContactsLine />,
        icon: <AiOutlineCar />,
      },
      /*{
          name: "conductores",
          //icon: <RiContactsLine />,
          icon: <IoMdContacts />,
        },*/
      {
        name: "ajustes",
        //icon: <RiContactsLine />,
        icon: <AiFillSetting />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "kanban",
        icon: <BsKanban />,
      },
      {
        name: "editor",
        icon: <FiEdit />,
      },
      {
        name: "color-picker",
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "bar",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "pie",
        icon: <FiPieChart />,
      },
      {
        name: "financial",
        icon: <RiStockLine />,
      },
      {
        name: "color-mapping",
        icon: <BsBarChart />,
      },
      {
        name: "pyramid",
        icon: <GiLouvrePyramid />,
      },
      {
        name: "stacked",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];
