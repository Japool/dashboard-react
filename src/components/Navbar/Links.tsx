import { BiLogOutCircle } from "react-icons/bi";
import { BsCurrencyDollar, BsPerson, BsShield } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";

export const usuarioLinks = [
  {
    icon: <BsPerson />,
    name: "perfil",
    title: "Perfil",
    desc: "Ajustes de perfil",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    name: "mensajes",
    title: "Mensajes",
    desc: "Mensajes & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    name: "tareas",
    title: "Tareas",
    desc: "To-do & Tareas diarias",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
  {
    icon: <BiLogOutCircle />,
    name: "logout",
    title: "Salir",
    desc: "cerrar sesion",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];
