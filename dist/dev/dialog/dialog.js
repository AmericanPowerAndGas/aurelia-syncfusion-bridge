"use strict";

System.register(["../common/widget-base", "../common/constants", "../common/decorators", "../common/common"], function (_export, _context) {
    "use strict";

    var WidgetBase, constants, generateBindables, customElement, inlineView, inject, _typeof, __decorate, ejDialog;

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
            customElement = _commonCommon.customElement;
            inlineView = _commonCommon.inlineView;
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

            _export("ejDialog", ejDialog = function (_WidgetBase) {
                _inherits(ejDialog, _WidgetBase);

                function ejDialog(element) {
                    _classCallCheck(this, ejDialog);

                    var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

                    _this.element = element;
                    return _this;
                }

                return ejDialog;
            }(WidgetBase));

            _export("ejDialog", ejDialog = __decorate([customElement(constants.elementPrefix + "dialog"), inlineView("" + constants.aureliaTemplateString), generateBindables('ejDialog', ['actionButtons', 'ajaxSettings', 'allowDraggable', 'allowKeyboardNavigation', 'animation', 'backgroundScroll', 'closeOnEscape', 'containment', 'contentType', 'contentUrl', 'cssClass', 'enableAnimation', 'enabled', 'enableModal', 'enablePersistence', 'enableResize', 'enableRTL', 'faviconCSS', 'height', 'htmlAttributes', 'isResponsive', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'position', 'showHeader', 'showOnInit', 'showRoundedCorner', 'target', 'title', 'tooltip', 'width', 'zIndex', 'showFooter', 'footerTemplateId'], [], { 'enableRTL': ['enableRtl'] }), inject(Element)], ejDialog));

            _export("ejDialog", ejDialog);
        }
    };
});
//# sourceMappingURL=../devbuild/dev/dialog/dialog.js.map
