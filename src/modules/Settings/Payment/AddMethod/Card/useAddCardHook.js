import Axios from "axios";
import { useState } from "react";
import { BASE_API_URL } from "utils/constants";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { setUserDetails } from "redux/slices/userSlice";
import { toastError } from "utils/helpers";

const initialCardDetails = {
  cardNumber: "",
  name: "",
  expiry: "",
  cvc: "",
  issuer: "",
};

export default function useAddCardHook() {
  const [cardDetails, setCardDetails] = useState(initialCardDetails);
  const [focusedInput, setFocusedInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

  function formatExpirationDate(value) {
    const clearValue = value.replace(/\D+/g, "");

    if (clearValue.length >= 3) {
      return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
    }

    return clearValue;
  }

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

  const handleCardCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setCardDetails((prev) => ({ ...prev, issuer }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);
  };

  return {
    cardDetails,
    focusedInput,
    setCardDetails,
    isLoading,
    handleSubmit,
    handleChange,
    handleInputFocus,
    handleCardCallback,
  };
}
