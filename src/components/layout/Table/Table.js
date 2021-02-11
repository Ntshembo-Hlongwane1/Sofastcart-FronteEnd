import { useState } from "react";
import "./Table.css";

const initialState = [
  {
    id: 1,
    title: "Product One",
    images: "/images/product1.jpeg",
    price: "150.00",
    quantityInStock: 5,
  },
  {
    id: 2,
    title: "Product Two",
    images: "/images/product2.jpeg",
    price: "250.00",
    quantityInStock: 2,
  },
  {
    id: 3,
    title: "Product Three",
    images: "/images/product3.jpeg",
    price: "350.00",
    quantityInStock: 3,
  },
];

const Table = () => {
  const [products, setProducts] = useState(initialState);

  const renderTableData = () => {
    return products.map((product, index) => {
      const { id, title, images, price, quantityInStock } = product;

      return (
        <tr key={id}>
          <td>{title}</td>
          <td>
            <img src={images[0]} alt="Some product" />
          </td>
          <td>Rs {price}</td>
          <td>{quantityInStock > 0 ? "In Stock" : "Out of Stock"}</td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    let header = Object.keys(products[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  return (
    <div className="customer_container">
      <h1 class="table-title">React Table</h1>
      <table class="table">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
