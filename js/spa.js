/**
 * spa.js
 * Root namespace module
 */

var spa = (function () { // eslint-disable-line no-unused-vars
    var initModule = function ($container) {
        spa.shell.initModule($container); // passes the container into spa.shell.js function
    };

    return { initModule: initModule };
})();

