export function memoiser(fn) {
  return (...args) => {
    const result = fn(...args);
    return result;
  }
}