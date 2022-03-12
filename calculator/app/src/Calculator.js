import {select, create} from './DOM.js';

export default class Calculator {

    _appDiv;
    _calculatorId;
    _inputValue;

    constructor(divId) {
        this._calculatorId = divId;
        this._appDiv = select('#' + divId);
        this._appDiv.className = 'calculator';
        this._appDiv.appendChild(this.createInput());
        //this._appDiv.appendChild(this.createPanel());
    }

    createInput() {
        this._inputValue = 0;
        let wrapper = create('div', {
            aClass: ['calculator__result']
        });

        let input = create('input', {
            aClass: ['calculator__input'],
            value: this._inputValue
        });

        wrapper.appendChild(input);
        return wrapper;
    }

    createPanel() {

    }

    getId() {
        return this._calculatorId;
    }
}