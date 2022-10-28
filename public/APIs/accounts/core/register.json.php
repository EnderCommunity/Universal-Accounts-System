<?php

// Initiate the page
require './../../_chips/comb.start_inputJSON.php';

// Do a basic check for the input data!
checkInputData(
    [$INPUT_DATA->name->first, "string", true],
    [$INPUT_DATA->name->last, "string", true],
    [$INPUT_DATA->username, "string", true],
    [$INPUT_DATA->passwordHash, "string"],
    [$INPUT_DATA->birthdate->day, "integer"],
    [$INPUT_DATA->birthdate->month, "integer"],
    [$INPUT_DATA->birthdate->year, "integer"],
    [$INPUT_DATA->gender, "string", true],
    [$INPUT_DATA->pronounce, "integer"],
    [$INPUT_DATA->securityQuestions->q1, "integer"],
    [$INPUT_DATA->securityQuestions->q2, "integer"],
    [$INPUT_DATA->securityQuestions->q3, "integer"],
    [$INPUT_DATA->securityQuestions->a1, "string"],
    [$INPUT_DATA->securityQuestions->a2, "string"],
    [$INPUT_DATA->securityQuestions->a3, "string"],
    [$INPUT_DATA->quickSettings->profile, "integer"],
    [$INPUT_DATA->quickSettings->activity, "integer"],
    [$INPUT_DATA->quickSettings->location, "integer"],
    [$INPUT_DATA->quickSettings->colorScheme, "integer"],
    [$INPUT_DATA->extraData->registrationDisplayLanguage, "string"],
    [$INPUT_DATA->agreement, "boolean"]
);

// Check data
if($INPUT_DATA->agreement){
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