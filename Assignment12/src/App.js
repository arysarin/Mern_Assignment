import { Product } from './components/product/Product';
import ProductForm from './components/product-form/ProductForm'
import {useState} from 'react';

function App() {
  const [products,setProduct] =useState([
    {
      product_name:"Lenovo IdeaPad Gaming 3i",
      product_image:"https://www.lenovo.com/medias/ideapad-gaming3i-photo1-1-.png?context=bWFzdGVyfHJvb3R8MTM4NTExM3xpbWFnZS9wbmd8aDk2L2g2Mi8xNDk0MTgyNzMzNDE3NC5wbmd8NzY4MDMyMzJlYzViMjkyMTQ0NjUxNDcyYTQ4ZDc4ZWE3ZWZiNGNlYWZjMzZlZDBlNDgzMDBkOTNlNDI4NzMwNg",
      product_price:"65,990",
    },
    {
      product_name:"Glorious Model D",
      product_image:"https://cdn.salla.sa/H73BtLwk8wHA9gez98cMGEoEFS7Ss7jauuDMegCp.png",
      product_price:"8,999",
    },
    {
      product_name:"Razer Mouse Bungee V2",
      product_image:"https://i0.wp.com/compify.in/wp-content/uploads/2020/08/Razer-Mouse-Bungee-V2.jpg",
      product_price:"1,600",
    },
  ]);
  const addNewProductHandler=(product)=>{
    const productObj = {
      product_name:product.productName,
      product_price:product.productPrice,
      product_image:product.productImage
    }
    setProduct([...products,productObj]);
  }
  return (
    <div className="App">

      <ProductForm onProductAdded ={addNewProductHandler}/>
      <h1>List Products</h1>
      {products.map((product,index) =>
      <Product key = {index} pname = {product.product_name} 
      pimage = {product.product_image} 
      pprice = {'₹'+product.product_price}/>
    )}
    </div>
  )
}
export default App;
