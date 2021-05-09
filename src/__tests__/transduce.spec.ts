import transduce from "../transduce";
import { map, filter } from "../transducers";

describe("transduce", () => {
  it("map", () => {
    const original = [1, 2, 3];
    const mapper = (v: number) => v + 1;
    const result = transduce(map(mapper))(original);
    const expected = original.map(mapper);
    expect(result).toEqual(expected);
  });

  it("filter", () => {
    const original = [1, 2, 3];
    const predicate = (v: number) => v > 1;
    const result = transduce(filter(predicate))(original);
    const expected = original.filter(predicate);
    expect(result).toEqual(expected);
  });

  it("combination", () => {
    const original = [1, 2, 3];
    const mapper = (v: number) => v + 4;
    const filterer = (v: number) => v > 2;

    const result = transduce(filter(filterer), map(mapper))(original);
    const expected = original.filter(filterer).map(mapper);
    expect(result).toEqual(expected);
  });
});
