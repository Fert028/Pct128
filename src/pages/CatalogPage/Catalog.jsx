import { useEffect, useState } from "react";
import style from "../../styles/Catalog.module.scss";
import data from "../../data/products.json";
import ProductCard from "../../components/ProductCard";

export default function Catalog(props) {
  document.title = props.title;

  const [items, setItems] = useState(data.items);
  const [category, setCategory] = useState("all");
  const [categoryText, setCategoryText] = useState("Все");
  // const [activeButton, setActiveButton] = useState("all")

  useEffect(() => {
    const filteredItems = [...data.items].filter((item) =>
      item.category?.find(i => i === category),
    );
    if (category === "all") {
      setItems(data.items);
    } else {
      setItems(filteredItems);
    }
    const categoryTitle = data.categories.find((item) => item.key === category);
    setCategoryText(categoryTitle.name);
  }, [category, categoryText]);

  return (
    <div className={style.wrapper}>
      <h1 className="title">Каталог</h1>
      <div className={style.container}>
        <div className={style.categories__wrapper}>
          <div className={style.categories}>
            {data.categories.map((el) => (
              <button
                key={el.key}
                onClick={() => setCategory(el.key)}
                className="button"
              >
                {el.name}
              </button>
            ))}
          </div>
          <h2>{categoryText}</h2>
        </div>
        <div className={style.products}>
          {items.map((el) => (
            <ProductCard key={el.id} item={el} productId={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
