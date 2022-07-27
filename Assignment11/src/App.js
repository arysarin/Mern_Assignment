import { Product } from './components/Product'
function App() {
  const product_arr = [
    {
      product_name:'Headphone',
      product_image:"https://m.media-amazon.com/images/I/81kwtHjr3BL._SL1500_.jpg",
      product_price:"Price: 1600/-"
    },
    {
      product_name:'Sony LED 32inch ',
      product_image:"https://m.media-amazon.com/images/I/91v4nFq0LuL._SL1500_.jpg",
      product_price:"Price: 30000/-"
    },
    {
      product_name:'Home theatre',
      product_image:"https://5.imimg.com/data5/UM/WL/CW/SELLER-97821727/home-theatre-system-500x500.jpg",
      product_price:"Price: 6400/-"
    }
  ]

  return (
    <div className="App">
      <h1>List of Products</h1>
      <Product pname={product_arr[0].product_name} pimage={product_arr[0].product_image} price={product_arr[0].product_price}/>
      <Product pname={product_arr[1].product_name} pimage={product_arr[1].product_image} price={product_arr[1].product_price}/>
      <Product pname={product_arr[2].product_name} pimage={product_arr[2].product_image} price={product_arr[2].product_price}/>
    </div>
  );
}

export default App;
