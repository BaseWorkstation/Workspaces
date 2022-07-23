import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPaymentMethod } from "redux/slices/paymentSlice";
import { fetchTeams } from "redux/slices/teamSlice";
import { toastError, toastSuccess } from "utils/helpers";

export default function useSubscriptionsHook() {
  const { userDetails } = useSelector((state) => state.user);
  const { teams } = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  const currentTeam = teams[0];

  useEffect(() => {
    if (!teams.length) {
      dispatch(fetchTeams());
    }
  }, []);

  const currentUserPlan = userDetails.payment_methods?.find(
    ({ method }) => method === "plan"
  )?.plan;

  const currentTeamPlan = currentTeam?.payment_methods?.find(
    ({ method }) => method === "plan"
  )?.plan;

  const handleChooseUserPlan = async (planId, model) => {
    const { payload, error } = await dispatch(
      addPaymentMethod({
        paymentable_model: model,
        paymentable_id: userDetails.id,
        method_type: "plan",
        plan_id: planId,
      })
    );

    console.log(payload);

    if (payload?.data) {
      toastSuccess("Subscribed to plan successfully!");
    } else {
      console.log(error);
      toastError(null, error);
    }
  };

  const handleChooseTeamPlan = async (planId, model) => {
    const { payload, error } = await dispatch(
      addPaymentMethod({
        paymentable_model: model,
        paymentable_id: userDetails.id,
        method_type: "plan",
        plan_id: planId,
      })
    );

    console.log(payload);

    if (payload?.data) {
      toastSuccess("Subscribed to plan successfully!");
    } else {
      console.log(error);
      toastError(null, error);
    }
  };

  return {
    currentUserPlan,
    handleChooseUserPlan,
    currentTeamPlan,
    handleChooseTeamPlan,
  };
}
