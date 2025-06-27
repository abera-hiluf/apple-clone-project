import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleAppleProduct() {
  const { id } = useParams();
    const [product, setProduct] = useState([]);
    console.log(product)

  useEffect(() => {
    fetch("http://localhost:3000/iphone")
      .then((res) => res.json())
      .then((data) => {
        const productList = data;
        const singleProduct = productList.find(
          (product) => product.product_id.toString() === id
        );

        setProduct(singleProduct);
      })
      .catch((err) => {
        setProduct({
          data: null,
          isLoading: false,
          error: "Failed to fetch product details",
        });
      });
  }, [id]);

  if (product.isLoading) {
    return <div>Loading...</div>;
  }

  if (product.error) {
    return <div>{product.error}</div>;
  }

  if (!product.data) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h2>{product.data.product_name}</h2>
      <p>{product.data.product_description}</p>
      <p>{product.data.starting_price}</p>
      <img
        src={product.data.product_img}
        alt={product.data.product_name}
        style={{ width: "300px" }}
      />
    </div>
  );
}

export default SingleAppleProduct;
