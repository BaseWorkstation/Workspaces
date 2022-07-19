import { useState } from "react";
import { useSelector } from "react-redux";
import { toastError } from "utils/helpers";

export default function useCheckInHook() {
  const [stage, setStage] = useState("CHOOSE_SERVICE");
  const [workspace, setWorkspace] = useState(null);
  const [workspaceServices, setWorkspaceServices] = useState([]);
  const { userDetails } = useSelector((state) => state.user);

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
    if (pin !== userDetails.unique_pin) {
      toastError("Incorrect pin", null, " ");
      return;
    }

    setStage("CHOOSE_SERVICE");
  };

  const handleSubmitService = (service) => {
    setStage("SHOW_ATTENDANT");
  };

  return {
    stage,
    handleScanResult,
    workspace,
    handleSubmitPin,
    workspaceServices,
    handleSubmitService,
  };
}
