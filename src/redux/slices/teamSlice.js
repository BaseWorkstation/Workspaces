import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { BASE_API_URL } from "utils/constants";

export const fetchTeams = createAsyncThunk(
  "teams/fetchTeams",
  async (fetchPayload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await Axios.get(`${BASE_API_URL}/teams`, {
        params: fetchPayload,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("base_acccess_token")}`,
        },
      });
      return data;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue({ error: response.data });
    }
  }
);

export const fetchTeamMembers = createAsyncThunk(
  "teams/fetchTeamMembers",
  async (fetchPayload, thunkAPI) => {
    try {
      const { data } = await Axios.get(`${BASE_API_URL}/teams/members/`, {
        params: fetchPayload,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("base_acccess_token")}`,
        },
      });
      return data;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue({ error: response.data });
    }
  }
);

export const createTeam = createAsyncThunk(
  "teams/createTeam",
  async (createPayload, thunkAPI) => {
    try {
      const { data } = await Axios.post(
        `${BASE_API_URL}/teams`,
        createPayload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "base_acccess_token"
            )}`,
          },
        }
      );
      return data;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue({ error: response.data });
    }
  }
);

export const addMemberToTeam = createAsyncThunk(
  "teams/addMemberToTeam",
  async (addPayload, thunkAPI) => {
    try {
      const { data } = await Axios.post(
        `${BASE_API_URL}/teams/members/`,
        addPayload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "base_acccess_token"
            )}`,
          },
        }
      );
      return data;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue({ error: response.data });
    }
  }
);

export const editTeam = createAsyncThunk(
  "teams/editTeam",
  async (editPayload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await Axios.put(
        `${BASE_API_URL}/church/teams/${editPayload.id}/`,
        editPayload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "base_acccess_token"
            )}`,
          },
        }
      );
      return data;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue({ error: response.data });
    }
  }
);

export const deleteTeam = createAsyncThunk(
  "teams/deleteTeam",
  async (teamId, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await Axios.delete(`${BASE_API_URL}/church/teams/${teamId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("base_acccess_token")}`,
        },
      });
      return teamId;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue({ error: response.data });
    }
  }
);

export const deleteTeamMember = createAsyncThunk(
  "teams/deleteTeamMember",
  async (deletePayload, thunkAPI) => {
    try {
      const { data } = await Axios.delete(`${BASE_API_URL}/teams/members/`, {
        params: deletePayload,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("base_acccess_token")}`,
        },
      });
      return deletePayload.user_id;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue({ error: response.data });
    }
  }
);

const teamSlice = createSlice({
  name: "teams",
  initialState: {
    teams: [],
    teamActivities: { data: [] },
    teamMembers: { data: [] },
    loading: "FETCH_TEAMS",
    error: "",
    success: "",
  },
  reducers: {
    clearStates: (state, { payload }) => {
      delete state.loading;
      delete state.error;
      delete state.success;
    },
  },
  extraReducers: {
    [fetchTeams.pending]: (state) => {
      state.teams = [];
      delete state.error;
      delete state.success;
      state.loading = "FETCH_TEAMS";
    },
    [fetchTeams.fulfilled]: (state, action) => {
      state.success = "FETCH_TEAMS";
      state.teams = action.payload;
      delete state.loading;
      delete state.error;
    },
    [fetchTeams.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "FETCH_TEAMS",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [fetchTeamMembers.pending]: (state) => {
      state.teamMembers = { data: [] };
      delete state.error;
      delete state.success;
      state.loading = "FETCH_TEAM_MEMBERS";
    },
    [fetchTeamMembers.fulfilled]: (state, action) => {
      state.success = "FETCH_TEAM_MEMBERS";
      state.teamMembers = action.payload;
      delete state.loading;
      delete state.error;
    },
    [fetchTeamMembers.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "FETCH_TEAM_MEMBERS",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [createTeam.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "CREATE_TEAM";
    },
    [createTeam.fulfilled]: (state, action) => {
      state.success = "CREATE_TEAM";
      state.teams.push(action.payload?.data);
      delete state.loading;
      delete state.error;
    },
    [createTeam.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "CREATE_TEAM",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [addMemberToTeam.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "ADD_TEAM_MEMBER";
    },
    [addMemberToTeam.fulfilled]: (state, action) => {
      state.success = "ADD_TEAM_MEMBER";
      state.teamMembers.data.push(action.payload?.data);
      delete state.loading;
      delete state.error;
    },
    [addMemberToTeam.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "ADD_TEAM_MEMBER",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [editTeam.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "EDIT_TEAM";
    },
    [editTeam.fulfilled]: (state, action) => {
      state.success = "EDIT_TEAM";
      const team = state.teams.find((team) => team.id === action.payload.id);
      // delete state.tempNote;
      Object.assign(team, action.payload);
      // state.teams = action.payload;
      delete state.loading;
      delete state.error;
    },
    [editTeam.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "EDIT_TEAM",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [deleteTeam.pending]: (state, action) => {
      delete state.error;
      delete state.success;
      state.loading = "DELETE_TEAM";
      const position = state.teams.findIndex(
        (team) => team.id === action.meta.arg
      );
      state.backupTeam = Object.assign({}, state.teams[position]);
      state.backupPosition = position;
    },
    [deleteTeam.fulfilled]: (state) => {
      state.success = "DELETE_TEAM";
      state.teams.splice(state.backupPosition, 1);
      delete state.backupTeam;
      delete state.backupPosition;
      delete state.loading;
      delete state.error;
    },
    [deleteTeam.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "DELETE_TEAM",
        errorMessage: payload?.error,
      };
      delete state.backupPosition;
      delete state.backupTeam;
      delete state.loading;
    },

    [deleteTeamMember.pending]: (state, action) => {
      delete state.error;
      delete state.success;
      state.loading = "DELETE_TEAM_MEMBER";
      const position = state.teamMembers.data.findIndex(
        (team) => team.id === action.meta.arg
      );
      state.backupTeam = Object.assign({}, state.teamMembers.data[position]);
      state.backupPosition = position;
    },
    [deleteTeamMember.fulfilled]: (state) => {
      state.success = "DELETE_TEAM_MEMBER";
      state.teamMembers.data.splice(state.backupPosition, 1);
      delete state.backupTeam;
      delete state.backupPosition;
      delete state.loading;
      delete state.error;
    },
    [deleteTeamMember.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "DELETE_TEAM_MEMBER",
        errorMessage: payload?.error,
      };
      delete state.backupPosition;
      delete state.backupTeam;
      delete state.loading;
    },
  },
});
export const { clearStates } = teamSlice.actions;
export const teamActions = teamSlice.actions;
export default teamSlice.reducer;
