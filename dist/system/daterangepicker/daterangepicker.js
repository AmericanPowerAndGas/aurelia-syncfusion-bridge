"use strict";

System.register(["../common/widget-base", "../common/constants", "../common/decorators", "../common/common"], function (_export, _context) {
    "use strict";

    var WidgetBase, constants, generateBindables, customAttribute, inject, _typeof, __decorate, ejDateRangePicker;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_commonWidgetBase) {
            WidgetBase = _commonWidgetBase.WidgetBase;
        }, function (_commonConstants) {
            constants = _commonConstants.constants;
        }, function (_commonDecorators) {
            generateBindables = _commonDecorators.generateBindables;
        }, function (_commonCommon) {
            customAttribute = _commonCommon.customAttribute;
            inject = _commonCommon.inject;
        }],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export("ejDateRangePicker", ejDateRangePicker = function (_WidgetBase) {
                _inherits(ejDateRangePicker, _WidgetBase);

                function ejDateRangePicker(element) {
                    _classCallCheck(this, ejDateRangePicker);

                    var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

                    _this.isEditor = true;
                    _this.element = element;
                    return _this;
                }

                return ejDateRangePicker;
            }(WidgetBase));

            _export("ejDateRangePicker", ejDateRangePicker = __decorate([customAttribute(constants.attributePrefix + "date-range-picker"), generateBindables('ejDateRangePicker', ['allowEdit', 'buttonText', 'cssClass', 'dateFormat', 'enableTimePicker', 'enabled', 'enablePersistence', 'endDate', 'height', 'locale', 'maxDate', 'minDate', 'ranges', 'separator', 'startDate', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'value', 'watermarkText', 'width'], ['value']), inject(Element)], ejDateRangePicker));

            _export("ejDateRangePicker", ejDateRangePicker);
        }
    };
});