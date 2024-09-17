import style from '../../styles/Home.module.scss';
import data from '../../data/products.json';

export default function Categories(props) {
  return(
    <div className={style.categories}>
      {data.categories.map(el => (
        <button 
          className={style.categories__button} 
          key={el.key} 
          onClick={() => props.chooseCategory(el.key)}
        >
          {el.name}
        </button>
      ))}
    </div>
  )
}
