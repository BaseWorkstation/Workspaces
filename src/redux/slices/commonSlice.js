import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { BASE_API_URL } from "utils/constants";

export const getEnums = createAsyncThunk(
  "services/getEnums",
  async (fetchPayload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await Axios.get(`${BASE_API_URL}/utility/get-enums`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "medispark_acccess_token"
          )}`,
        },
      });
      return data;
    } catch ({ response }) {
      console.log(response);
      return thunkAPI.rejectWithValue(response);
    }
  }
);

const commonSlice = createSlice({
  name: "common",
  initialState: {
    enums: null,
    loading: "",
    error: "",
    success: "",
  },
  reducers: {
    clearStates: (state, { payload }) => {
      delete state.loading;
      delete state.error;
      delete state.success;
    },

    openPopup: (state, { payload }) => {
      Object.assign(state.popup, {
        isOpen: true,
        popupContent: payload?.popupContent,
        isNew: payload?.isNew,
        popupType: payload?.popupType,
      }); // update the state.popup with data from the payload
    },

    closePopup: (state, { payload }) => {
      Object.assign(state.popup, {
        isOpen: false,
        popupContent: null,
        isNew: false,
        popupType: null,
      }); // update the state.popup with data from the payload
    },
  },
  extraReducers: {
    [getEnums.pending]: (state) => {
      state.enums = null;
      delete state.error;
      delete state.success;
      state.loading = "FETCH_ENUMS";
    },
    [getEnums.fulfilled]: (state, action) => {
      state.success = "FETCH_ENUMS";
      state.enums = action.payload;
      delete state.loading;
      delete state.error;
    },
    [getEnums.rejected]: (state, { payload }) => {
      state.error = {
        errorType: "FETCH_ENUMS",
      };
      delete state.loading;
    },
  },
});
export const {
  clearStates,
  openAppointmentModal,
  closeAppointmentModal,
  openPopup,
  closePopup,
} = commonSlice.actions;

export default commonSlice.reducer;
export const commonActions = commonSlice.actions;
