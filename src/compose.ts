import { AnyFunction } from "./types";

export default function compose<R>(...fns: AnyFunction[]) {
  return (a: any): R => fns.reduceRight((r, f) => f(r), a);
}
