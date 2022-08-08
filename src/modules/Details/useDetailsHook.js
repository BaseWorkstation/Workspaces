import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toastError, toastSuccess } from "utils/helpers";
import {
  createWorkstation,
  editWorkstation,
  fetchWorkstation,
  uploadWorkstationImage,
  uploadWorkstationLogo,
} from "redux/slices/workstationSlice";

export default function useDetailsHook() {
  const { userDetails } = useSelector((state) => state.user);
  const { workstation, loading } = useSelector((state) => state.workstations);

  const currentWorkspaceId = userDetails?.workstations?.[0];

  const [infoDetails, setInfoDetails] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let data = workstation;

      if (!data) {
        const { payload, error } = await dispatch(
          fetchWorkstation({ id: currentWorkspaceId })
        );

        data = payload;
      }

      if (data?.id) {
        setInfoDetails((prev) => ({
          ...data,
          openTime: data.open_time,
          closeTime: data.close_time,
          otherPolicies: data.other_policies,
          isWeekdayClosed:
            !data.schedule?.weekdays?.open_time &&
            !data.schedule?.weekdays?.close_time,
          weekdayOpenTime: data.schedule?.weekdays?.open_time,
          weekdayCloseTime: data.schedule?.weekdays?.close_time,
          isWeekendClosed:
            !data.schedule?.weekends?.open_time &&
            !data.schedule?.weekends?.close_time,
          weekendOpenTime: data.schedule?.weekends?.open_time,
          weekendCloseTime: data.schedule?.weekends?.close_time,
        }));
      }
    })();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfoDetails({
      ...infoDetails,
      [name]: value,
    }); // onChange handler
  };

  const handleWorkstationInfoSubmit = async (event) => {
    event.preventDefault();

    let data;

    const workspacePayload = {
      ...infoDetails,
      country_iso: "NG",
      country_name: "Nigeria",
      // phone: "08033353444444",
      // email: "oyes1msslpjqqq.scom",
      // price_per_minute: 55,
      currency_code: "NGN",
      open_time: infoDetails.openTime,
      close_time: infoDetails.closeTime,
      other_policies: infoDetails.otherPolicies,
      amenities: [],
      schedule: {
        weekdays: {
          open_time: infoDetails.weekdayOpenTime,
          close_time: infoDetails.weekdayCloseTime,
        },
        weekends: {
          open_time: infoDetails.weekendOpenTime,
          close_time: infoDetails.weekendCloseTime,
        },
      },
    };

    if (currentWorkspaceId) {
      data = await dispatch(
        editWorkstation({
          id: currentWorkspaceId,
          ...workspacePayload,
        })
      );
    } else {
      data = await dispatch(createWorkstation(workspacePayload));
    }

    const { payload, error } = data;

    if (payload?.id) {
      toastSuccess("Saved successfully!");
    } else {
      console.log(error);
      toastError(null, error);
    }
  };

  const handleUploadWorkstationLogo = async (event, owner) => {
    const imageFile = event.target.files[0];
    if (!imageFile) {
      return;
    }
    const formData = new FormData();
    // append the details of the form data
    formData.append("upload_category", "workstation_logo");
    formData.append("workstation_id", currentWorkspaceId);
    // append the file
    formData.append("file", imageFile);

    const { payload, error } = await dispatch(uploadWorkstationLogo(formData));

    if (payload) {
    } else {
      console.log(error);
      toastError(null, error);
    }

    event.target.value = "";
  };

  const handleUploadWorkstationImage = async (event, owner) => {
    const imageFile = event.target.files[0];
    if (!imageFile) {
      return;
    }
    const formData = new FormData();
    // append the details of the form data
    formData.append("upload_category", "workstation_image");
    formData.append("workstation_id", currentWorkspaceId);
    // append the file
    formData.append("file", imageFile);

    const { payload, error } = await dispatch(uploadWorkstationImage(formData));

    if (payload) {
    } else {
      console.log(error);
      toastError(null, error);
    }

    event.target.value = "";
  };

  return {
    infoDetails,
    handleChange,
    setInfoDetails,
    handleWorkstationInfoSubmit,
    isLoadingWorkstation: loading === "FETCH_WORKSTATION",
    isCreatingWorkstation: loading === "CREATE_WORKSTATION",
    isEditingWorkstation: loading === "EDIT_WORKSTATION",
    handleUploadWorkstationLogo,
    handleUploadWorkstationImage,
  };
}
