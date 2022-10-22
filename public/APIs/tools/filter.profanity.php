<?php

// Set the filter's status to true by default
$PROFANITY_FILTER_status = true;

// Get the server's info
require 'server.info.php';

// Get the words list
$PROFANITY_FILTER_wordsListString = file_get_contents("$SERVER_ROOT/lists/banned_words.txt"); // THIS IS NOT WORKING!
$PROFANITY_FILTER_status = !($PROFANITY_FILTER_wordsListString == false);

// Convert the list into an array and clean up the string list
$PROFANITY_FILTER_wordsList = ($PROFANITY_FILTER_status) ?
                                preg_split(
                                            "/\n|\r\n/",
                                            $PROFANITY_FILTER_wordsListString
                                        ) : false;

$PROFANITY_FILTER_status = !($PROFANITY_FILTER_wordsList == false);
unset($PROFANITY_FILTER_wordsListString);

function checkProfanity($text){
    global $PROFANITY_FILTER_status, $PROFANITY_FILTER_wordsList;
    if($PROFANITY_FILTER_status){
        $text_lowerCase = strtolower($text);
        // Loop through the words
        $i = 0;
        while($i < count($PROFANITY_FILTER_wordsList)){
            $wIndex = strpos($text_lowerCase, $PROFANITY_FILTER_wordsList[$i]);
            if($wIndex !== false){
                $wordLength = strlen($PROFANITY_FILTER_wordsList[$i]);
                if(
                    (($wIndex + $wordLength) < strlen($text) && (
                            (ctype_lower($text[$wIndex + $wordLength - 1]) && ctype_upper($text[$wIndex + $wordLength])) || // .aA
                            (!(ctype_alpha($text_lowerCase[$wIndex + $wordLength]))) // .a#, .A#
                        )) ||
                    (strlen($text) == ($wIndex + $wordLength))
                ){
                    if($wIndex > 0){
                        if(ctype_lower($text[$wIndex - 1]) && ctype_upper($text[$wIndex])){ //aA
                            return true;
                        }else if(ctype_upper($text[$wIndex]) && ctype_upper($text[$wIndex - 1])){ // AA
                            return true;
                        }else if(!(ctype_alpha($text_lowerCase[$wIndex - 1]))){ // #a, #A
                            return true;
                        }
                    }else{
                        return true;
                    }
                }
            }
            $i++;
        }
    }
    return false;
}
/*

            let status = false,
                lcText = text.toLowerCase();
            data = data.replace(/\r/g, "").toLowerCase().split(/\n/g);
            data.forEach(bWord => {
                let i = lcText.indexOf(bWord);
                if(i != -1){
                    if(i > 0){ // Not at the start of the string
                        if(/^[a-z]*$/g.test(text[i - 1]) && /^[A-Z]*$/g.test(text[i])){ //aA
                            status = true;
                        }else if(/^[A-Z]*$/g.test(text[i]) && /^[A-Z]*$/g.test(text[i - 1])){ // AA
                            status = true;
                        }else if(!/^[a-z]*$/g.test(lcText[i - 1])){ //#a ,#A
                            status = true;
                        }
                    }else{
                        status = true;
                    }
                }
                data = [];
            });

*/

?>