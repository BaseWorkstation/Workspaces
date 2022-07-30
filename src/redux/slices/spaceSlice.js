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

export const fetchMoreSpaces = createAsyncThunk(
  "spaces/fetchMoreSpaces",
  async ({ page, fetchPayload }, thunkAPI) => {
    try {
      const { data } = await Axios.get(
        `${BASE_API_URL}/workstations/?page=${page}`,
        {
          params: fetchPayload,
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

export const fetchSpaceDetails = createAsyncThunk(
  "spaces/fetchSpaceDetails",
  async (fetchPayload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await Axios.get(`${BASE_API_URL}/workstations/${fetchPayload.id}`, {
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

export const fetchSpaceServices = createAsyncThunk(
  "spaces/fetchSpaceServices",
  async (fetchPayload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await Axios.get(`${BASE_API_URL}/services/`, {
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
      const {
        data: { data },
      } = await Axios.post(`${BASE_API_URL}/visits/check-in`, createPayload, {
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

export const checkOutOfSpace = createAsyncThunk(
  "spaces/checkOutOfSpace",
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
    currentSpace: null,
    spaceServices: [],
    currentCheckIn: null,
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

    [fetchMoreSpaces.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "FETCH_SPACES";
    },
    [fetchMoreSpaces.fulfilled]: (state, action) => {
      state.success = "FETCH_SPACES";
      state.spaces.data.push(...action.payload?.data);
      state.spaces.meta = action.payload?.meta;
      state.spaces.links = action.payload?.links;
      delete state.loading;
      delete state.error;
    },
    [fetchMoreSpaces.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "FETCH_SPACES",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [fetchSpaceDetails.pending]: (state) => {
      state.currentSpace = null;
      delete state.error;
      delete state.success;
      state.loading = "VIEW_SPACE";
    },
    [fetchSpaceDetails.fulfilled]: (state, action) => {
      state.success = "VIEW_SPACE";
      state.currentSpace = action.payload;
      delete state.loading;
      delete state.error;
    },
    [fetchSpaceDetails.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "VIEW_SPACE",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [fetchSpaceServices.pending]: (state) => {
      state.spaceServices = [];
      delete state.error;
      delete state.success;
      state.loading = "FETCH_SPACE_SERVICES";
    },
    [fetchSpaceServices.fulfilled]: (state, action) => {
      state.success = "FETCH_SPACE_SERVICES";
      state.spaceServices = action.payload;
      delete state.loading;
      delete state.error;
    },
    [fetchSpaceServices.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "FETCH_SPACE_SERVICES",
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
      state.currentCheckIn = action.payload.workspace;
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
