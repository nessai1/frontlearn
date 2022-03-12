import {select} from './DOM.js';

export default class Calculator {

    _calculatorId;
    _appDiv;
    _inputDiv;

    _operation;
    _firstValue;
    _secondValue;

    constructor(divId) {
        this._calculatorId = divId;
        this._appDiv = select('#' + divId);
        this._firstValue = null;
        this.initInput();
        this.initPanel();
    }

    initInput() {
        this._inputDiv = select('#calculatorInput', this._appDiv);
        this._inputDiv.value = '0'
    }

    initPanel() {
        let btnPanel = select('#calculatorBtnPanel', this._appDiv);
        btnPanel.addEventListener('click', (e) => {
            this.handleEvent(e.target.dataset);
        });
    }

    handleEvent(params) {
        switch (params.action) {
            case 'operation':
                this.makeOperation(params.actionId);
                break;
            case 'input':
                this.inputNumber(params.actionId);
                break;
        }
    }

    inputNumber(data) {
        if (this._secondValue) {
            this.clearCalculator();
        }
        if (data === '.') {
            this.setFloatPoint();
        }
        else {
            let inputValue = parseInt(data).toString();
            if (this.getInputValue() !== '0') {
                inputValue = this.getInputValue() + inputValue;
            }
            this.updateInput(inputValue);
        }
    }

    makeOperation(operation) {
        switch (operation) {
            case 'clear':
                this.clearInput();
                break;
            case 'switchMark':
                this.switchMark();
                break;
            case '%':
                this.calculatePercent();
                break;
            case '-':
            case '+':
            case '/':
            case '*':
                this.loadFirstValue(operation);
                break;
            case 'equals':
                this.calculate();
        }
    }

    setFloatPoint() {
        let inputValue = this.getInputValue();
        if (inputValue.indexOf('.') === -1) {
            this.updateInput(inputValue + '.');
        }
    }

    updateInput(inputValue) {
        this._inputDiv.value = inputValue;
    }

    getInputValue() {
        return this._inputDiv.value;
    }

    clearCalculator() {
        delete(this._firstValue);
        delete(this._secondValue);
        delete(this._operation);
        this.clearInput();
    }

    clearInput() {
        this.updateInput('0');
    }

    switchMark() {
        let inputValue = this.getInputValue();
        if (inputValue[0] === '-') {
            this.updateInput(inputValue.slice(1));
        }
        else {
            this.updateInput('-' + inputValue);
        }
    }

    loadFirstValue(operation) {
        if (this._secondValue) {
            delete(this._secondValue);
        }
        this._firstValue = this.getInputValue();
        this._operation = operation;
        this.clearInput();
    }

    calculatePercent() {
        this._inputDiv.value = this.getInputValue() / 100;
    }

    calculate() {
        if (this._firstValue && this._operation) {
            if (!this._secondValue) {
                this._secondValue = this.getInputValue();
            }
            else {
                this._firstValue = this.getInputValue();
            }

            this._inputDiv.value = this.getCalculation(this._firstValue, this._secondValue, this._operation);
        }
    }

    getCalculation(fValue, sValue, operation) {
        fValue = parseFloat(fValue);
        sValue = parseFloat(sValue);

        switch (operation) {
            case '+':
                return fValue + sValue;
            case '-':
                return fValue - sValue;
            case '*':
                return fValue * sValue;
            case '/':
                return fValue / sValue;
        }
    }



    getId() {
        return this._calculatorId;
    }
}