"use strict";

System.register(["../common/widget-base", "../common/constants", "../common/decorators", "../common/common"], function (_export, _context) {
    "use strict";

    var WidgetBase, constants, generateBindables, inject, inlineView, customElement, children, _typeof, __decorate, ejSchedule;

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
            inject = _commonCommon.inject;
            inlineView = _commonCommon.inlineView;
            customElement = _commonCommon.customElement;
            children = _commonCommon.children;
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

            _export("ejSchedule", ejSchedule = function (_WidgetBase) {
                _inherits(ejSchedule, _WidgetBase);

                function ejSchedule(element) {
                    _classCallCheck(this, ejSchedule);

                    var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

                    _this.resources = [];
                    _this.element = element;
                    _this.hasChildProperty = true;
                    _this.childPropertyName = 'resources';
                    return _this;
                }

                return ejSchedule;
            }(WidgetBase));

            __decorate([children(constants.elementPrefix + "schedule-resource")], ejSchedule.prototype, "resources", void 0);
            _export("ejSchedule", ejSchedule = __decorate([customElement(constants.elementPrefix + "schedule"), inlineView("" + constants.aureliaTemplateString), generateBindables('ejSchedule', ['allowDragAndDrop', 'allowInline', 'allowDelete', 'allowKeyboardNavigation', 'appointmentSettings', 'appointmentTemplateId', 'cssClass', 'categorizeSettings', 'cellHeight', 'cellWidth', 'contextMenuSettings', 'currentDate', 'currentView', 'dateFormat', 'showAppointmentNavigator', 'enableAppointmentResize', 'enableLoadOnDemand', 'enablePersistence', 'enableRTL', 'endHour', 'group', 'height', 'workHours', 'isDST', 'isResponsive', 'locale', 'maxDate', 'minDate', 'orientation', 'prioritySettings', 'readOnly', 'reminderSettings', 'renderDates', 'resourceHeaderTemplateId', 'resources', 'showAllDayRow', 'showWeekend', 'showCurrentTimeIndicator', 'showHeaderBar', 'showLocationField', 'showTimeZoneFields', 'showQuickWindow', 'startHour', 'timeMode', 'timeZone', 'timeZoneCollection', 'views', 'width', 'enableRecurrenceValidation', 'agendaViewSettings', 'firstDayOfWeek', 'workWeek', 'tooltipSettings', 'timeScale', 'showDeleteConfirmationDialog', 'allDayCellsTemplateId', 'workCellsTemplateId', 'dateHeaderTemplateId', 'showOverflowButton', 'appointmentDragArea', 'showNextPrevMonth', 'blockoutSettings'], ['currentView', 'currentDate'], { 'enableRTL': ['enableRtl'] }), inject(Element)], ejSchedule));

            _export("ejSchedule", ejSchedule);
        }
    };
});
//# sourceMappingURL=../devbuild/dev/schedule/schedule.js.map
