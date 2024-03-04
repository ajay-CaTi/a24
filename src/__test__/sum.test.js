import { sum } from "../sum";

test("sum of 2 input as parameter in a function", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
