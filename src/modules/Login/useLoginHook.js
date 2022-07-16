import Axios from "axios";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../../utils/constants";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { logoutUser, setUserDetails } from "../../redux/slices/userSlice";
import { toastError } from "utils/helpers";

const initialLoginDetails = {
  email: "",
  password: "",
};

export default function useLoginHook() {
  const [loginDetails, setLoginDetails] = useState(initialLoginDetails);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Perform Logout Action
    // This is done in order to clear all data in the store as soon as the user is logged out
    localStorage.removeItem("base_acccess_token");
    dispatch(logoutUser());
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    }); // onChange handler
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);
    Axios.post(BASE_API_URL + "/login", loginDetails)
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("base_acccess_token", data?.token); // Save access token to localStorage
        dispatch(setUserDetails(data.user)); // Then set the user details in the redux store
        Router.replace("/"); // And route to the dashboard
      })
      .catch(({ response }) => {
        setIsLoading(false);
        console.log(response);
        toastError("Unable to log in", { errorMessage: response?.data });
      });
  };

  return {
    loginDetails,
    setLoginDetails,
    isLoading,
    handleSubmit,
    handleChange,
    showPassword,
    setShowPassword,
  };
}
