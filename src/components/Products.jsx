import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "regenerator-runtime/runtime";

function Products() {
  const [productsData, setProductsData] = useState("");
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data);
      setProductsData(response.data);
      setErrMsg("");
    } catch (err) {
    //   console.log(err.response);
      setErrMsg(err.response);
    }
  }

  return (
    <div>
      <h1>Data Fetched from API</h1>
      {productsData !== "" && (
        <pre>{JSON.stringify(productsData, undefined, 2)}</pre>
      )}
      {productsData === "" && errMsg && <div>{errMsg}</div>}
      {productsData === "" && !errMsg && <div>Loading...</div>}
    </div>
  );
}

export default Products;
