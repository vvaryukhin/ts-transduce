import { Combiner, Reducer } from "../types";

export default function filter<T, R extends T>(predicate: (v: T) => boolean) {
  return (step: Combiner<R>): Reducer<T, R> => (acc: R[], c: T) =>
    predicate(c) ? step(acc, c as R) : acc;
}
