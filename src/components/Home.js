import { CartState } from "../contextApis/Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
// import './style.css'

function Home(){

  const{ state : {products}, productState : {byStock, byFastDelivery, byRatings, searchQuery, sort}} = CartState();

    console.log(products)

    const transformProducts = () => {
      let sortedProducts = products;

      if(sort){
       sortedProducts =  sortedProducts.sort((a,b) => 
           sort === "lowToHigh" ? a.price - b.price : b.price - a.price
        )
      }

      if(!byStock){
        sortedProducts = sortedProducts.filter((prod) => prod.inStock)
      }

      if(byFastDelivery){
        sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
      }

      if(byRatings){
        sortedProducts = sortedProducts.filter(
          (prod) => prod.ratings >= byRatings)
      }


      if(searchQuery){
        sortedProducts = sortedProducts.filter((prod) => 
          prod.name.toLowerCase().includes(searchQuery)
        )
      }

      return sortedProducts
    }
     
    return <>
       <div className="home">
       <Filter />
         <div className="productContainer">
            {transformProducts().map((prod) => {
                return <SingleProduct prod={prod} key={prod.id}/>
            })}
         </div>
       </div>
    </>
}

export default Home;