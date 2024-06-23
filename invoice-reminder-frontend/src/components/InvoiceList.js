import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchInvoices = async () => {
      const response = await axios.get('http://localhost:5000/invoices/due', {
        headers: { Authorization: authToken }
      });
      setInvoices(response.data);
    };

    fetchInvoices();
  }, [authToken]);

  return (
    <div>
      <h2>Due Invoices</h2>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice._id}>
            Amount: {invoice.amount}, Due Date: {new Date(invoice.dueDate).toLocaleDateString()}, Recipient: {invoice.recipient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
