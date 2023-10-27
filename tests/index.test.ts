import {
  toggleClass,
  prefixClass,
  suffixClass,
  filterClass,
  mergeClass,
  classNameX,
} from '../src';
// Test for toggleClass function
describe('toggleClass', () => {
  it('should return the class name when condition is true', () => {
    expect(toggleClass('active', true)).toBe('active');
  });
  it('should return an empty string when condition is false', () => {
    expect(toggleClass('active', false)).toBe('');
  });
});

// Test for prefixClass function
describe('prefixClass', () => {
  it('should return classes with prefix', () => {
    expect(prefixClass('btn-', 'primary', 'secondary')).toBe(
      'btn-primary btn-secondary',
    );
  });
});

// Test for suffixClass function
describe('suffixClass', () => {
  it('should return classes with suffix', () => {
    expect(suffixClass('--disabled', 'button', 'input')).toBe(
      'button--disabled input--disabled',
    );
  });
});

// Test for filterClass function
describe('filterClass', () => {
  it('should return classes that meet the condition', () => {
    expect(
      filterClass((name) => !name.includes('omit'), 'button', 'omit-me'),
    ).toBe('button');
  });
});

// Test for mergeClass function
describe('mergeClass', () => {
  it('should merge classes, remove duplicates, and empty strings', () => {
    expect(
      mergeClass('btn btn-primary', ['btn-secondary', 'btn-large'], 'btn'),
    ).toBe('btn btn-primary btn-secondary btn-large');
  });
});

// Test for classNameX function
describe('classNameX', () => {
  it('should concatenate multiple class names into a single string', () => {
    expect(
      classNameX(
        'btn',
        ['btn-primary', 'btn-large'],
        { 'btn-disabled': false },
        1,
      ),
    ).toBe('btn btn-primary btn-large 1');
  });
});
