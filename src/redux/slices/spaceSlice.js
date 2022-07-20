import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { BASE_API_URL } from "utils/constants";

export const fetchSpaces = createAsyncThunk(
  "spaces/fetchSpaces",
  async (fetchPayload, thunkAPI) => {
    try {
      const { data } = await Axios.get(`${BASE_API_URL}/workstations/`, {
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

export const createSpace = createAsyncThunk(
  "spaces/createSpace",
  async (createPayload, thunkAPI) => {
    try {
      const { data } = await Axios.post(
        `${BASE_API_URL}/billing/space/new`,
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

export const checkInToSpace = createAsyncThunk(
  "spaces/checkInToSpace",
  async (createPayload, thunkAPI) => {
    try {
      const { data } = await Axios.post(
        `${BASE_API_URL}/visits/check-in`,
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

export const editSpace = createAsyncThunk(
  "spaces/editSpace",
  async (editPayload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await Axios.put(
        `${BASE_API_URL}/church/spaces/${editPayload.id}/`,
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

export const deleteSpace = createAsyncThunk(
  "spaces/deleteSpace",
  async (spaceId, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await Axios.delete(`${BASE_API_URL}/church/spaces/${spaceId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("base_acccess_token")}`,
        },
      });
      return spaceId;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue({ error: response.data });
    }
  }
);

const spaceSlice = createSlice({
  name: "spaces",
  initialState: {
    spaces: { data: [] },
    loading: "FETCH_SPACES",
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
    [fetchSpaces.pending]: (state) => {
      state.spaces = { data: [] };
      delete state.error;
      delete state.success;
      state.loading = "FETCH_SPACES";
    },
    [fetchSpaces.fulfilled]: (state, action) => {
      state.success = "FETCH_SPACES";
      state.spaces = action.payload;
      delete state.loading;
      delete state.error;
    },
    [fetchSpaces.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "FETCH_SPACES",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [createSpace.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "CREATE_SPACE";
    },
    [createSpace.fulfilled]: (state, action) => {
      state.success = "CREATE_SPACE";
      state.spaces.push(action.payload);
      delete state.loading;
      delete state.error;
    },
    [createSpace.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "CREATE_SPACE",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [checkInToSpace.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "CHECK_IN_TO_SPACE";
    },
    [checkInToSpace.fulfilled]: (state, action) => {
      state.success = "CHECK_IN_TO_SPACE";
      delete state.loading;
      delete state.error;
    },
    [checkInToSpace.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "CHECK_IN_TO_SPACE",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [editSpace.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "EDIT_SPACE";
    },
    [editSpace.fulfilled]: (state, action) => {
      state.success = "EDIT_SPACE";
      const space = state.spaces.find(
        (space) => space.id === action.payload.id
      );
      // delete state.tempNote;
      Object.assign(space, action.payload);
      // state.spaces = action.payload;
      delete state.loading;
      delete state.error;
    },
    [editSpace.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "EDIT_SPACE",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [deleteSpace.pending]: (state, action) => {
      delete state.error;
      delete state.success;
      state.loading = "DELETE_SPACE";
      const position = state.spaces.findIndex(
        (space) => space.id === action.meta.arg
      );
      state.backupSpace = Object.assign({}, state.spaces[position]);
      state.backupPosition = position;
    },
    [deleteSpace.fulfilled]: (state) => {
      state.success = "DELETE_SPACE";
      state.spaces.splice(state.backupPosition, 1);
      delete state.backupSpace;
      delete state.backupPosition;
      delete state.loading;
      delete state.error;
    },
    [deleteSpace.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "DELETE_SPACE",
        errorMessage: payload?.error,
      };
      delete state.backupPosition;
      delete state.backupSpace;
      delete state.loading;
    },
  },
});
export const { clearStates } = spaceSlice.actions;
export const spaceActions = spaceSlice.actions;
export default spaceSlice.reducer;
