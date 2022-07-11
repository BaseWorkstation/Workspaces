import { useToast } from "@chakra-ui/toast";
import Axios from "axios";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../../utils/constants";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { logoutUser, setUserDetails } from "../../redux/slices/userSlice";

const initialLoginDetails = {
  email: "",
  password: "",
};

export default function useLoginHook() {
  const [loginDetails, setLoginDetails] = useState(initialLoginDetails);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Perform Logout Action
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
    Axios.post(BASE_API_URL + "/auth/login/", loginDetails)
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("base_acccess_token", data?.access);
        dispatch(setUserDetails(data.user_info));

        Router.push("/");
      })
      .catch(({ response }) => {
        setIsLoading(false);
        console.log(response);
        toastError("Unable to log in", response);
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
