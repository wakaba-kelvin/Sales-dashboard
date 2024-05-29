import React, { useState, useEffect } from "react";
import { BlockTitle } from "../../../styles/global/default";
import { TopProductsWrap } from "./TopProducts.styles";

const TopProducts = () => {
  // State to store the fetched data
  const [schoolData, setSchoolData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("http://localhost:3000/schools")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        setSchoolData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <TopProductsWrap>
      <div className="block-head">
        <BlockTitle className="block-title">
          <h3>Schools</h3>
        </BlockTitle>
      </div>
      <div className="tbl-products">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>School Name</th>
              <th>Product type</th>
              <th>Collections</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {schoolData.map((school, index) => (
              <tr key={school.id}>
                <td>{index + 1}</td>
                <td>{school.schoolName}</td>
                <td>${school.productType}</td>
                <td>{school.collections}</td>
                <td>{school.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TopProductsWrap>
  );
};

export default TopProducts;
