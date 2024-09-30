import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo/logoПХТ128.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <a href="/">
            <img src={logo} alt="ПХТ" className="logoPct" />
          </a>
          <p className="text">| Безопасность ваша и ваших близких</p>
        </div>
        <nav className="pagesMenu">
          <ul>
            <li>
              <NavLink to="/">
                <button className="link">Главная</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <button className="link">О нас</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog">
                <button className="link">Каталог</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts">
                <button className="link">Контакты</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/documents">
                <button className="link">Документы</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <p className="text copyright">&copy; 2024 ЗАО "ПХТ"</p>
    </footer>
  );
}
