import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "counter",
  initialState: {
    ln: "",
    bv: "",
    tag: [],
    qv: [],
    sh: [],
    url: "",
    habar: "",
    uz: "",
    ru: "",
    eng: "",
  },
  reducers: {
    fln: (state, { payload }) => {
      state.ln = payload;
    },
    fbv: (state, { payload }) => {
      console.log(payload);
      state.bv = payload;
    },
    ftag: (state, { payload }) => {
      state.tag = payload;
    },
    fqv: (state, { payload }) => {
      console.log(payload);
      state.qv = payload;
    },
    fsh: (state, { payload }) => {
      state.sh = payload;
    },
    furl: (state, action) => {
      state.url = action.payload;
    },
    fhabar: (state, { payload }) => {
      state.habar = payload;
    },
    fuz: (state, action) => {
      state.uz = action.payload;
    },
    fru: (state, action) => {
      state.ru = action.payload;
    },
    feng: (state, action) => {
      state.eng = action.payload;
    },
  },
});

export default cardSlice;
