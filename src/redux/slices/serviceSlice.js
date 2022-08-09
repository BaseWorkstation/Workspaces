import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { BASE_API_URL } from "utils/constants";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
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

export const fetchMoreServices = createAsyncThunk(
  "services/fetchMoreServices",
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

export const createService = createAsyncThunk(
  "services/createService",
  async (createPayload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await Axios.post(`${BASE_API_URL}/services`, createPayload, {
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

export const editService = createAsyncThunk(
  "services/editService",
  async ({ serviceId, editPayload }, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await Axios.patch(
        `${BASE_API_URL}/services/${serviceId}/`,
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

export const deleteService = createAsyncThunk(
  "services/deleteService",
  async (serviceId, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await Axios.delete(`${BASE_API_URL}/church/services/${serviceId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("base_acccess_token")}`,
        },
      });
      return serviceId;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue({ error: response.data });
    }
  }
);

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    currentService: null,
    loading: "FETCH_SERVICES",
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
    [fetchServices.pending]: (state) => {
      state.services = [];
      delete state.error;
      delete state.success;
      state.loading = "FETCH_SERVICES";
    },
    [fetchServices.fulfilled]: (state, action) => {
      state.success = "FETCH_SERVICES";
      state.services = action.payload;
      delete state.loading;
      delete state.error;
    },
    [fetchServices.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "FETCH_SERVICES",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [fetchMoreServices.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "FETCH_SERVICES";
    },
    [fetchMoreServices.fulfilled]: (state, action) => {
      state.success = "FETCH_SERVICES";
      state.services.data.push(...action.payload?.data);
      state.services.meta = action.payload?.meta;
      state.services.links = action.payload?.links;
      delete state.loading;
      delete state.error;
    },
    [fetchMoreServices.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "FETCH_SERVICES",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [createService.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "CREATE_SERVICE";
    },
    [createService.fulfilled]: (state, action) => {
      state.success = "CREATE_SERVICE";
      state.services.push(action.payload);
      delete state.loading;
      delete state.error;
    },
    [createService.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "CREATE_SERVICE",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [editService.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "EDIT_SERVICE";
    },
    [editService.fulfilled]: (state, action) => {
      state.success = "EDIT_SERVICE";
      const service = state.services.find(
        (service) => service.id === action.payload.id
      );
      // delete state.tempNote;
      Object.assign(service, action.payload);
      // state.services = action.payload;
      delete state.loading;
      delete state.error;
    },
    [editService.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "EDIT_SERVICE",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [deleteService.pending]: (state, action) => {
      delete state.error;
      delete state.success;
      state.loading = "DELETE_SERVICE";
      const position = state.services.findIndex(
        (service) => service.id === action.meta.arg
      );
      state.backupService = Object.assign({}, state.services[position]);
      state.backupPosition = position;
    },
    [deleteService.fulfilled]: (state) => {
      state.success = "DELETE_SERVICE";
      state.services.splice(state.backupPosition, 1);
      delete state.backupService;
      delete state.backupPosition;
      delete state.loading;
      delete state.error;
    },
    [deleteService.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "DELETE_SERVICE",
        errorMessage: payload?.error,
      };
      delete state.backupPosition;
      delete state.backupService;
      delete state.loading;
    },
  },
});
export const { clearStates } = serviceSlice.actions;
export const serviceActions = serviceSlice.actions;
export default serviceSlice.reducer;
