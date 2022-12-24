import { lazy, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ThemeSettings } from "../components/themeSettings/ThemeSettings";
import {
  setActiveMenu,
  setColor,
  setMode,
  setThemeSettings,
  themeSelector,
} from "../features/theme/themeSlice";

import logo from "../assets/img/logo.png";
import { Link, Outlet, Route, Routes, useRoutes } from "react-router-dom";
import { MdEmail, MdMessage, MdModeComment, MdReorder } from "react-icons/md";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Rutas } from "../routes/Rutas";
import { MyLabel, Dropdown } from "jp-storybook-components";
import { usuarioLinks } from "../components/Navbar/Links";

export const AdminTemplate = (props: any) => {
  const { currentMode, currentColor, screenSize, activeMenu, themeSettings } =
    useAppSelector(themeSelector);

  const dispatch = useAppDispatch();

  const handleCloseSideBar = () => {
    dispatch(setActiveMenu(!activeMenu));
    if (activeMenu !== undefined && screenSize <= 900) {
      dispatch(setActiveMenu(false));
    }
  };
  const handleLogout = () => {
    console.log("cerrando sesion...");
  };
  const logoSidebar = activeMenu ? "logo" : "logo logoCerrar";

  const curr_user = {
    display_name: "Jardiel Pool",
    rol: "Administrador",
    email: "poolhj@autocarcancun.mx",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2dWQqcrJa3mAOe1ACtrOuQxkYz-stGMtFA&usqp=CAU",
  };

  const renderUserToggle = (user: any) => (
    <img
      className="rounded-circle"
      src={logo}
      title="perfil_usuario"
      width={30}
    />
    /*<div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <img
          className="rounded-circle"
          src={logo}
          title="perfil_usuario"
          width={30}
        />
      </div>
      <div className="topnav__right-user__name">{user.display_name}</div>
  </div>*/
  );
  const renderUserMenu = (item: any, index: number) => {
    //console.log(item);
    return item.name == "logout" ? (
      <div
        key={item.name}
        className="notification-item cursor-pointer"
        onClick={handleLogout}
      >
        {item.icon}
        <span>{item.title}</span>
      </div>
    ) : (
      <Link to={`/${item.name}`} key={index}>
        <div className="notification-item">
          {item.icon}
          <span>{item.title}</span>
        </div>
      </Link>
    );
  };
  return (
    <div className="contenedor">
      <Sidebar />

      <div className="contenedor__area fixedTopbar">
        <nav className="navbar navbar-expand-lg topbar">
          <div className="container-fluid">
            <div className={logoSidebar}>
              <Link to="/">
                <img src={logo} title="logo" />
              </Link>
            </div>
            <div className="sidebarCerrar">
              <button className="btn hov-dd" onClick={handleCloseSideBar}>
                <MdReorder size={18} />
              </button>
            </div>
            <ul className="me-auto">
              <li>about</li>
            </ul>
            <div className="acciones">
              <button className="btn hov-dd">
                <MdReorder size={18} />
              </button>
              <button className="btn hov-dd">
                <MdMessage size={18} />
              </button>
              <button className="btn hov-dd">
                <MdEmail size={18} />
              </button>

              <Dropdown
                contentData={usuarioLinks}
                customToggle={() => renderUserToggle(curr_user)}
                renderItems={(item, index) => renderUserMenu(item, index)}
              />
            </div>
          </div>
        </nav>
        <div className="p-4 boxContainer container-fluid">
          <Rutas />
        </div>
      </div>
      {themeSettings && <ThemeSettings />}
    </div>
  );
};
