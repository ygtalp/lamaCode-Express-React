import React from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51JztklIqRpbznYltwPzKVuuS8V87d0hU5lLPZFlaaHlGqb2eM1anHl1Vqgm2Rmdbo8BPlWi2ySFwJ0nnRIABnw3P00uiQMS4lO";

const Pay = () => {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <>
      <div
        style={{
          height: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StripeCheckout
          name="ygtalp/LamaCode"
          image="https://avatars.githubusercontent.com/u/35925247?v=4"
          billingAddress
          shippingAddress
          description=" Your Total is $ 20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1>Test Case Infos</h1>
        <table>
          <thead>
            <tr>
              <th>Card Number</th>
              <th>MM/YY</th>
              <th>CVC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4242 4242 4242 4242</td>
              <td>12/23</td>
              <td>123</td>
            </tr>
          </tbody>
        </table>
        <h4>Before payment open console and see result after payment.</h4>
      </div>
    </>
  );
};

export default Pay;
