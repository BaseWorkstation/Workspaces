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

export const createTeam = createAsyncThunk(
  "teams/createTeam",
  async (createPayload, thunkAPI) => {
    try {
      const { data } = await Axios.post(
        `${BASE_API_URL}/billing/team/new`,
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

const teamSlice = createSlice({
  name: "teams",
  initialState: {
    teams: [],
    teamActivities: [],
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

    [createTeam.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "CREATE_TEAM";
    },
    [createTeam.fulfilled]: (state, action) => {
      state.success = "CREATE_TEAM";
      state.teams.push(action.payload);
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
  },
});
export const { clearStates } = teamSlice.actions;
export const teamActions = teamSlice.actions;
export default teamSlice.reducer;
