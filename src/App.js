import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import Shop from "./Shop";

const App = () => {
  return (
    <StripeProvider apiKey="pk_test_BT5vh9BIRdTxfPMubPv0xumE">
      <Elements>
        <Shop />
      </Elements>
    </StripeProvider>
  );
};

export default App;
