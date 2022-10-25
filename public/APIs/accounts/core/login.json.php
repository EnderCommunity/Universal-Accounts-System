<?php

// Initiate the page
require './../../_chips/comb.start_inputJSON.php';

// Data
$INPUT_DATA->devMode;
// Check data for SQL injections
$INPUT_DATA->username;
$INPUT_DATA->password;

?>
{
    <?php require './../../_chips/JSON_response_attachment.php'; ?>
}