"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'hello world';
console.log(message);
// variable declaration practise
var x = 10;
var y = 20;
var sum;
var title = 'typescript';
var isBeginner = true;
var total = 0;
var name = 'pooja';
var sentense = "my name is " + name + " i am a beginner in typescript";
console.log(sentense);
var n = null;
var u = undefined;
// let new : boolean = null;
var new1 = undefined;
var list = [1, 2, 30];
var list1 = [1, 2, 3];
var person1 = ['chris', 22];
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
var c = color.green;
console.log(c);
var random = 10;
random = true;
random = 'pooja';
var myvariable = 10;
function hasname(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasname(myvariable)) {
    console.log(myvariable.name);
}
var multitype;
// function practise
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5);
function fullname(person) {
    console.log("" + person.firstname + person.lastname);
}
var p = {
    firstname: 'pooja',
    lastname: 'gundaraniya'
};
fullname(p);
//class
var employee = /** @class */ (function () {
    function employee(name) {
        this.emplyeename = name;
    }
    employee.prototype.greet = function () {
        console.log("good morning " + this.emplyeename);
    };
    return employee;
}());
var emp1 = new employee('pooja');
console.log(emp1.emplyeename);
emp1.greet();
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managername) {
        return _super.call(this, managername) || this;
    }
    manager.prototype.delegatework = function () {
        console.log("manager delegating work");
    };
    return manager;
}(employee));
var m1 = new manager('pooja');
m1.delegatework();
m1.greet();
console.log(m1.emplyeename);
