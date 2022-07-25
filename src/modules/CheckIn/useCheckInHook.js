import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkInToSpace } from "redux/slices/spaceSlice";
import { toastError, toastSuccess } from "utils/helpers";

export default function useCheckInHook() {
  const [stage, setStage] = useState("SCAN_QR");
  const [workspace, setWorkspace] = useState(null);
  const [workspaceServices, setWorkspaceServices] = useState([]);
  const { userDetails } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.spaces);

  const dispatch = useDispatch();

  const getWorkspaceDetailsFromUrl = (url) => {
    const { searchParams } = new URL(url);
    const workspaceId = searchParams.get("workstation_id");
    const workspaceName = searchParams.get("workstation_name");

    if (!workspaceId || !workspaceName) return null;

    return { id: workspaceId, name: workspaceName };
  };

  const handleScanResult = (result, error) => {
    if (!!result) {
      console.log(result?.text);
      const workspace = getWorkspaceDetailsFromUrl(result?.text);

      if (workspace) {
        setWorkspace(workspace);
        setStage("CONFIRM_PIN");
      }
    }
    if (!!error) {
      console.log(error);
    }
  };

  const handleSubmitPin = (pin) => {
    if (!userDetails) {
      toastError(
        "Kindly login or create an account to be enabled to use this pin",
        null,
        " "
      );
      return;
    }

    if (pin !== userDetails?.unique_pin) {
      toastError("Incorrect pin", null, " ");
      return;
    }

    setStage("CHOOSE_SERVICE");
  };

  const handleSubmitService = async (service) => {
    const { payload, error } = await dispatch(
      checkInToSpace({
        user_id: userDetails?.id,
        workstation_id: workspace.id,
        unique_pin: userDetails?.unique_pin,
      })
    );

    if (payload?.data) {
      toastSuccess("Checked in successfully!");
      setStage("SHOW_ATTENDANT");
    } else {
      console.log(error);
      toastError(null, error);
    }
  };

  return {
    stage,
    handleScanResult,
    workspace,
    handleSubmitPin,
    workspaceServices,
    handleSubmitService,
    isCheckingIn: loading === "CHECK_IN_TO_SPACE",
  };
}
