var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { constants } from '../common/constants';
import { generateBindables } from '../common/decorators';
import { inlineView, customElement } from '../common/common';
let Series = class Series {
};
Series = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`${constants.elementPrefix}series`),
    generateBindables('series', ['bearFillColor', 'border', 'border', 'border', 'border', 'animationDuration', 'bullFillColor', 'columnFacet', 'columnWidth', 'columnSpacing', 'stackingGroup', 'dashArray', 'dataSource', 'cardinalSplineTension', 'doughnutCoefficient', 'doughnutSize', 'drawType', 'enableAnimation', 'enableSmartLabels', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'fill', 'font', 'font', 'font', 'font', 'font', 'font', 'font', 'funnelHeight', 'funnelWidth', 'gapRatio', 'isClosed', 'isStacking', 'isTransposed', 'showMedian', 'labelPosition', 'splitMode', 'boxPlotMode', 'bubbleOptions', 'bubbleOptions', 'bubbleOptions', 'bubbleOptions', 'splineType', 'lineCap', 'lineJoin', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'name', 'opacity', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'palette', 'pieCoefficient', 'pieOfPieCoefficient', 'splitValue', 'gapWidth', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'positiveFill', 'connectorLine', 'connectorLine', 'connectorLine', 'connectorLine', 'connectorLine', 'dragSettings', 'dragSettings', 'dragSettings', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'pyramidMode', 'query', 'startAngle', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'type', 'visibility', 'visibleOnLegend', 'xAxisName', 'xName', 'yAxisName', 'yName', 'high', 'low', 'open', 'close', 'pointColorMappingName', 'zOrder', 'size', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings'])
], Series);
export { Series };
