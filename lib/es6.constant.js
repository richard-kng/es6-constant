/*
 es6.constant 1.0.2 Copyright (c) 2014 "Richard KnG" Richárd Szakács
 Licensed under the MIT license.
 see: https://github.com/richard-kng/es6-constant for details
*/
class Constant {
    constructor(value) {
        this._value = value;
    }
    get value() { return this._value; }
}

const self = function constant(value) {
    return new Constant(value);
};

self.apply = function(class_) {
    var element,
        object;

    for(element in class_) {
        if(class_.hasOwnProperty(element)) {
            if(element === element.toUpperCase()) { // Check whether the name is all uppercase
                object = class_[element];
                if(typeof object === "function") {
                    object = class_[element]();
                }

                if(object instanceof Constant) {
                    Object.defineProperty(class_, element, {
                        value: object.value,
                        writable: false, enumerable: true, configurable: false
                    });
                }
            }
        }
    }
};

export default self;