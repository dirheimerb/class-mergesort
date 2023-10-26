"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classNameX = exports.mergeClass = exports.filterClass = exports.suffixClass = exports.toggleClass = void 0;
const utils_1 = require("./utils");
Object.defineProperty(exports, "toggleClass", { enumerable: true, get: function () { return utils_1.toggleClass; } });
Object.defineProperty(exports, "suffixClass", { enumerable: true, get: function () { return utils_1.suffixClass; } });
Object.defineProperty(exports, "filterClass", { enumerable: true, get: function () { return utils_1.filterClass; } });
Object.defineProperty(exports, "mergeClass", { enumerable: true, get: function () { return utils_1.mergeClass; } });
/**
 * Function to convert a variety of types into a valid class name string.
 *
 * @param mix - The input which can be a string, number, array, or object.
 * @returns A string after concatenation and validation.
 */
function toVal(mix) {
    let k;
    let y;
    let str = '';
    // Handle strings and numbers directly
    if (typeof mix === 'string' || typeof mix === 'number') {
        str += mix;
    }
    else if (typeof mix === 'object' && mix !== null) { // Ensure it's not null as typeof null is 'object'
        // If it's an array, loop through its elements
        if (Array.isArray(mix)) {
            for (k = 0; k < mix.length; k++) {
                if (mix[k]) {
                    y = toVal(mix[k]);
                    if (y) {
                        str && (str += ' ');
                        str += y;
                    }
                }
            }
        }
        else { // If it's an object, loop through its keys
            for (k in mix) {
                if (Object.prototype.hasOwnProperty.call(mix, k) && mix[k]) {
                    str && (str += ' ');
                    str += k;
                }
            }
        }
    }
    return str;
}
/**
* Function to concatenate multiple class names into a single string.
*
* @param args - Spread of various types including string, number, array, and object.
* @returns A concatenated string of class names.
*/
function classNameX(...args) {
    let i = 0;
    let mix;
    let x;
    let str = '';
    // Loop through each argument
    while (i < args.length) {
        mix = args[i++];
        if (mix) {
            x = toVal(mix);
            if (x) {
                str && (str += ' ');
                str += x;
            }
        }
    }
    return str;
}
exports.classNameX = classNameX;
//# sourceMappingURL=index.js.map