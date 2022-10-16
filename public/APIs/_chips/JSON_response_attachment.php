<?php

// Print the JSON input data for dev mode
if($INPUT_DATA->mode == "development"){
    echo '"inputData": ';
    echo json_encode($INPUT_DATA);
    echo ",";
}

// Print the responseInfo object
echo '"responseInfo": {';
echo    '"successful": ';
echo        ($RESPONSE_SUCCESS_STATUS) ?
                'true' :
                'false';
echo    ',';
echo    '"code": ';
echo        strval($RESPONSE_CODE);
echo    ',';
echo    '"text": "';
echo        $RESPONSE_TEXT;
echo    '"';
echo '}';

?>