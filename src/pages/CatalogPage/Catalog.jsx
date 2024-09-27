import { useEffect, useState } from 'react';
import style from '../../styles/Catalog.module.scss';
import data from '../../data/products.json';
import ProductCard from '../../components/ProductCard';

export default function Catalog() {
  const [items, setItems] = useState(data.items);
  const [category, setCategory] = useState('all');
  const [categoryText, setCategoryText] = useState('Медицина');
  
  useEffect(() => {
    const filteredItems = [...data.items].filter((item) => item.category?.find(i => i === category));
    if (category === 'all') {
      setItems(data.items)
    } else {
      setItems(filteredItems)
    }
    const categoryTitle = data.categories.find((item) => item.key === category);
    setCategoryText(categoryTitle.name)
  }, [category, categoryText])

  return (
    <div className={style.wrapper}>
      <h1 className={style.hero}>Каталог</h1>
      <div className={style.container}>
        <div className={style.categories}>
          {data.categories.map(el => (
            <button 
              className={style.categories__button}
              key={el.key} 
              onClick={() => setCategory(el.key)}
            >
              {el.name}
            </button>
          ))}
        </div>
        <h1>{categoryText}</h1>
        <div className={style.products}>
          {items.map(el => (
            <ProductCard key={el.id} item={el} id={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
