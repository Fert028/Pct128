import style from "../../styles/Contacts.module.scss";
import altairLogo from "../../assets/img/logo/altair_pb--shadow.png";
import iconGlobe from "../../assets/img/icons/globe.svg";
import iconPhone from "../../assets/img/icons/phone.svg";
import iconMail from "../../assets/img/icons/mail.svg";
import iconLocation from "../../assets/img/icons/location.svg";

export default function AltairContactCard() {
  return (
    <section>
      <div className={style.partner}>
        <h1>Наш партнер</h1>
        <a
          href="https://www.altairpb.ru/"
          target="blank"
          className={style.altairLogo}
        >
          <img src={altairLogo} alt='Логотип партнёра "АльтаирПБ"' />
        </a>
        <ul>
          <li>
            <img src={iconGlobe} alt="" />
            <a
              href="https://www.altairpb.ru/"
              title="Посетить сайт АльтаирПБ"
              target="blank"
              className="link"
            >
              altairpb.ru/
            </a>
          </li>
          <li>
            <img src={iconPhone} alt="" />
            <a
              href="tel:+74955420156"
              title="Позвонить АльтаирПБ"
              className="link"
            >
              +74955420156
            </a>
            <a
              href="tel:+79255451481"
              title="Позвонить АльтаирПБ"
              className="link"
            >
              +79255451481
            </a>
          </li>
          <li>
            <img src={iconMail} alt="" />
            <a
              href="mailto:altairpb@bk.ru"
              title="Написать на почту АльтаирПБ"
              className="link"
            >
              altairpb@bk.ru
            </a>
          </li>
          <li>
            <img src={iconLocation} alt="" />
            <a
              href="https://yandex.ru/maps/-/CHHgUxa"
              title="Посмотреть на картах"
              className="link"
            >
              117545, г. Москва, <br /> 1-й Дорожный проезд, дом 7
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
