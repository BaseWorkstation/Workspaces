import Router from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTeam } from "redux/slices/teamSlice";
import { toastError, toastSuccess } from "utils/helpers";

const initialTeamDetails = {
  name: "",
};

export default function useCreateTeamHook() {
  const [teamDetails, setTeamDetails] = useState(initialTeamDetails);
  const { loading } = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTeamDetails({
      ...teamDetails,
      [name]: value,
    }); // onChange handler
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { payload, error } = await dispatch(
      createTeam({ name: teamDetails.name })
    );

    if (payload?.data) {
      toastSuccess("Team created successfully!");
      Router.push("/account/team");
    } else {
      console.log(error);
      toastError(null, error);
    }
  };

  return {
    teamDetails,
    setTeamDetails,
    handleSubmit,
    handleChange,
    isLoading: loading === "CREATE_TEAM",
  };
}
