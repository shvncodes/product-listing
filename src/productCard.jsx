import "./productCard.css";

function getCurrencySymbol(currency) {
  switch (currency) {
    case "INR":
      return "₹";

    case "USD":
      return "$";

    case "EUR":
      return "€";

    default:
      return "₹";
  }
}

function Product(props) {
  const { product } = props;

  const colorString = product.colors.join(", ");
  const sizeString = product.sizes.join(", ");

  return (
    <div className="productContainer">
      <img src={product.imgUrl} alt={product.title} width={290} height={350} />
      {product.isSponsored && <p className="sponsored">Sponsored</p>}
      <p className="brandName">{product.brandName}</p>
      <p className="title">{product.title}</p>
      <p className="colors">{colorString}</p>
      {product.isAssured && <p className="assured">Assured</p>}
      <div className="priceSection">
        <p className="currentPrice">
          {getCurrencySymbol(product.currency)}
          {product.currentPrice}
        </p>
        <p className="actualPrice">
          {getCurrencySymbol(product.currency)}
          {product.actualPrice}
        </p>
        <p className="discount">{product.discount}% off</p>
      </div>
      <p className="productStatus">{product.productStatus}</p>
      <div className="sizes">
        <span>Size</span> {sizeString}
      </div>
    </div>
  );
}

export default Product;