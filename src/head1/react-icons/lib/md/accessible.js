'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = require('react-icon-base');

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdAccessible = function MdAccessible(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm21.4 30h3.4c-0.7 3.8-4.1 6.6-8.2 6.6-4.6 0-8.2-3.6-8.2-8.2 0-4.1 2.8-7.5 6.6-8.2v3.4c-2 0.7-3.4 2.6-3.4 4.8 0 2.7 2.3 5 5 5 2.2 0 4.1-1.4 4.8-3.4z m-4.8-14.8c0-2.4 2.6-4.5 5-3.1h0.1v0.1c0.4 0.1 0.7 0.4 1 0.7l2.2 2.4c1.7 1.8 4.2 3.1 6.7 3.1v3.2c-2.8 0-6.1-1.4-8.2-3.2v5.7h5c1.8 0 3.2 1.6 3.2 3.4v9.1h-3.2v-8.2h-8.4c-1.8 0-3.4-1.6-3.4-3.4v-9.8z m0-8.6c0-1.8 1.5-3.2 3.4-3.2s3.4 1.4 3.4 3.2-1.5 3.4-3.4 3.4-3.4-1.5-3.4-3.4z' })
        )
    );
};

exports.default = MdAccessible;
module.exports = exports['default'];