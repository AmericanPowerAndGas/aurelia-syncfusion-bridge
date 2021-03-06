var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Slider } from '@syncfusion/ej2-inputs';
let Ej2Slider = class Ej2Slider extends Ej2WidgetBase {
    constructor(element) {
        super(Slider);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2Slider = __decorate([
    customElement(`${constants.ej2ElementPrefix}slider`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables(constants.ej2ElementPrefix + 'Slider', ['colorRange', 'cssClass', 'customValues', 'enableAnimation', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enabled', 'limits', 'locale', 'max', 'min', 'orientation', 'readonly', 'showButtons', 'step', 'ticks', 'tooltip', 'type', 'value'], ['value'], null, null),
    inject(Element)
], Ej2Slider);
export { Ej2Slider };
