import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios library
import { Icons } from "../../../assets/icons";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
import { SalesBlockWrap } from "./Sales.styles";

const SalesBlock = () => {
  const [collection, setCollection] = useState(null);
  const [signUps, setSignUps] = useState(null);
  const [totalRevenue, setTotalRevenue] = useState(null);
  const [bouncedCheques, setBouncedCheques] = useState(null);

  useEffect(() => {
    // Fetch data from both endpoints
    const fetchData = async () => {
      try {
        // Fetch data from the invoices endpoint
        const invoicesResponse = await axios.get("http://localhost:3000/invoices");
        const invoicesData = invoicesResponse.data;

        // Fetch data from the schools endpoint
        const schoolsResponse = await axios.get("http://localhost:3000/schools");
        const schoolsData = schoolsResponse.data;

        // Calculate collections
        const totalCollection = schoolsData.reduce((acc, curr) => acc + curr.schoolBalance, 0);
        setCollection(totalCollection);

        // Calculate sign-ups
        const totalSignUps = schoolsData.length;
        setSignUps(totalSignUps);

        // Calculate total revenue
        const totalRev = invoicesData.reduce((acc, curr) => acc + curr.paidAmount, 0);
        setTotalRevenue(totalRev);

        // Calculate bounced cheques
        const totalBouncedCheques = invoicesData.filter(invoice => invoice.completionStatus === "pending").length;
        setBouncedCheques(totalBouncedCheques);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to run the effect only once

  return (
    <SalesBlockWrap>
      <div className="block-head">
        <div className="block-head-l">
          <BlockTitle className="block-title">
            <h3>Today&apos;s Sales</h3>
          </BlockTitle>
          <p className="text">Sales Summary</p>
        </div>
        <div className="block-head-r">
          <button type="button" className="export-btn">
            <img src={Icons.ExportDark} alt="" />
            <span className="text">Export</span>
          </button>
        </div>
      </div>
      <BlockContentWrap>
        <div className="cards">
          <div className="card-item card-misty-rose">
            <div className="card-item-icon">
              <img src={Icons.CardSales} alt="" />
            </div>
            <div className="card-item-value">{collection !== null ? `$${collection}` : "Loading..."}</div>
            <p className="card-item-text text">Collections</p>
            <span className="card-item-sm-text">+8% from Last Month</span>
          </div>
          <div className="card-item card-latte">
            <div className="card-item-icon">
              <img src={Icons.CardOrder} alt="" />
            </div>
            <div className="card-item-value">{signUps !== null ? signUps : "Loading..."}</div>
            <p className="card-item-text text">Sign-ups</p>
            <span className="card-item-sm-text">+5% from last month</span>
          </div>
          <div className="card-item card-nyanza">
            <div className="card-item-icon">
              <img src={Icons.CardProduct} alt="" />
            </div>
            <div className="card-item-value">{totalRevenue !== null ? `$${totalRevenue}` : "Loading..."}</div>
            <p className="card-item-text text">Total Revenue</p>
            <span className="card-item-sm-text">+1.2% from last month</span>
          </div>
          <div className="card-item card-pale-purple">
            <div className="card-item-icon">
              <img src={Icons.CardCustomer} alt="" />
            </div>
            <div className="card-item-value">{bouncedCheques !== null ? bouncedCheques : "Loading..."}</div>
            <p className="card-item-text text">Bounced cheques</p>
            <span className="card-item-sm-text">+0.5% from last month</span>
          </div>
        </div>
      </BlockContentWrap>
    </SalesBlockWrap>
  );
};

export default SalesBlock;
