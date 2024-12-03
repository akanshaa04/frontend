import { Button, Card, Divider } from "@mui/material";
import React from "react";
import Transaction from "../Transaction/Transaction";

const Payment = () => {
  return (
    <div>
      <Card style={{ borderRadius: "4px", padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <h1 style={{ color: "#757575", fontWeight: 500 }}>Total Earnings :</h1>
        <h1 style={{ fontWeight: "bold", fontSize: "1.25rem", paddingBottom: "8px" }}>$100100</h1>
        <Divider />
        <p style={{ color: "#757575", fontWeight: 500, paddingTop: "8px" }}>
          Last Payment: <strong>$0</strong>
        </p>
      </Card>
      <div style={{ paddingTop: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <Button variant="contained">Transaction</Button>
        <Transaction />
      </div>
    </div>
  );
};

export default Payment;
