'use strict';

angular.module('insight.qtumcorelib').factory('QtumCoreLib',
    function() {
        var QtumCoreLib = require('agricoin-lib');
        return QtumCoreLib;
    });

