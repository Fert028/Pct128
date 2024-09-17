import { NavLink } from 'react-router-dom';
import logo from '../img/icons/logoПХТ128.svg';

export default function Header() {
  return (
    <header className='header'>
      <div className="header__wrapper">
        <div className='pagesMenu'>
          <img src={logo} alt="ПХТ" className='logoPct' />
          <nav>
            <ul>
              <li><NavLink to='/'><p>Главная</p></NavLink></li>
              <li><NavLink to='/about'><p>О нас</p></NavLink></li>
              <li><NavLink to='/catalog'><p>Каталог</p></NavLink></li>
              <li><NavLink to='/contacts'><p>Контакты</p></NavLink></li>
              <li><NavLink to='/documents'><p>Документы</p></NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
