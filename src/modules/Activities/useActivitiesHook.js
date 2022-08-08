import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWorkstation,
  fetchWorkstationActivities,
} from "redux/slices/workstationSlice";
import { formatDateToYYYYMMDD } from "utils/helpers";

export default function useActivitiesHook() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const { userDetails } = useSelector((state) => state.user);
  const { workstation, workstationActivities, loading } = useSelector(
    (state) => state.workstations
  );
  const dispatch = useDispatch();

  const currentWorkspaceId = userDetails?.workstations?.[0];

  useEffect(() => {
    if (!workstation) {
      dispatch(fetchWorkstation({ id: currentWorkspaceId }));
    }
  }, []);

  useEffect(() => {
    if (currentWorkspaceId) {
      dispatch(
        fetchWorkstationActivities({
          date: formatDateToYYYYMMDD(selectedDay),
          workstation_id: currentWorkspaceId,
        })
      );
    }
  }, [!!workstation, selectedDay]);

  return {
    selectedDay,
    setSelectedDay,
    workstationLoading:
      loading === "FETCH_WORKSTATION" ||
      loading === "FETCH_WORKSTATION_ACTIVITIES",
    workstation,
    workstationActivities,
  };
}
