"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ejGantt = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _widgetBase = require("../common/widget-base");

var _constants = require("../common/constants");

var _decorators = require("../common/decorators");

var _common = require("../common/common");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ejGantt = function (_WidgetBase) {
    _inherits(ejGantt, _WidgetBase);

    function ejGantt(element) {
        _classCallCheck(this, ejGantt);

        var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

        _this.element = element;
        return _this;
    }

    return ejGantt;
}(_widgetBase.WidgetBase);
exports.ejGantt = ejGantt = __decorate([(0, _common.customElement)(_constants.constants.elementPrefix + "gantt"), (0, _common.inlineView)("" + _constants.constants.aureliaTemplateString), (0, _decorators.generateBindables)('ejGantt', ['addDialogFields', 'allowColumnResize', 'allowDragAndDrop', 'allowGanttChartEditing', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowMultipleExporting', 'allowSelection', 'allowSorting', 'allowUnscheduledTask', 'baselineColor', 'baselineEndDateMapping', 'baselineStartDateMapping', 'cellTooltipTemplate', 'childMapping', 'columnDialogFields', 'connectorLineBackground', 'connectorlineWidth', 'cssClass', 'dataSource', 'dateFormat', 'dayWorkingTime', 'dragTooltip', 'durationMapping', 'durationUnit', 'durationUnitMapping', 'editDialogFields', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableContextMenu', 'enablePredecessorValidation', 'enableProgressBarResizing', 'enableResize', 'enableSerialNumber', 'enableTaskbarDragTooltip', 'enableTaskbarTooltip', 'enableVirtualization', 'enableWBS', 'enableWBSPredecessor', 'endDateMapping', 'expandStateMapping', 'filterSettings', 'groupCollection', 'groupIdMapping', 'groupNameMapping', 'highlightNonWorkingTime', 'highlightWeekends', 'holidays', 'includeWeekend', 'isResponsive', 'leftTaskLabelMapping', 'leftTaskLabelTemplate', 'locale', 'milestoneMapping', 'milestoneTemplate', 'nonWorkingBackground', 'notesMapping', 'parentProgressbarBackground', 'parentTaskIdMapping', 'parentTaskbarBackground', 'parentTaskbarTemplate', 'predecessorMapping', 'predecessorTooltipTemplate', 'progressMapping', 'progressbarBackground', 'progressbarHeight', 'progressbarTooltipTemplate', 'progressbarTooltipTemplateId', 'query', 'readOnly', 'renderBaseline', 'resourceCollectionMapping', 'resourceIdMapping', 'resourceInfoMapping', 'resourceNameMapping', 'resourceUnitMapping', 'resources', 'rightTaskLabelMapping', 'rightTaskLabelTemplate', 'roundOffDayworkingTime', 'rowHeight', 'scheduleEndDate', 'scheduleHeaderSettings', 'scheduleStartDate', 'selectedCellIndexes', 'selectedRowIndex', 'selectionType', 'selectionMode', 'showColumnChooser', 'showColumnOptions', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showProgressStatus', 'showResourceNames', 'showTaskNames', 'sizeSettings', 'sortSettings', 'splitterPosition', 'splitterSettings', 'startDateMapping', 'stripLines', 'taskCollectionMapping', 'taskIdMapping', 'taskNameMapping', 'taskSchedulingMode', 'taskSchedulingModeMapping', 'taskType', 'taskbarBackground', 'taskbarEditingTooltipTemplate', 'taskbarEditingTooltipTemplateId', 'taskbarHeight', 'taskbarTemplate', 'taskbarTooltipTemplate', 'taskbarTooltipTemplateId', 'toolbarSettings', 'treeColumnIndex', 'validateManualTasksOnLinking', 'viewType', 'weekendBackground', 'workMapping', 'workUnit', 'workWeek', 'workingTimeScale'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes'], {}, ['dataSource']), (0, _common.inject)(Element)], ejGantt);
exports.ejGantt = ejGantt;