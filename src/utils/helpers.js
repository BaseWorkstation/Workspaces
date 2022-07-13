import { createStandaloneToast } from "@chakra-ui/toast";
const { toast } = createStandaloneToast();

export const separateWithComma = (number) => {
  // Separate number with commas
  return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;
};

export const toastError = (title, error, description, stay) => {
  // Trigger Chakra UI error toast
  toast({
    status: "error",
    title: title || "Could not connect to the Base servers",
    description:
      description ||
      (error?.errorMessage?.errors && error?.errorMessage?.errors[0][0]) ||
      error?.errorMessage?.message ||
      "Kindly try again later",
    duration: stay ? null : 4000,
    position: "top",
    variant: "top-accent",
  });
};

export const toastSuccess = (title, description, stay) => {
  // Trigger Chakra UI success toast
  toast({
    status: "success",
    title: title || "Successful!",
    description: description || "",
    duration: stay ? null : 4000,
    position: "top",
    variant: "top-accent",
  });
};

/** Format/Shorten a specified number using "k" */
export const kConvert = (number) => {
  if (number < 1e3) return number;
  if (number >= 1e3) return +(number / 1e3).toFixed(1) + "k";
};
