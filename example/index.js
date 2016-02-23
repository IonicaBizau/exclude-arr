"use strict";

const excludeArr = require("../lib");

console.log(excludeArr([1, 2, 3, 42], 2));
// [ 1, 3, 42 ]
