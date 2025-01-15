import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss"
import { useEffect, useRef } from "react";
import { useOutClick } from "../../hooks/useOutClick";
import { useKeyDown } from "../../hooks/useKeyDown";

export const CartModal = ({ cartList, removeFromCart, removeAllCart, setIsOpen }) => {
   const total =  cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const modalRef = useOutClick(() =>{
      setIsOpen(false)
   })

   
   const buttonRef = useKeyDown("Escape", (element) => {
      element.click()
   })

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div ref={modalRef} className={styles.modalBox}>
            <div>   
               <div className={styles.Cart}>
                  <h2 className="title">Carrinho de compras</h2>
                  <button ref={buttonRef} className={styles.closeButton} onClick={() => setIsOpen(false) } aria-label="close" title="Fechar">
                     <MdClose size={21} color="var(--color-grey0)"/>
                  </button>
               </div>
          </div>
            <div>
               <ul className={styles.listModal}>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeFromCart={removeFromCart} />
                  ))}
               </ul>
            </div>
            <div className={styles.totalCart}>
               <div >
                  <span className="paragraph">Total</span>
                  <span className="paragraph grey">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button className="title" onClick={() => removeAllCart()}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
