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
    title: title || "Could not connect to the MediSpark server",
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
