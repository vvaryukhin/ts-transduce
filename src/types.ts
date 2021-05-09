export type AnyFunction = (...args: any[]) => any;
export type Combiner<T> = (acc: T[], c: T) => T[];
export type Reducer<T, R> = (acc: R[], c: T) => R[];
export type Transducer<T, R> = (a: Combiner<R>) => Reducer<T, R>;
