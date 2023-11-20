enum ResponseCode {
    // HTTP Status 200
    SUCCESS = "SU", // Same as public static final  SUCCESS = "SU", since inferface
    // HTTP Status 400
    VALIDATION_FAILED = "VF",
    DUPLICATE_EMAIL = "DF",
    DUPLICATE_USERNAME = "DU",
    DUPLICATE_PHONE_NUMBER = "DP",
    NOT_EXISTED_USER = "NU",
    NOT_EXISTED_BOARD = "NB",
    // HTTP Status 401
    SIGN_IN_FAIL = "SF",
    AUTHORIZATION_FAIL = "AF",
    // HTTP Status 403
    NO_PERMISSION = "NP",
    // HTTP Status 500
    DATABASE_ERROR = "DBE",
}
export default ResponseCode;