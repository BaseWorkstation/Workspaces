import Router from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPaymentMethod, fetchPaymentPlans } from "redux/slices/paymentSlice";
import { toastError, toastSuccess } from "utils/helpers";

const ctaColors = ["primary.500", "#9747FF", "gray.800"]; // Used for mapping bgColors to the CTA buttons

export default function useChoosePlanHook() {
  const { paymentPlans, loading } = useSelector((state) => state.payments);
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // If plans havent been fetched, then fetch them
    if (!paymentPlans.length) {
      dispatch(fetchPaymentPlans());
    }
  }, []);

  const handleChoosePlan = async (planId) => {
    const { payload, error } = await dispatch(
      addPaymentMethod({
        paymentable_model: "User",
        method_type: "plan",
        plan_id: planId,
      })
    );

    console.log(payload);

    if (payload?.data) {
      toastSuccess("Subscribed to plan successfully!");
      Router.push("/");
    } else {
      console.log(error);
      toastError(null, error);
    }
  };

  return {
    subscriptionPlans: paymentPlans,
    selectedPlanId,
    ctaColors,
    handleChoosePlan,
    setSelectedPlanId,
    isLoading: loading === "ADD_PAYMENT_METHOD",
  };
}
