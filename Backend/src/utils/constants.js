// constants.js

module.exports = {
  STATUS_CODES: {
    SUCCESS: 'success',
    ERROR: 'error',
  },

  MESSAGES: {
    EMAIL_ALREADY_EXISTS: 'Email address already exists',
    USER_NOT_FOUND: 'User not found',
    INVALID_PASSWORD: 'Invalid password',
    USER_CREATED_SUCCESS: 'User created successfully',
    DATA_FETCH_SUCCESS: 'Data fetched successfully', // Success message for data sent
    SERVER_ERROR: 'Server error occurred',
  },

  HTTP_STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },
};
