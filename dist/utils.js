"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeClass = exports.filterClass = exports.suffixClass = exports.prefixClass = exports.toggleClass = void 0;
/**
 * Toggle a class name based on a condition.
 *
 * @param className - The class name to toggle.
 * @param condition - The condition determining whether the class should be added.
 * @returns The class name if the condition is true, otherwise an empty string.
 */
function toggleClass(className, condition) {
    return condition ? className : '';
}
exports.toggleClass = toggleClass;
/**
 * Add a prefix to each class name in the list.
 *
 * @param prefix - The prefix to add.
 * @param classNames - List of class names.
 * @returns A single string with each class name prefixed.
 */
function prefixClass(prefix, ...classNames) {
    return classNames.map(name => `${prefix}${name}`).join(' ');
}
exports.prefixClass = prefixClass;
/**
 * Add a suffix to each class name in the list.
 *
 * @param suffix - The suffix to add.
 * @param classNames - List of class names.
 * @returns A single string with each class name suffixed.
 */
function suffixClass(suffix, ...classNames) {
    return classNames.map(name => `${name}${suffix}`).join(' ');
}
exports.suffixClass = suffixClass;
/**
 * Filter class names based on a custom condition function.
 *
 * @param condition - The condition function.
 * @param classNames - List of class names.
 * @returns A single string containing class names that meet the condition.
 */
function filterClass(condition, ...classNames) {
    return classNames.filter(condition).join(' ');
}
exports.filterClass = filterClass;
/**
 * Merges multiple class name strings or arrays, eliminating duplicates.
 *
 * @param args - Class name strings or arrays of class names to be merged.
 * @returns A single string containing the merged and unique class names.
 */
function mergeClass(...args) {
    const classSet = new Set();
    args.forEach((arg) => {
        if (typeof arg === "string") {
            arg.split(" ").forEach((className) => classSet.add(className));
        }
        else if (Array.isArray(arg)) {
            arg.forEach((className) => classSet.add(className));
        }
    });
    return Array.from(classSet).join(" ");
}
exports.mergeClass = mergeClass;
//# sourceMappingURL=utils.js.map