import React from "react";

const PaymentSection = () => {
  return (
    <div style={{ backgroundColor: "#ffe6e6", padding: "20px", borderRadius: "10px", maxWidth: "700px", margin: "auto" }}>
      <div style={{ backgroundColor: "#f28b82", padding: "6px 12px", borderRadius: "6px", color: "white", fontWeight: "500", width: "fit-content", marginBottom: "12px" }}>
        Section 13 of 13
      </div>

      <div style={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "16px",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        marginBottom: "16px",
        position: "relative"
      }}>
        <h3 style={{ margin: "0 0 6px", fontSize: "18px", fontWeight: "600" }}>Payment Section</h3>
        <p style={{ margin: "0", fontSize: "14px", color: "#444" }}>
          Kindly upload the screen shot of the payment:
        </p>
        {/* Optional icons can be added on the top-right corner here */}
      </div>

      <div style={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "16px",
        fontSize: "16px",
        fontWeight: "500",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        whiteSpace: "pre-line"
      }}>
        A/C - <span style={{ fontWeight: "700" }}>12930100021796</span>
        <br />
        IFSC CODE - <span style={{ fontWeight: "700" }}>BARBOSOHAGP</span>
        <span style={{ color: "red", marginLeft: "4px" }}>*</span>
      </div>
    </div>
  );
};

export default PaymentSection;


