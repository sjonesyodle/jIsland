jIsland
=======

#### What are jIslands ?

If you find yourself writing scripts for third party sites you may have come accross instances were the version of 
jQuery that your script relies on is incompatible with the globally loaded version on the site.

Remember that jQuery adds itself to the window object:
    window.jQuery = window.$ = jQuery;

And if you were to load in two versions together the version loaded last will redefine those global vars.

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    
    <script>
        console.log( window.$ ); // -> 1.4.2
        console.log( window.jQuery ); // -> 1.4.2
    </script>

This task is easily achieved with the jQuery's built in $.noConflict() method that restores the globally scoped
vars 'jQuery' and '$' back to their original defintions.

Read about how this works here: http://api.jquery.com/jQuery.noConflict/



    function () {
    
    }

