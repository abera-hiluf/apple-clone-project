import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/iphone/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch(() => console.log("Unable to fetch"));
  }, []);

  return (
    <div className="container mt-4">
      {/* console.log("yoyo") */}
      <h2 className="text-center mb-4">iPhone Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.product_id}>
            <div className="card" style={{ height: "100%" }}>
              <img
                src={product.product_img}
                alt={product.product_name}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <div className="card-body" style={{ padding: "15px" }}>
                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                  {product.product_name}
                </h5>
                <p className="card-text" style={{ fontSize: "14px" }}>
                  {product.product_description}
                </p>
                <p className="text-muted" style={{ fontSize: "13px" }}>
                  {product.starting_price}
                </p>
                <Link
                  to={product.product_link}
                  className="btn btn-primary"
                  style={{ marginTop: "10px" }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Iphone;
