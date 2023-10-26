import { toggleClass, suffixClass, filterClass, mergeClass } from "./utils";
/**
 * Interface representing the accepted types for generating class names.
 */
type ValidationObject = string | number | Record<string, any> | null | undefined;
/**
* Function to concatenate multiple class names into a single string.
*
* @param args - Spread of various types including string, number, array, and object.
* @returns A concatenated string of class names.
*/
declare function classNameX(...args: ValidationObject[]): string;
export { toggleClass, suffixClass, filterClass, mergeClass, classNameX };
//# sourceMappingURL=index.d.ts.map