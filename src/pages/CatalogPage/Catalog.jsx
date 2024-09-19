import ProductCard from '../../components/ProductCard';
import style from '../../styles/Catalog.module.scss';
import data from '../../data/products.json';

export default function Catalog() {
  return (
    <div className={style.wrapper}>
      <h1 className={style.hero}>Каталог</h1>
      <div className={style.container}>
        <div className={style.products__container}>
          {data.items.map(el => (
              <ProductCard key={el.id} item={el} nameProduct={el.name} img={el.img} id={el.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
