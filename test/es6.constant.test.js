import log from "../node_modules/es6-log/es6.log";
import constant from "../src/es6.constant";

class A {
    static A()          { return constant("A") }
    static B()          { return constant("B") }
    static C()          { return constant("C") }
    static CONST_1()    { return constant(1) }
    static CONST_2()    { return constant(2) }
    static CONST_3()    { return constant(3) }
};

log(A);
constant.apply(A);
log(A);