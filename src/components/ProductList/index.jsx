import { useRef,useEffect } from "react"
import { ProductCard } from "./ProductCard"
import styles from "./style.module.scss"

export const ProductList = ({ children}) => {
   
   
   return (
      <div className="container">
         <ul>
            {children}
         </ul>
      </div>
   )
}