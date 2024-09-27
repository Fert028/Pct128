import style from '../../styles/Contacts.module.scss';
import AltairContactCard from './AltairContactCard';
import logo from '../../assets/img/logo/logoПХТ128.svg';

export default function Contacts() {
  return (
    <div className={style.container}>
      <h1 className={style.hero}>Контакты</h1>

      <section className={style.PctConatactCard}>
        <div className={style.pctLinks}>
          <h2>ЗАО "Прогрессивные Химические Технологии"</h2>
          <ul>
            <li>
              <a href="mailto:zaopht1996@gmail.com" title='Написать нам на почту'>zaopht1996@gmail.com</a>
            </li>
            <br />
            <li>
              <a href="https://yandex.ru/maps/-/CHHgUxa" title='Посмотреть на картах'>117545, г. Москва, <br /> 1-й Дорожный проезд, дом 7</a>
            </li>
          </ul>
        </div>
        <div>
          <div>
          <a href="/"><img src={logo} alt="" className='logoPct' /></a>
          </div>
          <div>
            <h2>Генеральный директор: <br /> Зотов Вячеслав Иванович</h2>
            <a href="mailto:progchemtech@gmail.com">progchemtech@gmail.com</a>

          </div>

        </div>
      </section>
      
      <AltairContactCard />
    </div>
  );
}
