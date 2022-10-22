<?php

// Fail report
function reportFailedInputDataCheck($code, $text){
    global $RESPONSE_SUCCESS_STATUS, $RESPONSE_CODE, $RESPONSE_TEXT;
    $RESPONSE_SUCCESS_STATUS = false;
    $RESPONSE_CODE = $code;
    $RESPONSE_TEXT = $text;
    echo '{';
    require 'JSON_response_attachment.php';
    exit("}");
}

// Check the input data for presence and SQL injections
function checkInputData(){
    if(0){
        reportFailedInputDataCheck(BLOCKED_DATA, "SQL injection detected!");
        reportFailedInputDataCheck(BLOCKED_DATA, "Profanity detected in 'public' data!");
        reportFailedInputDataCheck(INVALID_DATA, "Invalid data type detected!");
        reportFailedInputDataCheck(MISSING_DATA, "Missing data!");
    }
}

?>