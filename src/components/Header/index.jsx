import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { CartModal } from "../CartModal";
import styles from "./style.module.scss"


export const Header = ({cartList, removeAllCart, removeFromCart, productList, value, setValue}) => {
  
   const [isOpen, setIsOpen] = useState(false)

   const submit = (e) =>{
      e.preventDefault()
   }

   return (
      <header>
         <div className="container">
            <div className={styles.FlexBox}>
               <img src={Logo} alt="Logo Kenzie Burguer" />
               <div className={styles.Cart}>
               <form onSubmit={submit}>
                     <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Filtrar produto."
                     />
                     <button  type="submit">
                       <MdSearch size={35} color="var(--color-primary)" />
                     </button>
                  </form>
                  
                  <button onClick={() => setIsOpen(true)}>
                      <MdShoppingCart size={35} color="var(--color-grey300)"/>
                      <span>{cartList.length}</span>
                  </button>
               
                  {isOpen ? <CartModal cartList={cartList} removeAllCart={removeAllCart} removeFromCart={removeFromCart} setIsOpen={setIsOpen}/>: null}
                  
               </div>
            </div>
         </div>
      </header>
   );
};
