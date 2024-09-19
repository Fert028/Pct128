import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import style from '../../styles/Product.module.scss';
import data from '../../data/products.json';

export default function Product() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    const res = data.items.find((item) => item.id === parseInt(params.id));
    setProduct(res);
  },[product])

  console.log(data.items[0]);
  

  return (
    <div className={style.container}>
      <div className={style.contentProduct}>
        <h2>{product.name}</h2>
        <div className={style.documents}>
          {/* {product.documents.map(el, i => {
            <a href={`../../${el[i]}`} key={i} item={el[i]}>instruction</a>
          })} */}
        </div>
      </div>
      <img className={style.imageProduct} src={`../../${product.img}`} alt={`Не удалось загрузить изображение ${product.name}`} />
    </div>
  )
}