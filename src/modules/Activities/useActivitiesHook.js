import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWorkstation,
  fetchWorkstationActivities,
} from "redux/slices/workstationSlice";
import { formatDateToYYYYMMDD } from "utils/helpers";

export default function useActivitiesHook() {
  const currentMonth = moment().format("yyyy-MM");
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const { userDetails } = useSelector((state) => state.user);
  const { workstation, workstationActivities, loading } = useSelector(
    (state) => state.workstations
  );
  const dispatch = useDispatch();

  const currentWorkspaceId = userDetails?.owned_workstations?.[0];

  useEffect(() => {
    if (!workstation) {
      dispatch(fetchWorkstation({ id: currentWorkspaceId }));
    }
  }, []);

  useEffect(() => {
    if (currentWorkspaceId) {
      dispatch(
        fetchWorkstationActivities({
          from_date: `${selectedMonth}-01`,
          to_date: `${selectedMonth}-${moment(selectedMonth).daysInMonth()}`,
          workstation_id: currentWorkspaceId,
        })
      );
    }
  }, [!!workstation, selectedMonth]);

  return {
    currentMonth,
    selectedMonth,
    setSelectedMonth,
    workstationLoading:
      loading === "FETCH_WORKSTATION" ||
      loading === "FETCH_WORKSTATION_ACTIVITIES",
    workstation,
    workstationActivities,
  };
}
