"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ej2TemplateProcessor = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _util = require("../common/util");

var _aureliaTemplating = require("aurelia-templating");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Ej2TemplateProcessor = function () {
    function Ej2TemplateProcessor(context, templateEngine) {
        _classCallCheck(this, Ej2TemplateProcessor);

        this.context = context;
        this.templatingEngine = templateEngine;
        this.util = new _util.Util();
    }

    Ej2TemplateProcessor.prototype.initWidgetDependancies = function initWidgetDependancies() {
        var _this = this;

        this.context.widget.queryCellInfo = function (arg) {
            if (arg.column && arg.column.template && arg.data) {
                var elements = arg.cell.children;
                for (var i = 0; i < elements.length; i++) {
                    _this.bindView(elements[i], arg.data);
                }
            }
        };
    };

    Ej2TemplateProcessor.prototype.bindView = function bindView(element, data) {
        var view = this.templatingEngine.enhance(element);
        view.bind(data, this.context.parentCtx);
    };

    Ej2TemplateProcessor.prototype.clearTempalte = function clearTempalte() {
        var templateObject = this.context.widget.aureliaTemplate;
        if (templateObject && Object.keys(templateObject).length) {
            for (var t in templateObject) {
                this.unbindViews(templateObject[t]);
                delete templateObject[t];
            }
        }
    };

    Ej2TemplateProcessor.prototype.unbindViews = function unbindViews(obj) {
        for (var i = 0; i < obj.views.length; i++) {
            var view = obj.views[i];
            view.unbind();
        }
    };

    return Ej2TemplateProcessor;
}();
exports.Ej2TemplateProcessor = Ej2TemplateProcessor = __decorate([(0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TemplatingEngine, _util.Util)], Ej2TemplateProcessor);
exports.Ej2TemplateProcessor = Ej2TemplateProcessor;