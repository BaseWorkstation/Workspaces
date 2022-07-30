import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toastError, toastSuccess } from "utils/helpers";
import { editUserDetails, uploadUserAvatar } from "redux/slices/userSlice";
import { editTeam, fetchTeams, uploadTeamImage } from "redux/slices/teamSlice";

export default function useBasicInfoHook() {
  const { userDetails, loading: userLoading } = useSelector(
    (state) => state.user
  );
  const { teams, loading: teamsLoading } = useSelector((state) => state.teams);
  const currentTeam = teams[0];

  const [basicInfoDetails, setBasicInfoDetails] = useState({
    firstName: userDetails.first_name,
    lastName: userDetails.last_name,
    address: userDetails.address,
    phone: userDetails.phone,
    teamName: currentTeam?.name,
    teamAddress: currentTeam?.address,
    teamEmail: currentTeam?.address,
    teamPhone: currentTeam?.phone,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (!teams.length) {
        const { payload } = await dispatch(fetchTeams());

        setBasicInfoDetails((prev) => ({
          ...prev,
          teamName: payload[0]?.name,
          teamAddress: payload[0]?.address,
          teamEmail: payload[0]?.address,
          teamPhone: payload[0]?.phone,
        }));
      }
    })();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBasicInfoDetails({
      ...basicInfoDetails,
      [name]: value,
    }); // onChange handler
  };

  const handleUserInfoSubmit = async (event) => {
    event.preventDefault();

    const { payload, error } = await dispatch(
      editUserDetails({
        userId: userDetails.id,
        payload: {
          first_name: basicInfoDetails.firstName,
          last_name: basicInfoDetails.lastName,
          address: basicInfoDetails.address,
          phone: basicInfoDetails.phone,
        },
      })
    );

    if (payload?.id) {
      toastSuccess("Saved successfully");
    } else {
      console.log(error);
      toastError(null, error);
    }
  };

  const handleTeamInfoSubmit = async (event) => {
    event.preventDefault();

    const { payload, error } = await dispatch(
      editTeam({
        id: currentTeam?.id,
        name: basicInfoDetails.teamName,
        email: basicInfoDetails.teamEmail,
        phone: basicInfoDetails.teamPhone,
        address: basicInfoDetails.teamAddress,
      })
    );

    if (payload?.id) {
      toastSuccess("Saved successfully");
    } else {
      console.log(error);
      toastError(null, error);
    }
  };

  const handleUploadUserImage = async (event, owner) => {
    const imageFile = event.target.files[0];
    if (!imageFile) {
      return;
    }
    const formData = new FormData();
    // append the details of the form data
    formData.append("upload_category", "user_avatar");
    formData.append("user_id", userDetails.id);
    // append the file
    formData.append("file", imageFile);

    const { payload, error } = await dispatch(uploadUserAvatar(formData));

    if (payload) {
    } else {
      console.log(error);
      toastError(null, error);
    }

    event.target.value = "";
  };

  const handleUploadTeamImage = async (event, owner) => {
    const imageFile = event.target.files[0];
    if (!imageFile) {
      return;
    }
    const formData = new FormData();
    // append the details of the form data
    formData.append("upload_category", "team_logo");
    formData.append("team_id", currentTeam.id);
    // append the file
    formData.append("file", imageFile);

    const { payload, error } = await dispatch(uploadTeamImage(formData));

    if (payload) {
    } else {
      console.log(error);
      toastError(null, error);
    }

    event.target.value = "";
  };

  return {
    basicInfoDetails,
    handleChange,
    handleUserInfoSubmit,
    currentTeam,
    isUserInfoLoading: userLoading,
    handleTeamInfoSubmit,
    isTeamInfoLoading: teamsLoading,
    handleUploadTeamImage,
    handleUploadUserImage,
  };
}
