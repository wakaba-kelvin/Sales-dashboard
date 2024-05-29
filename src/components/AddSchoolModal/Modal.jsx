import React, { useState } from "react";
import "./modal.css";

const Modal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolType: "",
    county: "",
    registrationDate: "",
    contactInformation: "",
    collection: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Add School</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="schoolName">School Name:</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="schoolType">School Type:</label>
            <input
              type="text"
              id="schoolType"
              name="schoolType"
              value={formData.schoolType}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="county">County:</label>
            <input
              type="text"
              id="county"
              name="county"
              value={formData.county}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="registrationDate">Registration Date:</label>
            <input
              type="date"
              id="registrationDate"
              name="registrationDate"
              value={formData.registrationDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactInformation">Contact Information:</label>
            <input
              type="text"
              id="contactInformation"
              name="contactInformation"
              value={formData.contactInformation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="collection">Collection:</label>
            <input
              type="number"
              id="collection"
              name="collection"
              value={formData.collection}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="save-btn">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
