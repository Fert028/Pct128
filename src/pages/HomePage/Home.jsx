import style from '../../styles/Home.module.scss';
import imageTitle from '../../img/image/him.jpg';
import data from '../../data/products.json';
import ProductCard from '../../components/ProductCard';
import Categories from './Categories';
import { useEffect, useState } from 'react';

export default function Home() {
  data.currentItems = data.items;

  const [items, setItems] = useState(data.currentItems)
  const [category, setCategory] = useState('medicine');

  useEffect(() => {
    const filteredItems = [...data.currentItems].filter((item) => item.category?.find(v => v === category));
    setItems(filteredItems)
  }, [category])

  return (
    <div className={style.container}>
      <section>
        <div className={style.home__title}>
          <div className={style.heroTitle__container}>
            <h1 className={style.heroTitle}>Прогрессивные <br /> Химические <br /> Технологии</h1>
            <br />
            <p>"ПХТ" - научно-производственное предприятие, осуществляющее полный цикл выпускаемой продукции.</p>
          </div>
          <img src={imageTitle} alt="him" className={style.imageTitle} />
        </div>
      </section>
      <section>
        <Categories chooseCategory={setCategory} />
      </section>
      <section className={style.products}>
        {items.map(el => (
          <ProductCard key={el.id} item={el} id={el.id} />
        ))}
      </section>
      <section>
        <div className={style.advantages}>
          <h1>Преимущества</h1>
          <div className={style.advantages__container}>
            <div className={style.advantages__container__item}>
              <article>
                <h2>Беззащитность инфекций</h2>
                <p>Гарантированно более эффективное применение дезсредств на его основе по сравнению аналогичными дезсредствами</p>
              </article>
              <article>
                <h2>Быстрее дезинфицирует</h2>
                <p>Экспозиция препарата, нанесенного на обрабатываемые поверхности, в два раза быстрее, по сравнению с аналогичными препаратами на основе АДМБАХ</p>
              </article>
            </div>
            <div className={style.advantages__container__item}>
              <article>
                <h2>Улучшенные моющие свойства</h2>
                <p>Линейка новых дезинфицирующих концентратов обладает лучшими моющими характеристиками</p>
              </article>
              <article>
                <h2>Производится в России</h2>
                <p>Российское производство позволяет удовлетворить любой спрос на высокоэффективные дезинфицирующие средства, сохраняя низкие цены</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>  
  );
}
