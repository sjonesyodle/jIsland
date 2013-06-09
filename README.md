jIsland
=======

#### The problem

If you find yourself writing scripts for third party sites you may have come accross instances were the version of 
jQuery that your script relies on is incompatible with the globally loaded version on the site.

Remember that jQuery adds itself to the window object:

    window.jQuery = window.$ = jQuery;


The version loaded last will assign (redefine) those global vars to it's own version.

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    
    <script>
        console.log( window.$ ); // -> 1.9.1
        console.log( window.jQuery ); // -> 1.9.1
    </script>
    
This is problematic because the third party code may reference library features absent from your 
own desired version and linkage to these features to can easily be broken.

jIsland easily solves this problem by utilizing jQuery's built in $.noConflict() method that relinquishes
the globally scoped vars 'jQuery' and '$' back to their previous defintions.


Read about how this works here: http://api.jquery.com/jQuery.noConflict/



