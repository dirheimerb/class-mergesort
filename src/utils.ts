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
    return classNames.map(name => `${prefix}${name}`).join(' ');
}

/**
 * Add a suffix to each class name in the list.
 * 
 * @param suffix - The suffix to add.
 * @param classNames - List of class names.
 * @returns A single string with each class name suffixed.
 */
export function suffixClass(suffix: string, ...classNames: string[]): string {
    return classNames.map(name => `${name}${suffix}`).join(' ');
}

/**
 * Filter class names based on a custom condition function.
 * 
 * @param condition - The condition function.
 * @param classNames - List of class names.
 * @returns A single string containing class names that meet the condition.
 */
export function filterClass(condition: (className: string) => boolean, ...classNames: string[]): string {
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
        if (typeof arg === "string") {
            arg.split(" ").forEach((className) => classSet.add(className));
        } else if (Array.isArray(arg)) {
            arg.forEach((className) => classSet.add(className));
        }
    });
    return Array.from(classSet).join(" ");
}
