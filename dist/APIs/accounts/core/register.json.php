<?php

// Initiate the page
require './../../_chips/comb.start_inputJSON.php';

// Data
$INPUT_DATA->mode;
// Check data for SQL injections
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

// Check data
if($INPUT_DATA->agreement){
    //
    $RESPONSE_SUCCESS_STATUS = false;
    $RESPONSE_TEXT = "Back-end not ready!";
    $RESPONSE_CODE = TEMPORARY;
}else{
    $RESPONSE_SUCCESS_STATUS = false;
    $RESPONSE_TEXT = "Missing user agreement!";
    $RESPONSE_CODE = MISSING_DATA;
}

?>
{
    <?php require './../../_chips/JSON_response_attachment.php'; ?>
}