import { useEffect, useState } from "react"
import { CartModal } from "../../components/CartModal"
import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"
import { ProductCard } from "../../components/ProductList/ProductCard"

export const HomePage = ({busca}) => {
   const [productList, setProductList] = useState([])
   const localCartList = localStorage.getItem("@CARTLIST")
   const [cartList, setCartList] = useState(localCartList ? JSON.parse(localCartList) : [])
   const [value, setValue] = useState("")
   // useEffect montagem - carrega os produtos da API e joga em productList

   useEffect(() =>{

      const getProducts = async () => {
         try{
            const response = await fetch ("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
            const json = await response.json()
            setProductList(json)
         }catch(error){
            console.log(error)
         }
         finally{
            
         }
      }
      getProducts()
   }, [])

   // useEffect atualização - salva os produtos no localStorage (carregar no estado)

   useEffect(() =>{
      localStorage.setItem("@CARTLIST", JSON.stringify(cartList))
   }, [cartList])

   // adição, exclusão, e exclusão geral do carrinho
   const addToCart = (product) => {
      const newProduct = {...product, id:crypto.randomUUID()}
      const newCartList = [...cartList, newProduct]
      setCartList(newCartList)
   }

   const removeFromCart = (removingID) =>{
      const newCartlist = cartList.filter(product => product.id !== removingID)
      setCartList(newCartlist)
   }

   const removeAllCart = () =>{
      const newCartlist = []
      setCartList(newCartlist)
   }

   // renderizações condições e o estado para exibir ou não o carrinho
   

   // filtro de busca
      const filterProduct = productList.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
      

   // estilizar tudo com sass de forma responsiva

   return (
     <>
       <Header
         value={value}
         setValue={setValue}
         productList={productList}
         removeAllCart={removeAllCart}
         cartList={cartList}
         removeFromCart={removeFromCart}
       />
       <main>
         <ProductList>
           {value !== ""
             ? filterProduct.map((product) => (
                 <ProductCard
                   key={product.id}
                   product={product}
                   addToCart={addToCart}
                 />
               ))
             : productList.map((product) => (
                 <ProductCard
                   key={product.id}
                   product={product}
                   addToCart={addToCart}
                 />
               ))}
         </ProductList>
       </main>
     </>
   )
}
