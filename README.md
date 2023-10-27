# Class MergeSort

[![npm version](https://badge.fury.io/js/class-mergesort.svg)](https://badge.fury.io/js/class-mergesort)

- [Class MergeSort](#class-mergesort)
  - [Installation](#installation)
  - [Documentation](#documentation)
  - [API Overview](#api-overview)
    - [`toggleClass`](#toggleclass)
    - [`prefixClass`](#prefixclass)
    - [`suffixClass`](#suffixclass)
    - [`filterClass`](#filterclass)
    - [`mergeClass`](#mergeclass)
    - [`classNameX`](#classnamex)
  - [License](#license)

Class MergeSort is a utility library designed to facilitate the manipulation and combination of CSS classes in TypeScript and JavaScript applications. It provides various utilities to toggle, prefix, suffix, filter, merge, and more.

## Installation

Choose your package manager to install `class-mergesort`.

```bash
npm i -D class-mergesort
```

```bash
yarn add -D class-mergesort
```

```bash
pnpm i -D class-mergesort
```

## Documentation

[Docs](https://dirheimerb.github.io/class-mergesort)

## API Overview

### `toggleClass`

Takes a class name and a boolean condition. If the condition is true, it returns the class name; otherwise, an empty string is returned.

```typescript
const isActive = true;
const activeClass = toggleClass('active', isActive);
// Output: "active" if isActive is true, "" otherwise.
```

### `prefixClass`

Prepends a specified prefix to each class name in the list. Particularly useful for frameworks like Bootstrap.

```typescript
const prefixedClasses = prefixClass('btn-', 'primary', 'large');
// Output: "btn-primary btn-large"
```

### `suffixClass`

Appends a specified suffix to each class name in the list. Useful for BEM methodology.

```typescript
const suffixedClasses = suffixClass('--disabled', 'button', 'input');
// Output: "button--disabled input--disabled"
```

### `filterClass`

Filters class names based on a custom condition function. Only the class names that meet the condition will be included in the result.

```typescript
const filteredClasses = filterClass(
  (name) => !name.includes('omit'),
  'button',
  'omit-me',
);
// Output: "button"
```

### `mergeClass`

Combines multiple class names into a single string, while eliminating duplicates and empty strings.

```typescript
// Multiple class name strings
const merged1 = mergeClass('btn btn-primary', 'btn-secondary', 'btn');
// Output: "btn btn-primary btn-secondary"

// Array of class names
const merged2 = mergeClass(['btn', 'btn-large'], ['btn-small', 'btn']);
// Output: "btn btn-large btn-small"

// Mixed types
const merged3 = mergeClass('btn btn-primary', ['btn-secondary', 'btn-large']);
// Output: "btn btn-primary btn-secondary btn-large"
```

### `classNameX`

Acts similar to `mergeClass` but allows more complex structures and types for combining class names.

```typescript
// Check API documentation for examples.
```

## License

MIT
