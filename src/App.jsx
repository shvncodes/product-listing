import { products } from "./mock-data";
import ProductCard from "./productCard";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState(products);

  const handleSearch = () => {
    alert(searchQuery);
    setSearchQuery("");
  };

  useEffect(()=>{
    const filterList = products.filter((product) =>{
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    })
    setFilteredList(filterList);
  }, [searchQuery]);

  return (
    <div className="mainConatiner">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="search-form"
      >
        <input
          className="search-input"
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="serachBtn">
          Search
        </button>
      </form>
      <div className="productCards">
        {filteredList.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default App;
