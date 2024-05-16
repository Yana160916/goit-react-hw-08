import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    thunkAPI.dispatch({ type: "contacts/setContactsLoading", payload: true });
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      thunkAPI.dispatch({
        type: "contacts/setContactsError",
        payload: error.message,
      });
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch({
        type: "contacts/setContactsLoading",
        payload: false,
      });
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contactData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`${"/contacts"}/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
