"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(value) {
    return value === true;
}

function isFalse(value) {
    return value === false;
}

function not(value) {
    return !value;
}

function addOne (value) {
    value = parseFloat(value);
    return value + 1;
}

function isEven (value) {
    return value % 2 === 0;
}

function isIdentical (value, val1) {
    return value === val1;
}

function isEqual (value, val1) {
    return value == val1;
}

function or (val1, val2) {
    return val1 || val2;
}

function and (val1, val2) {
    return val1 && val2;
}

function concat (val1, val2) {
    val1 = val1.toString()
    val2 = val2.toString()
    return val1 + val2;
}