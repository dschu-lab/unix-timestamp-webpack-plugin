'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UnixTimestampPlugin = function () {
    function UnixTimestampPlugin(options) {
        _classCallCheck(this, UnixTimestampPlugin);

        var defaultOptions = {
            filePath: './',
            fileName: '.build-timestamp'
        };

        this.options = Object.assign({}, defaultOptions, options);
    }

    _createClass(UnixTimestampPlugin, [{
        key: 'apply',
        value: function apply(compiler) {
            compiler.plugin('done', function (compilation, callback) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.options;

                console.log('Writing build timestamp... ' + compilation.endTime);

                _fs2.default.writeFileSync(options.filePath + '/' + options.fileName, compilation.endTime, 'utf8');
            }.bind(this));
        }
    }]);

    return UnixTimestampPlugin;
}();

exports.default = UnixTimestampPlugin;
//# sourceMappingURL=UnixTimestampPlugin.js.map