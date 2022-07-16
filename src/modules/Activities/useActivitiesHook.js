import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "redux/slices/teamSlice";

export default function useActivitiesHook() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const { teams, teamActivities, loading } = useSelector(
    (state) => state.teams
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!teams.length) {
      dispatch(fetchTeams());
    }
  }, []);

  return {
    selectedDay,
    setSelectedDay,
    teamLoading:
      loading === "FETCH_TEAMS" || loading === "FETCH_TEAM_ACTIVITIES",
    teams,
    teamActivities,
  };
}
