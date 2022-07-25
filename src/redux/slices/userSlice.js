import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { BASE_API_URL } from "utils/constants";

export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async (query, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await Axios.get(`${BASE_API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("base_acccess_token")}`,
        },
      });
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue({ error: response.data });
    }
  }
);

export const fetchUserActivities = createAsyncThunk(
  "teams/fetchUserActivities",
  async (fetchPayload, thunkAPI) => {
    try {
      const { data } = await Axios.get(`${BASE_API_URL}/visits/`, {
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

export const editUserDetails = createAsyncThunk(
  "user/editUserDetails",
  async (editPayload, thunkAPI) => {
    try {
      const { data } = await Axios.put(
        `${BASE_API_URL}/users/admin/me/`,
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

export const changeUserPassword = createAsyncThunk(
  "user/changeUserPassword",
  async (changePayload, thunkAPI) => {
    try {
      const { data } = await Axios.put(
        `${BASE_API_URL}/users/admin/me/`,
        changePayload,
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

export const editOrganizationDetails = createAsyncThunk(
  "user/editOrganizationDetails",
  async (editPayload, thunkAPI) => {
    try {
      const { data } = await Axios.post(
        `${BASE_API_URL}/gateway/organization/edit`,
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

export const uploadUserAvatar = createAsyncThunk(
  "user/uploadUserAvatar",
  async (formData, thunkAPI) => {
    try {
      const { data } = await Axios.post(`${BASE_API_URL}/files`, formData, {
        headers: {
          "content-type": "multipart/form-data",
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

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: null,
    userActivities: { data: [] },
    usersList: [],
    loading: "",
    error: "",
    success: "",
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },

    clearStates: (state, { payload }) => {
      delete state.loading;
      delete state.error;
      delete state.success;
    },
    logoutUser: (state) => {
      // From here we can take action only at this "counter" state
      // But, as we have taken care of this particular "logout" action
      // in rootReducer, we can use it to CLEAR the complete Redux Store's state
    },
  },
  extraReducers: {
    [fetchUserDetails.pending]: (state) => {
      state.userDetails = null;
      delete state.error;
      delete state.success;
      state.loading = "FETCH_USER_DETAILS";
    },
    [fetchUserDetails.fulfilled]: (state, action) => {
      state.success = "FETCH_USER_DETAILS";
      state.userDetails = action.payload;
      delete state.loading;
      delete state.error;
    },
    [fetchUserDetails.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "FETCH_USER_DETAILS",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [fetchUserActivities.pending]: (state) => {
      state.userActivities = { data: [] };
      delete state.error;
      delete state.success;
      state.loading = "FETCH_USER_ACTIVITIES";
    },
    [fetchUserActivities.fulfilled]: (state, action) => {
      state.success = "FETCH_USER_ACTIVITIES";
      state.userActivities = action.payload;
      delete state.loading;
      delete state.error;
    },
    [fetchUserActivities.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "FETCH_USER_ACTIVITIES",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [editUserDetails.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "EDIT_USER_DETAILS";
    },
    [editUserDetails.fulfilled]: (state, action) => {
      state.success = "EDIT_USER_DETAILS";
      // const member = state.members.find(
      //   (member) => member.id === action.payload.id
      // );
      // delete state.tempNote;
      // Object.assign(state.userDetails, action.payload);
      state.userDetails = action.payload;
      delete state.loading;
      delete state.error;
    },
    [editUserDetails.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "EDIT_USER_DETAILS",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [uploadUserAvatar.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "UPLOAD_USER_AVATAR";
    },
    [uploadUserAvatar.fulfilled]: (state, action) => {
      state.success = "UPLOAD_USER_AVATAR";
      state.userDetails.avatar = action.payload;
      delete state.loading;
      delete state.error;
    },
    [uploadUserAvatar.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "UPLOAD_USER_AVATAR",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },

    [changeUserPassword.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = "CHANGE_USER_PASSWORD";
    },
    [changeUserPassword.fulfilled]: (state, action) => {
      state.success = "CHANGE_USER_PASSWORD";
      delete state.loading;
      delete state.error;
    },
    [changeUserPassword.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "CHANGE_USER_PASSWORD",
        errorMessage: payload?.error,
      };
      delete state.loading;
    },
  },
});

export const { clearStates, setUserDetails, logoutUser } = userSlice.actions;
export default userSlice.reducer;
