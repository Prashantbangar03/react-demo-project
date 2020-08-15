import React from "react";
import products from "../productList";
import ProductCard from "../components/ProductCardComponent";

const ProductList = () => {
  return (
    <div className="col-4">
      {products.map(product => <ProductCard product={product}/>)}
    </div>
  );
};

export default ProductList;