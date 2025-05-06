// @ts-nocheck
/**
 * The code exports a React context provider component that holds global state variables and functions.
 * @returns The GlobalContext component is returning a Provider component from the createContext()
 * function. The Provider component wraps around the props.children, which allows the values from the
 * useState hooks to be accessed by any components that are descendants of the GlobalProvider.
 */
import { useState, createContext } from 'react';
/*import url and gateway methods */
import { getData } from '../utils/Gateway';
import * as url from '../helpers/UrlHelper';
//  Import Token
import { getToken } from '../Constants/Functions/AsyncStorage';

export const GlobalProvider = createContext();
const GlobalContext = props => {
  // -------------- tabs header requirement start -------------
  const [profilePic, setProfilePic] = useState('');
  // -------------- tabs header requirement end -------------

  // ---------- snack bar state----------
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackBarColor, setSnackBarColor] = useState('');
  const [snackbarTxt, setSnackbarTxt] = useState('');
  // ---------- search state -----------
  const [searchQuery, setSearchQuery] = useState('');
  //filter requirements
  const [ecosystemList, setEcosystemList] = useState([]);

  const [userInformation, setUserInformation] = useState({});

  return (
    <GlobalProvider.Provider
      value={{
        profilePic,
        setProfilePic,
        showSnackbar,
        setShowSnackbar,
        snackBarColor,
        setSnackBarColor,
        snackbarTxt,
        setSnackbarTxt,
        searchQuery,
        setSearchQuery,
        ecosystemList,
        userInformation,
        setUserInformation,
      }}
    >
      {props.children}
    </GlobalProvider.Provider>
  );
};
export default GlobalContext;
