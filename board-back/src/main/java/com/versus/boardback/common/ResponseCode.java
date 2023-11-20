package com.versus.boardback.common;

public interface ResponseCode {
    // HTTP Status 200
    String SUCCESS = "SU"; // Same as public static final String SUCCESS = "SU"; since inferface
    // HTTP Status 400
    String VALIDATION_FAILED = "VF";
    String DUPLICATE_EMAIL = "DF";
    String DUPLICATE_USERNAME = "DU";
    String DUPLICATE_PHONE_NUMBER = "DP";
    String NOT_EXISTED_USER = "NU";
    String NOT_EXISTED_BOARD = "NB";
    // HTTP Status 401
    String SIGN_IN_FAIL = "SF";
    String AUTHORIZATION_FAIL = "AF";
    // HTTP Status 403
    String NO_PERMISSION = "NP";
    // HTTP Status 500
    String DATABASE_ERROR = "DBE";
    
}
