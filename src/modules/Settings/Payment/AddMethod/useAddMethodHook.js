import Router from "next/router";
import { useState } from "react";

const options = [
  {
    name: "Add a card (P.A.Y.G)",
    href: "/settings/payment/add/card",
  },
  {
    name: "Pay with cash (P.A.Y.G)",
    href: "/",
  },
  {
    name: "Subscribe to a plan",
    href: "/settings/payment/add/plan",
  },
];

export default function useAddMethodHook() {
  const [paymentOption, setPaymentOption] = useState(null);

  const proceedWithOption = () => {
    // Here, the payment option is represented as the option href
    Router.push(paymentOption);
  };

  return { options, paymentOption, setPaymentOption, proceedWithOption };
}
