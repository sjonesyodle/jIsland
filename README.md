jIsland
=======

#### What are jIslands ?

If you find yourself writing scripts for third party sites that you do not control
you may have come accross instances were the version of jQuery that your script relies
on is incompatible with globally loaded version on the site.

This is where having your own version of jQuery confined to a closure becomes crucial in order
to maintain the integrity of your app while leaving the global version untouched.

This task is easily achieved with the jQuery's built in $.noConflict() method that restores the globally scoped
vars 'jQuery' and '$' back to the original version.

Read about how this works here: http://api.jquery.com/jQuery.noConflict/



    function () {
    
    }

