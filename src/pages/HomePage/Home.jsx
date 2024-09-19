import { useEffect, useState } from 'react';
import style from '../../styles/Home.module.scss';
import data from '../../data/products.json';

import imageTitle from '../../assets/img/images/him.jpg';
import altairLogo from '../../assets/img/logo/altair_pb--shadow.png';
import iconGlobe from '../../assets/img/icons/globe.svg'
import iconPhone from '../../assets/img/icons/phone.svg'
import iconMail from '../../assets/img/icons/mail.svg'
import iconLocation from '../../assets/img/icons/location.svg'

import ProductCard from '../../components/ProductCard';
import Categories from './Categories';

export default function Home() {
  data.currentItems = data.items;

  const [items, setItems] = useState(data.currentItems);
  const [category, setCategory] = useState('medicine');
  const [categoryText, setCategoryText] = useState('Медицина');
  
  useEffect(() => {
    const filteredItems = [...data.currentItems].filter((item) => item.category?.find(i => i === category));
    setItems(filteredItems)
    const categoryTitle = data.categories.find((item) => item.key === category);
    setCategoryText(categoryTitle.name)
  }, [category, categoryText])

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
        <div className={style.sectionProducts}>
          <Categories chooseCategory={setCategory} />
          <h1>{categoryText}</h1>
          <div className={style.products}>
            {items.map(el => (
              <ProductCard key={el.id} item={el} id={el.id} />
            ))}
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
      <section>
        <div className={style.partner}>
          <h1>Наш партнер</h1>
          <a href="https://www.altairpb.ru/" target='blank' className={style.altairLogo}>
            <img src={altairLogo} alt='Логотип партнёра "АльтаирПБ"' />
          </a>
          <ul>
            <li>
              <img src={iconGlobe} alt="" />
              <a href="https://www.altairpb.ru/" title='Посетить сайт АльтаирПБ'>www.altairpb.ru/</a>
            </li>
            <li>
              <img src={iconPhone} alt="" />
              <a href="trl:+74955420156" title='Позвонить АльтаирПБ'>+74955420156</a>
              <a href="tel:+79255451481" title='Позвонить АльтаирПБ'>+79255451481</a>
            </li>
            <li>
              <img src={iconMail} alt="" />
              <a href="mailto:altairpb@bk.ru" title='Написать на почту АльтаирПБ'>altairpb@bk.ru</a>
            </li>
            <li>
              <img src={iconLocation} alt="" />
              <a href="https://yandex.ru/maps/-/CHHgUxa" title='Посмотреть на картах'>117545, г. Москва, <br /> 1-й Дорожный проезд, дом 7</a>
            </li>
          </ul>
        </div>
      </section>
    </div>  
  );
}
