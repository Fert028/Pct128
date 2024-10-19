import style from "./Catalog.module.scss";
import data from "../../data/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Catalog() {
  document.title = "ПХТ - Каталог";

  console.log(data.categories, data.items);

  return (
    <div className={style.wrapper}>
      <h1 className="title">Каталог</h1>
      <div className="container">
        {data.categories.map(category => (
          <section key={category.id} className="slider__wrapper">
            <h1>{category.name}</h1>
            <div className="slider">
              <ul className="slider__slideContainer">
                {data.items.filter(item => item.category?.find(i => i === category.key)).map(el => (
                  <li key={el.id} className="slider__slide">
                    <ProductCard productId={el.id} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
