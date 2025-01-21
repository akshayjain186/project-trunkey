import { POST_LOGIN } from './url_service'; // Import the specific URL constant
import { post } from './api_service'; // Import the post method from api_service

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

export { postLogin }; // Export the postLogin function for use in other parts of the application
