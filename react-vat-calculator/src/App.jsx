import { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState(10);

  const grossPrice = price - discount;
  const vat = grossPrice * 0.07;

  return (
    <div className="container">
      <div className="input-row">
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <div className="input-row">
        <label>Discount</label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
        />
      </div>
      <h2>Gross Price = {grossPrice}</h2>
      <h2>VAT = {vat.toFixed(1)}</h2>
    </div>
  );
}

export default App;
