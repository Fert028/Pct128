import style from '../../styles/Home.module.scss';
import data from '../../data/products.json';

export default function Categories({chooseCategory, isActive}) {
  return(
    <div className={style.categories}>
      {data.categories.map(el => (
        <button 
          className={style.categories__button + `${isActive ? 'activeBtn' : ''}`}
          key={el.key} 
          onClick={() => chooseCategory(el.key)}
        >
          {el.name}
        </button>
      ))}
    </div>
  )
}
