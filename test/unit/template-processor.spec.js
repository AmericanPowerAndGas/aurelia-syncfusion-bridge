import './setup';
import {WidgetBase} from 'src/common/widget-base';
import {TemplatingEngine} from 'aurelia-templating';
import {TemplateProcessor} from 'src/common/template-processor';
import {Container} from 'aurelia-dependency-injection';
import {Util} from 'src/common/util';
import {DOM} from 'aurelia-pal';
import {initialize} from 'aurelia-pal-browser';
import 'ej.grid.min';
describe('Template-Processor', () => {
  let widgetBase;
  let element: Element;
  beforeEach(() => {
    initialize();
    widgetBase = new WidgetBase();
    widgetBase.controlProperties = ['dataSource'];
    widgetBase.util = new Util();
    widgetBase.controlName = 'ejGrid';
    widgetBase.hasChildProperty = true;
    widgetBase.twoWays = ['dataSource'];
    widgetBase.childPropertyName = 'columns';
    widgetBase.columns = [{ejHeaderText: 'BasicDetails', ejField: 'ID', ejTemplate: '<div class="entries">${ID}</div><div>Name:${Name}</div>', controlProperties: ['field', 'headerText']}, {ejHeaderText: 'Country', ejField: 'Country'}];
    widgetBase.ejDataSource = [{ 'ID': 1, 'Name': 'Crawford', 'Company Name': 'Camido', 'Country': 'Indonesia'}, { 'ID': 2, 'Name': 'Austin', 'Country': 'Canada'},
      { 'ID': 3, 'Name': 'Banks',  'Country': 'Chile'}, { 'ID': 4, 'Name': 'Stone',  'Country': 'France'},
      { 'ID': 5, 'Name': 'Smith',  'Country': 'Argentina'}];
    let container = (Container.instance || new Container());
    let templateEngine = container.get(TemplatingEngine);
    widgetBase.templateProcessor = new TemplateProcessor(widgetBase, templateEngine);
    widgetBase.templateProcessor.initTemplate();
    element = DOM.createElement('ej-grid');
    element.setAttribute('id', 'templateSpec');
    widgetBase.createWidget({element: element});
  });
  it('Widget with template and children created properly', ()=>{
    let pluginName = widgetBase.widget.pluginName;
    expect(pluginName).toBe('ejGrid');
  });
  it('check render template string ', ()=>{
    let  tempelement = DOM.createElement('div');
    tempelement.setAttribute('id', 'renderTemplateCheck');
    let selector = '#templateSpec';
    widgetBase.result = widgetBase.templateProcessor.renderStringTemplate(widgetBase.widget, selector,  { 'ID': 12, 'Name': 'Templatecheck' }, 0 );
    let templateClassCheck = widgetBase.result.indexOf('ej-aurelia-template') > -1; //checking whether the template class is added properly;
    expect(templateClassCheck).toBe(true);
    let keyValue  = widgetBase.result.indexOf(widgetBase.widget.aureliaTemplate[selector].key) > -1; //check whether the generic key value is added to the string properly;
    expect(keyValue).toBe(true);
  });
  it('template compiler', () => {
    let ele = DOM.createElement('div');
    ele.innerHTML = '<div class="ej-aurelia-template guiid1"></div><div class="ej-aurelia-template guiid"></div>';
    let context = {};
    context.widget = {};
    context.widget.aureliaTemplate = { test: { key: 'guiid1', itemData: [{ id: 1 }, { id: 2 }], views: [] } };
    let templatingEngine = {
      enhance: () => { }
    };
    let fakeView = {
      bind: () => { },
      attached: () => { }
    };
    context.templateProcess = new TemplateProcessor(context, templatingEngine);
    let enhanceSpy = spyOn(templatingEngine, 'enhance').and.returnValue(fakeView);
    context.templateProcess.compileTemplate(ele);
    expect(enhanceSpy).toHaveBeenCalledWith(ele);
  });
});

