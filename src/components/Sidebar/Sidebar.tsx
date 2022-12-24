import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { links } from "./Links";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setActiveMenu, themeSelector } from "../../features/theme/themeSlice";
import logo from "../../assets/img/logo.png";
import "./sidebar.css";

export const Sidebar = () => {
  const { activeMenu, screenSize, currentColor } =
    useAppSelector(themeSelector);
  const dispatch = useAppDispatch();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      dispatch(setActiveMenu(false));
    }
  };

  const activeLink = "cursor-pointer gap-3 nav-link active ";
  const normalLink = "cursor-pointer gap-3 nav-link";
  const sidebarContenedor = activeMenu
    ? "sidebar_contenedor fixedSidebar shadow"
    : "sidebar_contenedor fixedSidebar shadow close";
  const contenedorSidebar = activeMenu
    ? "contenedor__sidebar"
    : "contenedor__sidebar close";
  return (
    <aside className={contenedorSidebar}>
      <div className={sidebarContenedor}>
        <div className="py-3 px-4 d-flex align-items-center border-bottom-sidebar">
          <img src={logo} alt="user" width="30" className="rounded-circle" />
          <div className="ms-3 opacity-75 text-truncate user-name">
            John Deo
          </div>
        </div>
        <div className="sidebar_contenido p-3">
          <ul className="flex-column lightText nav">
            {links.map((item, index) => (
              <Fragment key={index}>
                <div className="navCaption text-uppercase mt-4">
                  {item.title}
                </div>

                <li className="nav-item" key={item.title}>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : "",
                      })}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon}
                      <span className="capitalize ">{link.name}</span>
                    </NavLink>
                  ))}
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};
