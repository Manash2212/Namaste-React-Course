import { Sum } from "../Sum";

test("This is The test Description - Sum function should calculate the sum of Two Number's", () => {
  const result = Sum(3, 4);

  //Bellow this line is called --> Assertion
  expect(result).toBe(7);
});

// test function take two arguments, i) A String and ii) a callback function
