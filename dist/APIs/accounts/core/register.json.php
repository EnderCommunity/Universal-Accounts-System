<?php

// Get JSON input data
require './../../_chips/get_JSON_input.php';

// The response header
require './../../_chips/header.php';

// Get all response-related code
require './../../_chips/JSON_response.php';

// Data
$INPUT_DATA->mode;
$INPUT_DATA->name->first;
$INPUT_DATA->name->last;
$INPUT_DATA->username;
$INPUT_DATA->passwordHash;
$INPUT_DATA->birthdate->day;
$INPUT_DATA->birthdate->month;
$INPUT_DATA->birthdate->year;
$INPUT_DATA->gender;
$INPUT_DATA->pronounce;
$INPUT_DATA->securityQuestions->q1;
$INPUT_DATA->securityQuestions->q2;
$INPUT_DATA->securityQuestions->q3;
$INPUT_DATA->securityQuestions->a1;
$INPUT_DATA->securityQuestions->a2;
$INPUT_DATA->securityQuestions->a3;
$INPUT_DATA->quickSettings->profile;
$INPUT_DATA->quickSettings->activity;
$INPUT_DATA->quickSettings->location;
$INPUT_DATA->quickSettings->colorScheme;
$INPUT_DATA->agreement;

// Check data
if($INPUT_DATA->agreement){
    //
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