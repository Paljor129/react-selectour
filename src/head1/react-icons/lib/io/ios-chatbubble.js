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

var IoIosChatbubble = function IoIosChatbubble(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 7.5c8.3 0 15 5.4 15 12s-6.6 11.8-14.9 11.8c-2.1 0-4.1-0.3-5.9-0.9h-0.1c-0.3-0.1-0.5-0.2-0.8-0.2s-0.7 0.1-1 0.2c0 0-0.7 0.3-0.7 0.3l-3.9 1.7-0.2 0.1h-0.5c-0.4-0.1-0.6-0.5-0.5-0.8s1.3-4.4 1.3-4.5c0-0.3-0.1-0.6-0.2-0.9l-0.3-0.2c-1.4-1.9-2.3-4.1-2.3-6.6 0-6.6 6.7-12 15-12z' })
        )
    );
};

exports.default = IoIosChatbubble;
module.exports = exports['default'];