import React, { useState, useEffect } from "react";
import "./Invoices.css";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fetch invoices data from the API
    fetch("http://localhost:3000/invoices")
      .then((response) => response.json())
      .then((data) => setInvoices(data))
      .catch((error) => console.error("Error fetching invoices data:", error));
  }, []);

  return (
    <div className="invoices">
      <div className="table-header">
        <h3>Invoices</h3>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Invoice Number</th>
              <th>School Name</th>
              <th>Invoice Items</th>
              <th>Creation Date</th>
              <th>Due Date</th>
              <th>Paid Amount</th>
              <th>Completion Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>{index + 1}</td>
                <td>{invoice.invoiceNumber}</td>
                <td>{invoice.schoolName}</td>
                <td>
                  <ul>
                    {invoice.invoiceItems.map((item, index) => (
                      <li key={index}>
                        {item.itemName}: ${item.amount}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>{invoice.creationDate}</td>
                <td>{invoice.dueDate}</td>
                <td>${invoice.paidAmount.toLocaleString()}</td>
                <td>{invoice.completionStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
