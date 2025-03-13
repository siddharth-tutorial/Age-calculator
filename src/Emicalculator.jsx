import React, { useState } from "react";
import Header from "./Header";
import "./Emi.css";

function Emicalculator() {
  const [principal, setprincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [Tenure, setTenure] = useState(0);
  const [Emi, setEmi] = useState(0);

  // formula of emi
  /*EMI= 
P×r×(1+r) n
/(1+r) n−1

p= principal loan
r=monthly interest rate/12
n=loan tenure(in months)
*/

  const calculateEmi = () => {
    const interest = interestRate / (12 * 100);
    const month = Tenure * 12;
    const emivalue =
      (principal * interest * Math.pow(1 + interest , month)) /
      (Math.pow(1 + interest , month) - 1);

    setEmi(emivalue);
    console.log(emivalue);
  };

  return (
    <div>
      <Header />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Emi calculator</h2>
        <form action="#" onSubmit={calculateEmi}>
          <div>
            <label htmlFor="loan">Loan Amount</label>
            <input
              type="number"
              id="principal"
              onChange={(e) => setprincipal(e.target.value)}
              placeholder="Enter loan amount..."
              required
            />
          </div>

          <div>
            <label htmlFor="interestRate">Annual Interest Rate (%):</label>
            <input
              type="number"
              id="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Enter annual interest rate"
              required
            />
          </div>

          <div>
            <label htmlFor="tenure">Loan Tenure (in years):</label>
            <input
              type="number"
              id="tenure"
              value={Tenure}
              onChange={(e) => setTenure(e.target.value)}
              placeholder="Enter tenure in years"
              required
            />
          </div>

          <br />
          <button type="submit">
            Calculate
          </button>
          <h2>Emi : {Emi.toFixed(2)}</h2>
        </form>
      </div>
    </div>
  );
}

export default Emicalculator;
