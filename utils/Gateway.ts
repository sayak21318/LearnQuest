// @ts-nocheck
// Common request function for GET
const getData = async (url = '') => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("error====================> ",error.message)
    throw new Error(error.message || 'Request failed');
  }
};

export { getData };
