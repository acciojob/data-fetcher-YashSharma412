import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "regenerator-runtime/runtime";

function Products() {
    const [productsData, setProductsData] = useState("");
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data);
      setProductsData(response.data);
    } catch (err) {
      console.log(err.response);
    }
  }
  
  
  return (
    <div>
      <h1>Data Fetched from API</h1>
      {
        productsData !== "" && <pre>{JSON.stringify(productsData, undefined, 4)}</pre>
      }
    </div>
  );
}

export default Products;
