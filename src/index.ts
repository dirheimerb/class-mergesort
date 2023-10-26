import { toggleClass, suffixClass, filterClass, mergeClass } from "./utils";
/**
 * Interface representing the accepted types for generating class names.
 */
type ValidationObject = string | number | Record<string, any> | null | undefined;
/**
 * Function to convert a variety of types into a valid class name string.
 * 
 * @param mix - The input which can be a string, number, array, or object.
 * @returns A string after concatenation and validation.
 */
function toVal(mix: ValidationObject): string {
    let k: string | number;
    let y: string;
    let str: string = '';
  
    // Handle strings and numbers directly
    if (typeof mix === 'string' || typeof mix === 'number') {
        str += mix;
    } else if (typeof mix === 'object' && mix !== null) { // Ensure it's not null as typeof null is 'object'
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
        } else { // If it's an object, loop through its keys
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
function classNameX(...args: ValidationObject[]): string {
    let i: number = 0;
    let mix: ValidationObject;
    let x: string;
    let str: string = '';

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

export {
    toggleClass,
    suffixClass,
    filterClass,
    mergeClass,
    classNameX
}