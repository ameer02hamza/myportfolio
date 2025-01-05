import axios from "axios";


const localApi = axios.create({
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 * @override to manipulate the the axios configuration for request handlers
 */
localApi.interceptors.request.use(
  function (config) {
    // const authToken = localStorage.getItem("token");
    // if (authToken) {
    //   config.headers.Authorization = `Bearer ${authToken}`;
    // }
    return config;
  },
  function error(error) {
    console.log(error, "error request data");

    return Promise.reject(error);
  }
);

/**
 * @override to manipulate the response data
 */
localApi.interceptors.response.use(
  function (response) {
    const { data } = response;
    return data;
  },
 async function (error) {
    //TODO: implement retry logic if need in future
    // const {
    //   config,
    //   response: { status },
    // } = error;
    // const originalRequest = config;
    // originalRequest._retry = true;
    // if (!originalRequest._retryCount) {
    //   originalRequest._retryCount = 1;
    // }
    // if (originalRequest._retryCount < MAX_RETRIES) {
    //   originalRequest._retryCount += 1;
    //   await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
    //   console.log("localApi", originalRequest._retryCount);
    //   return localApi(originalRequest);
    // }
    return Promise.reject(error);
  }
);
export default localApi;
