odoo.define('esco_rtl_arabic.esco_custom', function(require) {
    "use strict";

    var core = require('web.core');

    var LoadingArabic = require('web.Loading');

    LoadingArabic.include({
        init: function(parent) {
            this._super(parent);
            this.options = _.extend({
                locale: moment.locale('en'),
            });
        },
    });
});