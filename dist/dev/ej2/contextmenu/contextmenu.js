"use strict";

System.register(["../../common/ej2-widget-base", "../../common/constants", "../../common/decorators", "../../common/common", "@syncfusion/ej2-navigations"], function (_export, _context) {
    "use strict";

    var Ej2WidgetBase, constants, generateBindables, customElement, inlineView, inject, ContextMenu, _typeof, __decorate, ej2ContextMenu;

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
        setters: [function (_commonEj2WidgetBase) {
            Ej2WidgetBase = _commonEj2WidgetBase.Ej2WidgetBase;
        }, function (_commonConstants) {
            constants = _commonConstants.constants;
        }, function (_commonDecorators) {
            generateBindables = _commonDecorators.generateBindables;
        }, function (_commonCommon) {
            customElement = _commonCommon.customElement;
            inlineView = _commonCommon.inlineView;
            inject = _commonCommon.inject;
        }, function (_syncfusionEj2Navigations) {
            ContextMenu = _syncfusionEj2Navigations.ContextMenu;
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

            _export("ej2ContextMenu", ej2ContextMenu = function (_Ej2WidgetBase) {
                _inherits(ej2ContextMenu, _Ej2WidgetBase);

                function ej2ContextMenu(element) {
                    _classCallCheck(this, ej2ContextMenu);

                    var _this = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this, ContextMenu));

                    _this.element = element;
                    return _this;
                }

                return ej2ContextMenu;
            }(Ej2WidgetBase));

            _export("ej2ContextMenu", ej2ContextMenu = __decorate([customElement(constants.ej2ElementPrefix + "context-menu"), inlineView("<template><ul></ul></template>"), generateBindables(constants.ej2ElementPrefix + 'ContextMenu', ['animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'items', 'locale', 'showItemOnClick', 'target', 'template'], [], null, null), inject(Element)], ej2ContextMenu));

            _export("ej2ContextMenu", ej2ContextMenu);
        }
    };
});
//# sourceMappingURL=../../devbuild/dev/ej2/contextmenu/contextmenu.js.map
