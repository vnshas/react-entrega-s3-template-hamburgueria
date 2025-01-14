import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss"

export const ProductList = ({ productList, addToCart, filterProduct, value }) => {
   return (
      <div className="container">
         <ul>
            {value !== "" ? filterProduct.map((product) => (
               <ProductCard key={product.id} product={product} addToCart={addToCart} />
            )) :productList.map((product) => (
               <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
         </ul>
      </div>
   );
};
