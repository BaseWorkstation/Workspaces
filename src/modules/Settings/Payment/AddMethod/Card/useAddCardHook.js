import Router from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPaymentMethod } from "redux/slices/paymentSlice";
import { toastError, toastSuccess } from "utils/helpers";

// Initialize card details
const initialCardDetails = {
  cardNumber: "",
  name: "",
  expiry: "",
  cvc: "",
  issuer: "",
};

export default function useAddCardHook() {
  const [cardDetails, setCardDetails] = useState(initialCardDetails);
  const { loading } = useSelector((state) => state.payments);

  // This is used by the Card component to change the values on the card
  const [focusedInput, setFocusedInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "cardNumber") {
      value = formatCreditCardNumber(value);
    }

    if (name === "expiry") {
      value = formatExpirationDate(value);
    }

    setCardDetails({
      ...cardDetails,
      [name]: value,
    }); // onChange handler
  };

  /** Separate the expiry date into month and year i.e. MM/YY */
  function formatExpirationDate(value) {
    const clearValue = value.replace(/\D+/g, "");

    if (clearValue.length >= 3) {
      return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
    }

    return clearValue;
  }

  /** Format the number into card format (by adding spaces in between them) */
  function formatCreditCardNumber(value) {
    if (!value) {
      return value;
    }

    const clearValue = value.replace(/\D+/g, "");
    const nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
      4,
      8
    )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;

    return nextValue.trim();
  }

  const handleInputFocus = ({ target }) => {
    setFocusedInput(target.name);
  };

  /** Save the card issuer */
  const handleCardCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setCardDetails((prev) => ({ ...prev, issuer }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { payload, error } = await dispatch(
      addPaymentMethod({
        paymentable_model: "User",
        paymentable_id: 1,
        method_type: "PAYG_card",
        card_number: cardDetails.cardNumber,
        card_name: cardDetails.name,
        card_expiry: cardDetails.expiry,
        card_cvc: cardDetails.cvc,
      })
    );

    if (payload?.data) {
      toastSuccess("Card has been saved successfully!");
      Router.push("/");
    } else {
      console.log(error);
      toastError(null, error);
    }
  };

  return {
    cardDetails,
    focusedInput,
    setCardDetails,
    isLoading: loading === "ADD_PAYMENT_METHOD",
    handleSubmit,
    handleChange,
    handleInputFocus,
    handleCardCallback,
  };
}
