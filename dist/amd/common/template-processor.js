define(["exports", "aurelia-dependency-injection", "../common/util", "aurelia-templating"], function (exports, _aureliaDependencyInjection, _util, _aureliaTemplating) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.TemplateProcessor = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var TemplateProcessor = function () {
        function TemplateProcessor(context, templateEngine) {
            _classCallCheck(this, TemplateProcessor);

            this.context = context;
            this.templatingEngine = templateEngine;
            this.util = new _util.Util();
        }

        TemplateProcessor.prototype.initTemplate = function initTemplate() {
            var proxy = this;
            ej.template.render = function (self, selector, data, index) {
                return proxy.renderStringTemplate(self, selector, data, index);
            };
        };

        TemplateProcessor.prototype.initWidgetDependancies = function initWidgetDependancies() {
            if (this.context.widget.aureliaTemplate) {
                this.compileTemplate(this.context.widget.element);
            }
            var proxy = this.context;
            var element = this.context.widget.element;
            element.on(this.context.widget.pluginName + 'refresh', function () {
                if (proxy.widget.aureliaTemplate) {
                    proxy.templateProcessor.compileTemplate(element);
                }
            });
        };

        TemplateProcessor.prototype.renderStringTemplate = function renderStringTemplate(self, selector, data, index) {
            var templateObject = self.aureliaTemplate;
            if (!templateObject || !templateObject[selector]) {
                templateObject = templateObject || {};
                templateObject[selector] = { key: ej.getGuid('aurtmpl'), itemData: [], views: [] };
                self.aureliaTemplate = templateObject;
            }
            var scope = templateObject[selector];
            if (this.util.hasValue(index)) {
                scope.itemData[index] = data;
            } else {
                scope.itemData = [data];
            }
            var actElement = $(selector).html();
            var tempElement = "<div ej-prop='" + index + "' class='" + templateObject[selector].key + " ej-aurelia-template'>" + actElement + '</div>';
            return tempElement;
        };

        TemplateProcessor.prototype.compileTemplate = function compileTemplate(element) {
            var templates = $(element).find('.ej-aurelia-template');
            var templateObject = this.context.widget.aureliaTemplate;
            for (var template in templateObject) {
                var tmplElement = templates.filter('.' + templateObject[template].key);
                if (tmplElement.length) {
                    for (var i = 0; i < tmplElement.length; i++) {
                        var dataIndex = parseInt($(tmplElement[i]).attr('ej-prop'));
                        var view = this.templatingEngine.enhance(tmplElement[i]);
                        view.bind(templateObject[template].itemData[dataIndex], this.context.parentCtx);
                        templateObject[template].views[dataIndex] = view;
                    }
                } else {
                    this.unbindViews(templateObject[template]);
                    delete templateObject[template];
                }
            }
        };

        TemplateProcessor.prototype.clearTempalte = function clearTempalte() {
            var templateObject = this.context.widget.aureliaTemplate;
            if (templateObject && Object.keys(templateObject).length) {
                for (var t in templateObject) {
                    this.unbindViews(templateObject[t]);
                    delete templateObject[t];
                }
            }
        };

        TemplateProcessor.prototype.unbindViews = function unbindViews(obj) {
            for (var i = 0; i < obj.views.length; i++) {
                var view = obj.views[i];
                view.unbind();
            }
        };

        return TemplateProcessor;
    }();
    exports.TemplateProcessor = TemplateProcessor = __decorate([(0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TemplatingEngine, _util.Util)], TemplateProcessor);
    exports.TemplateProcessor = TemplateProcessor;
});