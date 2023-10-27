type ValidationObject =
  | string
  | number
  | Record<string, any>
  | null
  | undefined;
/**
 * Toggle a class name based on a condition.
 *
 * @param className - The class name to toggle.
 * @param condition - The condition determining whether the class should be added.
 * @returns The class name if the condition is true, otherwise an empty string.
 */
declare function toggleClass(className: string, condition: boolean): string;
/**
 * Add a prefix to each class name in the list.
 *
 * @param prefix - The prefix to add.
 * @param classNames - List of class names.
 * @returns A single string with each class name prefixed.
 */
declare function prefixClass(prefix: string, ...classNames: string[]): string;
/**
 * Add a suffix to each class name in the list.
 *
 * @param suffix - The suffix to add.
 * @param classNames - List of class names.
 * @returns A single string with each class name suffixed.
 */
declare function suffixClass(suffix: string, ...classNames: string[]): string;
/**
 * Filter class names based on a custom condition function.
 *
 * @param condition - The condition function.
 * @param classNames - List of class names.
 * @returns A single string containing class names that meet the condition.
 */
declare function filterClass(
  condition: (className: string) => boolean,
  ...classNames: string[]
): string;
/**
 * Merges multiple class name strings or arrays, eliminating duplicates.
 *
 * @param args - Class name strings or arrays of class names to be merged.
 * @returns A single string containing the merged and unique class names.
 */
declare function mergeClass(...args: (string | string[])[]): string;
/**
 * Function to concatenate multiple class names into a single string.
 *
 * @param args - Spread of various types including string, number, array, and object.
 * @returns A concatenated string of class names.
 */
declare function classNameX(...args: ValidationObject[]): string;

export {
  ValidationObject,
  classNameX,
  filterClass,
  mergeClass,
  prefixClass,
  suffixClass,
  toggleClass,
};
