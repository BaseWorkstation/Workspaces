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
import { addToOwnedWorkstations } from "redux/slices/userSlice";
import Router from "next/router";
import { getEnums } from "redux/slices/commonSlice";

export default function useDetailsHook() {
  const { userDetails } = useSelector((state) => state.user);
  const { workstation, loading } = useSelector((state) => state.workstations);
  const { enums } = useSelector((state) => state.common);

  const currentWorkspaceId = userDetails?.owned_workstations?.[0];

  const [infoDetails, setInfoDetails] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (!enums) {
      dispatch(getEnums());
    }
  }, []);

  useEffect(() => {
    (async () => {
      let data = workstation;

      if (!data) {
        const response = await dispatch(
          fetchWorkstation({ id: currentWorkspaceId })
        ).unwrap();

        data = response;
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
          pricePerMinute: data?.default_service?.price_per_minute?.amount,
          bankDetails: data?.bank_details,
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
      price_per_minute: infoDetails.pricePerMinute,
      currency_code: "NGN",
      open_time: infoDetails.openTime,
      close_time: infoDetails.closeTime,
      other_policies: infoDetails.otherPolicies,
      bank_details: infoDetails.bankDetails,
      // amenities: [],
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

    try {
      if (currentWorkspaceId) {
        data = await dispatch(
          editWorkstation({
            id: currentWorkspaceId,
            ...workspacePayload,
          })
        ).unwrap();
      } else {
        data = await dispatch(createWorkstation(workspacePayload)).unwrap();
      }

      toastSuccess("Saved successfully!");
      if (!currentWorkspaceId) {
        dispatch(addToOwnedWorkstations(data.id));
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toastError(null, error);
    }
  };

  const handleUploadWorkstationLogo = async (event, owner) => {
    if (!currentWorkspaceId) {
      toastError(
        "You need to create an organization first...",
        null,
        "First save the organization, then try to upload again"
      );
      return;
    }

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

    try {
      await dispatch(uploadWorkstationLogo(formData)).unwrap();
    } catch (error) {
      console.log(error);
      toastError(null, error);
    }

    event.target.value = "";
  };

  const handleUploadWorkstationImage = async (event, owner) => {
    if (!currentWorkspaceId) {
      toastError(
        "You need to create an organization first...",
        null,
        "First save the organization, then try to upload again"
      );
      return;
    }

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

    try {
      await dispatch(uploadWorkstationImage(formData)).unwrap();
    } catch (error) {
      console.log(error);
      toastError(null, error);
    }

    event.target.value = "";
  };

  return {
    workstation,
    infoDetails,
    handleChange,
    setInfoDetails,
    handleWorkstationInfoSubmit,
    isLoadingWorkstation: loading === "FETCH_WORKSTATION",
    isCreatingWorkstation: loading === "CREATE_WORKSTATION",
    isEditingWorkstation: loading === "EDIT_WORKSTATION",
    isUploadingLogo: loading === "UPLOAD_WORKSTATION_LOGO",
    isUploadingImage: loading === "UPLOAD_WORKSTATION_IMAGE",
    handleUploadWorkstationLogo,
    handleUploadWorkstationImage,
    amountUserPays:
      Number(infoDetails.pricePerMinute) +
      Number(enums?.base_share_details?.base_markup),
  };
}
