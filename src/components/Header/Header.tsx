import { BsList } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/user/userSlice";

import "./styles.scss";

interface IHeaderProps {
  onClickMenuIcon: () => void;
}

const Header = ({ onClickMenuIcon }: IHeaderProps) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header id="c-header">
      <section className="c-header__menu-wrapper">
        <BsList size={24} onClick={onClickMenuIcon} />
      </section>
      <section className="f-centered">
        <AiOutlineUser size={32} />
        <div>
          <p className="c-header__login--main-text">Gabriel Belther</p>
          <p className="c-header__login--secondary-text" onClick={handleLogout}>
            Sair
          </p>
        </div>
      </section>
    </header>
  );
};

export { Header };
