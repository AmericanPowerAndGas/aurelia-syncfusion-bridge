var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { inlineView, customElement } from '../../common/common';
let SeriesVM = class SeriesVM {
};
SeriesVM = __decorate([
    inlineView(`${constants.aureliaTemplateString}`),
    customElement(`e-series`),
    generateBindables('series', ['animation', 'bearFillColor', 'binInterval', 'border', 'boxPlotMode', 'bullFillColor', 'cardinalSplineTension', 'close', 'columnSpacing', 'columnWidth', 'connector', 'cornerRadius', 'dashArray', 'dataSource', 'dragSettings', 'drawType', 'emptyPointSettings', 'enableComplexProperty', 'enableSolidCandles', 'enableTooltip', 'errorBar', 'fill', 'high', 'intermediateSumIndexes', 'isClosed', 'legendShape', 'low', 'marker', 'maxRadius', 'minRadius', 'name', 'negativeFillColor', 'opacity', 'open', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'selectionStyle', 'showMean', 'showNormalDistribution', 'size', 'splineType', 'stackingGroup', 'sumIndexes', 'summaryFillColor', 'tooltipFormat', 'tooltipMappingName', 'trendlines', 'type', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName', 'zOrder'], [], null, null)
], SeriesVM);
export { SeriesVM };
