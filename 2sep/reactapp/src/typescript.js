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
var message = 'welcome pooja';
console.log(message);
// let result = pass:string | fail:string ;
var fruit;
(function (fruit) {
    fruit[fruit["mango"] = 0] = "mango";
    fruit[fruit["apple"] = 1] = "apple";
    fruit[fruit["orange"] = 2] = "orange";
})(fruit || (fruit = {}));
var f = fruit.mango;
console.log(f);
var myVariable = 10;
var check = myVariable.toString();
var check1 = myVariable.valueOf();
console.log(check);
console.log(check1);
function hasname(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasname(myVariable)) {
    console.log(myVariable, name);
}
function sub(num1, num2) {
    return num1 - num2;
}
;
console.log(sub(10, 5));
function fullName(person) {
    console.log("" + person.firstName + person.lastName);
}
var p = {
    firstName: 'pooja',
    lastName: 'gundaraniya'
};
fullName(p);
function vege(veg) {
    console.log("" + veg.potato);
}
var v = {
    potato: 'white',
    tomato: 'red'
};
vege(v);
var react = /** @class */ (function () {
    function react(courseName) {
        this.course = courseName;
    }
    react.prototype.lang = function () {
        console.log("this is" + this.course);
    };
    return react;
}());
var r = new react('typescript');
console.log(r.course);
r.lang();
var typeScript = /** @class */ (function (_super) {
    __extends(typeScript, _super);
    function typeScript(childCourseName) {
        return _super.call(this, childCourseName) || this;
    }
    typeScript.prototype.language = function () {
        console.log("this is derived class");
    };
    return typeScript;
}(react));
var t = new typeScript('react');
t.language();
t.lang;
console.log(t.course);
