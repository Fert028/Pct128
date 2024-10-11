import logo from "../assets/img/logo/logoПХТ128.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <a href="/">
            <img src={logo} alt="ПХТ" className="logoPct" />
          </a>
          <p>Безопасность ваша и ваших близких</p>
        </div>
        <a href="https://github.com/Fert028" target="_blank" className="copyraght">&copy;Fert028 2024</a>
      </div>
    </footer>
  );
}
