import { products } from "./mock-data";
import Product from "./product";
import "./App.css";

function App() {
    return (
      <div className="mainContainer">
        {
          products.map((product)=> {
              return <Product key={product.id} product={product}/>
          })
        }
      </div>
    )  
  

}

export default App;