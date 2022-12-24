interface sidebarItemProps {
  title: string;
  icon: string;
  active: boolean;
}
export const SidebarItem = (props: sidebarItemProps) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};
