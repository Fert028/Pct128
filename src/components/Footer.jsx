import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo/logoПХТ128.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__content'>
          <a href="/">
            <img src={logo} alt="ПХТ" className='logoPct' />
          </a>
          <p>| Безопасность ваша и ваших близких</p>
        </div>
        <div className='pagesMenu'>
          <nav>
            <ul>
              <li><NavLink to='/'><button>Главная</button></NavLink></li>
              <li><NavLink to='/about'><button>О нас</button></NavLink></li>
              <li><NavLink to='/catalog'><button>Каталог</button></NavLink></li>
              <li><NavLink to='/contacts'><button>Контакты</button></NavLink></li>
              <li><NavLink to='/documents'><button>Документы</button></NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
