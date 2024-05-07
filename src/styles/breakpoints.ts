enum Breakpoints {
  lg = 898,
  form = 1006,
  xl = 1025,
  xxl = 1200,
}

export type BreakpointName = keyof typeof Breakpoints;

const createMatcher = (size: BreakpointName): string => {
  return `(min-width: ${Breakpoints[size]}px)`;
};

export const matchBreakpoint = (size: BreakpointName): boolean => {
  if (typeof matchMedia !== "function") return false;
  return matchMedia(createMatcher(size)).matches;
};

export const mq = (size: BreakpointName): string =>
  `@media ${createMatcher(size)}`;
