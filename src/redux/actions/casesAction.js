import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all cases which the user write it before by the selected date
export const showCasesByDate = createAsyncThunk(
  "casesSlice/showCasesByDate",
  async (item) => {
    try {
      const res = await axios.get(
        `https://doubtful-slip-mite.cyclic.app/api/v1/cases/getCases/${item.date}`,
        {
          headers: {
            Authorization: `${item.token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      if (err.message === "Network Error") {
        throw "تأكد من اتصالك بالانترنت";
      } else if (err.response.data.message) {
        throw err.response.data.message;
      } else {
        throw err.response.data;
      }
    }
  }
);
// add new case
export const addNewCases = createAsyncThunk(
  "casesSlice/addNewCases",
  async (item) => {
    try {
      const res = await axios.post(
        `https://doubtful-slip-mite.cyclic.app/api/v1/cases/newCase`,
        {
          number: item.number,
          theYear: item.theYear,
          plaintiff: item.plaintiff,
          defendant: item.defendant,
          typeCase: item.typeCase,
        },
        {
          headers: {
            authorization: `${item.token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      if (err.message === "Network Error") {
        throw "تأكد من اتصالك بالانترنت";
      } else if (err.response.data.message) {
        throw err.response.data.message;
      } else {
        throw err.response.data;
      }
    }
  }
);
// update cases
export const updateCases = createAsyncThunk(
  "casesSlice/updateCases",
  async (item) => {
    try {
      const res = await axios.patch(
        `https://doubtful-slip-mite.cyclic.app/api/v1/cases/updateCase/${item.id}`,
        {
          number: item.number,
          theYear: item.theYear,
          plaintiff: item.plaintiff,
          defendant: item.defendant,
          typeCase: item.typeCase,
        },
        {
          headers: {
            Authorization: `${item.token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      if (err.message === "Network Error") {
        throw "تأكد من اتصالك بالانترنت";
      } else if (err.response.data.message) {
        throw err.response.data.message;
      } else {
        throw err.response.data;
      }
    }
  }
);

// delete cases
export const deleteCases = createAsyncThunk(
  "casesSlice/deleteCases",
  async (item) => {
    try {
      const res = await axios.delete(
        `https://doubtful-slip-mite.cyclic.app/api/v1/cases/deleteCase/${item.id}`,
        {
          headers: {
            Authorization: `${item.token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      if (err.message === "Network Error") {
        throw "تأكد من اتصالك بالانترنت";
      } else if (err.response.data.message) {
        throw err.response.data.message;
      } else {
        throw err.response.data;
      }
    }
  }
);
// show single case
export const ShowSingleCase = createAsyncThunk(
  "casesSlice/showSingleCase",
  async (item) => {
    try {
      const res = await axios.get(
        `https://doubtful-slip-mite.cyclic.app/api/v1/cases/oneCase/${item.id}`,
        {
          headers: {
            Authorization: `${item.token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      if (err.message === "Network Error") {
        throw "تأكد من اتصالك بالانترنت";
      } else if (err.response.data.message) {
        throw err.response.data.message;
      } else {
        throw err.response.data;
      }
    }
  }
);
// search cases
export const searchCases = createAsyncThunk(
  "casesSlice/searchCases",
  async (item) => {
    try {
      const res = await axios.post(
        `https://doubtful-slip-mite.cyclic.app/api/v1/cases/search`,
        {
          plaintiff: item.searchText,
          defendant: item.searchText,
        },
        {
          headers: {
            Authorization: `${item.token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// https://doubtful-slip-mite.cyclic.app/api/v1
// http://192.168.1.5:4000/api/v1
