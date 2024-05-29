import React, { useState, useEffect } from "react";
import { SalesMapWrap } from "./SalesMap.styles";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";

const InvoiceTable = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fetch invoice data from the API
    fetch("http://localhost:3000/invoices")
      .then((response) => response.json())
      .then((data) => setInvoices(data.map(({ id, schoolName, invoiceNumber, amountDue, dueDate }) => ({ id, schoolName, invoiceNumber, amountDue, dueDate }))))
      .catch((error) => console.error("Error fetching invoices data:", error));
  }, []);

  return (
    <SalesMapWrap>
      <div className="block-head">
        <BlockTitle className="block-title">
          <h3>Invoices Due</h3>
        </BlockTitle>
      </div>
      <BlockContentWrap className="map-chart">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>School Name</th>
              <th>Invoice Number</th>
              {/* <th>Amount Due</th> */}
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>{index + 1}</td>
                <td>{invoice.schoolName}</td>
                <td>{invoice.invoiceNumber}</td>
                {/* <td>${invoice.amountDue.toLocaleString()}</td> */}
                <td>{invoice.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </BlockContentWrap>
    </SalesMapWrap>
  );
};

export default InvoiceTable;
