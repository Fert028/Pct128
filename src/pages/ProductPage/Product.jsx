import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import style from '../../styles/Product.module.scss';
import data from '../../data/products.json';
import classNames from 'classnames';

export default function Product() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    const res = data.items.find((item) => item.id === parseInt(params.id));
    setProduct(res);
  },[product])

  const item = data.items.find((el) => el.id === parseInt(params.id))

  const titleTextProduct = item.title

  return (
    <div className={style.container}>
      <div className={style.contentProduct}>

        <div className={style.title}>
          <h1>"{product.name}"</h1>

          <a href={item.linksAltair} className={style.orderButton__wrapper} target='blank'>
            <button className={style.orderButton}>Заказать</button>
          </a>
        </div>

        <div className={style.subTitle}>
          {titleTextProduct}
        </div>

        <div className={classNames(style.docsLi, 'docsList')}>
          <h3>Документы:</h3>
          <ul>
            {item.documents.map(el => (
              <li><a className={style.linkToDocs} href={`../../${el.documentLink}`} key={el.name} target='blank'>{el.name}</a></li>
            ))}
          </ul>
        </div>
        
      </div>
      <div>
        <img className={style.imageProduct} src={`../../${product.img}`} alt={`Не удалось загрузить изображение ${product.name}`} />
      </div>
    </div>
  )
}