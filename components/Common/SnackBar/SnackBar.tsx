// @ts-nocheck
import { Colors } from '@/constants/Colors';
import { GlobalProvider } from '@/context/GlobalContext';
import React, { useContext } from 'react';
import { Paragraph, Snackbar } from 'react-native-paper';

const SnackBar = () => {
  // Destructure the required values from the GlobalProvider context
  const { showSnackbar, setShowSnackbar, snackBarColor, snackbarTxt } =
    useContext(GlobalProvider);

  return (
    <Snackbar
      // Set the visibility of the snackbar based on showSnackbar value
      visible={showSnackbar}
      // Set a timeout to dismiss the snackbar after 2000 milliseconds
      onDismiss={setTimeout(() => setShowSnackbar(false), 2000)}
      // Set the background color of the snackbar based on snackBarColor value
      style={{ backgroundColor: snackBarColor }}
    >
      <Paragraph style={{ color: Colors.appColors.white }}>
        {snackbarTxt}
      </Paragraph>
    </Snackbar>
  );
};
export default SnackBar;
