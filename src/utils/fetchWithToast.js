//  Utility function to handle API calls with toast notifications.

import { toast } from "react-toastify";

//Executes an API call with toast notifications
export const fetchWithToast = async (promiseFn, messages = {}) => {
  const {
    loading = "Loading...",
    success = "Operation successful",
    error = "Something went wrong",
  } = messages;

  //  Initiates the loading notification
  const toastId = toast.loading(loading);

  try {
    //  Performs the API call
    const result = await promiseFn();

    //  Updates the notification on success
    toast.update(toastId, {
      render: success,
      type: "success",
      isLoading: false,
      autoClose: 2000,
      hideProgressBar: true,
    });

    return result;
  } catch (err) {
    //  Updates the notification on error
    toast.update(toastId, {
      render: error,
      type: "error",
      isLoading: false,
      autoClose: 3000,
      hideProgressBar: true,
    });

    throw err;
  }
};
