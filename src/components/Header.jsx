import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo/logoПХТ128.svg";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState();

  const pageMenu = (
    <div className="pageMenu__wrapper">
      <nav className={open ? "pagesMenu pagesMenuActive" : "pagesMenu"}>
        <ul>
          <li>
            <NavLink to="/">
              <button className="button">Главная</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <button className="button">О нас</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog">
              <button className="button">Каталог</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts">
              <button className="button">Контакты</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/documents">
              <button className="button">Документы</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
  return (
    <>
      <div className={open ? "closeMenu closeMenu__active" : "closeMenu"} onClick={() => setOpen(!open)}></div>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__container">
            <a href="/">
              <img src={logo} alt="ПХТ" className="logoPct" />
            </a>
            {pageMenu}
            <button
              className={open ? "burger closeBurger" : "burger"}
              onClick={() => setOpen(!open)}
            >
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
