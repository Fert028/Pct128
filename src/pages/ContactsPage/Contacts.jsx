import style from "../../styles/Contacts.module.scss";
import AltairContactCard from "./AltairContactCard";
import logo from "../../assets/img/logo/logoПХТ128.svg";

export default function Contacts() {
  return (
    <div className={style.container}>
      <h1 className="title">Контакты</h1>

      <section className={style.PctConatactCard}>
        <div className={style.pctLinks}>
          <h2>ЗАО "Прогрессивные Химические Технологии"</h2>
          <ul>
            <li>
              <a
                href="mailto:zaopht1996@gmail.com"
                title="Написать нам на почту"
                className="link"
              >
                zaopht1996@gmail.com
              </a>
            </li>
            <br />
            <li>
              <a
                href="https://yandex.ru/maps/-/CHHgUxa"
                title="Посмотреть на картах"
                target="_blank"
                className="link"
              >
                117545, г. Москва, <br /> 1-й Дорожный проезд, дом 7
              </a>
            </li>
          </ul>
        </div>
        <div className={style.genereal}>
          <a href="/" className={style.logoPct}>
            <img src={logo} alt="" className="logoPct" />
          </a>
          <div>
            <h4>Генеральный директор:</h4>
            <h2>Вячеслав Иванович Зотов</h2>
            <br />
            <a href="mailto:progchemtech@gmail.com" className="link">
              progchemtech@gmail.com
            </a>
          </div>
        </div>
      </section>

      <AltairContactCard />
    </div>
  );
}
