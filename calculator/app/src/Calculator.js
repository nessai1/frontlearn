import {select, create} from './DOM.js';

export default class Calculator {

    _appDiv;
    _calculatorId;

    constructor(divId) {
        this._calculatorId = divId;
        this._appDiv = select('#' + divId);
        this._appDiv.innerHTML = 'it works!';
    }

    getId() {
        return this._calculatorId;
    }
}