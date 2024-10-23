import { createSlice } from '@reduxjs/toolkit';

// Function to get stored state from localStorage
const getInitialState = () => {
  const storedAuth = localStorage.getItem('authState');
  return storedAuth ? JSON.parse(storedAuth) : {
    isAuthenticated: false,
    token: null,
    user: {},
  };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(), // Use the function to get the initial state
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('authState', JSON.stringify(state)); // Save to localStorage
    },
    signupSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('authState', JSON.stringify(state)); // Save to localStorage
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = {};
      localStorage.removeItem('authState'); // Remove from localStorage
      localStorage.removeItem('AuthToken');
    },
  },
});

export const { loginSuccess, signupSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
