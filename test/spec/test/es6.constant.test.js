System.register("test_es6.constant.test", [], function() {
  "use strict";
  var __moduleName = "test_es6.constant.test";
  var log = System.get("../node_modules/es6-log/es6.log").default;
  var constant = System.get("../src/es6.constant").default;
  var A = function A() {};
  ($traceurRuntime.createClass)(A, {}, {
    A: function() {
      return constant("A");
    },
    B: function() {
      return constant("B");
    },
    C: function() {
      return constant("C");
    },
    CONST_1: function() {
      return constant(1);
    },
    CONST_2: function() {
      return constant(2);
    },
    CONST_3: function() {
      return constant(3);
    }
  });
  ;
  log(A);
  constant.apply(A);
  log(A);
  return {};
});
