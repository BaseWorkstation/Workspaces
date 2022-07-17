import { useState } from "react";

export default function useSupportHook() {
  const [helpText, setHelpText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return {
    helpText,
    setHelpText,
    handleSubmit,
  };
}
