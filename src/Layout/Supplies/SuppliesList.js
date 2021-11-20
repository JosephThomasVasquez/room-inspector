import React, { useState, useEffect } from "react";

const SuppliesList = () => {
  const [suppliesList, setSuppliesList] = useState(null);

  const controller = new AbortController();
  const { signal } = controller;
  // get the buildings data from the api
  const getSupplies = async (signal) => {
    try {
      const response = await fetch("http://localhost:8000/supplies", signal);
      const data = await response.json();
      setSuppliesList(data);
    } catch (error) {
      console.log(error);
    }

    return () => {
      controller.abort();
    };
  };

  const listSupplies = () => {
    if (suppliesList !== null) {
      const suppliesMap = suppliesList[0].items.map((item, index) => (
        <tr>
          <th scope="row">{index}</th>
          <td>{item.id}</td>
          <td>{item.productName}</td>
          <td>{item.link}</td>
          <td>{item.inStock}</td>
          <td>{item.order}</td>
        </tr>
      ));
      return suppliesMap;
    }
  };

  useEffect(() => {
    getSupplies(signal);
  }, []);
  console.log(suppliesList);

  return (
    <div>
      <div className="row">
        <h2 className="mb-4">Supplies List</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">id</th>
                <th scope="col">Product Name</th>
                <th scope="col">Link</th>
                <th scope="col">In Stock</th>
                <th scope="col">Order</th>
              </tr>
            </thead>
            <tbody>{listSupplies()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SuppliesList;
