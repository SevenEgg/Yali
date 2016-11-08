/**
 * Created by egg on 16/11/08.
 */
'use strict';
define(function(require, exports, module) {
    seajs.use([
        'css/login/login.css'
    ]);

    var common = require('../{common}');
    var dataload = require('../{dataload}');
    dataload.Debug(true);
    var registered = {
        init: function(options, callback) {
            registered._callback = callback;
            var container = options;
            dataload.GetFile(null, 'scripts/components/login/registered.html', function(html) {
                if (html !== "") {
                    container.html(html);

                    if (typeof registered._callback === 'function') {
                        registered._callback();
                    }
                }
            });
        }

    }

    return {
        init: registered.init
    }

});