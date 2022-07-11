import Axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserDetails } from "redux/slices/userSlice";
import { BASE_API_URL } from "utils/constants";
import { toastError } from "utils/helpers";

const initialRegisterDetails = {
  name: "",
  phone: "",
  email: "",
  password: "",
  areTermsAgreed: false,
};

export default function useRegisterHook() {
  // Initialize registration details
  const [registerDetails, setRegisterDetails] = useState(
    initialRegisterDetails
  );
  // Initial signup stage where the user can input his/her details
  const [stage, setStage] = useState("SHOW_PIN");
  const [basePin, setBasePin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterDetails({
      ...registerDetails,
      [name]: value,
    }); // onChange handler
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);
    Axios.post(BASE_API_URL + "/auth/create/member/", {
      name: registerDetails.name,
      phone: registerDetails.phone,
      email: registerDetails.email,
      password: registerDetails.password,
    })
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("base_acccess_token", data?.access);
        dispatch(setUserDetails(data));
        setStage("VIEW_PIN"); // Show the user his/her base pin
      })
      .catch(({ response }) => {
        toastError("Unable to sign up", response);
        setIsLoading(false);
        console.log(response);
      });
  };

  return {
    registerDetails,
    setRegisterDetails,
    stage,
    isLoading,
    handleSubmit,
    handleChange,
    showPassword,
    setShowPassword,
    basePin,
  };
}
