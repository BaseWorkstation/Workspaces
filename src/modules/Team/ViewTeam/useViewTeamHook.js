import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "redux/slices/teamSlice";

export default function useViewTeamHook() {
  const { teams, teamMembers, loading } = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!teams.length) {
      dispatch(fetchTeams());
    }
  }, []);

  return {
    teamLoading: loading === "FETCH_TEAMS" || loading === "FETCH_TEAM_MEMBERS",
    teams,
    teamMembers,
  };
}
