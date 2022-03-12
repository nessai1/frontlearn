export function select(selector, scope) {
    if (scope === undefined) {
        scope = document;
    }

    return scope.querySelector(selector);
}

export function create(tagName, params) {
    let element = document.createElement(tagName);
    if (params.aClass instanceof Array) {
        element.className = params.aClass.join(' ');
    }

    if (params.value !== undefined) {
        element.value = params.value;
    }

    return element;
}