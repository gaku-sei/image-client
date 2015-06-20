export function* range(min: number, max?: number, step: number = 1): Iterable<number> {
  for(let i = max ? min : 0; i <= (max || min); i = i + step) {
    yield i;
  }
};

export default {range};
