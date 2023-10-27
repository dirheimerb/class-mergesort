export type ValidationObject =
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
export function toggleClass(className: string, condition: boolean): string {
  return condition ? className : '';
}
/**
 * Add a prefix to each class name in the list.
 *
 * @param prefix - The prefix to add.
 * @param classNames - List of class names.
 * @returns A single string with each class name prefixed.
 */
export function prefixClass(prefix: string, ...classNames: string[]): string {
  return classNames.map((name) => `${prefix}${name}`).join(' ');
}
/**
 * Add a suffix to each class name in the list.
 *
 * @param suffix - The suffix to add.
 * @param classNames - List of class names.
 * @returns A single string with each class name suffixed.
 */
export function suffixClass(suffix: string, ...classNames: string[]): string {
  return classNames.map((name) => `${name}${suffix}`).join(' ');
}
/**
 * Filter class names based on a custom condition function.
 *
 * @param condition - The condition function.
 * @param classNames - List of class names.
 * @returns A single string containing class names that meet the condition.
 */
export function filterClass(
  condition: (className: string) => boolean,
  ...classNames: string[]
): string {
  return classNames.filter(condition).join(' ');
}
/**
 * Merges multiple class name strings or arrays, eliminating duplicates.
 *
 * @param args - Class name strings or arrays of class names to be merged.
 * @returns A single string containing the merged and unique class names.
 */
export function mergeClass(...args: (string | string[])[]): string {
  const classSet = new Set<string>();
  args.forEach((arg) => {
    if (typeof arg === 'string') {
      arg.split(' ').forEach((className) => classSet.add(className));
    } else if (Array.isArray(arg)) {
      arg.forEach((className) => classSet.add(className));
    }
  });
  return Array.from(classSet).join(' ');
}
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
  } else if (typeof mix === 'object' && mix !== null) {
    // Ensure it's not null as typeof null is 'object'
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
    } else {
      // If it's an object, loop through its keys
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
export function classNameX(...args: ValidationObject[]): string {
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
