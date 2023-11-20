package com.versus.boardback.common;

public class ResponseMessage {
    // HTTP Status 200
    String SUCCESS = "Success."; // Same as public static final String SUCCESS = "SU"; since inferface
    // HTTP Status 400
    String VALIDATION_FAILED = "Validation failed.";
    String DUPLICATE_EMAIL = "Duplication email.";
    String DUPLICATE_USERNAME = "Duplication user.";
    String DUPLICATE_PHONE_NUMBER = "Duplication phone number.";
    String NOT_EXISTED_USER = "User does not exist.";
    String NOT_EXISTED_BOARD = "Board does not exist";
    // HTTP Status 401
    String SIGN_IN_FAIL = "Login information mismatch.";
    String AUTHORIZATION_FAIL = "Authorization failed.";
    // HTTP Status 403
    String NO_PERMISSION = "No permission.";
    // HTTP Status 500
    String DATABASE_ERROR = "Database error.";
}
