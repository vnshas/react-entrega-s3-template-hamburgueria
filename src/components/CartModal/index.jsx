import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss"

export const CartModal = ({ cartList, removeFromCart, removeAllCart, setIsOpen }) => {
   const total =  cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div className={styles.modalBox}>
            <div className={styles.Cart}>
               <h2>Carrinho de compras</h2>
               <button className={styles.closeButton} onClick={() => setIsOpen(false) } aria-label="close" title="Fechar">
                  <MdClose size={21} color="var(--color-grey0)"/>
               </button>
            </div>
            <div>
               <ul className={styles.listModal}>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeFromCart={removeFromCart} />
                  ))}
               </ul>
            </div>
            <div>
               <div>
                  <span>Total</span>
                  <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button onClick={() => removeAllCart()}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
