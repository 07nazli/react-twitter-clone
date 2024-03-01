import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "isbilir_es",
    fullName: "Esma İşbilir",
    avatar:
      "https://pbs.twimg.com/profile_images/1761707710544855040/W46IU3-o_400x400.jpg",
  },
  accounts: [
    {
      id: 1,
      username: "isbilir_es",
      fullName: "Esma İşbilir",
      avatar:
        "https://pbs.twimg.com/profile_images/1761707710544855040/W46IU3-o_400x400.jpg",
    },
    {
      id: 2,
      username: "IsbilirNaz55332",
      fullName: "Nazlı İşbilir",
      avatar:
        "https://pbs.twimg.com/profile_images/1763178807911936000/MbQVgxbA_400x400.png",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //state manipule etme metotları
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;
