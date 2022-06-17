export const toBe = (c: { id: string }) => (cc: { id: string }) =>
  c.id === cc.id;
export const not =
  <ARGS extends Array<any>>(fn: (...args: ARGS) => boolean) =>
  (...args: ARGS) =>
    !fn(...args);
