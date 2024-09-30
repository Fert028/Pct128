import style from "../../styles/Home.module.scss";
import imageTitle from "../../assets/img/images/him.jpg";
import logo from "../../assets/img/logo/logoПХТ128.svg";
import ProductCard from "../../components/ProductCard";
import AltairContactCard from "../ContactsPage/AltairContactCard";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <div className={style.home__title}>
          <article className={style.heroTitle__container}>
            <h1 className={style.heroTitle}>
              П
              <span className={style.animationText} data-line="рогрессивные">
                рогрессивные
              </span>
            </h1>
            <h1 className={style.heroTitle}>
              Х
              <span className={style.animationText} data-line="имические">
                имические
              </span>
            </h1>
            <h1 className={style.heroTitle}>
              Т
              <span className={style.animationText} data-line="ехнологии">
                ехнологии
              </span>
            </h1>
            <br />
            <p className="text">
              "ПХТ" - научно-производственное предприятие, осуществляющее полный
              цикл выпускаемой продукции.
            </p>
          </article>
          <img src={imageTitle} alt="him" className={style.imageTitle} />
        </div>
      </section>

      <section>
        <div className={style.home__products}>
          <div className={style.home__productsTitle}>
            <h1>Топ товаров</h1>
          </div>
          <div className={style.home__productsItems}>
            <ProductCard productId={1} />
            <ProductCard productId={8} />
            <ProductCard productId={15} />
          </div>
        </div>
      </section>

      <section>
        <div className={style.advantages}>
          <h1>Преимущества</h1>
          <div className={style.advantages__container}>
            <div className={style.advantages__container__item}>
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
                <img src={logo} alt="logo" className={style.logo__advantages} />
              </a>
            </div>
            <div className={style.advantages__container__item}>
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

      <AltairContactCard />
    </div>
  );
}
