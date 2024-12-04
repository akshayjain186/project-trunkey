import { POST_LOGIN,GET_USER_PROFILE } from './url_service'; // Import the specific URL constant
import { post,get } from './api_service'; // Import the post method from api_service

/**
 * Helper function to handle user login.
 * Sends login data to the server via a POST request.
 *
 * @param {object} data - The login credentials (e.g., username, password).
 */
const postLogin = (data) => {

  // Send the POST request to the login URL with the provided data
 return post(POST_LOGIN, data);
};

/**
 * Fetches the user profile from the server.
 * Sends a GET request to retrieve the user's profile data.
 *
 * @returns {Promise} - Returns a promise that resolves to the user profile data.
 */
export const getUserProfile = () => get(GET_USER_PROFILE);

export { postLogin }; // Export the postLogin function for use in other parts of the application
