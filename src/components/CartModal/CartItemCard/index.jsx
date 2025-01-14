import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss"

export const CartItemCard = ({ product, removeFromCart }) => {
   return (
     <li className={styles.listModal}>
      <div className={styles.cardModal}>
         <img src={product.img} alt={product.name} />
         <div>
           <h3 className="title">{product.name}</h3>
           <span className="paragraph green">
             {product.price.toLocaleString("pt-BR", {
               style: "currency",
               currency: "BRL",
             })}
           </span>
         </div>

         <button
           onClick={() => removeFromCart(product.id)}
           aria-label="delete"
           title="Remover item"
         >
           <MdDelete size={21} />
         </button>
       </div>
     </li>
   );
};
