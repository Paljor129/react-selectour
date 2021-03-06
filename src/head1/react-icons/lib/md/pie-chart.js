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

var MdPieChart = function MdPieChart(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm21.7 21.7h14.9c-0.7 7.9-7 14.2-14.9 14.9v-14.9z m0-18.3c7.9 0.7 14.2 7 14.9 14.9h-14.9v-14.9z m-3.3 0v33.2c-8.5-0.8-15-7.9-15-16.6s6.5-15.8 15-16.6z' })
        )
    );
};

exports.default = MdPieChart;
module.exports = exports['default'];