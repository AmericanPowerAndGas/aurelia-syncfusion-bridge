"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TreeGridColumn = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _constants = require("../common/constants");

var _decorators = require("../common/decorators");

var _common = require("../common/common");

var _util = require("../common/util");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TreeGridColumn = function () {
    function TreeGridColumn() {
        _classCallCheck(this, TreeGridColumn);

        this.angularTemplate = [];
    }

    TreeGridColumn.prototype.setTemplates = function setTemplates() {
        if (this.angularTemplate[0]) {
            var util = new _util.Util();
            this[util.getBindablePropertyName('angularTemplate')] = this.angularTemplate[0].template;
        }
    };

    return TreeGridColumn;
}();
__decorate([(0, _common.children)(_constants.constants.elementPrefix + "template")], TreeGridColumn.prototype, "angularTemplate", void 0);
exports.TreeGridColumn = TreeGridColumn = __decorate([(0, _common.inlineView)("" + _constants.constants.aureliaTemplateString), (0, _common.customElement)(_constants.constants.elementPrefix + "tree-grid-column"), (0, _decorators.generateBindables)('columns', ['allowCellSelection', 'allowEditing', 'allowFiltering', 'allowFilteringBlankContent', 'allowFreezing', 'allowSorting', 'angularTemplate', 'clipMode', 'commands', 'commands', 'commands', 'displayAsCheckbox', 'dropdownData', 'editParams', 'editTemplate', 'editType', 'field', 'filterEditType', 'filterType', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isTemplateColumn', 'priority', 'showCheckbox', 'showInColumnChooser', 'template', 'templateID', 'textAlign', 'tooltip', 'validationRules', 'visible', 'width'], [], { 'headerTemplateID': ['headerTemplateId', 'headerTemplateID'], 'templateID': ['templateId', 'templateID'] })], TreeGridColumn);
exports.TreeGridColumn = TreeGridColumn;