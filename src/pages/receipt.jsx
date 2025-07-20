import React, { useEffect, useState } from "react";
import "./receipt.css";

function Receipt() {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/receipts")
      .then((res) => res.json())
      .then((data) => setReceipts(data));
  }, []);

  if (receipts.length === 0) return <p>אין נתונים להצגה</p>;

  const latest = receipts[receipts.length - 1];

  return (
    <div className="receipt">
      <header>
        <h1> דר' יהושע להב</h1>
        <p>מומחה למחלות עיניים ומנתח</p>
        <h1>קבלה/חשבונית מס</h1>
        <p>מספר קבלה: {latest.id}</p>
        <p>תאריך: {latest.date}</p>
        <p>לקוח: {latest.name}</p>
        <div className="receipt2">
          <h1>Dr Yeshoua Lahav</h1>
          <p>Eye Specialist & Surgeon </p>
        </div>
      </header>

      <section className="sec">
        <h3>פירוט שירותים</h3>
        <table>
          <thead>
            <tr>
              <th>פריט</th>
              <th>כמות</th>
              <th>מחיר ליחידה</th>
              <th>סה"כ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{latest.item}</td>
              <td>1</td>
              <td>₪{parseFloat(latest.amount).toFixed(2)}</td>
              <td>₪{parseFloat(latest.amount).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <h4>סה"כ לתשלום: ₪{parseFloat(latest.amount).toFixed(2)}</h4>
      </section>

      <section>
        <h3>פרטי תשלום</h3>
        <p>אמצעי תשלום: {latest.paymentType}</p>
        <p>סה"כ שולם: ₪{parseFloat(latest.amount).toFixed(2)}</p>
      </section>

      <footer>
        <p>חתימה:</p>
        <img src="/signature.png" alt="signature" height="50" />
      </footer>
    </div>
  );
}

export default Receipt;
