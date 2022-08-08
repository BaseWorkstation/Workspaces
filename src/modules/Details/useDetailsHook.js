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
      if (!workstation) {
        const { payload } = await dispatch(
          fetchWorkstation({ id: currentWorkspaceId })
        );

        setInfoDetails((prev) => ({
          ...prev,
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

    if (currentWorkspaceId) {
      data = await dispatch(
        editWorkstation({
          id: currentWorkspaceId,
        })
      );
    } else {
      data = await dispatch(createWorkstation({}));
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
    handleWorkstationInfoSubmit,
    isLoading: loading === "FETCH_WORKSTATION",
    handleUploadWorkstationLogo,
    handleUploadWorkstationImage,
  };
}
