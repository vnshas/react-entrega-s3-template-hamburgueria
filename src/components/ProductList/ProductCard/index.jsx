import styles from "./style.module.scss"

export const ProductCard = ({ product, addToCart }) => {
    return (
      <li key={product.id} tabIndex={0}>
        <div className={styles.CardImage}><img src={product.img} alt={product.name} /></div>
        <div className={styles.Category}>
          <label htmlFor="item-1"></label>
          <h3 className="title">{product.name}</h3>
          <span className="paragraph sm">{product.category}</span>
          <span className="paragraph green">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button className="paragraph" onClick={() => addToCart(product)}>Adicionar</button>
        </div>
      </li>
    )
}