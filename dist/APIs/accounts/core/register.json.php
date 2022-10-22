<?php

// Initiate the page
require './../../_chips/comb.start_inputJSON.php';

// Input data
$INPUT_DATA->mode;
// Check data for SQL injections
checkInputData(); // [data, expected_type], [], [], ...
$INPUT_DATA->name->first; // Check for profanity
$INPUT_DATA->name->last; // Check for profanity
$INPUT_DATA->username; // Check for profanity
$INPUT_DATA->passwordHash;
$INPUT_DATA->birthdate->day; // Check for validity and legal age
$INPUT_DATA->birthdate->month; // Check for validity and legal age
$INPUT_DATA->birthdate->year; // Check for validity and legal age
$INPUT_DATA->gender; // Check for profanity
$INPUT_DATA->pronounce; // Check for validity
$INPUT_DATA->securityQuestions->q1; // Check for validity
$INPUT_DATA->securityQuestions->q2; // Check for validity
$INPUT_DATA->securityQuestions->q3; // Check for validity
$INPUT_DATA->securityQuestions->a1;
$INPUT_DATA->securityQuestions->a2;
$INPUT_DATA->securityQuestions->a3;
$INPUT_DATA->quickSettings->profile; // Check for validity
$INPUT_DATA->quickSettings->activity; // Check for validity
$INPUT_DATA->quickSettings->location; // Check for validity
$INPUT_DATA->quickSettings->colorScheme; // Check for validity
$INPUT_DATA->agreement; // X) Done
// NOTE: ADD A CHIP FUNCTION TO CHECK FOR ALL REQUIRED DATA!

// Check data
if($INPUT_DATA->agreement){

    // Get the profanity filter
    require './../../tools/filter.profanity.php';

    // Check if the profanity filter is working
    if($PROFANITY_FILTER_status){
        if(checkProfanity($INPUT_DATA->name->first) ||
            checkProfanity($INPUT_DATA->name->last) ||
            checkProfanity($INPUT_DATA->username) ||
            checkProfanity($INPUT_DATA->gender)){
            $RESPONSE_SUCCESS_STATUS = false;
            $RESPONSE_TEXT = "Profanity detected in public data!";
            $RESPONSE_CODE = BLOCKED_DATA;
        }
    }else{
        $RESPONSE_SUCCESS_STATUS = false;
        $RESPONSE_TEXT = "Profanity filter failed to load!";
        $RESPONSE_CODE = BACKEND_ERROR;
    }
    #$RESPONSE_SUCCESS_STATUS = false;
    #$RESPONSE_TEXT = "Back-end not ready!";
    #$RESPONSE_CODE = TEMPORARY;
}else{
    $RESPONSE_SUCCESS_STATUS = false;
    $RESPONSE_TEXT = "Missing user agreement!";
    $RESPONSE_CODE = MISSING_DATA;
}

?>
{
    <?php require './../../_chips/JSON_response_attachment.php'; ?>
}