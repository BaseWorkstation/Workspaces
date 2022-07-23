import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamActivities, fetchTeams } from "redux/slices/teamSlice";
import { fetchUserActivities } from "redux/slices/userSlice";
import { formatDateToYYYYMMDD } from "utils/helpers";

export default function useActivitiesHook() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const {
    userDetails,
    userActivities,
    loading: userLoading,
  } = useSelector((state) => state.user);
  const { teams, teamActivities, loading } = useSelector(
    (state) => state.teams
  );
  const dispatch = useDispatch();

  const currentTeam = teams[0];

  useEffect(() => {
    if (!teams.length) {
      dispatch(fetchTeams());
    }
  }, []);

  useEffect(() => {
    dispatch(
      fetchUserActivities({
        date: formatDateToYYYYMMDD(selectedDay),
        user_id: userDetails.id,
      })
    );
  }, [selectedDay]);

  useEffect(() => {
    if (teams.length) {
      dispatch(
        fetchTeamActivities({
          date: formatDateToYYYYMMDD(selectedDay),
          user_id: currentTeam.id,
        })
      );
    }
  }, [!!teams.length, selectedDay]);

  return {
    selectedDay,
    setSelectedDay,
    teamLoading:
      loading === "FETCH_TEAMS" || loading === "FETCH_TEAM_ACTIVITIES",
    teams,
    teamActivities,
    userActivities,
    userLoading: userLoading === "FETCH_USER_ACTIVITIES",
  };
}
