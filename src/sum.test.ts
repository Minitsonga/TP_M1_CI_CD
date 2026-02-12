import { sum } from "./sum";

describe("sum", () => {
  it("additionne correctement deux nombres", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

