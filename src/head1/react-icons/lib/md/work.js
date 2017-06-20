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

var MdWork = function MdWork(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm23.4 10v-3.4h-6.8v3.4h6.8z m10 0c1.8 0 3.2 1.5 3.2 3.4v18.2c0 1.9-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.5-3.2-3.4v-18.2c0-1.9 1.4-3.4 3.2-3.4h6.8v-3.4c0-1.8 1.4-3.2 3.2-3.2h6.8c1.8 0 3.2 1.4 3.2 3.2v3.4h6.8z' })
        )
    );
};

exports.default = MdWork;
module.exports = exports['default'];