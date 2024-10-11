import style from "../../styles/Contacts.module.scss";
import logo from "../../assets/img/logo/logoПХТ128.svg";
import altairLogo from "../../assets/img/logo/altair_pb--shadow.png";
import iconGlobe from "../../assets/img/icons/globe.svg";
import iconPhone from "../../assets/img/icons/phone.svg";
import iconMail from "../../assets/img/icons/mail.svg";
import iconLocation from "../../assets/img/icons/location.svg";

export default function Contacts(props) {
  document.title = props.title;
  return (
    <div className={style.container}>
      <h1 className="title">Контакты</h1>

      <section>
        <div className={style.PctConatactCard}>
          <div className={style.pctLinks}>
            <h2>ЗАО "Прогрессивные Химические Технологии"</h2>
            <ul>
              <li>
                <a href="mailto:zaopht1996@gmail.com" title="Написать нам на почту" className="link">
                  zaopht1996@gmail.com
                </a>
              </li>
              <br />
              <li>
                <a href="https://yandex.ru/maps/-/CHHgUxa" title="Посмотреть на картах" target="_blank" className="link">
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
        </div>
      </section>

      <section>
      <div className={style.partner}>
        <a href="https://www.altairpb.ru/" target="blank" className={style.altairLogo}>
          <img src={altairLogo} alt='Логотип партнёра "АльтаирПБ"' />
        </a>
        <ul>
          <li>
            <img src={iconGlobe} alt="" />
            <a href="https://www.altairpb.ru/" title="Посетить сайт АльтаирПБ" target="blank" className="link">
              altairpb.ru/
            </a>
          </li>
          <li>
            <img src={iconPhone} alt="" />
            <a href="tel:+74955420156" title="Позвонить АльтаирПБ" className="link">
              +74955420156
            </a>
            <a href="tel:+79255451481" title="Позвонить АльтаирПБ" className="link">
              +79255451481
            </a>
          </li>
          <li>
            <img src={iconMail} alt="" />
            <a href="mailto:altairpb@bk.ru" title="Написать на почту АльтаирПБ" className="link">
              altairpb@bk.ru
            </a>
          </li>
          <li>
            <img src={iconLocation} alt="" />
            <a href="https://yandex.ru/maps/-/CHHgUxa" title="Посмотреть на картах" className="link">
              117545, г. Москва, <br /> 1-й Дорожный проезд, дом 7
            </a>
          </li>
        </ul>
      </div>
    </section>
    </div>
  );
}
