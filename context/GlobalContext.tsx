// @ts-nocheck

import { useState, createContext } from 'react';
export const GlobalProvider = createContext();
const GlobalContext = props => {
  // ---------- snack bar state----------
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackBarColor, setSnackBarColor] = useState('');
  const [snackbarTxt, setSnackbarTxt] = useState('');
  // ---------- search state -----------

  return (
    <GlobalProvider.Provider
      value={{
        showSnackbar,
        setShowSnackbar,
        snackBarColor,
        setSnackBarColor,
        snackbarTxt,
        setSnackbarTxt,
      }}
    >
      {props.children}
    </GlobalProvider.Provider>
  );
};
export default GlobalContext;
