<?php

// Get JSON input data
include './../../_chips/get_JSON_input.php';

// The response header
include './../../_chips/header.php';

// Get all response-related code
include './../../_chips/JSON_response.php';

// Data
$INPUT_DATA->mode;
$INPUT_DATA->username;
$INPUT_DATA->password;

?>
{
    <?php require './../../_chips/JSON_response_attachment.php'; ?>
}