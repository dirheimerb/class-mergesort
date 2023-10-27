function o(t, r) {
  return r ? t : '';
}
function l(t, ...r) {
  return r.map((n) => `${t}${n}`).join(' ');
}
function f(t, ...r) {
  return r.map((n) => `${n}${t}`).join(' ');
}
function a(t, ...r) {
  return r.filter(t).join(' ');
}
function g(...t) {
  let r = new Set();
  return (
    t.forEach((n) => {
      typeof n == 'string'
        ? n.split(' ').forEach((e) => r.add(e))
        : Array.isArray(n) && n.forEach((e) => r.add(e));
    }),
    Array.from(r).join(' ')
  );
}
function s(t) {
  let r,
    n,
    e = '';
  if (typeof t == 'string' || typeof t == 'number') e += t;
  else if (typeof t == 'object' && t !== null)
    if (Array.isArray(t))
      for (r = 0; r < t.length; r++)
        t[r] && ((n = s(t[r])), n && (e && (e += ' '), (e += n)));
    else
      for (r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          t[r] &&
          (e && (e += ' '), (e += r));
  return e;
}
function c(...t) {
  let r = 0,
    n,
    e,
    i = '';
  for (; r < t.length; )
    (n = t[r++]), n && ((e = s(n)), e && (i && (i += ' '), (i += e)));
  return i;
}
export {
  c as classNameX,
  a as filterClass,
  g as mergeClass,
  l as prefixClass,
  f as suffixClass,
  o as toggleClass,
};
//# sourceMappingURL=index.js.map
