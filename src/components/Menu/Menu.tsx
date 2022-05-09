import { AiOutlineHome } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./styles.scss";

interface IMenuProps {
  showMenuNames: boolean;
}

const menuItems = [
  {
    title: "Início",
    icon: <AiOutlineHome size={20} />,
    href: "/",
  },
  {
    title: "Categorias",
    icon: <BiCategoryAlt size={20} />,
    href: "/categories",
  },
];

const Menu = ({ showMenuNames }: IMenuProps) => {
  return (
    <nav id="c-menu">
      <ul className="d-flex f-col gap-1">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link to={item.href}>
              <button className="c-menu__list__item--button">
                {item.icon}
                {showMenuNames && <span>{item.title}</span>}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Menu };
