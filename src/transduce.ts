import compose from "./compose";
import combiner from "./combiner";
import { Transducer } from "./types";

export default function transduce<A, R>(
  transducer: Transducer<A, R>
): (array: A[]) => R[];
export default function transduce<A, B, R>(
  transducer1: Transducer<A, B>,
  transducer2: Transducer<B, R>
): (array: A[]) => R[];
export default function transduce<A, B, C, R>(
  transducer1: Transducer<A, B>,
  transducer2: Transducer<B, C>,
  transducer3: Transducer<C, R>
): (array: A[]) => R[];
export default function transduce<A, B, C, D, R>(
  transducer1: Transducer<A, B>,
  transducer2: Transducer<B, C>,
  transducer3: Transducer<C, D>,
  transducer4: Transducer<D, R>
): (array: A[]) => R[];
export default function transduce<A, B, C, D, E, R>(
  transducer1: Transducer<A, B>,
  transducer2: Transducer<B, C>,
  transducer3: Transducer<C, D>,
  transducer4: Transducer<D, E>,
  transducer5: Transducer<E, R>
): (array: A[]) => R[];
export default function transduce<A, B, C, D, E, F, R>(
  transducer1: Transducer<A, B>,
  transducer2: Transducer<B, C>,
  transducer3: Transducer<C, D>,
  transducer4: Transducer<D, E>,
  transducer5: Transducer<E, F>,
  transducer6: Transducer<F, R>
): (array: A[]) => R[];
export default function transduce<A, B, C, D, E, F, G, R>(
  transducer1: Transducer<A, B>,
  transducer2: Transducer<B, C>,
  transducer3: Transducer<C, D>,
  transducer4: Transducer<D, E>,
  transducer5: Transducer<E, F>,
  transducer6: Transducer<F, G>,
  transducer7: Transducer<G, R>
): (array: A[]) => R[];
export default function transduce(...transducers: Transducer<any, any>[]) {
  return (array: any[]) =>
    array.reduce(compose<any>(...transducers)(combiner), [] as any[]);
}
