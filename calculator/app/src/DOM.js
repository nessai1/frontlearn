export function select(selector, scope) {
    debugger;
    if (scope === undefined) {
        scope = document;
    }

    return scope.querySelector(selector);
}

export function create(tagName, params) {
    let element = document.createElement(tagName);
    element.dataset = params.dataset;

    return element;
}