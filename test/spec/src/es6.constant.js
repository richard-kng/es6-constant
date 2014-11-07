System.register("src_es6.constant", [], function() {
  "use strict";
  var __moduleName = "src_es6.constant";
  var Constant = function Constant(value) {
    this._value = value;
  };
  ($traceurRuntime.createClass)(Constant, {get value() {
      return this._value;
    }}, {});
  var self = function constant(value) {
    return new Constant(value);
  };
  self.apply = function(class_) {
    var element,
        object;
    for (element in class_) {
      if (class_.hasOwnProperty(element)) {
        if (element === element.toUpperCase()) {
          object = class_[$traceurRuntime.toProperty(element)];
          if (typeof object === "function") {
            object = class_[$traceurRuntime.toProperty(element)]();
          }
          if (object instanceof Constant) {
            Object.defineProperty(class_, element, {
              value: object.value,
              writable: false,
              enumerable: true,
              configurable: false
            });
          }
        }
      }
    }
  };
  var $__default = self;
  return {get default() {
      return $__default;
    }};
});
