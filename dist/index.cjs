'use strict';
var s = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var f = Object.getOwnPropertyNames;
var a = Object.prototype.hasOwnProperty;
var g = (r, t) => {
    for (var n in t) s(r, n, { get: t[n], enumerable: !0 });
  },
  c = (r, t, n, e) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let i of f(t))
        !a.call(r, i) &&
          i !== n &&
          s(r, i, {
            get: () => t[i],
            enumerable: !(e = l(t, i)) || e.enumerable,
          });
    return r;
  };
var u = (r) => c(s({}, '__esModule', { value: !0 }), r);
var O = {};
g(O, {
  classNameX: () => h,
  filterClass: () => d,
  mergeClass: () => j,
  prefixClass: () => y,
  suffixClass: () => b,
  toggleClass: () => p,
});
module.exports = u(O);
function p(r, t) {
  return t ? r : '';
}
function y(r, ...t) {
  return t.map((n) => `${r}${n}`).join(' ');
}
function b(r, ...t) {
  return t.map((n) => `${n}${r}`).join(' ');
}
function d(r, ...t) {
  return t.filter(r).join(' ');
}
function j(...r) {
  let t = new Set();
  return (
    r.forEach((n) => {
      typeof n == 'string'
        ? n.split(' ').forEach((e) => t.add(e))
        : Array.isArray(n) && n.forEach((e) => t.add(e));
    }),
    Array.from(t).join(' ')
  );
}
function o(r) {
  let t,
    n,
    e = '';
  if (typeof r == 'string' || typeof r == 'number') e += r;
  else if (typeof r == 'object' && r !== null)
    if (Array.isArray(r))
      for (t = 0; t < r.length; t++)
        r[t] && ((n = o(r[t])), n && (e && (e += ' '), (e += n)));
    else
      for (t in r)
        Object.prototype.hasOwnProperty.call(r, t) &&
          r[t] &&
          (e && (e += ' '), (e += t));
  return e;
}
function h(...r) {
  let t = 0,
    n,
    e,
    i = '';
  for (; t < r.length; )
    (n = r[t++]), n && ((e = o(n)), e && (i && (i += ' '), (i += e)));
  return i;
}
0 &&
  (module.exports = {
    classNameX,
    filterClass,
    mergeClass,
    prefixClass,
    suffixClass,
    toggleClass,
  });
//# sourceMappingURL=index.cjs.map
