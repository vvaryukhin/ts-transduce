import { Combiner } from "../types";

export default function map<T, R>(f: (a: T) => R) {
  return (step: Combiner<R>) => (acc: R[], c: T) => step(acc, f(c));
}
