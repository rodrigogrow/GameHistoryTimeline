
(function() {

    // create main object
    var Utils = {};

    /** 
     * capitalize only first letter of given string
     *
     * @string {String} string to be processed
     */
    Utils.capitalizeFirstLetter = function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // make it global
    if (!window.Utils) {
        window.Utils = Utils; 
    }


})();