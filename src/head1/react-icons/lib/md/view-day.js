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

var MdViewDay = function MdViewDay(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm3.4 5h31.6v5h-31.6v-5z m30 8.4c0.9 0 1.6 0.7 1.6 1.6v10c0 0.9-0.7 1.6-1.6 1.6h-28.4c-0.9 0-1.6-0.7-1.6-1.6v-10c0-0.9 0.7-1.6 1.6-1.6h28.4z m-30 21.6v-5h31.6v5h-31.6z' })
        )
    );
};

exports.default = MdViewDay;
module.exports = exports['default'];