import style from "./Home.module.scss";
import imageHim from "../../assets/img/images/him.jpg";
import logo from "../../assets/img/logo/logoПХТ128.svg";
import ProductCard from "../../components/ProductCard/ProductCard";
import { NavLink } from "react-router-dom";

export default function Home() {
  document.title = "ПХТ";

  const elementsId = [15, 1, 2, 3, 4, 8, 9, 10, 11, 12];

  return (
    <div className="container">
      <section>
        <div className={style.title}>
          <article className={style.hero__container}>
            <h1 className={style.hero}>П<span>рогрессивные</span></h1>
            <h1 className={style.hero}>Х<span>имические</span></h1>
            <h1 className={style.hero}>Т<span>ехнологии</span></h1>
            <br />
            <p className="text">"ПХТ" - научно-производственное предприятие, осуществляющее полный цикл выпускаемой продукции.</p>
          </article>
          <img src={imageHim} alt="him" className={style.title__image} />
        </div>
      </section>

      <section>
        <div className="slider__wrapper">
          <h1>Топ товаров</h1>
          <div className="slider">
            <ul className="slider__container">
              {elementsId.map(el => (
                <li key={el} className="slider__slide">
                  <ProductCard productId={el} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <NavLink to="/catalog" className={style.openAllProducts}>
              Перейти в каталог
              <span></span>
            </NavLink>
          </div>
        </div>
      </section>

      <section>
        <div className={style.advantages}>
          <h1>Преимущества</h1>
          <div className={style.advantages__container}>
            <div className={style.advantages__item}>
              <article>
                <h2>Беззащитность инфекций</h2>
                <p className="text">
                  Гарантированно более эффективное применение дезсредств на его
                  основе по сравнению аналогичными дезсредствами
                </p>
              </article>
              <article>
                <h2>Быстрее дезинфицирует</h2>
                <p className="text">
                  Экспозиция препарата, нанесенного на обрабатываемые
                  поверхности, в два раза быстрее, по сравнению с аналогичными
                  препаратами на основе АДМБАХ
                </p>
              </article>
            </div>
            <div className={style.logo__container}>
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className={style.advantages__item}>
              <article>
                <h2>Улучшенные моющие свойства</h2>
                <p className="text">
                  Линейка новых дезинфицирующих концентратов обладает лучшими
                  моющими характеристиками
                </p>
              </article>
              <article>
                <h2>Производится в России</h2>
                <p className="text">
                  Российское производство позволяет удовлетворить любой спрос на
                  высокоэффективные дезинфицирующие средства, сохраняя низкие
                  цены
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
